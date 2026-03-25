// WitchBot Component - 悬浮助手组件
const WitchBot = ({ theme, isOpen, setIsOpen }) => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={"w-16 h-16 rounded-full border-2 flex items-center justify-center text-2xl transition-all hover:scale-110 active:scale-95 shadow-2xl " +
          (theme === 'dark'
            ? 'bg-purple-900/50 border-purple-400/50 text-purple-300 shadow-[0_0_30px_rgba(192,132,252,0.4)]'
            : 'bg-white border-black/20 text-black shadow-lg')}
      >
        {isOpen ? '✕' : theme === 'dark' ? '🧙' : '📜'}
      </button>

      {isOpen && (
        <div className={"absolute bottom-20 right-0 w-72 rounded-2xl shadow-2xl transition-all " +
          (theme === 'dark'
            ? 'bg-[#1a1624] border border-purple-500/20 text-purple-100'
            : 'bg-white border border-black/10 text-black')}>
          <div className="p-4 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{theme === 'dark' ? '🧙' : '📜'}</span>
              <div>
                <p className="text-[12px] font-cinzel tracking-wider opacity-70">WITCH_BOT v1.0</p>
                <p className="text-sm font-bold">{theme === 'dark' ? '梦境导航员' : '档案管理员'}</p>
              </div>
            </div>
            <div className="text-[14px] opacity-80 leading-relaxed font-serif italic">
              {theme === 'dark'
                ? "在破碎的梦之海中，每一片碎片都藏着一个未完成的故事..."
                : "这里收集着每一份创作的足迹，欢迎随时翻阅。"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
