/* ========================================
   Trending Data - update weekly
   数据调研日期：2026-10-19（本周 10-13 ~ 10-19）
   来源：GitHub Trending 周榜/月榜、GitHub Repositories API、skills.sh 排行榜
   ======================================== */
const TRENDING_DATA = {
  updated: "2026-10-19",
  weekly: [
    {
      rank: 1,
      name: "morluto/rea",
      url: "https://github.com/morluto/rea",
      lang: "TypeScript",
      desc: "让 Agent 逆向工程任意软件：从应用行为到原生二进制，无需源码即可解释功能原理，本周再增 16万+ stars 累计 326.5k，连续三周霸榜",
      stars: "326.5k"
    },
    {
      rank: 2,
      name: "storytold/artcraft",
      url: "https://github.com/storytold/artcraft",
      lang: "Rust",
      desc: "面向艺术家与电影人的 AI 创作引擎：先 3D 布景再生成，角色与机位可复现，本周 +16.4k stars 冲上榜眼",
      stars: "33.0k"
    },
    {
      rank: 3,
      name: "boykopovar/AnyPS5",
      url: "https://github.com/boykopovar/AnyPS5",
      lang: "C++",
      desc: "PS5 游戏文件自动转换工具，让其原生运行在 Linux 与 Windows 上，连续四周在榜，本周再增 14.2k stars",
      stars: "43.5k"
    },
    {
      rank: 4,
      name: "anthropics/claude-plugins-official",
      url: "https://github.com/anthropics/claude-plugins-official",
      lang: "Python",
      desc: "Anthropic 官方维护的高质量 Claude Code 插件目录，Agent 插件生态有了官方精选入口",
      stars: "42.9k"
    },
    {
      rank: 5,
      name: "cathrynlavery/diagram-design",
      url: "https://github.com/cathrynlavery/diagram-design",
      lang: "HTML",
      desc: "编辑级图表设计 Skill，44 种图表类型，自包含 HTML+SVG 输出，拒绝 Mermaid 垃圾图，本周 +7.9k stars",
      stars: "57.9k"
    },
    {
      rank: 6,
      name: "NationalSecurityAgency/ghidra",
      url: "https://github.com/NationalSecurityAgency/ghidra",
      lang: "Java",
      desc: "NSA 开源逆向工程框架，受 rea 带火的「Agent 逆向工程」热潮带动重新上榜，本周 +7.6k stars",
      stars: "91.1k"
    },
    {
      rank: 7,
      name: "heygen-com/hyperframes",
      url: "https://github.com/heygen-com/hyperframes",
      lang: "TypeScript",
      desc: "写 HTML 直接渲染可播放视频文件，为 AI Agent 工作流优化的视频生成框架，配套 Skill 双席冲进 skills.sh Top10",
      stars: "67.0k"
    },
    {
      rank: 8,
      name: "MadsLorentzen/ai-job-search",
      url: "https://github.com/MadsLorentzen/ai-job-search",
      lang: "Python",
      desc: "基于 Claude Code 的 AI 求职框架：岗位评估、简历定制、求职信撰写、面试准备一条龙，fork 即自持，本周 +5.7k stars",
      stars: "54.2k"
    },
    {
      rank: 9,
      name: "mksglu/context-mode",
      url: "https://github.com/mksglu/context-mode",
      lang: "TypeScript",
      desc: "AI 编码 Agent 的上下文窗口优化层：工具输出沙箱化压缩 98%，会话记忆持久化，经 MCP + hooks 覆盖 17 个平台",
      stars: "30.9k"
    },
    {
      rank: 10,
      name: "cursor/plugins",
      url: "https://github.com/cursor/plugins",
      lang: "TypeScript",
      desc: "Cursor 插件规范与官方插件集，IDE 原生 Agent 生态正式开荒，本周新上榜 +1.7k stars",
      stars: "12.9k"
    }
  ],
  monthly: [
    {
      rank: 1,
      name: "paperclipai/paperclip",
      url: "https://github.com/paperclipai/paperclip",
      lang: "TypeScript",
      desc: "开源的工作场景 Agent 管理应用，团队统一调度与监控多个 Agent 的入口级产品，累计破 100k（本月 +23.3k）"
    },
    {
      rank: 2,
      name: "debpalash/VoiceStudio",
      url: "https://github.com/debpalash/VoiceStudio",
      lang: "Python",
      desc: "完全本地运行的开源 ElevenLabs 替代：声音克隆、语音设计、视频配音、听写与转写，覆盖 646 种语言（本月 +42.0k）"
    },
    {
      rank: 3,
      name: "heygen-com/hyperframes",
      url: "https://github.com/heygen-com/hyperframes",
      lang: "TypeScript",
      desc: "写 HTML 直接渲染可播放视频文件，为 AI Agent 工作流优化的视频生成框架（本月 +15.4k）"
    },
    {
      rank: 4,
      name: "anthropics/financial-services",
      url: "https://github.com/anthropics/financial-services",
      lang: "Python",
      desc: "Anthropic 官方金融服务场景插件与工具集，垂直行业官方套件成新趋势（本月 +5.5k）"
    },
    {
      rank: 5,
      name: "vectorize-io/hindsight",
      url: "https://github.com/vectorize-io/hindsight",
      lang: "Python",
      desc: "会学习的 Agent 记忆框架，持续保留上下文信息，月榜稳定在前列（本月 +27.6k）"
    },
    {
      rank: 6,
      name: "cloudflare/security-audit-skill",
      url: "https://github.com/cloudflare/security-audit-skill",
      lang: "JavaScript",
      desc: "Cloudflare 官方编码 Agent 安全审计 Skill：多阶段漏洞扫描，上线一月破 30k stars（本月 +19.1k）"
    },
    {
      rank: 7,
      name: "agent-substrate/substrate",
      url: "https://github.com/agent-substrate/substrate",
      lang: "Go",
      desc: "Agent Substrate 核心系统：面向大规模 Agent 部署的基础设施内核，新势力冲进月榜（本月 +3.5k）"
    },
    {
      rank: 8,
      name: "mksglu/context-mode",
      url: "https://github.com/mksglu/context-mode",
      lang: "TypeScript",
      desc: "AI 编码 Agent 上下文窗口优化：工具输出沙箱化、会话记忆持久化、跨 17 平台路由（本月 +7.3k）"
    },
    {
      rank: 9,
      name: "NVIDIA/OpenShell",
      url: "https://github.com/NVIDIA/OpenShell",
      lang: "Rust",
      desc: "安全私有的自主 Agent 运行时，英伟达下场 Agent 沙箱执行层（本月 +8.0k）"
    },
    {
      rank: 10,
      name: "affaan-m/ECC",
      url: "https://github.com/affaan-m/ECC",
      lang: "JavaScript",
      desc: "Agent 运行框架的性能优化系统：记忆、安全与研究驱动的开发方式，累计 283.5k stars（本月 +23.1k）"
    }
  ],
  skills: [
    {
      rank: 1,
      name: "find-skills",
      installs: "3.9M",
      source: "vercel-labs/skills",
      desc: "按任务发现并安装 Agent Skills，生态发现层的基础设施，安装量断层领先（上周 2.5M）"
    },
    {
      rank: 2,
      name: "grill-me",
      installs: "1.4M",
      source: "mattpocock/skills",
      desc: "用高强度追问打磨计划与设计，动手前先与 Agent 对齐需求，从 542K 一周冲到 1.4M"
    },
    {
      rank: 3,
      name: "grill-with-docs",
      installs: "1.2M",
      source: "mattpocock/skills",
      desc: "grill-me 的工程增强版：追问同时构建项目共享语言，内联更新术语表与 ADR 文档"
    },
    {
      rank: 4,
      name: "agent-browser",
      installs: "1.2M",
      source: "vercel-labs/agent-browser",
      desc: "给 Agent 的浏览器自动化能力，网页操作类任务的基础组件"
    },
    {
      rank: 5,
      name: "improve-codebase-architecture",
      installs: "1.1M",
      source: "mattpocock/skills",
      desc: "扫描代码库寻找模块深化机会并给出改进候选，官方建议每隔几天跑一次"
    },
    {
      rank: 6,
      name: "tdd",
      installs: "1.1M",
      source: "mattpocock/skills",
      desc: "测试驱动开发纪律 Skill：先写失败用例再实现，把工程流程固化进 Agent"
    },
    {
      rank: 7,
      name: "hyperframes-cli",
      installs: "1.1M",
      source: "heygen-com/hyperframes",
      desc: "HeyGen 视频生成框架的 CLI 入口 Skill，与主 Skill 双双卡位 Top10，新爆款生态位"
    },
    {
      rank: 8,
      name: "hyperframes",
      installs: "1.1M",
      source: "heygen-com/hyperframes",
      desc: "让 Agent 写 HTML 直接产出可播放视频，AI 视频工作流的 Skill 化封装"
    },
    {
      rank: 9,
      name: "setup-matt-pocock-skills",
      installs: "1.0M",
      source: "mattpocock/skills",
      desc: "mattpocock 技能套件的引导安装与配置 Skill，一人仓库独占 Top10 六席"
    },
    {
      rank: 10,
      name: "handoff",
      installs: "1.0M",
      source: "mattpocock/skills",
      desc: "跨会话上下文交接 Skill：把当前工作打包移交下一个 Agent 会话，长任务不断片"
    }
  ],
  skillRepos: [
    { name: "obra/superpowers", stars: "301.8K+", desc: "Agentic Skills 框架与软件开发方法论，首个破 30 万的 Skill 集合仓库" },
    { name: "mattpocock/skills", stars: "296.5K+", desc: "面向真实工程师的技能集，skills.sh Top10 独占六席，个人仓库对抗大厂生态" },
    { name: "anthropics/skills", stars: "182.1K+", desc: "Anthropic 官方 Agent Skills 公共仓库，配合 claude-plugins-official 官方目录双线推进" },
    { name: "vercel-labs/skills", stars: "35.5K+", desc: "开放的 Agent Skills 安装工具（npx skills），生态分发入口" },
    { name: "cloudflare/security-audit-skill", stars: "31.3K+", desc: "Cloudflare 官方安全审计 Skill，上线一月破 3 万 star，大厂单点爆款样本" },
    { name: "tech-leads-club/agent-skills", stars: "7.1K+", desc: "面向专业 AI 编码 Agent 的安全校验 Skill 注册表" }
  ]
};
