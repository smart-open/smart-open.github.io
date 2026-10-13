/* ========================================
   Trending Data - update weekly
   数据调研日期：2026-10-05（本周 09-29 ~ 10-05）
   来源：GitHub Trending 周榜/月榜、GitHub Repositories API、skills.sh 排行榜
   ======================================== */
const TRENDING_DATA = {
  updated: "2026-10-05",
  weekly: [
    {
      rank: 1,
      name: "boykopovar/AnyPS5",
      url: "https://github.com/boykopovar/AnyPS5",
      lang: "C++",
      desc: "PS5 游戏文件自动转换工具，让其运行在 Linux 与 Windows 上，周增 10.2k stars 为全榜最高，本周周榜第一",
      stars: "18.0k"
    },
    {
      rank: 2,
      name: "mvschwarz/openrig",
      url: "https://github.com/mvschwarz/openrig",
      lang: "TypeScript",
      desc: "结构化 AI 团队协作环境：多个编码助手共享记忆、分工任务，Agent 编排的新范式",
      stars: "6.3k"
    },
    {
      rank: 3,
      name: "heygen-com/hyperframes",
      url: "https://github.com/heygen-com/hyperframes",
      lang: "TypeScript",
      desc: "写 HTML 直接渲染可播放视频文件，为 AI Agent 工作流优化的视频生成框架",
      stars: "59.4k"
    },
    {
      rank: 4,
      name: "EpicGames/raddebugger",
      url: "https://github.com/EpicGames/raddebugger",
      lang: "C",
      desc: "Epic Games 开源的独立可视化调试器，可同时监控多个程序实例",
      stars: "8.2k"
    },
    {
      rank: 5,
      name: "cursor/plugins",
      url: "https://github.com/cursor/plugins",
      lang: "TypeScript",
      desc: "Cursor 官方扩展仓库，承载官方规则与内置插件，AI IDE 生态开放化信号",
      stars: "10.5k"
    },
    {
      rank: 6,
      name: "thedotmack/claude-mem",
      url: "https://github.com/thedotmack/claude-mem",
      lang: "TypeScript",
      desc: "跨编码会话的长期项目记忆 Agent 插件，自动总结过往动作加速后续任务",
      stars: "98.8k"
    },
    {
      rank: 7,
      name: "mattpocock/skills",
      url: "https://github.com/mattpocock/skills",
      lang: "Shell",
      desc: "「真实工程师」Agent Skills 技能集，本周新增 7.4k stars，skills.sh 榜单霸榜源头",
      stars: "281.8k"
    },
    {
      rank: 8,
      name: "Panniantong/Agent-Reach",
      url: "https://github.com/Panniantong/Agent-Reach",
      lang: "Python",
      desc: "让 AI Agent 用一条命令行指令浏览并查询主流社交媒体，Agent 触达外部信息层的代表",
      stars: "94.5k"
    },
    {
      rank: 9,
      name: "earthtojake/text-to-cad",
      url: "https://github.com/earthtojake/text-to-cad",
      lang: "Python",
      desc: "给 Agent 装上从提示词生成三维机械图纸的能力，Agent 进军工程设计领域",
      stars: "18.6k"
    },
    {
      rank: 10,
      name: "DuarteSantos8/openGym",
      url: "https://github.com/DuarteSantos8/openGym",
      lang: "JavaScript",
      desc: "私有健康监测仪表盘：训练计划编排、运动记录与体能状态追踪，周增 6.1k stars",
      stars: "8.3k"
    }
  ],
  monthly: [
    {
      rank: 1,
      name: "alibaba/open-code-review",
      url: "https://github.com/alibaba/open-code-review",
      lang: "Go",
      desc: "阿里混合架构代码评审：确定性流水线 + LLM Agent，行级精确评论与多语言规则集（本月 +22.8k）"
    },
    {
      rank: 2,
      name: "debpalash/VoiceStudio",
      url: "https://github.com/debpalash/VoiceStudio",
      lang: "Python",
      desc: "全本地 ElevenLabs 替代，覆盖 646 种语言的语音克隆、配音、转写与有声书创作（本月 +34.3k）"
    },
    {
      rank: 3,
      name: "bilawalsidhu/gods-eye-view",
      url: "https://github.com/bilawalsidhu/gods-eye-view",
      lang: "JavaScript",
      desc: "浏览器中的间谍卫星模拟器，基于真实开源空间数据与照片级 3D 地球（本月 +30.2k）"
    },
    {
      rank: 4,
      name: "anthropics/financial-services",
      url: "https://github.com/anthropics/financial-services",
      lang: "Python",
      desc: "Anthropic 金融服务行业 Skill 包，官方行业化 Skills 生态持续铺开"
    },
    {
      rank: 5,
      name: "paperclipai/paperclip",
      url: "https://github.com/paperclipai/paperclip",
      lang: "TypeScript",
      desc: "开源的工作场景 Agent 管理应用，团队统一调度与监控多个 Agent 的入口级产品（本月 +18.9k）"
    },
    {
      rank: 6,
      name: "affaan-m/ECC",
      url: "https://github.com/affaan-m/ECC",
      lang: "JavaScript",
      desc: "Agent 运行框架的性能优化系统：记忆、安全与研究驱动的开发方式，本月 +23.1k，累计 275.6k stars"
    },
    {
      rank: 7,
      name: "vectorize-io/hindsight",
      url: "https://github.com/vectorize-io/hindsight",
      lang: "Python",
      desc: "会学习的 Agent 记忆框架，持续保留上下文信息，月榜稳定在前列（本月 +24.3k）"
    },
    {
      rank: 8,
      name: "Tencent/WeKnora",
      url: "https://github.com/Tencent/WeKnora",
      lang: "Go",
      desc: "腾讯开源 LLM 知识平台：原始文档一键变为可查询 RAG、自主推理 Agent 与自维护 Wiki（本月 +11.0k）"
    },
    {
      rank: 9,
      name: "anthropics/claude-code",
      url: "https://github.com/anthropics/claude-code",
      lang: "TypeScript",
      desc: "终端编码助手 Claude Code，用自然语言自动化例行任务、解释复杂逻辑与管理 Git 工作流"
    },
    {
      rank: 10,
      name: "TencentCloud/Octop",
      url: "https://github.com/TencentCloud/Octop",
      lang: "Python",
      desc: "腾讯云开源自托管多用户 AI 助手，可协调多个 Agent 协同工作（本月 +6.5k）"
    }
  ],
  skills: [
    {
      rank: 1,
      name: "find-skills",
      installs: "3.8M",
      source: "vercel-labs/skills",
      desc: "按任务发现并安装 Agent Skills，生态发现层的基础设施，安装量断层领先并已突破 3.8M"
    },
    {
      rank: 2,
      name: "grill-me",
      installs: "1.3M",
      source: "mattpocock/skills",
      desc: "用高强度追问打磨计划与设计，动手前先与 Agent 对齐需求"
    },
    {
      rank: 3,
      name: "grill-with-docs",
      installs: "1.1M",
      source: "mattpocock/skills",
      desc: "grill-me 的工程增强版：追问同时构建项目共享语言，内联更新术语表与 ADR 文档，被称为全仓最实用的 Skill"
    },
    {
      rank: 4,
      name: "improve-codebase-architecture",
      installs: "1.1M",
      source: "mattpocock/skills",
      desc: "扫描代码库寻找模块深化机会并给出改进候选，官方建议每隔几天跑一次"
    },
    {
      rank: 5,
      name: "agent-browser",
      installs: "1.1M",
      source: "vercel-labs/agent-browser",
      desc: "给 Agent 的浏览器自动化能力，网页操作类任务的基础组件"
    },
    {
      rank: 6,
      name: "tdd",
      installs: "1.0M",
      source: "mattpocock/skills",
      desc: "红-绿-重构 TDD 循环 Skill，先写失败测试再修复，给 Agent 稳定的反馈回路"
    },
    {
      rank: 7,
      name: "setup-matt-pocock-skills",
      installs: "969.0K",
      source: "mattpocock/skills",
      desc: "一键初始化全套工程 Skills：选择 issue 跟踪器、分诊标签与文档存放位置"
    },
    {
      rank: 8,
      name: "frontend-design",
      installs: "966.4K",
      source: "anthropics/skills",
      desc: "Anthropic 官方前端设计 Skill，高质量 UI 生成的事实标准"
    },
    {
      rank: 9,
      name: "handoff",
      installs: "948.4K",
      source: "mattpocock/skills",
      desc: "在 Agent 与会话之间做结构化任务交接，多 Agent 流水线的衔接件"
    },
    {
      rank: 10,
      name: "triage",
      installs: "912.9K",
      source: "mattpocock/skills",
      desc: "按自定义规则对 issue 分诊打标签，把工程流程纪律固化进 Agent"
    }
  ],
  skillRepos: [
    { name: "obra/superpowers", stars: "296.7K+", desc: "Agentic Skills 框架与软件开发方法论，稳居 Skill 集合仓库第一" },
    { name: "mattpocock/skills", stars: "281.8K+", desc: "面向真实工程师的技能集，本周霸榜 skills.sh（Top10 占 7 席）" },
    { name: "anthropics/skills", stars: "180.1K+", desc: "Anthropic 官方 Agent Skills 公共仓库，持续更新 claude-api 等 Skill" },
    { name: "vercel-labs/skills", stars: "33.5K+", desc: "开放的 Agent Skills 安装工具（npx skills），生态分发入口" },
    { name: "tech-leads-club/agent-skills", stars: "7.0K+", desc: "面向专业 AI 编码 Agent 的安全校验 Skill 注册表" }
  ]
};
