// 飞书风格文档组件 - 完整版
// 风格与网站整体保持一致：优雅、文艺、古典风格
const { useState, useEffect, useRef, useMemo, createContext, useContext } = React;

// ==================== 灯箱上下文 ====================
const LightBoxContext = createContext(null);

const LightBoxProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const openLightBox = (url) => {
    setImageUrl(url);
    setIsOpen(true);
  };

  const closeLightBox = () => {
    setIsOpen(false);
  };

  return (
    <LightBoxContext.Provider value={{ openLightBox, closeLightBox, isOpen, imageUrl }}>
      {children}
    </LightBoxContext.Provider>
  );
};

// ==================== 数据处理工具 ====================
const buildTree = (sections) => {
  const root = [];
  const stack = [];

  sections.forEach((section) => {
    const node = { ...section, children: [] };

    while (stack.length > 0 && stack[stack.length - 1].level >= section.level) {
      const lastNode = stack.pop();
      if (stack.length > 0) {
        stack[stack.length - 1].children.push(lastNode);
      } else {
        root.push(lastNode);
      }
    }

    stack.push(node);
  });

  while (stack.length > 0) {
    const lastNode = stack.pop();
    if (stack.length > 0) {
      stack[stack.length - 1].children.push(lastNode);
    } else {
      root.push(lastNode);
    }
  }

  return root;
};

// 构建目录树（只包含 Level 0-2，用于侧边栏显示）
const buildTocTree = (sections) => {
  const result = [];

  sections.forEach((section) => {
    // 只添加 Level 0-2 的章节
    if (section.level <= 2) {
      const node = {
        ...section,
        children: []
      };

      // 如果是 Level 0 或 1，添加其 Level 2 的子章节
      if (section.level < 2 && section.subsections) {
        section.subsections.forEach((subsection) => {
          if (subsection.level === 2) {
            node.children.push({
              ...subsection,
              children: [] // 不再递归添加更深层级
            });
          }
        });
      }

      result.push(node);
    }
  });

  return result;
};

// ==================== 灯箱组件 ====================
const LightBox = () => {
  const { isOpen, imageUrl, closeLightBox } = useContext(LightBoxContext);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
      onClick={closeLightBox}
    >
      <div className="relative max-w-7xl max-h-[90vh] p-4">
        <button
          onClick={closeLightBox}
          className="absolute -top-2 -right-2 p-2 bg-white rounded-full shadow-xl hover:bg-white/90 transition-all z-10 hover:scale-105"
        >
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img
          src={imageUrl}
          alt="预览图片"
          className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

// ==================== 骨架屏组件 ====================
const ImageSkeleton = () => (
  <div className="absolute inset-0 w-full h-full bg-black/5 animate-pulse flex items-center justify-center z-10">
    <svg className="w-12 h-12 text-black/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  </div>
);

// ==================== 图片组件 ====================
const DocImage = ({ src, alt, caption, layout = 'default' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { openLightBox } = useContext(LightBoxContext);

  console.log('DocImage - src:', src, 'layout:', layout);

  // 根据布局类型设置宽度
  const getLayoutStyle = () => {
    switch (layout) {
      case 'large':
        return { width: '80%', maxWidth: '800px' };
      case 'half':
        return { width: '100%' };
      case 'grid-left':
        return { width: '100%', height: '100%', minHeight: '400px' };
      case 'grid-right':
        return { width: '100%', height: '100%', minHeight: '190px' };
      case 'full':
        return { width: '100%' };
      default:
        return { width: '100%', maxWidth: '800px' };
    }
  };

  return (
    <div className={`${layout.startsWith('grid') ? 'h-full flex flex-col' : 'my-4 flex flex-col items-center w-full'}`}>
      <div
        className="cursor-pointer group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 w-full bg-black/5 border border-black/5"
        onClick={() => openLightBox(src)}
        style={{ ...getLayoutStyle(), minHeight: '100px' }}
      >
        {!isLoaded && <ImageSkeleton />}

        <img
          src={src}
          alt={alt || '文档图片'}
          loading="lazy"
          className={`w-full h-auto transition-opacity duration-500 block ${isLoaded ? 'opacity-100' : 'opacity-0'} rounded-2xl relative z-20`}
          onLoad={() => setIsLoaded(true)}
          onError={(e) => console.error('Image load error:', src, e)}
          style={layout.startsWith('grid') ? { height: '100%', objectFit: 'cover' } : {}}
        />

        {/* 放大提示 */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="p-3 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      </div>

      {caption && (
        <p className={`text-sm font-cinzel tracking-wider opacity-40 ${layout.startsWith('grid') ? 'mt-2 text-center' : 'mt-2 text-center'}`}>{caption}</p>
      )}
    </div>
  );
};

// ==================== 引用块组件 ====================
const CalloutBlock = ({ variant = 'info', title, content }) => {
  const variantStyles = {
    warning: {
      bg: 'bg-black/[0.03]',
      borderLeft: 'border-l-2 border-amber-700',
      titleColor: 'text-amber-900'
    },
    info: {
      bg: 'bg-black/[0.03]',
      borderLeft: 'border-l-2 border-blue-900',
      titleColor: 'text-blue-900'
    },
    success: {
      bg: 'bg-black/[0.03]',
      borderLeft: 'border-l-2 border-emerald-900',
      titleColor: 'text-emerald-900'
    },
    gray: {
      bg: 'bg-black/[0.03]',
      borderLeft: 'border-l-2 border-black/20',
      titleColor: 'text-black'
    }
  };

  const styles = variantStyles[variant] || variantStyles.info;

  return (
    <div className={`p-6 rounded-2xl ${styles.bg} ${styles.borderLeft} mb-6`}>
      {title && (
        <h4 className={`font-cinzel text-sm tracking-widest font-bold mb-4 ${styles.titleColor}`}>{title}</h4>
      )}
      <div className="space-y-2">
        {Array.isArray(content) ? (
          content.map((item, index) => (
            <p key={index} className="text-black/70 leading-relaxed font-serif">
              {item.startsWith('•') ? (
                <span className="flex items-start">
                  <span className="mr-2 flex-shrink-0">•</span>
                  <span>{item.slice(1)}</span>
                </span>
              ) : (
                item
              )}
            </p>
          ))
        ) : (
          <p className="text-black/70 leading-relaxed font-serif">{content}</p>
        )}
      </div>
    </div>
  );
};

// ==================== 文档内容渲染 ====================
const DocumentContent = ({ content, images }) => {
  const hasContent = content && content.length > 0;
  const hasImages = images && images.length > 0;
  
  if (!hasContent && !hasImages) return null;

  const renderContentBlock = (block, index) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <p key={index} className="text-base leading-relaxed text-black/80 mb-2 font-serif">
            {block.text}
            {block.note && <span className="ml-2 text-sm text-amber-700 font-cinzel tracking-wide">({block.note})</span>}
          </p>
        );

      case 'subtitle':
        return (
          <h4 key={index} className="text-base font-semibold text-black mt-6 mb-3 font-cinzel tracking-wide">
            {block.text}
          </h4>
        );

      case 'title':
        return (
          <h3 key={index} className="text-xl font-bold text-black mt-8 mb-6 font-cinzel tracking-wide">
            {block.text}
          </h3>
        );

      case 'list':
        return (
          <ul key={index} className="space-y-3 mb-6">
            {block.items.map((item, i) => (
              <li key={i} className="text-black/80 flex items-start">
                <span className="mr-2 text-black/40 flex-shrink-0 mt-1">•</span>
                <span className="flex-1 leading-relaxed font-serif">{item}</span>
              </li>
            ))}
          </ul>
        );

      case 'numbered-list':
        return (
          <ol key={index} className="space-y-3 mb-6 list-decimal list-inside">
            {block.items.map((item, i) => (
              <li key={i} className="text-black/80 leading-relaxed pl-2 font-serif">
                {item}
              </li>
            ))}
          </ol>
        );

      case 'blockquote':
        return (
          <div key={index} className="space-y-6 mb-8">
            {block.items.map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-amber-50/80 to-orange-50/50 rounded-2xl p-6 border-l-2 border-amber-700/30 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100/50 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-800" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-black text-base font-cinzel tracking-wide">{item.title}</h5>
                    <span className="text-xs font-medium text-amber-900 bg-amber-100/50 px-2 py-0.5 rounded">{item.subtitle}</span>
                  </div>
                </div>
                <div className="ml-11 space-y-3">
                  <div>
                    <span className="text-xs font-semibold text-black/50 uppercase tracking-wider font-cinzel">设计特征</span>
                    <p className="text-black/70 text-sm leading-relaxed mt-1 font-serif">{item.details}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-black/50 uppercase tracking-wider font-cinzel">行为预期与价值</span>
                    <p className="text-black/70 text-sm leading-relaxed mt-1 font-serif">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'callout':
        return <CalloutBlock key={index} variant={block.variant} title={block.title} content={block.content} />;

      case 'two-column':
        return (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="space-y-4">
              <h5 className="font-semibold text-black mb-3 font-cinzel tracking-wide">{block.left.title}</h5>
              {block.left.items.map((item, i) => (
                <div key={i} className="text-black/80">
                  {item.subtitle && <span className="font-semibold text-black">{item.subtitle}</span>}
                  <p className="leading-relaxed font-serif">{item.details || item}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <h5 className="font-semibold text-black mb-3 font-cinzel tracking-wide">{block.right.title}</h5>
              {block.right.items.map((item, i) => (
                <div key={i} className="text-black/80">
                  {item.subtitle && <span className="font-semibold text-black">{item.subtitle}</span>}
                  <p className="leading-relaxed font-serif">{item.details || item}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'three-column':
        return (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            {block.columns.map((col, i) => (
              <div key={i} className="space-y-3">
                <h5 className="font-semibold text-black mb-2 font-cinzel tracking-wide">{col.title}</h5>
                {col.items.map((item, j) => (
                  <p key={j} className="text-sm text-black/80 leading-relaxed font-serif">{item}</p>
                ))}
              </div>
            ))}
          </div>
        );

      case 'diagram':
        return (
          <div key={index} className="bg-black/[0.02] rounded-2xl p-6 my-8 border-l-2 border-purple-900">
            {block.items.map((item, i) => (
              <p key={i} className="text-black/70 font-mono text-sm leading-relaxed">{item}</p>
            ))}
          </div>
        );

      case 'info-grid':
        return (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            {block.items.map((item, i) => (
              <div key={i} className="bg-black/[0.03] rounded-xl p-4 border border-black/5">
                <span className="text-sm font-semibold text-black">{item.label}：</span>
                <span className="text-black/70">{item.value}</span>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {content.map((block, index) => renderContentBlock(block, index))}

      {/* 图片展示 */}
      {images && images.length > 0 && (
        <div className="my-8">
          {(() => {
            console.log('DocumentContent - images:', images);

            // 检查是否所有图片都是对象格式且有 layout 属性
            const hasLayoutInfo = images.every(img => typeof img === 'object' && img.layout);

            if (hasLayoutInfo) {
              // 检查是否有网格布局（grid-left）
              const hasGridLayout = images.some(img => img.layout === 'grid-left');

              if (hasGridLayout) {
                // 网格布局：左大图，右两图上下叠放
                const leftImg = images.find(img => img.layout === 'grid-left');
                const rightTopImg = images.find(img => img.layout === 'grid-right-top');
                const rightBottomImg = images.find(img => img.layout === 'grid-right-bottom');

                console.log('Grid layout - leftImg:', leftImg);
                console.log('Grid layout - rightTopImg:', rightTopImg);
                console.log('Grid layout - rightBottomImg:', rightBottomImg);

                return (
                  <div className="grid grid-cols-2 gap-6 items-stretch">
                    {/* 左侧大图 */}
                    <div className="flex items-center">
                      <DocImage
                        src={leftImg.src}
                        alt={leftImg.alt || '文档图片'}
                        caption={leftImg.caption}
                        layout="grid-left"
                      />
                    </div>
                    {/* 右侧上下叠放 */}
                    <div className="flex flex-col gap-6">
                      <DocImage
                        src={rightTopImg.src}
                        alt={rightTopImg.alt || '文档图片'}
                        caption={rightTopImg.caption}
                        layout="grid-right"
                      />
                      <DocImage
                        src={rightBottomImg.src}
                        alt={rightBottomImg.alt || '文档图片'}
                        caption={rightBottomImg.caption}
                        layout="grid-right"
                      />
                    </div>
                  </div>
                );
              }

              // 原有的 large/half 布局逻辑
              const largeImages = images.filter(img => img.layout === 'large');
              const halfImages = images.filter(img => img.layout === 'half');

              return (
                <>
                  {largeImages.map((img, idx) => (
                    <DocImage
                      key={`large-${idx}`}
                      src={img.src}
                      alt={img.alt || `文档图片 ${idx + 1}`}
                      caption={img.caption}
                      layout="large"
                    />
                  ))}
                  {halfImages.length > 0 && (
                    <div className="grid grid-cols-2 gap-6 my-6">
                      {halfImages.map((img, idx) => (
                        <DocImage
                          key={`half-${idx}`}
                          src={img.src}
                          alt={img.alt || `文档图片 ${idx + 1}`}
                          caption={img.caption}
                          layout="half"
                        />
                      ))}
                    </div>
                  )}
                </>
              );
            } else {
              // 自动布局推断
              if (images.length === 1) {
                const img = images[0];
                const imgSrc = typeof img === 'string' ? img : img.src;
                const imgAlt = typeof img === 'string' ? '文档图片 1' : (img.alt || '文档图片 1');
                const imgCaption = typeof img === 'string' ? undefined : img.caption;
                return (
                  <DocImage
                    src={imgSrc}
                    alt={imgAlt}
                    caption={imgCaption}
                    layout="full"
                  />
                );
              } else if (images.length === 2) {
                return (
                  <div className="grid grid-cols-2 gap-6 my-6">
                    {images.map((img, imgIndex) => {
                      const imgSrc = typeof img === 'string' ? img : img.src;
                      const imgAlt = typeof img === 'string' ? `文档图片 ${imgIndex + 1}` : (img.alt || `文档图片 ${imgIndex + 1}`);
                      const imgCaption = typeof img === 'string' ? undefined : img.caption;
                      return (
                        <DocImage
                          key={imgIndex}
                          src={imgSrc}
                          alt={imgAlt}
                          caption={imgCaption}
                          layout="half"
                        />
                      );
                    })}
                  </div>
                );
              } else if (images.length === 3) {
                // 3张图，左大右二小网格
                const getImgData = (img, idx) => ({
                  src: typeof img === 'string' ? img : img.src,
                  alt: typeof img === 'string' ? `文档图片 ${idx + 1}` : (img.alt || `文档图片 ${idx + 1}`),
                  caption: typeof img === 'string' ? undefined : img.caption
                });
                
                const leftImg = getImgData(images[0], 0);
                const rightTopImg = getImgData(images[1], 1);
                const rightBottomImg = getImgData(images[2], 2);

                return (
                  <div className="grid grid-cols-2 gap-6 items-stretch">
                    <div className="flex items-center">
                      <DocImage
                        src={leftImg.src}
                        alt={leftImg.alt}
                        caption={leftImg.caption}
                        layout="grid-left"
                      />
                    </div>
                    <div className="flex flex-col gap-6">
                      <DocImage
                        src={rightTopImg.src}
                        alt={rightTopImg.alt}
                        caption={rightTopImg.caption}
                        layout="grid-right"
                      />
                      <DocImage
                        src={rightBottomImg.src}
                        alt={rightBottomImg.alt}
                        caption={rightBottomImg.caption}
                        layout="grid-right"
                      />
                    </div>
                  </div>
                );
              } else {
                // 默认布局：多张图单列显示，但使用全宽
                return (
                  <div className="flex justify-center">
                    <div className="grid grid-cols-1 gap-6 w-full">
                      {images.map((img, imgIndex) => {
                        const imgSrc = typeof img === 'string' ? img : img.src;
                        const imgAlt = typeof img === 'string' ? `文档图片 ${imgIndex + 1}` : (img.alt || `文档图片 ${imgIndex + 1}`);
                        const imgCaption = typeof img === 'string' ? undefined : img.caption;

                        return (
                          <DocImage
                            key={imgIndex}
                            src={imgSrc}
                            alt={imgAlt}
                            caption={imgCaption}
                            layout="full"
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              }
            }
          })()}
        </div>
      )}
    </div>
  );
};

// ==================== 可折叠面板组件 ====================
const CollapsibleSection = ({ section, level = 0 }) => {
  const [isCollapsed, setIsCollapsed] = useState(false); // 所有层级默认展开
  const [isAnimating, setIsAnimating] = useState(false);

  // 使用 section 自带的 level，如果没有则使用传入的 level 参数
  const sectionLevel = section.level !== undefined ? section.level : level;

  // 生成唯一ID - 优先使用 id 字段
  const sectionId = section.id ? `section-${section.id}` : `section-${section.title.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '-')}`;

  const getHeadingStyle = (lvl) => {
    const styles = [
      'text-2xl md:text-[28px] font-bold text-black mt-16 mb-8 pl-0 font-cinzel tracking-wide', // Level 0 (项目概述)
      'text-2xl md:text-[28px] font-bold text-black mt-16 mb-8 pl-0 font-cinzel tracking-wide', // Level 1 (一、二、三)
      'text-xl md:text-[24px] font-semibold text-black mt-10 mb-6 font-cinzel tracking-wide', // Level 2 (1. 2. 3.)
      'text-lg md:text-[20px] font-semibold text-black/90 mt-8 mb-4 font-cinzel tracking-wide', // Level 3 (1.1 1.2)
      'text-base md:text-[18px] font-semibold text-black/80 mt-6 mb-3 font-cinzel tracking-wide', // Level 4 (1.4.1)
    ];
    return styles[Math.min(lvl, 4)];
  };

  const toggleCollapse = () => {
    setIsAnimating(true);
    setIsCollapsed(!isCollapsed);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // 仅 Level 0-3 可折叠（项目概述、一、二、三、1.1等）
  const canCollapse = sectionLevel < 3;

  return (
    <div
      id={sectionId}
      data-section-title={section.title}
      className="scroll-mt-28"
    >
      {/* 标题栏 */}
      <div
        className={`relative group ${canCollapse ? 'cursor-pointer' : ''}`}
        onClick={canCollapse ? toggleCollapse : undefined}
      >
        {/* 折叠图标 - 绝对定位在左侧 */}
        {canCollapse && (
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 p-2 hover:bg-gray-100 rounded-xl transition-all opacity-0 group-hover:opacity-100"
            aria-label={isCollapsed ? '展开' : '折叠'}
            onClick={(e) => {
              e.stopPropagation();
              toggleCollapse();
            }}
          >
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isCollapsed ? '-rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}

        <h2 className={getHeadingStyle(sectionLevel)}>
          {section.title}
        </h2>
      </div>

      {/* 内容区 - 折叠动画 */}
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isCollapsed ? 'max-h-0 opacity-0' : 'max-h-[100000px] opacity-100'}
          ${isAnimating ? 'transition-all' : ''}
        `}
      >
        <div className="pr-4">
          {((section.content && section.content.length > 0) || (section.images && section.images.length > 0)) && (
            <DocumentContent
              content={section.content || []}
              images={section.images}
            />
          )}

          {section.subsections && section.subsections.map((subsection) => (
            <CollapsibleSection
              key={subsection.title}
              section={subsection}
            />
          ))}
        </div>
      </div>

      {/* 分割线 - 主要章节之间 (Level 0 和 Level 1) */}
      {(sectionLevel === 0 || sectionLevel === 1) && (
        <div className="mt-16 border-b border-black/10"></div>
      )}
    </div>
  );
};

// ==================== 递归导航项组件 ====================
const NavItem = ({ node, activeId, onNavigate, level = 0, isLastChild = false, sections, hasActiveDescendantFn }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  // 生成唯一ID - 优先使用 id 字段
  const sectionId = node.id ? `section-${node.id}` : `section-${node.title.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '-')}`;
  const isActive = activeId === sectionId;

  // 检查是否包含激活的后代
  const hasActiveDescendant = hasActiveDescendantFn ? hasActiveDescendantFn(node.id || node.title, node.level, activeId) : false;

  useEffect(() => {
    if (hasActiveDescendant && !isExpanded) {
      setIsExpanded(true);
    }
  }, [hasActiveDescendant, isExpanded]);

  const getLevelStyles = (lvl) => {
    // Level 0: 0px, Level 1: 16px, Level 2: 32px + 1ch 悬挂缩进
    const basePadding = lvl * 16;
    const hangingIndent = lvl > 1 ? '1ch' : '0px';

    return {
      paddingLeft: lvl === 0 ? '0px' : `${basePadding}px`,
      textIndent: hangingIndent,
      fontSize: lvl === 0 ? '14px' : '13px',
      fontWeight: lvl === 0 ? '600' : '400',
    };
  };

  const styles = getLevelStyles(level);

  return (
    <div className="relative">
      {/* 辅助线 - Level 1 及以上 */}
      {level >= 1 && (
        <div
          className="absolute left-0 top-0 bottom-0 w-px bg-black/10"
          style={{ left: `${level * 16 - 8}px` }}
        />
      )}

      <div className="flex items-center group">
        {hasChildren && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="p-0.5 hover:bg-black/5 rounded mr-1 flex-shrink-0 transition-colors"
            style={{ marginLeft: level > 0 ? `${level * 16 - 20}px` : '-4px' }}
          >
            <svg
              className={`w-3 h-3 text-black/30 transition-transform duration-200 ${isExpanded ? '' : '-rotate-90'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}

        <button
          onClick={() => onNavigate(node.title, sectionId)}
          className={`
            flex-1 text-left py-2 pr-3 rounded-lg truncate relative transition-all duration-200
            ${isActive
              ? 'bg-black/5 text-black font-semibold font-cinzel tracking-wide'
              : 'text-black/70 hover:bg-black/5'}
          `}
          style={{
            fontSize: styles.fontSize,
            fontWeight: styles.fontWeight,
            paddingLeft: styles.paddingLeft,
            textIndent: styles.textIndent,
          }}
        >
          {isActive && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-black rounded-r" />}
          {level === 0 && !isActive && <span className="mr-2 text-black/20">#</span>}
          <span className="truncate">{node.title}</span>
        </button>
      </div>

      {hasChildren && isExpanded && (
        <div>
          {node.children.map((child, index) => (
            <NavItem
              key={child.title}
              node={child}
              activeId={activeId}
              onNavigate={onNavigate}
              level={level + 1}
              isLastChild={index === node.children.length - 1}
              sections={sections}
              hasActiveDescendantFn={hasActiveDescendantFn}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// ==================== 侧边栏目录 ====================
const TableOfContents = ({ sections, activeId, onNavigate, isCollapsed, onToggleCollapse, progress }) => {
  const treeData = useMemo(() => buildTocTree(sections), [sections]);

  // 检查给定 section 的 ID 是否匹配或包含激活的 section
  const hasActiveInSection = (sectionId, sectionLevel, activeId) => {
    if (!activeId) return false;
    // 直接匹配
    if (activeId === sectionId) return true;

    // 如果是父级 section，检查是否有任何后代匹配
    // activeId 格式: section-title
    // 我们需要检查这个 section 是否是激活 section 的祖先
    const activeSection = sections.find(s => {
      const sid = `section-${s.title.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '-')}`;
      return sid === activeId;
    });

    if (!activeSection) return false;

    // 检查当前 section 是否是激活 section 的祖先
    // 这需要检查激活 section 的标题是否以当前 section 的某个子 section 的标题开头
    // 但这比较复杂，让我们用另一种方法

    // 简化：如果激活的 section 级别更深，且当前 section 的 ID 是其前缀，则认为有激活后代
    // 实际上，我们可以通过检查 section 的递归结构来实现
    return checkHasActiveDescendant(sections.find(s => s.id === sectionId), activeId);
  };

  const checkHasActiveDescendant = (section, activeId) => {
    if (!section) return false;

    const sectionId = section.id ? `section-${section.id}` : `section-${section.title.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '-')}`;
    if (sectionId === activeId) return true;

    if (section.subsections) {
      for (const subsection of section.subsections) {
        if (checkHasActiveDescendant(subsection, activeId)) {
          return true;
        }
      }
    }

    return false;
  };

  if (isCollapsed) {
    return (
      <button
        onClick={onToggleCollapse}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white rounded-lg shadow-lg border border-black/10 hover:bg-black/5 transition-all hover:shadow-xl hover:scale-105"
        aria-label="展开目录"
      >
        <svg className="w-5 h-5 text-black/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
      </button>
    );
  }

  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-72 bg-white border-r border-black/10 z-40 flex flex-col shadow-sm">
        {/* 固定头部 */}
        <div className="flex-shrink-0 p-5 border-b border-black/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black/5 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-black/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <h3 className="font-bold text-black text-lg font-cinzel tracking-wide">文档目录</h3>
            </div>
            <button
              onClick={onToggleCollapse}
              className="p-2 hover:bg-black/5 rounded-lg transition-colors"
              aria-label="收起目录"
            >
              <svg className="w-5 h-5 text-black/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* 可滚动内容区 */}
        <div className="flex-1 overflow-y-auto px-3 py-4 custom-scrollbar">
          <nav className="space-y-0.5">
            {treeData.map((node) => (
              <NavItem
                key={node.title}
                node={node}
                activeId={activeId}
                onNavigate={onNavigate}
                level={0}
                sections={sections}
                hasActiveDescendantFn={(sectionId, sectionLevel, activeId) => checkHasActiveDescendant(
                  sections.find(s => s.id === sectionId),
                  activeId
                )}
              />
            ))}
          </nav>
        </div>

        {/* 底部进度 */}
        <div className="flex-shrink-0 p-4 border-t border-black/5 bg-black/[0.02]">
          <div className="flex items-center justify-between text-xs text-black/50 mb-2 font-cinzel tracking-wide">
            <span>阅读进度</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 bg-black/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-black rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </aside>
    </>
  );
};

// ==================== 飞书文档主容器 ====================
const FeishuDocument = ({ data, heroImage, heroItem }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [isManualScroll, setIsManualScroll] = useState(false);

  // 从 meta 中提取信息，兼容旧格式
  const meta = data.meta || {};
  const title = meta.title || data.title || '文档';
  const description = meta.description || data.description || '';
  const tags = meta.tags || data.tags || [];
  const source = meta.source || heroItem?.source || '';

  const scrollToSection = (sectionTitle, sectionId) => {
    setIsManualScroll(true);
    const element = document.getElementById(sectionId);
    if (element) {
      const galleryContainer = document.querySelector('.overflow-y-auto.custom-scrollbar');

      if (galleryContainer) {
        const elementTop = element.offsetTop;
        galleryContainer.scrollTo({
          top: Math.max(0, elementTop - 80),
          behavior: 'smooth'
        });
      } else {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setActiveSection(sectionId);

      // 平滑滚动完成后重新启用 scroll spy
      setTimeout(() => {
        setIsManualScroll(false);
      }, 800);
    }
  };

  // 根据 section title 生成 section ID（与 CollapsibleSection 一致）
  const generateSectionId = (section) => {
    return section.id ? `section-${section.id}` : `section-${section.title.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '-')}`;
  };

  useEffect(() => {
    const galleryContainer = document.querySelector('.overflow-y-auto.custom-scrollbar');
    const scrollContainer = galleryContainer || window;

    const handleScroll = () => {
      // 如果是手动滚动（点击导航触发），则跳过
      if (isManualScroll) return;

      const sections = document.querySelectorAll('[data-section-title]');
      if (sections.length === 0) return;

      let currentSection = null;

      if (galleryContainer) {
        const scrollTop = galleryContainer.scrollTop;
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionId = section.id;
          if (scrollTop >= sectionTop - 150) {
            currentSection = sectionId;
          }
        });

        const scrollHeight = galleryContainer.scrollHeight - galleryContainer.clientHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        setReadingProgress(Math.min(100, Math.max(0, progress)));
      } else {
        const scrollPosition = window.pageYOffset + 250;
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionId = section.id;
          if (scrollPosition >= sectionTop) {
            currentSection = sectionId;
          }
        });

        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollHeight > 0 ? (window.pageYOffset / scrollHeight) * 100 : 0;
        setReadingProgress(Math.min(100, Math.max(0, progress)));
      }

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [activeSection, isManualScroll]);

  useEffect(() => {
    if (data.sections && data.sections.length > 0 && !activeSection) {
      const firstSection = data.sections[0];
      const firstSectionId = firstSection.id ? `section-${firstSection.id}` : `section-${firstSection.title.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '-')}`;
      setActiveSection(firstSectionId);
    }
  }, [data]);

  return (
    <LightBoxProvider>
      <div className="min-h-screen bg-[#fdfcf8] flex overflow-x-hidden">
        {/* 侧边栏目录 */}
        <TableOfContents
          sections={data.sections}
          activeId={activeSection}
          onNavigate={scrollToSection}
          isCollapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          progress={readingProgress}
        />

        {/* 主内容区域 */}
        <main
          className={`flex-1 transition-all duration-300 ease-in-out overflow-x-hidden ${sidebarCollapsed ? 'ml-0' : 'ml-72'}`}
        >
          <div className="max-w-[900px] mx-auto px-6 md:px-12 py-12">
            {/* 首图区域（如果提供） */}
            {heroImage && heroItem && (
              <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-2xl shadow-xl mb-12 group">
                {/* 图片 */}
                <img
                  src={heroImage}
                  alt={heroItem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* 遮罩层 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* 文字内容 */}
                <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 md:bottom-12 md:left-12 text-white">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                    <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[8px] sm:text-[10px] font-bold tracking-widest uppercase font-cinzel">
                      {heroItem.category}
                    </span>
                    {heroItem.tags && heroItem.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 sm:px-3 sm:py-1 bg-black/30 backdrop-blur-md border border-white/10 rounded-full text-[8px] sm:text-[10px] font-bold font-cinzel">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-2 sm:mb-4 font-cinzel tracking-wide leading-tight">{heroItem.title}</h1>
                  {source && <p className="text-[10px] sm:text-xs md:text-sm font-cinzel tracking-[0.2em] sm:tracking-[0.3em] opacity-70 mb-2 sm:mb-4 uppercase">SOURCE: {source}</p>}
                  <p className="text-xs sm:text-sm md:text-base opacity-90 max-w-full sm:max-w-xl font-serif leading-relaxed line-clamp-3 sm:line-clamp-none">{heroItem.description}</p>
                </div>
              </div>
            )}

            {/* 文档内容 */}
            {data.sections.map((section) => (
              <CollapsibleSection
                key={section.title}
                section={section}
              />
            ))}
          </div>
        </main>

        {/* 移动端浮动按钮 */}
        <button
          onClick={() => setSidebarCollapsed(false)}
          className="fixed bottom-6 right-6 md:hidden p-4 bg-black text-white rounded-full shadow-lg z-50 hover:bg-black/80 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>

        {/* 移动端遮罩 */}
        {!sidebarCollapsed && (
          <div
            className="fixed inset-0 bg-black/30 z-30 md:hidden backdrop-blur-sm"
            onClick={() => setSidebarCollapsed(true)}
          />
        )}

        {/* 灯箱 */}
        <LightBox />
      </div>
    </LightBoxProvider>
  );
};
