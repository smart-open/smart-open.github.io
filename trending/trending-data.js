/* ========================================
   Trending Data - update weekly
   数据调研日期：2026-11-02（本周 10-27 ~ 11-02）
   来源：GitHub Trending 周榜/月榜、GitHub Repositories API、skills.sh 排行榜
   ======================================== */
const TRENDING_DATA = {
  updated: "2026-11-02",
  weekly: [
    {
      rank: 1,
      name: "Nutlope/hallmark",
      url: "https://github.com/Nutlope/hallmark",
      lang: "CSS",
      desc: "针对 Claude Code、Cursor 和 Codex 的「反 AI 垃圾设计」Skill，首登周榜首，本周 +11.6k stars",
      stars: "45.5k"
    },
    {
      rank: 2,
      name: "thedotmack/claude-mem",
      url: "https://github.com/thedotmack/claude-mem",
      lang: "TypeScript",
      desc: "为所有 Agent 提供跨会话持久上下文：记录会话全程、AI 压缩并把相关上下文注入未来会话，本周 +5.9k stars",
      stars: "110.2k"
    },
    {
      rank: 3,
      name: "pbakaus/impeccable",
      url: "https://github.com/pbakaus/impeccable",
      lang: "Rust",
      desc: "编码 Agent 的设计词汇库：polish/bolder 引导设计、critique/audit 发布前审查，本周 +12.0k stars 为涨星王",
      stars: "99.9k"
    },
    {
      rank: 4,
      name: "agricidaniel/claude-seo",
      url: "https://github.com/agricidaniel/claude-seo",
      lang: "Python",
      desc: "Claude Code 通用 SEO Skill：26 个子技能 + 19 个子 Agent，覆盖技术 SEO、Schema、GEO/AEO 与报告输出，本周 +5.0k stars",
      stars: "25.8k"
    },
    {
      rank: 5,
      name: "obra/superpowers",
      url: "https://github.com/obra/superpowers",
      lang: "Shell",
      desc: "Agentic Skills 框架与软件开发方法论，累计 310.9k 稳居 Skill 集合仓库第一，本周 +5.9k stars",
      stars: "310.9k"
    },
    {
      rank: 6,
      name: "pingdotgg/t3code",
      url: "https://github.com/pingdotgg/t3code",
      lang: "TypeScript",
      desc: "pingdotgg 出品的编码 Agent 工作流工具，本周黑马冲入榜单 +6.9k stars（GitHub 未附官方简介）",
      stars: "39.7k"
    },
    {
      rank: 7,
      name: "jetbrains/thinkrail",
      url: "https://github.com/jetbrains/thinkrail",
      lang: "TypeScript",
      desc: "JetBrains 出品：真 IDE 里的「氛围编程」，IDE 会围绕你的工作方式自我定制，大厂亲自下场 Agent 编码",
      stars: "7.1k"
    },
    {
      rank: 8,
      name: "cloudflare/security-audit-skill",
      url: "https://github.com/cloudflare/security-audit-skill",
      lang: "JavaScript",
      desc: "Cloudflare 官方编码 Agent 安全审计 Skill：多阶段扫描 + 独立核验的机器可读结论，本周 +10.1k stars",
      stars: "56.8k"
    },
    {
      rank: 9,
      name: "jakubkrehel/skills",
      url: "https://github.com/jakubkrehel/skills",
      lang: "Markdown",
      desc: "帮你构建优秀界面的 Agent 技能合集，前端设计类 Skill 细分赛道升温，本周 +1.6k stars",
      stars: "10.2k"
    },
    {
      rank: 10,
      name: "multica-ai/andrej-karpathy-skills",
      url: "https://github.com/multica-ai/andrej-karpathy-skills",
      lang: "Markdown",
      desc: "单个 CLAUDE.md 文件纠正 Claude Code 编码行为，源自 Karpathy 对 AI 编码陷阱的观察，累计 228.3k stars",
      stars: "228.3k"
    }
  ],
  monthly: [
    {
      rank: 1,
      name: "morluto/rea",
      url: "https://github.com/morluto/rea",
      lang: "TypeScript",
      desc: "用 Agent 对任何事物做逆向工程：从应用行为到原生二进制，本月新增 40 万+ stars 断层第一，累计 420.7k"
    },
    {
      rank: 2,
      name: "debpalash/VoiceStudio",
      url: "https://github.com/debpalash/VoiceStudio",
      lang: "Python",
      desc: "完全本地运行的开源 ElevenLabs 替代：声音克隆、配音与转写，覆盖 646 种语言，累计 98.5k（本月 +47k）"
    },
    {
      rank: 3,
      name: "cloudflare/security-audit-skill",
      url: "https://github.com/cloudflare/security-audit-skill",
      lang: "JavaScript",
      desc: "Cloudflare 官方编码 Agent 安全审计 Skill：多阶段扫描 + 机器可读结论，累计 56.8k（本月 +32.6k）"
    },
    {
      rank: 4,
      name: "heygen-com/hyperframes",
      url: "https://github.com/heygen-com/hyperframes",
      lang: "TypeScript",
      desc: "写 HTML 直接渲染可播放视频文件，为 AI Agent 工作流优化的视频生成框架，累计 77.4k（本月 +22.2k）"
    },
    {
      rank: 5,
      name: "pbakaus/impeccable",
      url: "https://github.com/pbakaus/impeccable",
      lang: "Rust",
      desc: "编码 Agent 的设计规范：polish/bolder 引导风格、critique/audit 拦截 AI 粗制滥造，累计 99.9k（本月 +26.1k）"
    },
    {
      rank: 6,
      name: "Leonxlnx/taste-skill",
      url: "https://github.com/Leonxlnx/taste-skill",
      lang: "JavaScript",
      desc: "赋予编码 Agent「品味」的 Skill：艺术指导、参考图与浏览器检查，替代千篇一律的 AI 页面，累计 108.2k（本月 +16.3k）"
    },
    {
      rank: 7,
      name: "NationalSecurityAgency/ghidra",
      url: "https://github.com/NationalSecurityAgency/ghidra",
      lang: "Java",
      desc: "NSA 开源逆向工程框架（SRE），受 Agent 逆向工程热潮（本榜第 1 的 rea）带动，累计 97.0k（本月 +16.9k）"
    },
    {
      rank: 8,
      name: "tashfeenahmed/freellmapi",
      url: "https://github.com/tashfeenahmed/freellmapi",
      lang: "TypeScript",
      desc: "聚合 34 个免费 LLM 提供商、635 个模型端点的统一 /v1 接口：智能路由 + 自动故障转移，累计 46.0k（本月 +15.9k）"
    },
    {
      rank: 9,
      name: "Nutlope/hallmark",
      url: "https://github.com/Nutlope/hallmark",
      lang: "CSS",
      desc: "针对 Claude Code、Cursor 和 Codex 的「反 AI 垃圾设计」Skill，周榜月榜双上榜，累计 45.5k（本月 +15.2k）"
    },
    {
      rank: 10,
      name: "thedotmack/claude-mem",
      url: "https://github.com/thedotmack/claude-mem",
      lang: "TypeScript",
      desc: "为所有 Agent 提供跨会话持久上下文，兼容 Claude Code/Codex/Gemini 等，累计 110.2k（本月 +14.0k）"
    }
  ],
  skills: [
    {
      rank: 1,
      name: "find-skills",
      installs: "4.2M",
      source: "vercel-labs/skills",
      desc: "按任务发现并安装 Agent Skills，生态发现层的基础设施，安装量断层领先（上周 4.1M）"
    },
    {
      rank: 2,
      name: "grill-me",
      installs: "1.5M",
      source: "mattpocock/skills",
      desc: "用高强度追问打磨计划与设计，动手前先与 Agent 对齐需求，蝉联个人 Skill 榜首（上周 1.4M）"
    },
    {
      rank: 3,
      name: "hyperframes-cli",
      installs: "1.4M",
      source: "heygen-com/hyperframes",
      desc: "HeyGen 视频生成框架的 CLI 入口 Skill，稳步上行至第三（上周 1.3M）"
    },
    {
      rank: 4,
      name: "hyperframes",
      installs: "1.3M",
      source: "heygen-com/hyperframes",
      desc: "让 Agent 写 HTML 直接产出可播放视频，AI 视频工作流的 Skill 化封装，升两位至第四"
    },
    {
      rank: 5,
      name: "agent-browser",
      installs: "1.3M",
      source: "vercel-labs/agent-browser",
      desc: "给 Agent 的浏览器自动化能力，网页操作类任务的基础组件"
    },
    {
      rank: 6,
      name: "grill-with-docs",
      installs: "1.3M",
      source: "mattpocock/skills",
      desc: "grill-me 的工程增强版：追问同时构建项目共享语言，内联更新术语表与 ADR 文档"
    },
    {
      rank: 7,
      name: "media-use",
      installs: "1.2M",
      source: "heygen-com/hyperframes",
      desc: "HeyGen 系媒体资源调用层 Skill，与 hyperframes 生态联动上行"
    },
    {
      rank: 8,
      name: "improve-codebase-architecture",
      installs: "1.2M",
      source: "mattpocock/skills",
      desc: "扫描代码库寻找模块深化机会并给出改进候选，官方建议每隔几天跑一次"
    },
    {
      rank: 9,
      name: "reddit-automation",
      installs: "1.2M",
      source: "flowkit-labs/skills",
      desc: "Reddit 内容自动化 Skill，垂直平台运营类 Skill 稳居头部"
    },
    {
      rank: 10,
      name: "tdd",
      installs: "1.2M",
      source: "mattpocock/skills",
      desc: "测试驱动开发纪律 Skill：先写失败用例再实现，把工程流程固化进 Agent"
    }
  ],
  skillRepos: [
    { name: "obra/superpowers", stars: "310.9K+", desc: "Agentic Skills 框架与软件开发方法论，继续领跑 Skill 集合仓库榜" },
    { name: "mattpocock/skills", stars: "309.6K+", desc: "面向真实工程师的技能集，与榜首差距缩至 1.3k，skills.sh Top10 占 4 席" },
    { name: "multica-ai/andrej-karpathy-skills", stars: "228.3K+", desc: "单个 CLAUDE.md 文件即破 22 万 star，「少即是多」的现象级样本" },
    { name: "anthropics/skills", stars: "186.6K+", desc: "Anthropic 官方 Agent Skills 公共仓库，配合官方插件目录双线推进" },
    { name: "cloudflare/security-audit-skill", stars: "56.8K+", desc: "Cloudflare 官方安全审计 Skill，大厂单点爆款标杆，本月仍增 3 万+" },
    { name: "vercel-labs/skills", stars: "37.7K+", desc: "开放的 Agent Skills 安装工具（npx skills），生态分发入口" }
  ]
};
