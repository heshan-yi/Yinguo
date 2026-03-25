const WtopiaModule = ({ item }) => {
  return (
    <div className="w-full bg-white text-black font-inter">
      <div className="max-w-7xl mx-auto px-10 space-y-40 pb-40">
        <section id="hero" className="pt-20">
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl mb-12 group">
            <img src="assets/wtopia/开始界面.png" className="w-full h-full object-cover" alt="污托邦开始界面" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12 text-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[10px] font-bold tracking-widest uppercase">
                  {item.category}
                </span>
                {item.tags && item.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-4">{item.title}</h1>
              <p className="text-xl font-cinzel tracking-[0.3em] opacity-80 mb-6 uppercase">ROLE: 游戏主策划 & UI 设计</p>
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-white text-black font-bold text-sm rounded-full hover:scale-105 transition-transform">PLAY_DEMO</button>
                <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm rounded-full hover:bg-white/20 transition-all">VIEW_DOCS</button>
              </div>
            </div>
          </div>
        </section>

        <section id="intro">
          <h3 className="text-base font-cinzel font-bold tracking-[0.3em] opacity-80 uppercase mb-12">游戏简介</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 p-12 bg-black/5 rounded-3xl border border-black/5">
              <p className="text-lg leading-relaxed opacity-80 mb-6">
                《污托邦》是一款以"未来灾害"为主题的2D横板叙事解谜游戏，旨在通过沉浸式剧情和互动玩法，向玩家科普水污染的成因与防治知识。
              </p>
              <p className="text-[15px] opacity-80 leading-relaxed">
                玩家将扮演返乡大学生多米，在探望患病爷爷的过程中，逐渐揭开小镇频发怪病背后的秘密——一场由水污染引发的生态危机。通过探索场景、搜集线索、解谜互动，玩家将拼凑真相，并向政府提交报告，影响小镇的命运。
              </p>
            </div>
            <div className="p-8 bg-black/5 rounded-3xl border border-black/5 space-y-6">
              <div>
                <h4 className="text-sm font-bold mb-3 opacity-40">GAME_INFO</h4>
                <div className="text-[14px] opacity-80 space-y-2">
                  <div><span className="opacity-40">类型:</span> 2D横板解谜</div>
                  <div><span className="opacity-40">时长:</span> 1-2小时</div>
                  <div><span className="opacity-40">平台:</span> PC</div>
                  <div><span className="opacity-40">团队:</span> 在校大学生</div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-3 opacity-40">ROLE</h4>
                <div className="text-[14px] opacity-80">
                  游戏主策划<br />UI 设计
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gameplay">
          <h3 className="text-base font-cinzel font-bold tracking-[0.3em] opacity-80 uppercase mb-12">故事背景</h3>
          <div className="p-12 bg-black/5 rounded-3xl border border-black/5">
            <p className="text-lg leading-relaxed opacity-80 mb-8">
              在安宁镇，多米得知爷爷罹患胃癌，而村里近年来怪病频发：老李因胃癌去世，老徐查出肝炎，邻居果果反复肠胃不适……村民议论纷纷，怀疑与上游的"来福工厂"或绿水镇的异常有关。受刘奶奶委托，多米前往上游的绿水镇取病历，却在河边目睹杀鸡洗肉、伤口难愈等异常现象，隐约察觉水源污染与疾病的关联。随着调查深入，工厂排污、农业废水、生活污染等线索逐渐浮出水面，一个被污染侵蚀的"污托邦"真相亟待揭露。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-xl border border-black/5">
                <div className="text-3xl mb-3">🏭</div>
                <h4 className="font-bold mb-2">工业污染</h4>
                <p className="text-[14px] opacity-80">来福工厂违规排污，排放苯并芘等致癌物质</p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-black/5">
                <div className="text-3xl mb-3">🌾</div>
                <h4 className="font-bold mb-2">农业废水</h4>
                <p className="text-[14px] opacity-80">化肥农药随径流进入水体，导致富营养化</p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-black/5">
                <div className="text-3xl mb-3">🏠</div>
                <h4 className="font-bold mb-2">生活污染</h4>
                <p className="text-[14px] opacity-80">未经处理的生活污水直排，含大量病原体</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-base font-cinzel font-bold tracking-[0.3em] opacity-80 uppercase mb-12">核心玩法</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-black/5 rounded-3xl border border-black/5">
              <h4 className="text-xl font-bold mb-4">探索与互动</h4>
              <img src="assets/wtopia/玩法_探索.png" className="w-full rounded-lg mb-4" alt="探索玩法" />
              <p className="text-[15px] opacity-80 leading-relaxed mb-4">
                在安宁镇、绿水镇、来福工厂等地图自由移动，点击物品或人物触发对话与事件。故事按章节推进，需收集全部关键线索才能解锁最终结局。
              </p>
              <div className="text-[14px] opacity-70 space-y-2">
                <p>• 线性叙事 + 自由探索</p>
                <p>• 收集病历单、对话记录、环境证据</p>
                <p>• 自动存入"笔记本"供查阅</p>
              </div>
            </div>
            <div className="p-8 bg-black/5 rounded-3xl border border-black/5">
              <h4 className="text-xl font-bold mb-4">解谜系统</h4>
              <img src="assets/wtopia/玩法_搜集.png" className="w-full rounded-lg mb-4" alt="搜集玩法" />
              <p className="text-[15px] opacity-80 leading-relaxed mb-4">
                物品组合、对话选择、环境观察。通过组合扳手和密码本打开工厂门锁，或调配试剂检测水样。
              </p>
              <div className="text-[14px] opacity-70 space-y-2">
                <p>• 物品组合（扳手+密码本）</p>
                <p>• 对话选择影响线索获取</p>
                <p>• 环境观察发现隐藏信息</p>
              </div>
            </div>
            <div className="p-8 bg-black/5 rounded-3xl border border-black/5">
              <h4 className="text-xl font-bold mb-4">对话系统</h4>
              <img src="assets/wtopia/玩法_对话.png" className="w-full rounded-lg mb-4" alt="对话系统" />
              <p className="text-[15px] opacity-80 leading-relaxed mb-4">
                与10余位NPC进行多分支对话，不同选择会获得不同线索和隐藏信息。对话记录自动保存，可随时回顾重要剧情。
              </p>
              <div className="text-[14px] opacity-70 space-y-2">
                <p>• 多分支对话选项</p>
                <p>• 关键线索高亮显示</p>
                <p>• 对话历史可回顾</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-8 bg-black/5 rounded-3xl border border-black/5">
            <h4 className="text-xl font-bold mb-6">小游戏玩法</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { name: '布料上浆', desc: '光圈瞄准与按键操作', image: 'assets/wtopia/小游戏_染布.png' },
                { name: '毛线收集', desc: '篮子接指定颜色毛线', image: 'assets/wtopia/小游戏_接毛线.png' },
                { name: '拼图印花', desc: '滑动图像块复原图例', image: 'assets/wtopia/小游戏_印花.png' },
                { name: '指纹解锁', desc: 'WASD切换样本', image: 'assets/wtopia/小游戏_指纹解锁.png' },
                { name: '2048变体', desc: '合并疾病图标消除', image: 'assets/wtopia/小游戏_2048_变体.png' }
              ].map((game, i) => (
                <div key={i} className="p-4 bg-white rounded-xl border border-black/5 hover:shadow-md transition-all">
                  {game.image ? (
                    <img src={game.image} className="w-full h-20 object-cover rounded-lg mb-2" alt={game.name} />
                  ) : (
                    <div className="text-2xl mb-2">{'🎮'}</div>
                  )}
                  <p className="text-sm font-bold mb-1">{game.name}</p>
                  <p className="text-[14px] opacity-80">{game.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="visual">
          <h3 className="text-base font-cinzel font-bold tracking-[0.3em] opacity-80 uppercase mb-12">特色系统</h3>
          <div className="p-12 bg-black/5 rounded-3xl border border-black/5 space-y-8">
            <div>
              <h4 className="text-xl font-bold mb-4">科普知识融合</h4>
              <p className="text-[15px] opacity-80 leading-relaxed mb-4">
                游戏中出现的疾病（胃癌、肝炎、伤口难愈）均与水污染中的重金属、有机污染物、病原体等直接相关。通过对话和文件，自然引入水污染知识。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg border border-black/5">
                  <p className="text-[14px] font-bold mb-1">重金属污染</p>
                  <p className="text-[14px] opacity-80">苯并芘（致癌）</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-black/5">
                  <p className="text-[14px] font-bold mb-1">有机污染物</p>
                  <p className="text-[14px] opacity-80">氮磷（富营养化）</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-black/5">
                  <p className="text-[14px] font-bold mb-1">病原体</p>
                  <p className="text-[14px] opacity-80">细菌（生活污水）</p>
                </div>
              </div>
            </div>

            <div className="border-t border-black/10 pt-8">
              <h4 className="text-xl font-bold mb-4">多结局设计</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-xl border-2 border-green-500/30">
                  <div className="text-2xl mb-2">✅</div>
                  <p className="text-sm font-bold mb-1">真相结局</p>
                  <p className="text-[14px] opacity-80">成功提交完整报告，工厂被整改，小镇水源恢复</p>
                </div>
                <div className="p-6 bg-white rounded-xl border-2 border-red-500/30">
                  <div className="text-2xl mb-2">❌</div>
                  <p className="text-sm font-bold mb-1">遗憾结局</p>
                  <p className="text-[14px] opacity-80">证据不足，污染持续，更多村民患病</p>
                </div>
                <div className="p-6 bg-white rounded-xl border-2 border-purple-500/30">
                  <div className="text-2xl mb-2">🔮</div>
                  <p className="text-sm font-bold mb-1">隐藏结局</p>
                  <p className="text-[14px] opacity-80">发现更大利益链，选择揭露或沉默</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="level">
          <h3 className="text-base font-cinzel font-bold tracking-[0.3em] opacity-80 uppercase mb-12">艺术风格与音效</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-black/5 rounded-3xl border border-black/5 space-y-6">
              <h4 className="text-xl font-bold mb-4">美术风格</h4>
              <div className="space-y-4 text-[15px] opacity-90 leading-relaxed">
                <p><span className="font-bold">手绘2D像素风：</span>色彩随剧情变化——初期温暖明亮，污染线索出现后转为灰暗阴郁，结局处恢复生机。</p>
                <p><span className="font-bold">场景细节：</span>爷爷家堆砌的药瓶、河边泛绿的泡沫、工厂冒烟的烟囱，强化环境叙事。</p>
                <p><span className="font-bold">角色设计：</span>Q版人物，表情丰富，突出乡土人情与焦虑情绪。</p>
              </div>
            </div>
            <div className="p-8 bg-black/5 rounded-3xl border border-black/5 space-y-6">
              <h4 className="text-xl font-bold mb-4">音效与音乐</h4>
              <div className="space-y-4 text-[15px] opacity-90 leading-relaxed">
                <p><span className="font-bold">背景音乐：</span>宁静的乡村民谣与悬疑氛围电子乐交替，烘托探索时的沉浸感。</p>
                <p><span className="font-bold">环境音效：</span>流水声、工厂机器轰鸣、咳嗽声、鸡鸣犬吠，增强场景真实感。</p>
                <p><span className="font-bold">交互反馈：</span>解谜成功时的清脆提示音，失败时的低沉音效。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="feedback">
          <h3 className="text-base font-cinzel font-bold tracking-[0.3em] opacity-80 uppercase mb-12">科普价值</h3>
          <div className="max-w-3xl mx-auto p-12 bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl border border-black/10">
            <div className="text-center space-y-6">
              <div className="text-4xl mb-4">🌍💧</div>
              <h4 className="text-2xl font-bold">核心信息</h4>
              <p className="text-lg opacity-80">
                揭示环境污染与公共健康的直接关联，激发玩家对环境保护的责任感。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div>
                  <p className="text-[14px] font-bold opacity-80 mb-2">科普内容</p>
                  <p className="text-sm">水污染的主要类型、污染物、健康影响及防治手段</p>
                </div>
                <div>
                  <p className="text-[14px] font-bold opacity-80 mb-2">目标受众</p>
                  <p className="text-sm">青少年及年轻玩家，可作为学校环保教育的辅助工具</p>
                </div>
                <div>
                  <p className="text-[14px] font-bold opacity-80 mb-2">游戏流程</p>
                  <p className="text-sm">约1-2小时，包含5个主要场景、10余位NPC、8个核心谜题</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
