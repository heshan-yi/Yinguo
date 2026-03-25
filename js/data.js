// Data - 纯内容数据
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
          image: 'assets/home/图标-设计理念.png',
          category: 'Philosophy'
        },
        {
          id: 'expertise',
          title: '兴趣爱好',
          description: '平时喜欢研究编织，拥有一个柜子的手工玩偶和帽子围巾；喜欢搞OC/同人，在小红书等社交媒体上运营自己的账号；喜欢研究网页前后端，做过自己的小画展网页；喜欢看辩论赛、最喜欢的辩手是马薇薇和詹青云；打垒球、品尝美食、和朋友一起玩游戏、阅读、追剧、摄影、跳舞……永远对新鲜事物充满好奇！',
          image: 'assets/home/图标-兴趣爱好.png',
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
          image: 'assets/home/图标-专业技能.png',
          category: 'Professional'
        },
        {
          id: 'coding-skills',
          title: '其他技能',
          description: 'Java, C#, Python',
          image: 'assets/home/图标-其他技能.png',
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
          title: '阴阳师部分系统模块拆解',
          description: '针对一些典型的系统进行详细的局部拆解。',
          image: 'assets/阴阳师模块拆解/首图.png',
          category: '策划拆解案',
          tags: ['系统策划', '模块拆解']
        },
        {
          id: 'deconstruct-2',
          title: '火影忍者社交拆解',
          description: '针对动作竞技类手游的社交生态进行解构。',
          image: 'assets/火影忍者社交拆解/首图.png',
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
          image: 'assets/home/图标-手游.png',
          category: 'Mobile'
        },
        {
          id: 'pc-games',
          title: '端游',
          description: '泰拉瑞亚（240h）；朝圣者、GOROGOA、谢天谢地你在这、storyteller、绣湖系列、Smaorost2；星露谷（282h、全成就）、桃园深处（氪金1000+）、药剂工艺、蜡笔小新：煤炭镇的小白；空洞骑士（全结局）；丝之歌（全结局）；苏丹的游戏；饥荒、森林；双人成行、双影奇境、Pico Park、超级鸡马、鹅鸭杀、peak、胡闹厨房',
          image: 'assets/home/图标-端游.png',
          category: 'PC'
        }
      ]
    },
    {
      id: 'contact',
      name: '联系方式',
      icon: '',
      phone: '15907401207',
      email: '1528406657@qq.com',
      socials: [
        {
          name: '小红书',
          icon: 'assets/home/图标-小红书.png',
          qrcode: 'assets/home/小红书二维码.jpg',
          url: 'https://xhslink.com/m/5hpG9ufNx6P'
        },
        {
          name: '微信',
          icon: 'assets/home/图标-微信.png',
          qrcode: 'assets/home/微信二维码.png',
          url: null
        },
        {
          name: 'GitHub',
          icon: 'assets/home/图标-github.png',
          qrcode: null,
          url: 'https://github.com/heshan-yi/Heshanyi'
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
