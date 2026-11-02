/* ========================================
   Trending Data - update weekly
   数据调研日期：2026-10-26（本周 10-20 ~ 10-26）
   来源：GitHub Trending 周榜/月榜、GitHub Repositories API、skills.sh 排行榜
   ======================================== */
const TRENDING_DATA = {
  updated: "2026-10-26",
  weekly: [
    {
      rank: 1,
      name: "anomalyco/opencode",
      url: "https://github.com/anomalyco/opencode",
      lang: "TypeScript",
      desc: "开源编码 Agent（The open source coding agent），终端原生、多模型接入，重回周榜首，累计 222k stars",
      stars: "222.0k"
    },
    {
      rank: 2,
      name: "multica-ai/andrej-karpathy-skills",
      url: "https://github.com/multica-ai/andrej-karpathy-skills",
      lang: "Markdown",
      desc: "单个 CLAUDE.md 文件纠正 Claude Code 编码行为，源自 Karpathy 对 AI 编码陷阱的观察，224k stars 诠释「少即是多」",
      stars: "224.8k"
    },
    {
      rank: 3,
      name: "stablyai/orca",
      url: "https://github.com/stablyai/orca",
      lang: "TypeScript",
      desc: "指挥 Agent 舰队的工作台：用自己的订阅跑任意编码 Agent（Grok Bot / Claude Code 等），本周 +9.2k stars",
      stars: "107.2k"
    },
    {
      rank: 4,
      name: "Graphify-Labs/graphify",
      url: "https://github.com/Graphify-Labs/graphify",
      lang: "Python",
      desc: "把任意代码库连同文档、SQL schema、配置与 PDF 变成可查询知识图谱，附 /graphify Skill，本周 +7.1k stars",
      stars: "136.3k"
    },
    {
      rank: 5,
      name: "Comfy-Org/ComfyUI",
      url: "https://github.com/Comfy-Org/ComfyUI",
      lang: "Python",
      desc: "最强大且模块化的扩散模型 GUI 与 AI 图像生成工作流引擎，节点式管线持续吸纳新模型生态",
      stars: "143.0k"
    },
    {
      rank: 6,
      name: "heygen-com/hyperframes",
      url: "https://github.com/heygen-com/hyperframes",
      lang: "TypeScript",
      desc: "写 HTML 直接渲染可播放视频文件，为 AI Agent 工作流优化，配套 3 个 Skill 同进 skills.sh Top10",
      stars: "73.0k"
    },
    {
      rank: 7,
      name: "TauricResearch/TradingAgents",
      url: "https://github.com/TauricResearch/TradingAgents",
      lang: "Python",
      desc: "多 Agent LLM 金融交易框架：分析师、研究员、交易员与风控角色协作做交易决策，本周 +3.4k stars",
      stars: "116.0k"
    },
    {
      rank: 8,
      name: "cloudflare/security-audit-skill",
      url: "https://github.com/cloudflare/security-audit-skill",
      lang: "JavaScript",
      desc: "Cloudflare 官方编码 Agent 安全审计 Skill：多阶段扫描 + 独立核验的机器可读结论，周增 16.5k stars 为本周涨星王",
      stars: "48.8k"
    },
    {
      rank: 9,
      name: "akitaonrails/ai-memory",
      url: "https://github.com/akitaonrails/ai-memory",
      lang: "Rust",
      desc: "给 Agent 编码 CLI 的长期记忆方案，支持跨不同厂商 Agent 之间交接上下文，本周 +2.8k stars",
      stars: "13.9k"
    },
    {
      rank: 10,
      name: "anthropics/knowledge-work-plugins",
      url: "https://github.com/anthropics/knowledge-work-plugins",
      lang: "Python",
      desc: "Anthropic 官方知识工作者插件集，面向 Claude Cowork 场景，官方垂直套件持续扩张",
      stars: "33.3k"
    }
  ],
  monthly: [
    {
      rank: 1,
      name: "DietrichGebert/ponytail",
      url: "https://github.com/DietrichGebert/ponytail",
      lang: "JavaScript",
      desc: "让 AI Agent 像房间里最懒的资深工程师一样思考：能不写的代码就不写（本月 +31k）"
    },
    {
      rank: 2,
      name: "debpalash/VoiceStudio",
      url: "https://github.com/debpalash/VoiceStudio",
      lang: "Python",
      desc: "完全本地运行的开源 ElevenLabs 替代：声音克隆、配音与转写，覆盖 646 种语言，累计 89k（本月 +53k）"
    },
    {
      rank: 3,
      name: "cloudflare/security-audit-skill",
      url: "https://github.com/cloudflare/security-audit-skill",
      lang: "JavaScript",
      desc: "Cloudflare 官方编码 Agent 安全审计 Skill：多阶段扫描 + 机器可读结论，上线两月破 48k（本月 +26k）"
    },
    {
      rank: 4,
      name: "affaan-m/ECC",
      url: "https://github.com/affaan-m/ECC",
      lang: "JavaScript",
      desc: "Agent 运行框架的性能优化系统：记忆、安全与研究驱动的开发方式，覆盖 Claude Code/Codex/Cursor，累计 289k（本月 +23k）"
    },
    {
      rank: 5,
      name: "paperclipai/paperclip",
      url: "https://github.com/paperclipai/paperclip",
      lang: "TypeScript",
      desc: "开源的工作场景 Agent 管理应用，团队统一调度与监控多个 Agent 的入口级产品，累计 107k（本月 +21k）"
    },
    {
      rank: 6,
      name: "heygen-com/hyperframes",
      url: "https://github.com/heygen-com/hyperframes",
      lang: "TypeScript",
      desc: "写 HTML 直接渲染可播放视频文件，为 AI Agent 工作流优化的视频生成框架（本月 +19k）"
    },
    {
      rank: 7,
      name: "Panniantong/Agent-Reach",
      url: "https://github.com/Panniantong/Agent-Reach",
      lang: "Python",
      desc: "给 Agent 看见整个互联网的眼睛：一条 CLI 查询主流平台、零 API 费用，累计破 103k（本月 +18k）"
    },
    {
      rank: 8,
      name: "pbakaus/impeccable",
      url: "https://github.com/pbakaus/impeccable",
      lang: "Rust",
      desc: "让 AI Harness 更懂设计的设计语言规范，把审美标准写成机器可执行的约束（本月 +17k）"
    },
    {
      rank: 9,
      name: "rohitg00/ai-engineering-from-scratch",
      url: "https://github.com/rohitg00/ai-engineering-from-scratch",
      lang: "Python",
      desc: "从零学 AI 工程：学它、建它、把它交付给别人（本月 +16k）"
    },
    {
      rank: 10,
      name: "NationalSecurityAgency/ghidra",
      url: "https://github.com/NationalSecurityAgency/ghidra",
      lang: "Java",
      desc: "NSA 开源逆向工程框架（SRE），受 Agent 逆向工程热潮带动持续在榜（本月 +15k）"
    }
  ],
  skills: [
    {
      rank: 1,
      name: "find-skills",
      installs: "4.1M",
      source: "vercel-labs/skills",
      desc: "按任务发现并安装 Agent Skills，生态发现层的基础设施，安装量断层领先（上周 3.9M）"
    },
    {
      rank: 2,
      name: "grill-me",
      installs: "1.4M",
      source: "mattpocock/skills",
      desc: "用高强度追问打磨计划与设计，动手前先与 Agent 对齐需求，蝉联个人 Skill 榜首"
    },
    {
      rank: 3,
      name: "hyperframes-cli",
      installs: "1.3M",
      source: "heygen-com/hyperframes",
      desc: "HeyGen 视频生成框架的 CLI 入口 Skill，一周 +200K 冲至第三"
    },
    {
      rank: 4,
      name: "agent-browser",
      installs: "1.3M",
      source: "vercel-labs/agent-browser",
      desc: "给 Agent 的浏览器自动化能力，网页操作类任务的基础组件"
    },
    {
      rank: 5,
      name: "grill-with-docs",
      installs: "1.2M",
      source: "mattpocock/skills",
      desc: "grill-me 的工程增强版：追问同时构建项目共享语言，内联更新术语表与 ADR 文档"
    },
    {
      rank: 6,
      name: "hyperframes",
      installs: "1.2M",
      source: "heygen-com/hyperframes",
      desc: "让 Agent 写 HTML 直接产出可播放视频，AI 视频工作流的 Skill 化封装"
    },
    {
      rank: 7,
      name: "improve-codebase-architecture",
      installs: "1.2M",
      source: "mattpocock/skills",
      desc: "扫描代码库寻找模块深化机会并给出改进候选，官方建议每隔几天跑一次"
    },
    {
      rank: 8,
      name: "tdd",
      installs: "1.2M",
      source: "mattpocock/skills",
      desc: "测试驱动开发纪律 Skill：先写失败用例再实现，把工程流程固化进 Agent"
    },
    {
      rank: 9,
      name: "media-use",
      installs: "1.1M",
      source: "heygen-com/hyperframes",
      desc: "HeyGen 系第三个上榜 Skill：媒体资源调用层，一人仓库与 mattpocock 各占 Top10 半壁江山"
    },
    {
      rank: 10,
      name: "reddit-automation",
      installs: "1.1M",
      source: "flowkit-labs/skills",
      desc: "Reddit 内容自动化 Skill，垂直平台运营类 Skill 冲进头部"
    }
  ],
  skillRepos: [
    { name: "obra/superpowers", stars: "305.7K+", desc: "Agentic Skills 框架与软件开发方法论，稳居 Skill 集合仓库第一" },
    { name: "mattpocock/skills", stars: "304.2K+", desc: "面向真实工程师的技能集，破 30 万且逼近榜首，skills.sh Top10 占 5 席" },
    { name: "multica-ai/andrej-karpathy-skills", stars: "224.8K+", desc: "单个 CLAUDE.md 文件即破 22 万 star，「少即是多」的现象级样本" },
    { name: "anthropics/skills", stars: "184.0K+", desc: "Anthropic 官方 Agent Skills 公共仓库，配合官方插件目录双线推进" },
    { name: "cloudflare/security-audit-skill", stars: "48.8K+", desc: "Cloudflare 官方安全审计 Skill，上线两月破 48k，大厂单点爆款标杆" },
    { name: "vercel-labs/skills", stars: "36.7K+", desc: "开放的 Agent Skills 安装工具（npx skills），生态分发入口" }
  ]
};
