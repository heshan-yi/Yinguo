const { useState, useEffect, useRef } = React;
const { createRoot } = ReactDOM;

// ==================== 联系方式组件 ====================
const ContactSection = ({ section, theme }) => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const handleSocialClick = (social) => {
    if (social.url) {
      window.open(social.url, '_blank');
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="md:col-span-1">
        <div className="sticky top-32">
          <span className="text-[13px] font-cinzel tracking-[0.3em] opacity-30 block mb-2">SECTION_CONTACT</span>
          <h2 className="text-3xl font-cinzel font-bold mb-4">{section.name}</h2>
          <div className={"h-px w-12 " + (theme === 'light' ? 'bg-black' : 'bg-white') + " opacity-20"} />
        </div>
      </div>

      <div className="md:col-span-2 space-y-16 scroll-reveal-staggered">
        {/* 电话和邮箱 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={"p-5 rounded-2xl border " + (theme === 'light' ? 'bg-black/5 hover:bg-black/10 border-black/5' : 'bg-white/5 hover:bg-white/10 border-white/5') + " transition-all duration-300"}>
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-xs font-cinzel tracking-wider opacity-30">PHONE</span>
            </div>
            <p className="text-lg font-medium">{section.phone}</p>
          </div>

          <div className={"p-5 rounded-2xl border " + (theme === 'light' ? 'bg-black/5 hover:bg-black/10 border-black/5' : 'bg-white/5 hover:bg-white/10 border-white/5') + " transition-all duration-300"}>
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-xs font-cinzel tracking-wider opacity-30">EMAIL</span>
            </div>
            <p className="text-lg font-medium">{section.email}</p>
          </div>
        </div>

        {/* 社交账号 */}
        <div>
          <h3 className="text-sm font-cinzel tracking-wider opacity-40 mb-6">SOCIAL</h3>
          <div className="flex flex-wrap gap-6">
            {section.socials.map((social) => {
              const isHovered = hoveredSocial === social.name;

              return (
                <div
                  key={social.name}
                  className="relative"
                  onMouseEnter={() => setHoveredSocial(social.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  {/* 社交图标按钮 - 简洁丝滑 */}
                  <button
                    onClick={() => handleSocialClick(social)}
                    className="w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-300 ease-out"
                    style={{
                      background: theme === 'dark'
                        ? isHovered ? 'rgba(192, 132, 252, 0.12)' : 'transparent'
                        : isHovered ? 'rgba(0, 0, 0, 0.06)' : 'transparent',
                      transform: isHovered ? 'scale(1.08) translateY(-2px)' : 'scale(1)',
                    }}
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-10 h-10 transition-all duration-300"
                      style={{
                        filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
                        opacity: isHovered ? 1 : 0.6
                      }}
                    />
                  </button>

                  {/* 二维码悬浮 */}
                  {social.qrcode && isHovered && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 z-50">
                      <div
                        className="p-3 rounded-xl shadow-xl w-36"
                        style={{
                          background: theme === 'dark' ? '#1a1a1a' : '#ffffff',
                          border: theme === 'dark' ? '1px solid rgba(192, 132, 252, 0.15)' : '1px solid rgba(0, 0, 0, 0.08)',
                        }}
                      >
                        <img src={social.qrcode} alt={social.name} className="w-full h-auto object-contain" />
                        <p className={"text-xs text-center mt-2 " + (theme === 'dark' ? 'text-purple-200/50' : 'text-gray-500')}>
                          {social.url ? '扫码或点击' : '扫码联系'}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* 无二维码时的提示 */}
                  {!social.qrcode && isHovered && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 whitespace-nowrap">
                      <div
                        className="text-xs px-3 py-1.5 rounded-lg"
                        style={{
                          background: theme === 'dark' ? 'rgba(192, 132, 252, 0.9)' : 'rgba(0, 0, 0, 0.85)',
                          color: '#ffffff',
                        }}
                      >
                        点击访问 {social.name}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// Default Project Layout
const ProjectLayout = ({ item, theme }) => {
  const isDark = theme === 'dark';
  return (
    <div className={"w-full " + (isDark ? 'bg-[#121216] text-[#f3e8ff]' : 'bg-[#fdfcf8] text-[#1a1a1a]')}>
      <div className="max-w-7xl mx-auto px-10 space-y-40 pb-40">
        <section className="pt-20">
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl mb-12">
            {item.image && item.image.startsWith('http') ? (
              <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
            ) : (
              <div className={"w-full h-full flex items-center justify-center " + (isDark ? 'gradient-dark' : 'gradient-light')}>
                <span className="text-6xl opacity-30">📦</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 text-white">
              <div className="flex flex-wrap items-start gap-2 md:gap-4 mb-3 md:mb-4">
                <span className="px-2 py-1 md:px-3 md:py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[9px] md:text-[10px] font-bold tracking-widest uppercase">
                  {item.category}
                </span>
                {item.tags && item.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 md:px-3 md:py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[9px] md:text-[10px] font-bold">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-4 leading-tight">{item.title}</h1>
              <p className="text-sm sm:text-base md:text-xl opacity-90 max-w-2xl line-clamp-2 sm:line-clamp-none">{item.description}</p>
            </div>
          </div>
        </section>

        <section id="intro">
          <h3 className="text-base font-cinzel font-bold tracking-[0.3em] opacity-80 uppercase mb-12">项目概述</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className={"p-12 rounded-3xl border " + (theme === 'dark' ? 'bg-white/[0.03] border-white/[0.05]' : 'bg-black/[0.03] border-black/[0.05]')}>
              <h4 className="text-2xl font-bold mb-6">项目背景</h4>
              <p className="text-sm leading-relaxed opacity-60">
                {item.description}
              </p>
            </div>
            <div className={"p-12 rounded-3xl border " + (theme === 'dark' ? 'bg-purple-500/5 border-purple-500/10' : 'bg-black/[0.03] border-black/[0.05]')}>
              <h4 className="text-2xl font-bold mb-6">主要角色</h4>
              <p className="text-sm leading-relaxed opacity-60">
                {item.role || '项目参与者'}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// Gallery Container
const GalleryContainer = ({ item, theme }) => {
  const isDark = theme === 'dark';

  const renderContent = () => {
    if (item.id === 'deconstruct-1') {
      return <OnmyojiDeconstructModule item={item} />;
    }
    if (item.id === 'deconstruct-2') {
      return <NarutoDeconstructModule item={item} />;
    }
    if (item.id === 'jam-1') {
      return <HurryPoPoModule item={item} />;
    }
    if (item.id === 'jam-2') {
      return <WtopiaModule item={item} />;
    }
    return <ProjectLayout item={item} theme={theme} />;
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClose = () => {
    window.closeGallery && window.closeGallery();
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col transition-all duration-1000">
      <div className={"absolute inset-0 transition-colors duration-1000 " + (isDark ? 'bg-[#121216]' : 'bg-[#fdfcf8]')}>
        {isDark ? (
          <div className="absolute inset-0 opacity-40 bg-[url(https://www.transparenttextures.com/patterns/carbon-fibre.png)] pointer-events-none" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent opacity-50" />
        )}
      </div>

      <header className={"fixed top-0 left-0 w-full z-50 px-10 py-4 flex justify-between items-center transition-all " +
        (isDark ? 'text-purple-300 bg-black/80 backdrop-blur-xl border-b border-white/5' : 'text-black bg-white/80 backdrop-blur-md border-b border-black/5')}>
        <div className="flex items-center gap-8">
          <button onClick={handleClose} className="group flex items-center gap-3 font-cinzel text-[10px] tracking-[0.4em] hover:opacity-60 active:scale-95 transition-all">
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span>{isDark ? 'EXIT' : 'HOME'}</span>
          </button>
          <div className="h-4 w-px bg-current opacity-10" />
          <div className="flex items-center gap-3">
            <div className={"w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-cinzel " + (isDark ? 'bg-purple-500 text-white' : 'bg-black text-white')}>YG</div>
            <span className="font-cinzel text-[10px] tracking-widest font-bold truncate max-w-[150px]">{item.title}</span>
          </div>
        </div>

        {!isDark && (
          <nav className="hidden md:flex gap-6 font-cinzel text-[9px] tracking-widest opacity-40">
            {item.id === 'deconstruct-1' ? null : item.id === 'deconstruct-2' ? (
              [
                { id: 'intro', label: '项目概述' },
                { id: 'organization', label: '组织系统' },
                { id: 'friends', label: '好友系统' },
                { id: 'chat', label: '聊天系统' },
                { id: 'ranking', label: '排行榜' },
                { id: 'business-card', label: '名片' },
                { id: 'in-game-social', label: '局内社交' },
                { id: 'community', label: '社区生态' },
                { id: 'conclusion', label: '结论' }
              ].map(anchor => (
                <button key={anchor.id} onClick={() => scrollToSection(anchor.id)} className="hover:opacity-100 transition-opacity">
                  {anchor.label}
                </button>
              ))
            ) : item.id === 'jam-1' ? (
              [
                { id: 'intro', label: '游戏概述' },
                { id: 'inspiration', label: '灵感来源' },
                { id: 'gameplay', label: '核心玩法' },
                { id: 'level', label: '关卡设计' },
                { id: 'visual', label: '角色与幽默' },
                { id: 'feedback', label: '测试反馈' }
              ].map(anchor => (
                <button key={anchor.id} onClick={() => scrollToSection(anchor.id)} className="hover:opacity-100 transition-opacity">
                  {anchor.label}
                </button>
              ))
            ) : item.id === 'jam-2' ? (
              [
                { id: 'hero', label: '封面' },
                { id: 'intro', label: '游戏简介' },
                { id: 'gameplay', label: '故事背景' },
                { id: 'visual', label: '特色系统' },
                { id: 'level', label: '艺术风格' },
                { id: 'feedback', label: '科普价值' }
              ].map(anchor => (
                <button key={anchor.id} onClick={() => scrollToSection(anchor.id)} className="hover:opacity-100 transition-opacity">
                  {anchor.label}
                </button>
              ))
            ) : (
              [
                { id: 'intro', label: '项目概述' },
                { id: 'inspiration', label: '灵感来源' },
                { id: 'gameplay', label: '核心玩法' },
                { id: 'level', label: '关卡设计' },
                { id: 'visual', label: '视觉效果' },
                { id: 'feedback', label: '测试反馈' }
              ].map(anchor => (
                <button key={anchor.id} onClick={() => scrollToSection(anchor.id)} className="hover:opacity-100 transition-opacity">
                  {anchor.label}
                </button>
              ))
            )}
          </nav>
        )}

        <div className="text-right hidden sm:block">
          <p className="font-cinzel text-[7px] tracking-[0.6em] mb-0.5 opacity-40">RECORD_TYPE</p>
          <p className="font-chinese text-[10px] font-bold tracking-widest uppercase">PROJECT</p>
        </div>
      </header>

      <div className="relative z-10 flex-1 overflow-y-auto custom-scrollbar pt-24 pb-20">
        {renderContent()}
      </div>

      <div className={"fixed bottom-0 left-0 w-full h-1 z-30 " + (isDark ? 'bg-purple-600 shadow-[0_0_20px_purple]' : 'bg-black/5')} />
    </div>
  );
};

// 磁性装饰组件 - 支持视差和鼠标跟随效果
const MagneticDecor = ({ src, className, parallaxIntensity = 20, magneticIntensity = 30, parallaxOffset = { x: 0, y: 0 }, children }) => {
  const [magneticPos, setMagneticPos] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const moveX = (e.clientX - centerX) / magneticIntensity;
    const moveY = (e.clientY - centerY) / magneticIntensity;
    setMagneticPos({ x: moveX, y: moveY });
    setScale(1.08);
  };

  const handleMouseLeave = () => {
    setMagneticPos({ x: 0, y: 0 });
    setScale(1);
  };

  // 组合视差偏移和磁性效果
  const totalX = parallaxOffset.x + magneticPos.x;
  const totalY = parallaxOffset.y + magneticPos.y;

  return (
    <div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${totalX}px, ${totalY}px) scale(${scale})`,
        transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
      }}
    >
      {children || <img src={src} className="w-full h-full object-contain pointer-events-none" />}
    </div>
  );
};

const App = () => {
  const [theme, setTheme] = useState('light');
  const [glitch, setGlitch] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBuff, setShowBuff] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isBotOpen, setIsBotOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const sections = theme === 'light' ? DATA.light : DATA.dark;

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === 't') {
        toggleTheme();
        triggerBuff(theme === 'light' ? '+1 MANA' : '+1 LOGIC');
      }
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [theme]);

  useEffect(() => {
    window.closeGallery = () => setSelectedItem(null);
    return () => { window.closeGallery = null; };
  }, []);

  // 鼠标跟随 - 用于视差和磁性效果
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 到 1
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll Reveal Animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));

    // Staggered animation for child elements
    const staggeredObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const children = entry.target.querySelectorAll(':scope > *');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('revealed');
            }, index * 100);
          });
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const staggeredElements = document.querySelectorAll('.scroll-reveal-staggered');
    staggeredElements.forEach(el => staggeredObserver.observe(el));

    return () => {
      observer.disconnect();
      staggeredObserver.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    setGlitch(true);
    setTimeout(() => {
      setTheme(prev => prev === 'light' ? 'dark' : 'light');
      setGlitch(false);
    }, 400);
  };

  const triggerBuff = (text) => {
    setShowBuff(text);
    setTimeout(() => setShowBuff(null), 1000);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={"min-h-screen relative transition-opacity duration-500 " + (glitch ? 'opacity-20 blur-sm' : 'opacity-100') + (theme === 'dark' ? ' text-purple-200/80' : ' text-[#1a1a1a]')}>

      {/* 鼠标跟随光晕效果 */}
      <div
        className="magnetic-cursor hidden md:block"
        style={{
          left: `${(mousePosition.x + 1) * 50}%`,
          top: `${(mousePosition.y + 1) * 50}%`,
          opacity: theme === 'dark' ? 0.6 : 0.3
        }}
      />

      <div className="fixed top-0 left-0 w-full h-[2px] z-[70] pointer-events-none">
        <div className={"h-full transition-all duration-300 ease-out " + (theme === 'dark' ? 'bg-purple-500 shadow-[0_0_10px_purple]' : 'bg-black opacity-40')} style={{width: scrollProgress + '%'}} />
      </div>

      {showBuff && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] pointer-events-none animate-bounce">
          <span className={"font-cinzel text-xs tracking-[0.5em] font-bold " + (theme === 'dark' ? 'text-purple-400' : 'text-black')}>
            {showBuff}
          </span>
        </div>
      )}

      <header className={"fixed top-0 left-0 right-0 z-50 px-10 py-4 flex justify-between items-center transition-all duration-700 " + (theme === 'dark' ? 'bg-black/80 backdrop-blur-2xl border-b border-white/5' : 'bg-white/60 backdrop-blur-lg border-b border-black/5')}>
        <div className="flex items-center gap-6">
          <div
            onClick={() => {
              scrollToSection('home');
              triggerBuff('RECENTERED');
            }}
            className={"w-14 h-14 rounded-full border-2 flex items-center justify-center text-2xl transition-all hover:rotate-12 cursor-pointer active:scale-90 " +
              (theme === 'dark' ? 'bg-purple-900/30 border-purple-500/40 shadow-[0_0_15px_rgba(192,132,252,0.3)]' : 'bg-white border-black/10 text-black shadow-sm')}
          >
            {theme === 'dark' ? '🍎' : '🍏'}
          </div>
          <div className="flex flex-col">
            <h1 className="text-[13px] font-cinzel font-bold tracking-[0.5em] uppercase opacity-40">
              {theme === 'light' ? 'SYSTEM_DESIGNER' : 'GAME_ARCHITECT'}
            </h1>
            <div className="flex items-center gap-4 mt-1">
              <span className="text-sm font-chinese font-bold tracking-widest">
                {theme === 'light' ? '尹果 YinGuo' : '果子 Y.G.'}
              </span>
              <div className={"px-2 py-[2px] text-[11px] font-cinzel border rounded-sm " + (theme === 'dark' ? 'border-purple-500/50 text-purple-400' : 'border-black/20 text-black/60')}>
                LV.99
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-12">
          <nav className="hidden lg:flex gap-10 font-cinzel text-[11px] tracking-[0.4em] font-bold transition-opacity">
            <button onClick={() => scrollToSection('home')} className="rounded-full opacity-100 hover:text-current transition-opacity">[ {theme === 'light' ? '首页' : 'HOME'} ]</button>
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="opacity-30 hover:opacity-100 hover:text-current transition-opacity"
              >
                [ {section.id === 'about' ? '关于我' :
                   section.id === 'skills' ? '技能' :
                   section.id === 'projects' ? '项目' :
                   section.id === 'gaming' ? '游戏' :
                   section.id === 'contact' ? '联系' : section.name} ]
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-8">
            <div className="hidden sm:flex flex-col items-end font-cinzel text-[8px] tracking-widest opacity-20">
              <span>SYNC: 100%</span>
              <span>TPS: 60</span>
            </div>
            <button
              onClick={toggleTheme}
              className={"group relative w-12 h-12 rounded-lg border border-current/20 flex items-center justify-center transition-all hover:scale-105 active:scale-95 " + (theme === 'dark' ? 'shadow-[inset_0_0_10px_purple]' : '')}
            >
              <span className="text-xl group-hover:rotate-180 transition-transform duration-500">
                {theme === 'dark' ? '👁️' : '⚖️'}
              </span>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[6px] font-cinzel opacity-0 group-hover:opacity-100 transition-opacity">
                PRESS [T]
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className="absolute left-0 top-0 w-screen h-screen bg-gray-100 overflow-hidden">
        <div className="relative w-full h-full">

          {/* 中心装饰 - 视差效果 */}
          <div className="absolute top-[54%] left-[55%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10">
          </div>

          {/* 鸟 - 背景居中 */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <MagneticDecor
              src="../内容素材/image/首页-首图/鸟-中心.png"
              className="h-[80vh] w-auto object-contain opacity-30 hover:opacity-50 transition-opacity"
              style={{ zIndex: 5 }}
              magneticIntensity={0}
              parallaxOffset={{ x: mousePosition.x * -8, y: mousePosition.y * -6 }}
            />
          </div>

          {/* 左侧装饰 - 视差 + 磁性 */}
          <MagneticDecor
            src="../内容素材/image/首页-首图/桃花.png"
            className="absolute top-1/6 left-[5%] w-40 h-40 drop-shadow-lg hover:scale-110 transition-transform duration-300"
            magneticIntensity={28}
            parallaxOffset={{ x: mousePosition.x * 22, y: mousePosition.y * 18 }}
          />

          <MagneticDecor
            src="../内容素材/image/首页-首图/水晶球.png"
            className="absolute top-[40%] left-[3%] w-32 h-32 drop-shadow-lg hover:scale-110 transition-transform duration-300"
            magneticIntensity={25}
            parallaxOffset={{ x: mousePosition.x * 28, y: mousePosition.y * 14 }}
          />

          <MagneticDecor
            src="../内容素材/image/首页-首图/桃花.png"
            className="absolute bottom-[10%] left-[8%] w-32 h-32 drop-shadow-lg hover:scale-110 transition-transform duration-300"
            magneticIntensity={22}
            parallaxOffset={{ x: mousePosition.x * 18, y: mousePosition.y * 23 }}
          />

          {/* 右侧装饰 - 视差 + 磁性 */}
          <MagneticDecor
            src="../内容素材/image/首页-首图/牛角.png"
            className="absolute top-[15%] right-[8%] w-32 h-32 drop-shadow-lg hover:scale-110 transition-transform duration-300"
            magneticIntensity={26}
            parallaxOffset={{ x: mousePosition.x * -25, y: mousePosition.y * 16 }}
          />

          <MagneticDecor
            src="../内容素材/image/首页-首图/蝴蝶.png"
            className="absolute bottom-[15%] right-[5%] w-40 h-40 drop-shadow-lg hover:scale-110 transition-transform duration-300"
            magneticIntensity={32}
            parallaxOffset={{ x: mousePosition.x * -20, y: mousePosition.y * 20 }}
          />
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 pt-40 pb-48">

        <section id="home" className="mb-48 relative min-h-[80vh] flex items-center justify-center">
          <div
            className="max-w-4xl relative z-10 transition-transform duration-700 ease-out"
            style={{
              transform: `translate(${mousePosition.x * -8}px, ${mousePosition.y * -6}px)`
            }}
          >
            <h2 className={"text-5xl md:text-[8rem] font-cinzel font-bold leading-[0.75] mb-12 tracking-tighter transition-all animate-fade-in-up flex items-baseline gap-2 " +
              (theme === 'dark' ? 'text-white blur-[0.5px] drop-shadow-[0_0_20px_purple]' : 'text-black opacity-90')}>
              <span>Yingu</span>
              <img src="../内容素材/image/首页-首图/中心-苹果.png" className="w-20 h-20 md:w-24 md:h-24" alt="苹果" />
            </h2>
            <div className="flex items-center gap-4 mb-16">
              <div className={"w-24 h-[2px] animate-width-expand " + (theme === 'dark' ? 'bg-purple-500 shadow-[0_0_10px_purple]' : 'bg-black opacity-20')}></div>
              <span className={"text-allura-xl transition-all duration-1000 " + (theme === 'light' ? 'opacity-10' : 'opacity-100 text-purple-500 italic text-2xl md:text-[3.2rem]')}>
                {theme === 'light' ? 'System Design' : 'Game Architect'}
              </span>
            </div>
            <p className={"text-xl leading-relaxed font-serif max-w-xl transition-all opacity-0 animate-fade-in-up animation-delay-800 " + (theme === 'dark' ? 'text-purple-200/40' : 'text-black/60')}>
              {theme === 'light'
                ? "游戏设计是活的，而不是死板的。游戏设计肯定会变，会前进，也会进化成一份新的设计。"
                : "深渊的观测者，破碎梦境的缝补匠。在虚无的静态中提取代码的魔力，将逻辑萃取为致幻的数字药水。"}
            </p>
            <button
              onClick={() => scrollToSection('projects')}
              className="mt-12 btn-primary animate-fade-in-up animation-delay-1000"
            >
              PROJECTS →
            </button>
          </div>

          {theme === 'dark' && (
            <div className="absolute -top-10 -right-20 w-[400px] h-[400px] rounded-full bg-purple-900/10 blur-[150px] -z-10 animate-pulse"></div>
          )}
        </section>

        <section id="shelves" className="space-y-80">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              {theme === 'light' ? (
                section.id === 'contact' ? (
                  <ContactSection section={section} theme={theme} />
                ) : section.id === 'projects' ? (
                  <div className="space-y-12">
                    <div className="flex flex-col mb-16">
                      <span className="text-[13px] font-cinzel tracking-[0.3em] opacity-30 block mb-2">SECTION_PROJECTS</span>
                      <h2 className="text-3xl font-cinzel font-bold">{section.name}</h2>
                      <div className="mt-4 h-px w-12 bg-black opacity-20" />
                    </div>

                    <div className="space-y-10 scroll-reveal-staggered">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {section.items.filter(item => ['deconstruct-1', 'jam-2', 'jam-1', 'deconstruct-2'].includes(item.id)).map((item, index) => (
                          <div
                            key={item.id}
                            onClick={() => handleItemClick(item)}
                            className="group scroll-reveal cursor-pointer bg-black/5 hover:bg-black/10 transition-all rounded-2xl overflow-hidden flex flex-col h-full"
                            style={{transitionDelay: (index * 100) + 'ms'}}
                          >
                            <div className="w-full h-52 overflow-hidden">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="flex-1 p-4 flex flex-col">
                              <h3 className="text-xl font-bold mb-2 group-hover:translate-x-2 transition-transform">{item.title}</h3>
                              <p className="text-sm opacity-60 line-clamp-2 mb-4">{item.description}</p>
                              <div className="flex gap-2 mt-auto">
                                {item.tags && item.tags.slice(0, 3).map(tag => (
                                  <span key={tag} className="text-[11px] font-cinzel px-2 py-1 border border-black/10 rounded-full">{tag}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-8 border-t border-black/5 scroll-reveal">
                        <span className="text-[13px] font-cinzel tracking-[0.2em] opacity-20 block mb-6 uppercase">Other_Works</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {section.items.filter(item => !['deconstruct-1', 'jam-2', 'jam-1', 'deconstruct-2'].includes(item.id)).map((item) => (
                            <div
                              key={item.id}
                              onClick={() => handleItemClick(item)}
                              className="group scroll-reveal cursor-pointer bg-black/5 hover:bg-black/10 transition-all rounded-2xl p-4 flex flex-col justify-between border border-black/5"
                            >
                              <div>
                                <h4 className="text-lg font-bold mb-2 group-hover:translate-x-1 transition-transform">{item.title}</h4>
                                <p className="text-sm opacity-70 line-clamp-1">{item.description}</p>
                              </div>
                              <div className="mt-4 flex justify-between items-center">
                                <span className="text-[11px] font-cinzel opacity-20">OPEN_ARCHIVE</span>
                                <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : section.id === 'skills' ? (
                  // 技能部分 - 小图标
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-1">
                      <div className="sticky top-32">
                        <span className="text-[13px] font-cinzel tracking-[0.3em] opacity-30 block mb-2">SECTION_{section.id.toUpperCase()}</span>
                        <h2 className="text-3xl font-cinzel font-bold mb-4">
                          {section.name}
                        </h2>
                        <div className={"h-px w-12 " + (theme === 'light' ? 'bg-black' : 'bg-white') + " opacity-20"} />
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-8 scroll-reveal-staggered">
                      {section.items.map((item, index) => (
                        <div key={item.id} className="group scroll-reveal flex items-center gap-4" style={{transitionDelay: (index * 100) + 'ms'}}>
                          <div className="w-12 h-12 flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                            <p className="text-sm leading-relaxed opacity-60">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : section.id === 'gaming' ? (
                  // 游戏经历 - 图标缩小
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-1">
                      <div className="sticky top-32">
                        <span className="text-[13px] font-cinzel tracking-[0.3em] opacity-30 block mb-2">SECTION_GAMING</span>
                        <h2 className="text-3xl font-cinzel font-bold mb-4">
                          {section.name}
                        </h2>
                        <div className={"h-px w-12 " + (theme === 'light' ? 'bg-black' : 'bg-white') + " opacity-20"} />
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-12 scroll-reveal-staggered">
                      {section.items.map((item, index) => (
                        <div key={item.id} className="group scroll-reveal" style={{transitionDelay: (index * 100) + 'ms'}}>
                          <div className="flex flex-col sm:flex-row gap-6">
                            <div className="w-full sm:w-40 aspect-square flex items-center justify-center p-4">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-3/4 h-3/4 object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                              <p className="text-base leading-relaxed opacity-90 whitespace-pre-line">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-1">
                      <div className="sticky top-32">
                        <span className="text-[13px] font-cinzel tracking-[0.3em] opacity-30 block mb-2">SECTION_{section.id.toUpperCase()}</span>
                        <h2 className="text-3xl font-cinzel font-bold mb-4">
                          {section.name}
                        </h2>
                        <div className={"h-px w-12 " + (theme === 'light' ? 'bg-black' : 'bg-white') + " opacity-20"} />
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-12 scroll-reveal-staggered">
                      {section.items.map((item, index) => (
                        <div key={item.id} className="group scroll-reveal" style={{transitionDelay: (index * 100) + 'ms'}}>
                          <div className="flex flex-col sm:flex-row gap-6">
                            <div className="w-full sm:w-40 aspect-square overflow-hidden">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                              <p className="text-base leading-relaxed opacity-90 whitespace-pre-line">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ) : (
                <Shelf
                  section={section}
                  isDark={theme === 'dark'}
                  onItemClick={handleItemClick}
                />
              )}
            </section>
          ))}
        </section>

        <footer className={"mt-80 pt-32 border-t border-current/10 flex flex-col md:flex-row justify-between items-start gap-20 transition-all " + (theme === 'dark' ? 'opacity-20' : 'opacity-40')}>
          <div className="flex flex-col">
            <h4 className="font-cinzel text-[10px] font-bold tracking-[0.6em] mb-6 uppercase">Checkpoint Saved</h4>
            <p className="text-sm font-serif italic max-w-xs leading-loose">
              {theme === 'light'
                ? "The curator has finished the daily log. Identity synchronization complete."
                : "The shadow has been documented. The narrative continues in the silence."}
            </p>
          </div>

          <div className="flex gap-20 font-cinzel text-[10px] tracking-widest font-bold">
            <div className="flex flex-col gap-6">
              <span className="opacity-40">STORAGE</span>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:tracking-[0.2em] transition-all">SAVES_PROJECTS</button>
              <button onClick={() => scrollToSection('gaming')} className="text-left hover:tracking-[0.2em] transition-all">SAVES_GAMING</button>
            </div>
            <div className="flex flex-col gap-6">
              <span className="opacity-40">SOCIAL</span>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:tracking-[0.2em] transition-all">CONNECT</button>
            </div>
          </div>
        </footer>
      </main>

      <WitchBot theme={theme} isOpen={isBotOpen} setIsOpen={setIsBotOpen} />

      {selectedItem && (
        <GalleryContainer
          item={selectedItem}
          theme={theme}
        />
      )}
    </div>
  );
};

// Mount React App
const root = createRoot(document.getElementById('root'));
root.render(<App />);
