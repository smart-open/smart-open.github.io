/* ========================================
   Trending Data - update weekly
   数据调研日期：2026-11-09（本周 11-03 ~ 11-09）
   来源：GitHub Trending 周榜/月榜、GitHub Repositories API、skills.sh 排行榜
   ======================================== */
const TRENDING_DATA = {
  updated: "2026-11-09",
  weekly: [
    {
      rank: 1,
      name: "storytold/craft-anything",
      url: "https://github.com/storytold/craft-anything",
      lang: "Rust",
      desc: "rea 团队新作：让 Agent 理解任意软件的运作原理并动手复刻，10-31 上线九天冲到 28.3k stars，本周最大黑马",
      stars: "28.3k"
    },
    {
      rank: 2,
      name: "deepseek-ai/dsh-superagent-prototype",
      url: "https://github.com/deepseek-ai/dsh-superagent-prototype",
      lang: "TypeScript",
      desc: "DeepSeek 官方超级智能体原型（Towards a More Autonomous Agent System），上线一周即 22.5k stars",
      stars: "22.5k"
    },
    {
      rank: 3,
      name: "cloudflare/security-audit-skill",
      url: "https://github.com/cloudflare/security-audit-skill",
      lang: "JavaScript",
      desc: "Cloudflare 官方编码 Agent 安全审计 Skill，本周再增 21.5k stars 成为涨星王，累计破 70k",
      stars: "70.3k"
    },
    {
      rank: 4,
      name: "stablyai/orca",
      url: "https://github.com/stablyai/orca",
      lang: "TypeScript",
      desc: "Agent 舰队工作台：用自己的订阅跑任意编码 Agent（Grok Bot / Claude Code 等），本周 +15k stars",
      stars: "122.3k"
    },
    {
      rank: 5,
      name: "heydamir/unslop",
      url: "https://github.com/heydamir/unslop",
      lang: "JavaScript",
      desc: "Claude Skill：把 AI 味十足的 vibecoded UI 改造成真正有设计感的界面，反「AI 感」美学工具走红",
      stars: "14.5k"
    },
    {
      rank: 6,
      name: "Graphify-Labs/graphify",
      url: "https://github.com/Graphify-Labs/graphify",
      lang: "Python",
      desc: "把任意代码库连同文档、SQL schema、配置与 PDF 变成可查询知识图谱，本周 +10k stars",
      stars: "146.1k"
    },
    {
      rank: 7,
      name: "zortos293/Lichii",
      url: "https://github.com/zortos293/Lichii",
      lang: "C++",
      desc: "超实验性 Nintendo Switch 2 模拟器，硬件破解与模拟器热潮延续，本周 +8.5k stars",
      stars: "8.5k"
    },
    {
      rank: 8,
      name: "wangzan101/Mika",
      url: "https://github.com/wangzan101/Mika",
      lang: "Kotlin",
      desc: "Android 端侧 AI Agent：直接操作手机应用与网页替你完成任务，端侧 Agent 落地样本，本周 +8.2k stars",
      stars: "8.2k"
    },
    {
      rank: 9,
      name: "JuneYaooo/rea-video",
      url: "https://github.com/JuneYaooo/rea-video",
      lang: "Python",
      desc: "「逆向一切视频」：逐镜头拆解实拍、AI 生成或编码视频的拍摄与复现方法，rea 理念的视频版，本周 +7.0k stars",
      stars: "7.0k"
    },
    {
      rank: 10,
      name: "janestreet/agent_skills",
      url: "https://github.com/janestreet/agent_skills",
      lang: "Markdown",
      desc: "顶级量化机构 Jane Street 官方开源 Agent Skills，11-03 上线即 5.7k stars，传统科技大厂批量进场",
      stars: "5.7k"
    }
  ],
  monthly: [
    {
      rank: 1,
      name: "DietrichGebert/ponytail",
      url: "https://github.com/DietrichGebert/ponytail",
      lang: "JavaScript",
      desc: "让 AI Agent 像房间里最懒的资深工程师一样思考：能不写的代码就不写，累计 189.1k stars，月榜霸主"
    },
    {
      rank: 2,
      name: "debpalash/VoiceStudio",
      url: "https://github.com/debpalash/VoiceStudio",
      lang: "Python",
      desc: "完全本地运行的开源 ElevenLabs 替代：声音克隆、配音与转写，覆盖 646 种语言，累计 108.3k（本月 +50k 级）"
    },
    {
      rank: 3,
      name: "affaan-m/ECC",
      url: "https://github.com/affaan-m/ECC",
      lang: "JavaScript",
      desc: "Agent 运行框架的性能优化系统：记忆、安全与研究驱动的开发方式，累计 301.3k（本月 +18k）"
    },
    {
      rank: 4,
      name: "paperclipai/paperclip",
      url: "https://github.com/paperclipai/paperclip",
      lang: "TypeScript",
      desc: "开源的工作场景 Agent 管理应用，团队统一调度与监控多个 Agent 的入口级产品，累计 113.2k（本月 +17k）"
    },
    {
      rank: 5,
      name: "heygen-com/hyperframes",
      url: "https://github.com/heygen-com/hyperframes",
      lang: "TypeScript",
      desc: "写 HTML 直接渲染可播放视频文件，为 AI Agent 工作流优化的视频生成框架，累计 82.9k（本月 +17k）"
    },
    {
      rank: 6,
      name: "Panniantong/Agent-Reach",
      url: "https://github.com/Panniantong/Agent-Reach",
      lang: "Python",
      desc: "给 Agent 看见整个互联网的眼睛：一条 CLI 查询主流平台、零 API 费用，累计 111.1k（本月 +16k）"
    },
    {
      rank: 7,
      name: "pbakaus/impeccable",
      url: "https://github.com/pbakaus/impeccable",
      lang: "Rust",
      desc: "让 AI Harness 更懂设计的设计语言规范，把审美标准写成机器可执行的约束，累计 108.3k（本月 +15k）"
    },
    {
      rank: 8,
      name: "cloudflare/security-audit-skill",
      url: "https://github.com/cloudflare/security-audit-skill",
      lang: "JavaScript",
      desc: "Cloudflare 官方编码 Agent 安全审计 Skill：多阶段扫描 + 机器可读结论，累计破 70k（本月 +21.5k）"
    },
    {
      rank: 9,
      name: "vectorize-io/hindsight",
      url: "https://github.com/vectorize-io/hindsight",
      lang: "Python",
      desc: "会学习的 Agent 记忆框架，持续保留上下文信息，累计 60.5k（本月 +9k）"
    },
    {
      rank: 10,
      name: "NVIDIA/OpenShell",
      url: "https://github.com/NVIDIA/OpenShell",
      lang: "Rust",
      desc: "安全私有的自主 Agent 运行时，英伟达下场 Agent 沙箱执行层，累计 21.5k（本月 +5k）"
    }
  ],
  skills: [
    {
      rank: 1,
      name: "find-skills",
      installs: "4.3M",
      source: "vercel-labs/skills",
      desc: "按任务发现并安装 Agent Skills，生态发现层的基础设施，安装量断层领先（上周 4.1M）"
    },
    {
      rank: 2,
      name: "grill-me",
      installs: "1.54M",
      source: "mattpocock/skills",
      desc: "用高强度追问打磨计划与设计，动手前先与 Agent 对齐需求，蝉联个人 Skill 榜首"
    },
    {
      rank: 3,
      name: "hyperframes-cli",
      installs: "1.52M",
      source: "heygen-com/hyperframes",
      desc: "HeyGen 视频生成框架的 CLI 入口 Skill，与主 Skill 差距缩小到 1.6 万安装"
    },
    {
      rank: 4,
      name: "agent-browser",
      installs: "1.48M",
      source: "vercel-labs/agent-browser",
      desc: "给 Agent 的浏览器自动化能力，网页操作类任务的基础组件"
    },
    {
      rank: 5,
      name: "hyperframes",
      installs: "1.48M",
      source: "heygen-com/hyperframes",
      desc: "让 Agent 写 HTML 直接产出可播放视频，AI 视频工作流的 Skill 化封装"
    },
    {
      rank: 6,
      name: "media-use",
      installs: "1.39M",
      source: "heygen-com/hyperframes",
      desc: "HeyGen 系媒体资源调用层 Skill，HeyGen 全家桶 Top10 已占四席"
    },
    {
      rank: 7,
      name: "design-mobile-apps",
      installs: "1.37M",
      source: "designed-by-ai/skills",
      desc: "移动应用设计 Skill，从上周第 12 冲进 Top7，垂直设计类需求爆发"
    },
    {
      rank: 8,
      name: "reddit-automation",
      installs: "1.34M",
      source: "flowkit-labs/skills",
      desc: "Reddit 内容自动化 Skill，垂直平台运营类 Skill 稳居头部"
    },
    {
      rank: 9,
      name: "grill-with-docs",
      installs: "1.32M",
      source: "mattpocock/skills",
      desc: "grill-me 的工程增强版：追问同时构建项目共享语言，内联更新术语表与 ADR 文档"
    },
    {
      rank: 10,
      name: "hyperframes-registry",
      installs: "1.27M",
      source: "heygen-com/hyperframes",
      desc: "HeyGen 框架注册表 Skill，HeyGen 系第 4 席上榜，视频 Skill 生态成矩阵化打法"
    }
  ],
  skillRepos: [
    { name: "obra/superpowers", stars: "316.3K+", desc: "Agentic Skills 框架与软件开发方法论，稳居 Skill 集合仓库第一" },
    { name: "affaan-m/ECC", stars: "301.3K+", desc: "Agent 运行框架性能优化系统，集 Skills、记忆、安全与研究驱动开发于一体" },
    { name: "anthropics/skills", stars: "193.1K+", desc: "Anthropic 官方 Agent Skills 公共仓库，官方生态持续扩容" },
    { name: "cloudflare/security-audit-skill", stars: "70.3K+", desc: "Cloudflare 官方安全审计 Skill，累计破 7 万 star，大厂单点爆款标杆" },
    { name: "vercel-labs/skills", stars: "36.7K+", desc: "开放的 Agent Skills 安装工具（npx skills），生态分发入口" },
    { name: "janestreet/agent_skills", stars: "5.7K+", desc: "顶级量化机构 Jane Street 官方 Agent Skills，上线一周即入榜单，传统大厂进场新样本" }
  ]
};
