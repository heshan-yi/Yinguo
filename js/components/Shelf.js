// Shelf Component - 深色主题下的展示架组件
const Shelf = ({ section, isDark, onItemClick }) => {
  return (
    <div className="dream-frame gallery-frame bg-[#121216]/50 backdrop-blur-xl rounded-3xl">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-cinzel font-bold text-purple-300 tracking-wider">
          {section.name}
        </h2>
        <div className="flex gap-1">
          {section.items.map((_, i) => (
            <div key={i} className="w-1 h-1 bg-purple-500/30 rounded-full" />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 scroll-reveal-staggered">
        {section.items.map((item, index) => (
          <button
            key={item.id}
            onClick={() => onItemClick(item)}
            className="group scroll-reveal relative aspect-square rounded-2xl overflow-hidden bg-black/40 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500"
            style={{transitionDelay: (index * 80) + 'ms'}}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl opacity-30 group-hover:opacity-50 group-hover:scale-125 transition-all duration-500">
                {section.icon || '📦'}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-[12px] text-purple-200/80 font-cinzel truncate">{item.title}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
