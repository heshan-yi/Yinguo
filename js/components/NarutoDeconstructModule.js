// NarutoDeconstructModule - 火影忍者社交拆解组件
const { useState, useEffect } = React;

const NarutoDeconstructModule = ({ item }) => {
  const [documentData, setDocumentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('structured'); // 'structured' | 'original'

  useEffect(() => {
    // 直接使用全局数据
    if (typeof NARUTO_DOC_FIXED !== 'undefined') {
      setDocumentData(NARUTO_DOC_FIXED);
      setLoading(false);
    } else {
      // 如果全局数据不可用，尝试加载
      fetch('js/data/naruto-doc-fixed.js')
        .then(response => response.text())
        .then(text => {
          // 提取数据
          const match = text.match(/window\.NARUTO_DOC_FIXED = ({[\s\S]*?});/);
          if (match) {
            const data = eval('(' + match[1] + ')');
            setDocumentData(data);
          }
          setLoading(false);
        })
        .catch(error => {
          console.error('加载文档数据失败:', error);
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fdfcf8] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-black/10 border-t-black/60 mb-4"></div>
          <p className="text-black/60 font-cinzel tracking-wide">加载文档中...</p>
        </div>
      </div>
    );
  }

  if (!documentData) {
    return (
      <div className="min-h-screen bg-[#fdfcf8] flex items-center justify-center">
        <p className="text-black/40 font-cinzel tracking-wide">加载文档数据失败</p>
      </div>
    );
  }

  // 原始HTML模式
  if (viewMode === 'original') {
    return (
      <div className="min-h-screen bg-[#fdfcf8]">
        {/* 切换按钮 */}
        <div className="fixed top-4 right-4 z-50 flex gap-2">
          <button
            onClick={() => setViewMode('structured')}
            className="px-4 py-2 bg-black text-white rounded-lg shadow-lg hover:bg-black/80 transition-colors font-cinzel text-xs tracking-wide"
          >
            结构化视图
          </button>
        </div>
        {/* iframe 加载原始HTML */}
        <iframe
          src="assets/火影忍者社交拆解/腾讯星跃训练营_火影忍者手游_社交系统拆解.htm"
          className="w-full h-screen border-0"
          title="原始文档"
        />
      </div>
    );
  }

  // 结构化视图模式
  return (
    <>
      {/* 切换按钮 */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setViewMode('original')}
          className="px-4 py-2 bg-black/60 text-white rounded-lg shadow-lg hover:bg-black/80 transition-colors font-cinzel text-xs tracking-wide backdrop-blur-sm"
        >
          原始HTML视图
        </button>
      </div>
      {/* 传递首图数据给 FeishuDocument */}
      <FeishuDocument data={documentData} heroImage={item.image} heroItem={item} />
    </>
  );
};
