const { useState } = React;

const HurryPoPoModule = ({ item }) => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLevelChange = (newLevel) => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    setCurrentLevel(newLevel);
  };

  // 玩家评价数据
  const reviews = [
    { avatar: '😊', username: 'Gamer123', rating: 5, text: '放屁动画太搞笑了！玩了两个小时一直在笑，关卡设计很有趣，难度递进很合理。' },
    { avatar: '🎮', username: 'PixelMaster', rating: 5, text: '无死亡机制很赞，不用从头开始让我愿意反复尝试每个关卡的走法。' },
    { avatar: '🌟', username: 'IndieFan', rating: 4, text: '美术风格很可爱，配乐也很舒服。唯一的遗憾是稍微短了一点，但作为一个72小时的作品已经很棒了！' },
    { avatar: '🎲', username: 'SpeedRunner', rating: 5, text: '厨房那关的面包机机关设计很巧妙，第一次看到面包弹出的时候惊呆了！' },
    { avatar: '😄', username: 'CasualPlayer', rating: 4, text: '适合休闲玩家，操作简单但有挑战性。特别是找纸巾的位置有时候很意外，很有创意。' },
    { avatar: '🎯', username: 'PlatformLover', rating: 5, text: '作为平台跳跃游戏，手感做得很到位，二段跳和墙跳的手感都很棒！' },
    { avatar: '🎪', username: 'GameDev', rating: 5, text: '作为一个开发者，很佩服你们在72小时内能完成这样的作品。关卡设计和美术都很专业！' },
    { avatar: '😃', username: 'RetroFan', rating: 4, text: '让我想起了小时候玩的平台游戏，但又有现代的幽默元素。期待你们下一个作品！' }
  ];

  // 复制评价数据实现循环效果
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  const levels = [
    {
      name: '浴室',
      subtitle: '基础教学',
      time: '15秒',
      items: '1张纸巾',
      scene: '厕所-路线图.png',
      color: '厕所-配色卡.png',
      sketch: '花架-草图.png',
      design: {
        story: 'Popo在厕所发现纸巾只剩一点，不够用，于是决定去其他房间寻找。',
        purpose: '基础跳跃操作、世界存在隐藏危险',
        mechanism: '玩家需跳过移动的水滴（被水滴击中触发放屁+减5秒+复位），到达另一平台。地面上有一个马桶冲水按钮，无任何提示，第一次踩到会触发从底部冲出的水柱，直接失败。正确的通过方式是跳跃越过按钮。',
        position: '场景中央平台（唯一一个）'
      }
    },
    {
      name: '花架',
      subtitle: '节奏教学',
      time: '30秒',
      items: '1张纸巾',
      scene: '花架-场景.png',
      color: '花架-配色卡.png',
      sketch: '花架-草图.png',
      design: {
        story: 'Popo来到阳台花架，寻找纸巾。',
        purpose: '蹲下动作 + 时机判断',
        mechanism: '玩家需在风车叶片间隙中蹲下通过。盆栽植物下方有瓢虫，如果在植物下站立，会惊动瓢虫飞出，触发放屁+减5秒+复位。',
        position: '花架高处平台（一个）'
      }
    },
    {
      name: '厨房',
      subtitle: '攀爬与机关',
      time: '60秒',
      items: '2张纸巾',
      scene: '厨房-场景.png',
      color: '厨房-配色卡.png',
      sketch: '厨房-草图.png',
      design: {
        story: 'Popo进入厨房，发现纸巾可能藏在电器附近。',
        purpose: '墙爬与墙跳、简单机关交互',
        mechanism: '地面有水，需要跳跃通过（掉入水池直接失败）；水龙头滴水，被滴中减5秒并复位。面包机初始为缩入状态，需玩家踩下插座上的按钮（需通过盘子上的面包片跳跃到达），插座变红后，5秒内跳回面包机顶部，此时面包弹出，利用弹跳到达上层平台。纸巾旁有一个"巴豆+杏仁"瓶子，掉入直接失败。',
        position: '第一个在面包机旁平台（收集+5秒），第二个在更高处需利用面包机弹跳获得'
      }
    },
    {
      name: '吧台',
      subtitle: '综合挑战',
      time: '90秒',
      items: '2张纸巾',
      scene: '吧台-场景.png',
      color: '吧台-配色卡.png',
      sketch: '吧台-草图.png',
      design: {
        story: 'Popo来到家中吧台，这里布满"危险"食物（巴豆、西梅等促排泄物）。',
        purpose: '综合运用所有技能 + 路径选择',
        mechanism: '左侧墙面可攀爬，墙上有两个教学提示（咖啡机内壁、夜灯上画着动作提示）。两个瓶子上写有"巴豆""西梅"，掉入即直接失败。左上角纸巾需要连续墙爬、墙跳，并小心跳过两个瓶子；右上角纸巾相对容易，只需墙爬和简单跳跃。',
        position: '左上角（更难）、右上角（较易），共两个'
      }
    }
  ];

  const tools = [
    { name: 'Unity', icon: '使用工具-Unity图标.png' },
    { name: 'Figma', icon: '使用工具-Figma图标.png' },
    { name: 'VS Code', icon: '使用工具-VScode图标.png' },
    { name: 'Photoshop', icon: '使用工具-Ps图标.png' },
    { name: 'After Effects', icon: '使用工具-AE图标.png' }
  ];

  // 去掉拖拽交互代码，改用自动循环滚动

  return (
    <div className="w-full bg-white text-black font-inter">
      <div className="max-w-7xl mx-auto px-10 space-y-40 pb-40">
        <section id="hero" className="pt-20">
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl mb-12 group">
            <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
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
              <p className="text-xl font-cinzel tracking-[0.3em] opacity-80 mb-6 uppercase">ROLE: 游戏主策划</p>
              <p className="text-lg opacity-90 max-w-2xl mb-6">{item.description}</p>
              <a href="https://ananhhh.itch.io/hurrypopo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-[14px] font-bold rounded-full hover:bg-white/90 hover:scale-105 transition-all shadow-xl">
                <span>开始游戏</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        <section id="intro">
          <h3 className="text-base font-cinzel font-bold tracking-[0.3em] opacity-80 uppercase mb-12">游戏概述</h3>
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-12 items-stretch">
            <div className="space-y-8 flex flex-col">
              <div className="p-8 bg-black/5 rounded-3xl border border-black/5">
                <h4 className="text-xl font-bold mb-6">基本信息</h4>
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div><span className="opacity-40">类型:</span> 2D平台跳跃休闲游戏</div>
                  <div><span className="opacity-40">比赛:</span> LD58</div>
                  <div><span className="opacity-40">周期:</span> 72小时</div>
                  <div><span className="opacity-40">团队:</span> 4人</div>
                  <div><span className="opacity-40">主题:</span> Collector（采集者）</div>
                  <div><span className="opacity-40">成绩:</span> 全球幽默表现前10%、美术前25%</div>
                </div>
              </div>

              <div className="p-8 bg-black/5 rounded-3xl border border-black/5 flex-1">
                <h4 className="text-xl font-bold mb-6">游戏简介</h4>
                <p className="text-[15px] opacity-80 leading-relaxed">
                  玩家扮演一位内急的主角 Popo，在卫生纸告罄的危急时刻，于家中各个意想不到的角落寻找散落的卫生纸，展开一场紧张又爆笑的厕所冲刺救援。游戏融合了敏捷反应与生活幽默，通过简单的平台跳跃操作，带给玩家"紧张但无负担"的轻快体验。
                </p>
              </div>
            </div>

            <div className="p-8 bg-black/5 rounded-3xl border border-black/5 flex flex-col">
              <h4 className="text-sm font-bold mb-6 opacity-40">TOOLS</h4>
              <div className="grid grid-cols-3 gap-4 flex-1">
                {tools.map((tool, i) => (
                  <div key={i} className="aspect-square p-4 bg-white rounded-lg border border-black/5 hover:shadow-md transition-all flex items-center justify-center">
                    <img src={'../内容素材/image/' + tool.icon} className="w-full h-full object-contain" alt={tool.name} />
                  </div>
                ))}
              </div>

              <div className="border-t border-black/10 pt-6 mt-6">
                <h4 className="text-sm font-bold mb-4 opacity-40">TEAM</h4>
                <div className="text-[14px] opacity-80 space-y-3">
                  <div className="flex justify-between">
                    <span>游戏主策划</span>
                    <span className="opacity-40">（本人）</span>
                  </div>
                  <div className="flex justify-between">
                    <span>程序</span>
                    <span className="opacity-40">1人</span>
                  </div>
                  <div className="flex justify-between">
                    <span>美术</span>
                    <span className="opacity-40">2人</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="inspiration">
          <h3 className="text-base font-cinzel font-bold tracking-[0.3em] opacity-80 uppercase mb-12">灵感来源</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-black/5 rounded-3xl border border-black/5">
              <h5 className="text-lg font-bold mb-4">生活共鸣</h5>
              <p className="text-[15px] opacity-70 leading-relaxed">"上厕所发现没带纸"是极具普遍性的尴尬场景，在微博、小红书等平台有大量真实分享，容易引发玩家共情。</p>
            </div>
            <div className="p-8 bg-black/5 rounded-3xl border border-black/5">
              <h5 className="text-lg font-bold mb-4">卫生纸的日常踪迹</h5>
              <p className="text-[15px] opacity-70 leading-relaxed">卫生纸常被随手塞在沙发缝、抽屉、快递盒等"非固定位置"，这构成了游戏内探索行为的现实基础。</p>
            </div>
            <div className="p-8 bg-black/5 rounded-3xl border border-black/5">
              <h5 className="text-lg font-bold mb-4">2D平台跳跃的天然适配</h5>
              <p className="text-[15px] opacity-70 leading-relaxed">操作简单、学习成本低；水平移动与跳跃能自然营造紧张感；清晰的视觉结构便于表现室内空间差异；短平快的节奏适合休闲游戏。</p>
            </div>
          </div>
        </section>

        <section id="gameplay">
          <h3 className="text-base font-cinzel font-bold tracking-[0.3em] opacity-80 uppercase mb-12">核心玩法机制</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-black/5 rounded-3xl border border-black/5 space-y-6">
              <h4 className="text-xl font-bold mb-6">基础操作</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg border border-black/5 hover:shadow-md transition-all">
                  <div className="flex gap-2">
                    <img src={'../内容素材/image/A键.png'} className="w-10 h-10 object-contain" />
                    <img src={'../内容素材/image/D键.png'} className="w-10 h-10 object-contain" />
                  </div>
                  <span className="text-sm">左右移动</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg border border-black/5 hover:shadow-md transition-all">
                  <img src={'../内容素材/image/Space键位.png'} className="w-24 h-10 object-contain" />
                  <span className="text-sm">跳跃（可二段跳）</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg border border-black/5 hover:shadow-md transition-all">
                  <img src={'../内容素材/image/S键位.png'} className="w-10 h-10 object-contain" />
                  <span className="text-sm">蹲下（通过低矮空间/躲避障碍）</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg border border-black/5 hover:shadow-md transition-all">
                  <img src={'../内容素材/image/W键位.png'} className="w-10 h-10 object-contain" />
                  <span className="text-sm">攀爬/墙跳（接触垂直墙面时使用）</span>
                </div>
              </div>
            </div>
            <div className="p-8 bg-black/5 rounded-3xl border border-black/5">
              <h4 className="text-xl font-bold mb-6">压力机制</h4>
              <div className="grid grid-cols-1 md:grid-cols-[7fr_5fr] gap-8 items-start">
                <div className="space-y-4">
                  <img src={'../内容素材/image/倒计时UI-进度0.png'} className="w-full max-w-[200px] object-contain rounded-lg" />
                  <img src={'../内容素材/image/倒计时UI-进度100%.png'} className="w-full max-w-[200px] object-contain rounded-lg" />
                </div>
                <div>
                  <p className="text-[15px] opacity-80 leading-relaxed mb-6">
                    大肠形状的环形进度条，随时间逐渐填满。进度条满值即失败。
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <span className="px-4 py-2 bg-black/10 border border-black/20 rounded-lg text-[12px]">无死亡设计</span>
                    <span className="px-4 py-2 bg-black/10 border border-black/20 rounded-lg text-[12px]">收集卫生纸增加时间</span>
                    <span className="px-4 py-2 bg-black/10 border border-black/20 rounded-lg text-[12px]">触发放屁动画减5秒</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="level">
          <h3 className="text-base font-cinzel font-bold tracking-[0.3em] opacity-80 uppercase mb-12">关卡设计</h3>
          <div className="space-y-16">
            <div className="relative group">
              <button
                onClick={() => handleLevelChange((currentLevel - 1 + 4) % 4)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/5 backdrop-blur-md border border-black/10 rounded-full flex items-center justify-center hover:bg-black/10 hover:border-black/20 hover:scale-110 hover:shadow-lg transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) opacity-0 group-hover:opacity-100"
              >
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="relative aspect-[18/9] rounded-3xl overflow-hidden shadow-lg bg-black/5">
                <div className={"absolute inset-0 transition-all duration-700 ease-out " + (isAnimating ? 'scale-98 opacity-90' : 'scale-100 opacity-100')}>
                  {levels.map((level, i) => (
                    <div key={level.name} className={"absolute inset-0 transition-all duration-700 ease-out " + (i === currentLevel ? 'opacity-100 scale-100' : 'opacity-0 scale-98')}>
                      <img src={'../内容素材/image/' + level.scene} className="w-full h-full object-contain" />
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleLevelChange((currentLevel + 1) % 4)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/5 backdrop-blur-md border border-black/10 rounded-full flex items-center justify-center hover:bg-black/10 hover:border-black/20 hover:scale-110 hover:shadow-lg transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) opacity-0 group-hover:opacity-100"
              >
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="flex justify-center gap-2">
              {levels.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleLevelChange(i)}
                  className={"h-1.5 rounded-full transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) hover:scale-125 " + (currentLevel === i ? 'w-8 bg-black shadow-md' : 'w-5 bg-black/10 hover:bg-black/20')}
                />
              ))}
            </div>

            <div className="flex gap-8 items-start">
              <div className="relative transition-all duration-500 hover:scale-105">
                <img src={'../内容素材/image/' + levels[currentLevel].color} className="max-h-[400px] w-auto object-contain drop-shadow-md" alt={levels[currentLevel].name + '配色卡'} />
              </div>

              <div className="flex-1 relative">
                <div className="relative">
                  <div className="absolute top-1/2 -translate-y-1/2 -right-8 w-[38%] aspect-[3/4] overflow-visible pointer-events-auto z-20 transition-all duration-500 hover:-translate-y-1/2 hover:-right-4 hover:scale-105">
                    <img src={'../内容素材/image/' + levels[currentLevel].sketch} className="w-full h-full object-contain drop-shadow-lg" alt={levels[currentLevel].name + '草图'} />
                  </div>

                  <div className="p-8 bg-black/5 rounded-2xl border border-black/5 pt-6 pr-12 transition-all duration-500 hover:bg-black/8">
                    <div className="max-w-[62%] mb-6 transition-all duration-300">
                      <div className="flex items-center gap-6">
                        <h3 className="text-2xl font-bold transition-all duration-300 hover:text-black/90">{levels[currentLevel].name}</h3>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1.5 text-[15px] opacity-80 transition-all duration-300 hover:opacity-100">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                            <span>{levels[currentLevel].items}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[15px] opacity-80 transition-all duration-300 hover:opacity-100">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{levels[currentLevel].time}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm opacity-60 mt-1 transition-all duration-300">{levels[currentLevel].subtitle}</p>
                    </div>
                    <div className="space-y-4 max-w-[62%]">
                      <div className="transition-all duration-300 hover:translate-x-1 hover:bg-black/3 rounded-lg p-2">
                        <h4 className="text-sm font-bold mb-2 opacity-60 transition-all duration-300 hover:opacity-80">场景故事</h4>
                        <p className="text-[15px] opacity-80 leading-relaxed">{levels[currentLevel].design.story}</p>
                      </div>
                      <div className="transition-all duration-300 hover:translate-x-1 hover:bg-black/3 rounded-lg p-2">
                        <h4 className="text-sm font-bold mb-2 opacity-60 transition-all duration-300 hover:opacity-80">教学目的</h4>
                        <p className="text-[15px] opacity-80 leading-relaxed">{levels[currentLevel].design.purpose}</p>
                      </div>
                      <div className="transition-all duration-300 hover:translate-x-1 hover:bg-black/3 rounded-lg p-2">
                        <h4 className="text-sm font-bold mb-2 opacity-60 transition-all duration-300 hover:opacity-80">机制设计</h4>
                        <p className="text-[15px] opacity-80 leading-relaxed">{levels[currentLevel].design.mechanism}</p>
                      </div>
                      <div className="transition-all duration-300 hover:translate-x-1 hover:bg-black/3 rounded-lg p-2">
                        <h4 className="text-sm font-bold mb-2 opacity-60 transition-all duration-300 hover:opacity-80">卫生纸位置</h4>
                        <p className="text-[15px] opacity-80 leading-relaxed">{levels[currentLevel].design.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="visual">
          <h3 className="text-base font-cinzel font-bold tracking-[0.3em] opacity-80 uppercase mb-12">角色与幽默感</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 bg-black/5 rounded-3xl border border-black/5 space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-4">角色设计：Popo</h4>
                <p className="text-[15px] opacity-80 leading-relaxed mb-4">
                  用可爱圆润的视觉风格包裹紧急的游戏主题，强化反差幽默。无脸设计，情绪通过肢体动作传递。
                </p>
                <div className="p-4 bg-black/5 rounded-lg border border-black/5 text-[14px] opacity-80">
                  <p><span className="font-bold opacity-80">外形特征：</span>圆润剪影、夸张的臀部（强调滑稽动作）、蓝色 oversized 短裤</p>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">环境细节</h4>
                <p className="text-[14px] opacity-80 leading-relaxed">
                  卫生纸藏在马桶水箱、微波炉、咖啡机内壁等意外位置；场景中贴有搞笑标签（如巴豆、西梅等"促排泄食物"）
                </p>
              </div>
            </div>

            <div className="p-8 bg-black/5 rounded-3xl border border-black/5 space-y-6">
              <h4 className="text-xl font-bold mb-4">角色动作示例</h4>
              <div className="grid grid-cols-7 gap-2 mb-6">
                {['角色-站立.png', '角色-蹲下.png', '角色-跳跃.png', '角色-攀爬.png', '角色-墙跳.png', '角色-爬墙.png', '角色-没憋住.png'].map((img, i) => (
                  <div key={i} className="aspect-square bg-white rounded-lg border border-black/5 p-1">
                    <img src={'../内容素材/image/' + img} className="w-full h-full object-contain" alt="" />
                  </div>
                ))}
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">放屁反馈动画</h4>
                <div className="grid grid-cols-3 gap-2">
                  {['放屁反馈-1.png', '放屁反馈-2.png', '放屁反馈-3.png'].map((img, i) => (
                    <div key={i} className="aspect-video bg-white rounded-lg border border-black/5 p-1">
                      <img src={'../内容素材/image/' + img} className="w-full h-full object-contain" alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="feedback">
          <h3 className="text-base font-cinzel font-bold tracking-[0.3em] opacity-80 uppercase mb-12">测试反馈与迭代</h3>

          {/* 问题调整 */}
          <div className="p-8 bg-black/5 rounded-3xl border border-black/5 mb-12 transition-all duration-500 hover:bg-black/8">
            <h4 className="text-xl font-bold mb-6 transition-all duration-300 hover:text-black/90">问题调整</h4>
            <div className="flex gap-4">
              <div className="flex-1 p-4 bg-white rounded-lg border border-black/5 transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-gray-50">
                <span className="text-2xl opacity-30 mb-2 transition-all duration-300 hover:opacity-50">1</span>
                <p className="text-[15px] font-medium transition-all duration-300 hover:text-black">隐藏陷阱过于隐蔽</p>
                <p className="text-[14px] opacity-80 transition-all duration-300 hover:opacity-100">增加马桶按钮微微发光的视觉暗示</p>
              </div>
              <div className="flex-1 p-4 bg-white rounded-lg border border-black/5 transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-gray-50">
                <span className="text-2xl opacity-30 mb-2 transition-all duration-300 hover:opacity-50">2</span>
                <p className="text-[15px] font-medium transition-all duration-300 hover:text-black">厨房面包机3秒窗口过短</p>
                <p className="text-[14px] opacity-80 transition-all duration-300 hover:opacity-100">延长至5秒，并增加音效提示</p>
              </div>
              <div className="flex-1 p-4 bg-white rounded-lg border border-black/5 transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-gray-50">
                <span className="text-2xl opacity-30 mb-2 transition-all duration-300 hover:opacity-50">3</span>
                <p className="text-[15px] font-medium transition-all duration-300 hover:text-black">花架瓢虫触发判定略大</p>
                <p className="text-[14px] opacity-80 transition-all duration-300 hover:opacity-100">缩小碰撞箱，增加玩家容错</p>
              </div>
            </div>
          </div>

          {/* 玩家评价 */}
          <div>
            <h4 className="text-xl font-bold mb-6">玩家评价</h4>
            <div className="reviews-carousel-wrapper">
              <div className="reviews-track-auto">
                {duplicatedReviews.map((review, index) => (
                  <div key={index} className="review-card">
                    <div className="review-avatar">{review.avatar}</div>
                    <div className="review-user">{review.username}</div>
                    <div className="review-rating">
                      {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
                    </div>
                    <div className="review-text">{review.text}</div>
                  </div>
                ))}
              </div>
              <div className="reviews-gradient-left"></div>
              <div className="reviews-gradient-right"></div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-base font-cinzel font-bold tracking-[0.3em] opacity-80 uppercase mb-12">总结与反思</h3>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="p-8 bg-black/5 rounded-3xl border border-black/5">
              <h4 className="text-xl font-bold mb-4">收获</h4>
              <div className="space-y-4 text-[15px] opacity-90 leading-relaxed">
                <p><span className="font-bold text-black">限制激发创意：</span>72小时和技术限制迫使我们在简化中寻找乐趣，最终形成"无死亡+时间压力"的核心机制。</p>
                <p><span className="font-bold text-black">主策划的全局视角：</span>从设计到落地，必须时刻关注实现难度和团队状态，及时调整方案。</p>
                <p><span className="font-bold text-black">幽默是加分项：</span>生活化题材与反差设计能快速建立玩家情感连接。</p>
              </div>
            </div>

            <div className="p-8 bg-black/5 rounded-3xl border border-black/5">
              <h4 className="text-xl font-bold mb-4">可改进之处</h4>
              <div className="space-y-3 text-[15px] opacity-90 leading-relaxed">
                <p>• 优化移动手感，加入惯性细微调整</p>
                <p>• 如果时间充裕，可增加角色成长元素（如收集一定数量纸巾解锁加速跑）</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
