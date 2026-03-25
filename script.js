    const { useState, useEffect, useRef } = React;

    // Data
    const DATA = {
      light: [
        {
          id: 'about',
          name: '关于我：背景与理念',
          icon: '',
          items: [
            {
              id: 'background',
              title: '教育背景',
              description: '清华大学 / 美术学院 / 设计专业。在顶尖艺术学府磨炼出的审美直觉与设计思维。',
              image: '../内容素材/image/首页-关于我/教育-清华图标.png',
              category: 'Background'
            },
            {
              id: 'philosophy',
              title: '设计理念',
              description: '追求系统逻辑与情感表达的绝对平衡。认为好的系统策划应当是隐形的，却能引导玩家在规则中发现自由。',
              image: 'https://picsum.photos/seed/philosophy/600/800',
              category: 'Philosophy'
            },
            {
              id: 'expertise',
              title: '兴趣爱好',
              description: '平时喜欢研究编织，拥有一个柜子的手工玩偶和帽子围巾；喜欢搞OC/同人，在小红书等社交媒体上运营自己的账号；喜欢研究网页前后端，做过自己的小画展网页；喜欢看辩论赛、最喜欢的辩手是马薇薇和詹青云；打垒球、品尝美食、和朋友一起玩游戏、阅读、追剧、摄影、跳舞……永远对新鲜事物充满好奇！',
              image: 'https://picsum.photos/seed/expertise/600/800',
              category: 'Hobbies'
            }
          ]
        },
        {
          id: 'skills',
          name: '技能：工具与语言',
          icon: '',
          items: [
            {
              id: 'pro-tools',
              title: '专业技能',
              description: 'Word, Excel; Unity; Figma, Miro, Xmind; Spine, Blender; PS, AE; Sora, 即梦',
              image: 'https://picsum.photos/seed/tools/600/800',
              category: 'Professional'
            },
            {
              id: 'coding-skills',
              title: '其他技能',
              description: 'Java, C#, Python',
              image: 'https://picsum.photos/seed/coding/600/800',
              category: 'Technical'
            }
          ]
        },
        {
          id: 'projects',
          name: '项目经验：策划与开发',
          icon: '',
          items: [
            {
              id: 'deconstruct-1',
              title: '王者荣耀社交拆解',
              description: '深入分析国民级手游的社交链路与用户留存逻辑。',
              image: 'https://picsum.photos/seed/hok/600/800',
              category: '策划拆解案',
              tags: ['系统策划', '社交系统']
            },
            {
              id: 'deconstruct-2',
              title: '火影忍者社交拆解',
              description: '针对动作竞技类手游的社交生态进行解构。',
              image: 'https://picsum.photos/seed/naruto/600/800',
              category: '策划拆解案',
              tags: ['系统策划', '社交系统']
            },
            {
              id: 'jam-1',
              title: 'Hurry PoPo',
              description: '现实中谁不想急头白脸的把家里角落的纸巾都翻一遍。',
              image: '../内容素材/image/hurry popo-封面图.png',
              category: '游戏比赛 (LD58)',
              tags: ['平台跳跃', '2D', 'PoPo'],
              role: '游戏主策划'
            },
            {
              id: 'jam-2',
              title: '污托邦 (Wtopia)',
              description: '返乡大学生探寻亲人患病真相的过程中，逐步揭开小镇水污染的真正原因。',
              image: '../内容素材/image/比赛项目_污托邦/开始界面.png',
              category: '游戏比赛 (未来灾害大赛)',
              tags: ['探索', '解谜', '2D'],
              role: '游戏主策划 & UI 设计'
            },
            {
              id: 'startup',
              title: 'AI陪伴机器人',
              description: '探索 AI 技术在情感陪伴领域的应用边界。',
              image: 'https://picsum.photos/seed/ai/600/800',
              category: '其他项目 (创业)',
              tags: ['AI', '创业']
            },
            {
              id: 'practice',
              title: '种田游戏 (Leuce Island)',
              description: '实践模拟经营类游戏的系统循环与数值设计。',
              image: 'https://picsum.photos/seed/leuce/600/800',
              category: '其他项目 (个人练习)',
              tags: ['模拟经营', '数值设计']
            }
          ]
        },
        {
          id: 'gaming',
          name: '游戏经历：深度体验',
          icon: '',
          items: [
            {
              id: 'mobile-games',
              title: '手游',
              description: '恋与深空（403天、氪金1500+）；代号鸢（1000h+、氪金1000+）；重返未来：1999（100h+、鬃毛邮报1600w伤害）',
              image: 'https://picsum.photos/seed/mobile/600/800',
              category: 'Mobile'
            },
            {
              id: 'pc-games',
              title: '端游',
              description: '泰拉瑞亚（240h）；朝圣者、GOROGOA、谢天谢地你在这、storyteller、绣湖系列、Smaorost2；星露谷（282h、全成就）、桃园深处（氪金1000+）、药剂工艺、蜡笔小新：煤炭镇的小白；空洞骑士（全结局）；丝之歌（全结局）；苏丹的游戏；饥荒、森林；双人成行、双影奇境、Pico Park、超级鸡马、鹅鸭杀、peak、胡闹厨房',
              image: 'https://picsum.photos/seed/pc/600/800',
              category: 'PC'
            }
          ]
        },
        {
          id: 'contact',
          name: '联系方式：建立连接',
          icon: '',
          items: [
            {
              id: 'main-contact',
              title: '主要联系方式',
              description: '电话：15907401207 | 邮箱：1528406657@qq.com',
              image: 'https://picsum.photos/seed/contact/600/800',
              category: 'Direct'
            },
            {
              id: 'social-media',
              title: '社交账号',
              description: '小红书、微信',
              image: 'https://picsum.photos/seed/social/600/800',
              category: 'Social'
            }
          ]
        }
      ],
      dark: [
        {
          id: 'oc-world',
          name: 'OC / 世界观',
          icon: '',
          items: [
            { id: 'vessel', title: '容器原型', description: '关于"我"在不同维度的投射与化身。', image: 'https://picsum.photos/seed/wd1/600/800', category: 'Vessel' },
            { id: 'lore', title: '世界观残卷', description: '碎裂的逻辑，拼凑出一个非欧几里得的梦境。', image: 'https://picsum.photos/seed/wd2/600/800', category: 'Fragment' }
          ]
        },
        {
          id: 'growth-thoughts',
          name: '成长记录 / 思考',
          icon: '',
          items: [
            { id: 'echoes', title: '昨日回响', description: '成长的疼痛与喜悦，被封存在泛黄的瓶子里。', image: 'https://picsum.photos/seed/wd3/600/800', category: 'Echo' },
            { id: 'monologue', title: '深渊独白', description: '在无声的深夜，对存在意义的反复推敲。', image: 'https://picsum.photos/seed/wd4/600/800', category: 'Log' }
          ]
        },
        {
          id: 'creations',
          name: '约稿与私人创作',
          icon: '',
          items: [
            { id: 'commissions', title: '契约之作', description: '为他人绘制的灵魂切片，严谨且附带代价。', image: 'https://picsum.photos/seed/wd5/600/800', category: 'Contract' },
            { id: 'private-art', title: '禁忌秘艺', description: '不被定义的、仅属于个人的危险创作。', image: 'https://picsum.photos/seed/wd6/600/800', category: 'Artifact' }
          ]
        }
      ]
    };

    // Shelf Component
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

    // WitchBot Component
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

    // Naruto Deconstruct Module
    const NarutoDeconstructModule = ({ item }) => {
      return (
        <div className="w-full bg-white text-black font-inter">
          <div className="max-w-7xl mx-auto px-10 space-y-40 pb-40">
            <section id="hero" className="pt-20">
              <div className="relative aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl mb-12">
                <img src={item.image} className="w-full h-full object-cover" />
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
                  <p className="text-lg opacity-80 max-w-2xl">{item.description}</p>
                </div>
              </div>
            </section>

            <section id="intro">
              <h3 className="text-lg font-cinzel font-bold tracking-[0.3em] opacity-80 uppercase mb-16">项目概述</h3>
              <div className="space-y-8 text-lg leading-relaxed opacity-80">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div>
                    <span className="font-bold text-black/80">竞品：</span>
                    <span>航海王</span>
                  </div>
                  <div>
                    <span className="font-bold text-black/80">认知：</span>
                    <span>熟人社交为主的轻社交强竞技格斗游戏，依托腾讯的微信/QQ平台进行社交互动</span>
                  </div>
                </div>
                <p className="bg-black/5 p-8 rounded-2xl italic">
                  拆解目的：通过拆解《火影忍者》社交模块的核心功能，提炼其驱动玩家互动和留存的设计逻辑，并探讨这些逻辑如何适用于其他类型游戏的社交系统设计，形成可迁移的社交机制设计思路
                </p>
              </div>
            </section>

            <section id="organization">
              <h3 className="text-lg font-cinzel font-bold tracking-[0.3em] opacity-80 uppercase mb-16">一、局外社交系统分析</h3>

              <h4 className="text-2xl font-bold mb-8">1. 组织系统（核心）</h4>
              <p className="text-base opacity-60 mb-6">游戏内最高形态的集体社交平台，通过共同目标、资源绑定和层级管理构建强关系链 | 要求：通关副本2-10后开启</p>

              <div className="mb-16">
                <h5 className="text-xl font-bold mb-6">核心问题</h5>
                <div className="space-y-6 mb-12">
                  <div className="p-8 bg-black/5 rounded-2xl">
                    <p className="text-lg leading-relaxed opacity-80 mb-4"><span className="font-bold text-black">•</span> 玩家之间多为临时组队或短暂交手，难以形成稳定的社交关系</p>
                    <p className="text-lg leading-relaxed opacity-80 mb-4"><span className="font-bold text-black">•</span> 火影IP最核心的情感主题——"羁绊"，在游戏内缺少具象化的承载系统</p>
                    <p className="text-lg leading-relaxed opacity-80"><span className="font-bold text-black">•</span> 中重度玩家在个人成长触顶后，需要新的目标驱动，而集体荣誉和互助成长是天然的延伸</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed opacity-80">组织系统的核心任务是：在游戏内构建一个有温度、有目标、有归属的集体，将个人成长与集体贡献深度绑定，从而提升用户长期留存和情感黏性。</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div className="p-8 bg-black/5 rounded-2xl border border-black/5">
                  <h5 className="text-xl font-bold mb-6">设计目的</h5>
                  <ul className="space-y-4 text-lg opacity-80">
                    <li>• 构建集体归属空间，承载"羁绊"主题和解决归属感问题，提升长期留存和用户粘性</li>
                    <li>• 建立互惠互助生态，强化成员间的连接，促进日活和互动频次</li>
                    <li>• 将资源获取和贡献度绑定，推动长线留存和付费转化</li>
                    <li>• 提供高效的管理工具，降低管理负担</li>
                  </ul>
                </div>
                <div className="p-8 bg-black/5 rounded-2xl border border-black/5">
                  <h5 className="text-xl font-bold mb-6">设计思路</h5>
                  <div className="space-y-6">
                    <div>
                      <p className="font-bold text-base mb-3">1. 通过信息展示和记录，搭建集体归属空间</p>
                      <ul className="space-y-2 text-base opacity-70 ml-4">
                        <li><span className="font-bold">组织信息：</span>展示组织名称、首领、人数、战力、排名、奖杯、在线人数等</li>
                        <li><span className="font-bold">成员列表：</span>累计功勋、上次登录时间、加入时间</li>
                        <li><span className="font-bold">组织日志：</span>自动记录成员加入/退出、职位升降、组织升级等</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-base mb-3">2. 完成日常任务，建立互惠互助生态</p>
                      <ul className="space-y-2 text-base opacity-70 ml-4">
                        <li><span className="font-bold">祈愿系统：</span>成员可消耗绘马许愿，其他成员可捐赠碎片</li>
                        <li><span className="font-bold">师生修炼：</span>新手玩家可寻求老玩家帮助，加速成长</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-base mb-3">3. 将资源获取和贡献度绑定，利用利益驱动合作</p>
                      <ul className="space-y-2 text-base opacity-70 ml-4">
                        <li><span className="font-bold">祈福系统：</span>每日签到，累计签到人数达成目标后全员解锁奖励</li>
                        <li><span className="font-bold">组织商店：</span>消耗组织功勋兑换忍者碎片、勾玉、忍玉等核心资源</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-base mb-3">4. 提供高效管理工具，降低管理成本维持运营</p>
                      <ul className="space-y-2 text-base opacity-70 ml-4">
                        <li><span className="font-bold">透明化管理：</span>权限分明的职位体系、设定门槛、自动记录成员变动</li>
                        <li><span className="font-bold">精英参与：</span>高层成员可分担管理，降低首领压力</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="friends">
              <h4 className="text-2xl font-bold mb-8">2. 好友系统</h4>
              <p className="text-base opacity-60 mb-6">系统定位：解决"现实关系导入与轻量互动"</p>

              <div className="mb-16">
                <h5 className="text-xl font-bold mb-6">核心问题</h5>
                <div className="p-8 bg-black/5 rounded-2xl">
                  <p className="text-lg leading-relaxed opacity-80 mb-4">游戏内的大多数社交关系属于临时关系，缺乏将弱关系沉淀为稳定关系的机制。玩家的上线动力主要依赖玩法本身，一旦玩法疲劳，缺乏社交关系维系，长期留存压力较大。</p>
                  <p className="text-lg leading-relaxed opacity-80 mt-6">系统的核心问题不再是"如何培养陌生人社交"，而是：如何将现成的现实强关系高效导入游戏，并转化为持续的游戏动力。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                <div>
                  <p className="font-bold text-base mb-4">设计目的</p>
                  <ul className="space-y-4 text-lg opacity-70">
                    <li>• 导入现实社交关系，通过熟人竞争提驱动日活和付费转化</li>
                    <li>• 构建低成本高频次的轻量化日常互动，避免社交负担</li>
                    <li>• 降低新手期求助门槛，保障社交环境质量</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-base mb-4">设计思路</p>
                  <ul className="space-y-4 text-lg opacity-70">
                    <li><span className="font-bold">微信/QQ好友：</span>同服好友自动添加，列表按等级和战力排序，支持私聊、切磋</li>
                    <li><span className="font-bold">好友邀请：</span>阶段性成就奖励、展示同玩好友数，低成本裂变拉新</li>
                    <li><span className="font-bold">一键赠送/领取：</span>习惯性完成一键操作，形成稳定每日登录习惯</li>
                    <li><span className="font-bold">好友切磋：</span>主动邀请好友1V1对战，延长单次在线时长</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-base mb-4">社交环境维护</p>
                  <ul className="space-y-4 text-lg opacity-70">
                    <li><span className="font-bold">伊鲁卡：</span>拟人化客服助手，降低求助门槛</li>
                    <li><span className="font-bold">私聊功能：</span>支持文字、语音、表情包，资料透明化</li>
                    <li><span className="font-bold">好友管理：</span>通知、黑名单与加好友功能，保障社交环境质量</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="chat">
              <h4 className="text-2xl font-bold mb-8">3. 聊天系统</h4>
              <p className="text-base opacity-60 mb-6">系统定位：构建游戏内的信息高速公路，承载公共表达、集体协同与系统通知</p>

              <div className="mb-16">
                <h5 className="text-xl font-bold mb-6">核心问题</h5>
                <div className="p-8 bg-black/5 rounded-2xl">
                  <p className="text-lg leading-relaxed opacity-80 mb-4">在缺乏统一信息枢纽的游戏中，玩家处于"信息孤岛"状态：公共表达无出口、集体沟通无阵地、关键信息无触达。</p>
                  <p className="text-lg leading-relaxed opacity-80 mt-6">聊天系统需要满足：公共性、圈层隔离、权威性、即时性。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                <div className="p-8 bg-black/5 rounded-2xl border border-black/5">
                  <p className="font-bold text-base mb-4">世界频道</p>
                  <p className="text-base opacity-70 mb-4">设计目的：提供公共表达广场，满足玩家"被看见"的心理需求</p>
                  <ul className="space-y-2 text-sm opacity-60">
                    <li>• 公屏展示所有玩家实时发言</li>
                    <li>• 点击昵称可发起私聊、加好友、查看资料</li>
                    <li>• 支持喊话符（付费道具）实现消息置顶或扩音</li>
                  </ul>
                </div>
                <div className="p-8 bg-black/5 rounded-2xl border border-black/5">
                  <p className="font-bold text-base mb-4">组织频道</p>
                  <p className="text-base opacity-70 mb-4">设计目的：构建组织协同工具，降低集体活动的沟通成本</p>
                  <ul className="space-y-2 text-sm opacity-60">
                    <li>• 仅组织成员可见</li>
                    <li>• 支持文字、语音消息</li>
                    <li>• 组织公告置顶展示，系统推送成员加入/退出通知</li>
                  </ul>
                </div>
                <div className="p-8 bg-black/5 rounded-2xl border border-black/5">
                  <p className="font-bold text-base mb-4">系统播报</p>
                  <p className="text-base opacity-70 mb-4">设计目的：建立权威信息通道，确保核心内容有效触达玩家</p>
                  <ul className="space-y-2 text-sm opacity-60">
                    <li>• 与其他频道分离展示，避免被刷屏淹没</li>
                    <li>• 推送版本更新、活动开启等官方通知</li>
                    <li>• 展示决斗场段位赛报（高段位玩家对决结果）</li>
                    <li>• 自动播报高级招募结果（稀有忍者获取）</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="ranking">
              <h4 className="text-2xl font-bold mb-8">4. 排行榜</h4>
              <p className="text-base opacity-60 mb-6">系统定位：构建游戏内的价值体系，让每个玩家都能找到自己的定位</p>

              <div className="mb-16">
                <h5 className="text-xl font-bold mb-6">核心问题</h5>
                <div className="p-8 bg-black/5 rounded-2xl">
                  <p className="text-lg leading-relaxed opacity-80 mb-4">在缺乏横向比较机制的单机体验中，玩家处于"成长盲盒"状态：不知道自己有多强、不知道谁是最强、不知道往哪里变强。</p>
                  <p className="text-lg leading-relaxed opacity-80 mt-6">排行榜需要满足：公正性、全面性、激励性、学习性。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div className="p-8 bg-black/5 rounded-2xl border border-black/5">
                  <p className="font-bold text-base mb-4">构建多维度评价体系</p>
                  <p className="text-base opacity-70 mb-4">设计特征：战力、竞技、收集、特殊等多维角度</p>
                  <p className="text-base opacity-60 mt-4">价值：各维度排名共同驱动DAU、付费转化和长线留存</p>
                </div>
                <div className="p-8 bg-black/5 rounded-2xl border border-black/5">
                  <p className="font-bold text-base mb-4">提供荣誉展示空间</p>
                  <ul className="space-y-4 text-base opacity-70">
                    <li>• <span className="font-bold">分层级排名：</span>本服→战区→全区→国服</li>
                    <li>• <span className="font-bold">荣誉资产：</span>专属称号、头像框、点赞功能</li>
                    <li>• <span className="font-bold">引导成长：</span>查看强者配置和成长路径</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="business-card">
              <h4 className="text-2xl font-bold mb-8">5. 名片（交互）</h4>
              <p className="text-base opacity-60 mb-6">设计目的：提供便捷的社交操作入口，降低用户认知成本</p>

              <div className="p-8 bg-black/5 rounded-2xl border border-black/5">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-black/10 rounded-full flex items-center justify-center mb-3">
                      <span className="text-3xl">📷</span>
                    </div>
                    <p className="text-sm opacity-60">头像</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-black/10 rounded-full flex items-center justify-center mb-3">
                      <span className="text-3xl">🏷</span>
                    </div>
                    <p className="text-sm opacity-60">名称</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-black/10 rounded-full flex items-center justify-center mb-3">
                      <span className="text-3xl">⚔</span>
                    </div>
                    <p className="text-sm opacity-60">战力</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-black/10 rounded-full flex items-center justify-center mb-3">
                      <span className="text-3xl">👥</span>
                    </div>
                    <p className="text-sm opacity-60">组织</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-black/10 rounded-full flex items-center justify-center mb-3">
                      <span className="text-3xl">🏆</span>
                    </div>
                    <p className="text-sm opacity-60">段位</p>
                  </div>
                </div>
                <p className="text-base opacity-70 mt-6">可执行操作：查看详细信息、发起私聊、加为好友、发起切磋、举报</p>
              </div>
            </section>

            <section id="in-game-social">
              <h3 className="text-lg font-cinzel font-bold tracking-[0.3em] opacity-80 uppercase mb-16">二、局内社交点分析</h3>
              <p className="text-base opacity-60 mb-8">局内社交的核心任务：在不干扰核心战斗体验的前提下，进行轻量的社交，将每一次对战转化为情感连接的机会。</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="p-8 bg-black/5 rounded-2xl border border-black/5">
                  <h5 className="text-xl font-bold mb-6">对抗类</h5>
                  <p className="text-base opacity-70 mb-4">设计目的：提供轻量情绪表达出口，缓解对局压力</p>
                  <p className="text-base opacity-70"><span className="font-bold">局内表情包：</span>对战节奏快时间短，表情包可以满足快捷、减负的需求</p>
                </div>
                <div className="p-8 bg-black/5 rounded-2xl border border-black/5">
                  <h5 className="text-xl font-bold mb-6">协作</h5>
                  <p className="text-base opacity-70 mb-4">设计目的：提供即时的沟通工具，降低配合成本提升通关成功率</p>
                  <ul className="space-y-4 text-base opacity-70">
                    <li>• <span className="font-bold">实时语音：</span>秘境探险等玩法支持实时语音，方便战术沟通</li>
                    <li>• <span className="font-bold">查看名片：</span>结束后可点击查看队友名片，进行加好友等操作</li>
                  </ul>
                </div>
                <div className="p-8 bg-black/5 rounded-2xl border border-black/5">
                  <h5 className="text-xl font-bold mb-6">特殊</h5>
                  <p className="text-base opacity-70 mb-4">设计目的：搭建观战和回放系统，提供学习渠道激发竞争动力</p>
                  <ul className="space-y-4 text-base opacity-70">
                    <li>• <span className="font-bold">观战系统：</span>可观看在线好友实时对战，精彩战报可观看他人对战录像</li>
                    <li>• <span className="font-bold">本地回放：</span>战斗结束后有临时的本地回放，可以下载随时观看复盘</li>
                    <li>• <span className="font-bold">最近战报：</span>记录最近对战历史，提供异常对局记录，嵌入举报入口</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="community">
              <h3 className="text-lg font-cinzel font-bold tracking-[0.3em] opacity-80 uppercase mb-16">三、社区生态分析</h3>
              <p className="text-base opacity-60 mb-8">社区生态由三部分构成：游戏内官方社区、游戏外官方社区（小程序/公众号）、第三方社群（贴吧、B站、QQ群等）</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h4 className="text-2xl font-bold mb-6">官方社区 - 游戏内</h4>
                  <p className="text-base opacity-70 mb-6">嵌入在游戏内的玩家互动平台，提供一站式资讯获取、数据查询、福利领取和轻量社交的场所。</p>
                  <div className="space-y-4">
                    <div className="p-6 bg-black/5 rounded-xl border border-black/5">
                      <p className="font-bold text-base mb-3">聚合资讯</p>
                      <p className="text-base opacity-70">整合关注、推荐、忍者、攻略、资讯、赛事六大板块</p>
                    </div>
                    <div className="p-6 bg-black/5 rounded-xl border border-black/5">
                      <p className="font-bold text-base mb-3">个人数据</p>
                      <p className="text-base opacity-70">展示头像、等级、战力、段位等核心信息；展示最近对局、赛季回顾、战力明细</p>
                    </div>
                    <div className="p-6 bg-black/5 rounded-xl border border-black/5">
                      <p className="font-bold text-base mb-3">轻量论坛</p>
                      <p className="text-base opacity-70">村口首页、策划说、热门话题模块；支持点赞、评论</p>
                    </div>
                    <div className="p-6 bg-black/5 rounded-xl border border-black/5">
                      <p className="font-bold text-base mb-3">福利体系</p>
                      <p className="text-base opacity-70">福利站、金币助手、福袋金库；整合日常任务看板</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-6">官方社区 - 游戏外</h4>
                  <p className="text-base opacity-70 mb-6">由官方运营、独立于游戏客户端的轻量平台，主要包括微信小程序、官方公众号、官方微博、抖音官方号等。</p>
                  <div className="p-8 bg-black/5 rounded-2xl border border-black/5">
                    <p className="font-bold text-base mb-4">提供便捷的信息入口</p>
                    <p className="text-base opacity-70">方便玩家在碎片时间获取游戏资讯</p>
                    <p className="text-base opacity-70 mt-4">小程序作为游戏外触点，签到福利刺激每日打开，积分兑换引导回流</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="conclusion">
              <h3 className="text-lg font-cinzel font-bold tracking-[0.3em] opacity-80 uppercase mb-16">四、结论</h3>
              <div className="max-w-4xl mx-auto space-y-10">
                <div className="p-8 bg-black/5 rounded-2xl border border-black/5">
                  <h4 className="text-2xl font-bold mb-8">社交系统的五层结构</h4>
                  <div className="space-y-6">
                    <div>
                      <p className="font-bold text-lg mb-4">1. 战略层</p>
                      <p className="text-base opacity-70">核心定位：以熟人社交为主的轻社交强竞技格斗游戏，社交设计服务于核心玩法，不增加玩家负担。</p>
                      <div className="mt-4 pl-4 border-l-2 border-black/20">
                        <p className="text-base opacity-70 mb-2"><span className="font-bold">局外：</span>构建集体关系网络，绑定利益与荣誉</p>
                        <p className="text-base opacity-70 mb-2"><span className="font-bold">局内：</span>提供轻量情绪表达与战术协同，不干扰战斗</p>
                        <p className="text-base opacity-70"><span className="font-bold">社区：</span>打造信息与内容生态，反哺游戏活跃</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-4">2. 范围层</p>
                      <p className="text-base opacity-70">局外社交系统：通过组织、好友、排行榜、聊天等功能，覆盖从集体归属到个体沟通的全场景。</p>
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-4">3. 结构层</p>
                      <div className="mt-4 p-6 bg-white rounded-xl border border-black/5">
                        <p className="text-base opacity-70 mb-3">现实关系（微信/QQ）→ 好友系统导入 → 组织系统沉淀</p>
                        <p className="text-base opacity-70 mb-3">社区内容反哺 ← 精彩战报分享 ← 局内对战沉淀 ← 组织活动参与</p>
                        <p className="text-base opacity-70 mb-3">第三方社群发酵 → 论坛反馈 → 官方优化 → 版本更新</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-4">4. 交互层</p>
                      <ul className="space-y-3 text-base opacity-70">
                        <li>• <span className="font-bold">局外：</span>轻量化、批量操作；组织管理提供透明化数据和权限控制</li>
                        <li>• <span className="font-bold">局内：</span>不干扰战斗系统；战中预设表情包、快捷信号；战后差异化设计</li>
                        <li>• <span className="font-bold">社区：</span>降低参与门槛；首页资讯流、关注订阅、话题聚合、福利一键领取</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-4">5. 表现层</p>
                      <p className="text-base opacity-70">IP塑造：深度融合IP内容，将火影的元素融入交互界面，设置了以角色为原型的伊鲁卡助手等。</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      );
    };

    // HurryPoPo Module
    const HurryPoPoModule = ({ item }) => {
      const [currentLevel, setCurrentLevel] = useState(0);
      const [isAnimating, setIsAnimating] = useState(false);

      const handleLevelChange = (newLevel) => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 500);
        setCurrentLevel(newLevel);
      };

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

      // Reviews Carousel Drag Support
      useEffect(() => {
        const reviewsTrack = document.getElementById('reviews-track');
        if (!reviewsTrack) return;

        let isDown = false;
        let startX;
        let scrollLeft;

        const handleMouseDown = (e) => {
          isDown = true;
          reviewsTrack.style.cursor = 'grabbing';
          startX = e.pageX - reviewsTrack.offsetLeft;
          scrollLeft = reviewsTrack.scrollLeft;
        };

        const handleMouseLeave = () => {
          isDown = false;
          reviewsTrack.style.cursor = 'grab';
        };

        const handleMouseUp = () => {
          isDown = false;
          reviewsTrack.style.cursor = 'grab';
        };

        const handleMouseMove = (e) => {
          if (!isDown) return;
          e.preventDefault();
          const x = e.pageX - reviewsTrack.offsetLeft;
          const walk = (x - startX) * 1.5;
          reviewsTrack.scrollLeft = scrollLeft - walk;
        };

        reviewsTrack.addEventListener('mousedown', handleMouseDown);
        reviewsTrack.addEventListener('mouseleave', handleMouseLeave);
        reviewsTrack.addEventListener('mouseup', handleMouseUp);
        reviewsTrack.addEventListener('mousemove', handleMouseMove);

        return () => {
          reviewsTrack.removeEventListener('mousedown', handleMouseDown);
          reviewsTrack.removeEventListener('mouseleave', handleMouseLeave);
          reviewsTrack.removeEventListener('mouseup', handleMouseUp);
          reviewsTrack.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);

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
                <div className="reviews-track" id="reviews-track">
                  {[
                    { avatar: '😊', username: 'Gamer123', rating: 5, text: '放屁动画太搞笑了！玩了两个小时一直在笑，关卡设计很有趣，难度递进很合理。' },
                    { avatar: '🎮', username: 'PixelMaster', rating: 5, text: '无死亡机制很赞，不用从头开始让我愿意反复尝试每个关卡的走法。' },
                    { avatar: '🌟', username: 'IndieFan', rating: 4, text: '美术风格很可爱，配乐也很舒服。唯一的遗憾是稍微短了一点，但作为一个72小时的作品已经很棒了！' },
                    { avatar: '🎲', username: 'SpeedRunner', rating: 5, text: '厨房那关的面包机机关设计很巧妙，第一次看到面包弹出的时候惊呆了！' },
                    { avatar: '😄', username: 'CasualPlayer', rating: 4, text: '适合休闲玩家，操作简单但有挑战性。特别是找纸巾的位置有时候很意外，很有创意。' },
                    { avatar: '🎯', username: 'PlatformLover', rating: 5, text: '作为平台跳跃游戏，手感做得很到位，二段跳和墙跳的手感都很棒！' },
                    { avatar: '🎪', username: 'GameDev', rating: 5, text: '作为一个开发者，很佩服你们在72小时内能完成这样的作品。关卡设计和美术都很专业！' },
                    { avatar: '😃', username: 'RetroFan', rating: 4, text: '让我想起了小时候玩的平台游戏，但又有现代的幽默元素。期待你们下一个作品！' }
                  ].map((review, index) => (
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

    // Wtopia Module
    const WtopiaModule = ({ item }) => {
      return (
        <div className="w-full bg-white text-black font-inter">
          <div className="max-w-7xl mx-auto px-10 space-y-40 pb-40">
            <section id="hero" className="pt-20">
              <div className="relative aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl mb-12 group">
                <img src="../内容素材/image/比赛项目_污托邦/开始界面.png" className="w-full h-full object-cover" alt="污托邦开始界面" />
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-black/5 rounded-3xl border border-black/5">
                  <h4 className="text-xl font-bold mb-4">探索与互动</h4>
                  <img src="../内容素材/image/比赛项目_污托邦/玩法_探索.png" className="w-full rounded-lg mb-4" alt="探索玩法" />
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
                  <img src="../内容素材/image/比赛项目_污托邦/玩法_搜集.png" className="w-full rounded-lg mb-4" alt="搜集玩法" />
                  <p className="text-[15px] opacity-80 leading-relaxed mb-4">
                    物品组合、对话选择、环境观察。通过组合扳手和密码本打开工厂门锁，或调配试剂检测水样。
                  </p>
                  <div className="text-[14px] opacity-70 space-y-2">
                    <p>• 物品组合（扳手+密码本）</p>
                    <p>• 对话选择影响线索获取</p>
                    <p>• 环境观察发现隐藏信息</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-8 bg-black/5 rounded-3xl border border-black/5">
                <h4 className="text-xl font-bold mb-6">小游戏玩法</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {[
                    { name: '布料上浆', desc: '光圈瞄准与按键操作' },
                    { name: '毛线收集', desc: '篮子接指定颜色毛线' },
                    { name: '拼图印花', desc: '滑动图像块复原图例', image: '../内容素材/image/比赛项目_污托邦/小游戏_印花.png' },
                    { name: '指纹解锁', desc: 'WASD切换样本', image: '../内容素材/image/比赛项目_污托邦/小游戏_指纹解锁.png' },
                    { name: '2048变体', desc: '合并疾病图标消除', image: '../内容素材/image/比赛项目_污托邦/小游戏_2048_变体.png' }
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
                {item.id === 'deconstruct-2' ? (
                  // Naruto Deconstruct specific navigation
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
                  // HurryPoPo navigation
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
                  // Wtopia navigation
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
                  // Default navigation
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

    // Main App Component
    const App = () => {
      const [theme, setTheme] = useState('light');
      const [glitch, setGlitch] = useState(false);
      const [scrollProgress, setScrollProgress] = useState(0);
      const [showBuff, setShowBuff] = useState(null);
      const [selectedItem, setSelectedItem] = useState(null);
      const [isBotOpen, setIsBotOpen] = useState(false);

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
              <nav className="hidden lg:flex gap-10 font-cinzel text-[9px] tracking-[0.4em] font-bold transition-opacity">
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

          <div className="absolute left-0 top-0 w-screen h-screen bg-gray-100">
            <div className="relative w-full h-full">

              <div className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10">
                <img src="../内容素材/image/首页-首图/中心-苹果.png" className="w-40 h-40 drop-shadow-lg transition-all duration-300 hover:scale-110 hover:grayscale-0" />
                <img src="../内容素材/image/首页-首图/鸟-中心.png" className="w-36 h-36 drop-shadow-lg transition-all duration-300 hover:scale-110 hover:grayscale-0 absolute -mt-24" />
              </div>

              <div className="absolute top-1/6 left-[5%] w-40 h-40 drop-shadow-lg transition-all duration-300 hover:scale-110 hover:grayscale-0 grayscale">
                <img src="../内容素材/image/首页-首图/桃花.png" className="w-full h-full object-contain" />
              </div>

              <div className="absolute top-[40%] left-[3%] w-32 h-32 drop-shadow-lg transition-all duration-300 hover:scale-110 hover:grayscale-0 grayscale">
                <img src="../内容素材/image/首页-首图/水晶球.png" className="w-full h-full object-contain" />
              </div>

              <div className="absolute top-[15%] right-[8%] w-32 h-32 drop-shadow-lg transition-all duration-300 hover:scale-110 hover:grayscale-0 grayscale">
                <img src="../内容素材/image/首页-首图/牛角.png" className="w-full h-full object-contain" />
              </div>

              <div className="absolute bottom-[15%] right-[5%] w-40 h-40 drop-shadow-lg transition-all duration-300 hover:scale-110 hover:grayscale-0 grayscale">
                <img src="../内容素材/image/首页-首图/蝴蝶.png" className="w-full h-full object-contain" />
              </div>

              <div className="absolute bottom-[10%] left-[8%] w-32 h-32 drop-shadow-lg transition-all duration-300 hover:scale-110 hover:grayscale-0 grayscale">
                <img src="../内容素材/image/首页-首图/桃花.png" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          <main className="max-w-6xl mx-auto px-6 pt-40 pb-48">

            <section id="home" className="mb-48 relative min-h-[80vh] flex items-center justify-center">
              <div className="max-w-4xl relative z-10">
                <h2 className={"text-5xl md:text-[8rem] font-chinese font-bold leading-[0.75] mb-12 tracking-tighter transition-all animate-fade-in-up " +
                  (theme === 'dark' ? 'text-white blur-[0.5px] drop-shadow-[0_0_20px_purple]' : 'text-black opacity-90')}>
                  {theme === 'light' ? 'Yinguo' : 'Yinguo'}
                  <br />
                  <span className={"text-allura-xl transition-all duration-1000 " + (theme === 'light' ? 'opacity-10' : 'opacity-100 text-purple-500 italic text-2xl md:text-[3.2rem]')}>
                    {theme === 'light' ? 'System Design' : 'Game Architect'}
                  </span>
                </h2>
                <div className={"w-24 h-[2px] mb-16 animate-width-expand " + (theme === 'dark' ? 'bg-purple-500 shadow-[0_0_10px_purple]' : 'bg-black opacity-20')}></div>
                <p className={"text-xl leading-relaxed font-serif max-w-xl transition-all opacity-0 animate-fade-in-up animation-delay-800 " + (theme === 'dark' ? 'text-purple-200/40' : 'text-black/60')}>
                  {theme === 'light'
                    ? "清华美院背景，系统策划。执着于在精密逻辑与人文美学之间寻找那一抹呼吸感。欢迎来到我的个人陈列馆。"
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
                    section.id === 'projects' ? (
                      <div className="space-y-12">
                        <div className="flex flex-col mb-16">
                          <span className="text-[13px] font-cinzel tracking-[0.3em] opacity-30 block mb-2">SECTION_PROJECTS</span>
                          <h2 className="text-3xl font-cinzel font-bold">{section.name}</h2>
                          <div className="mt-4 h-px w-12 bg-black opacity-20" />
                        </div>

                        <div className="space-y-10 scroll-reveal-staggered">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {section.items.filter(item => ['startup', 'jam-2', 'jam-1', 'deconstruct-2'].includes(item.id)).map((item, index) => (
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
                              {section.items.filter(item => !['startup', 'jam-2', 'jam-1', 'deconstruct-2'].includes(item.id)).map((item) => (
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
                                  <p className="text-sm leading-relaxed opacity-60 whitespace-pre-line">{item.description}</p>
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

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
