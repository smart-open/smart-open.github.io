/* ========================================
   Trending Data — update weekly
   ======================================== */
const TRENDING_DATA = {
  updated: "2026-07-13",
  weekly: [
    {
      rank: 1,
      name: "Zackriya-Solutions/meetily",
      url: "https://github.com/Zackriya-Solutions/meetily",
      lang: "Rust",
      desc: "本地优先的 AI 会议助手，4x 实时转录+说话人识别+Ollama 总结",
      stars: "4,353"
    },
    {
      rank: 2,
      name: "wonderwhy-er/DesktopCommanderMCP",
      url: "https://github.com/wonderwhy-er/DesktopCommanderMCP",
      lang: "TypeScript",
      desc: "MCP 服务器，给 Claude 终端控制、文件搜索和 diff 编辑能力",
      stars: "3,800"
    },
    {
      rank: 3,
      name: "openai/codex-plugin-cc",
      url: "https://github.com/openai/codex-plugin-cc",
      lang: "-",
      desc: "从 Claude Code 调用 Codex 审查代码或委派任务",
      stars: "3,500"
    },
    {
      rank: 4,
      name: "TencentCloud/CubeSandbox",
      url: "https://github.com/TencentCloud/CubeSandbox",
      lang: "-",
      desc: "即时、并发、安全、轻量的 AI Agent 沙箱",
      stars: "3,100"
    },
    {
      rank: 5,
      name: "abseil/abseil-cpp",
      url: "https://github.com/abseil/abseil-cpp",
      lang: "C++",
      desc: "Google 内部 C++ 基础库开源版",
      stars: "2,800"
    },
    {
      rank: 6,
      name: "ogulcancelik/herdr",
      url: "https://github.com/ogulcancelik/herdr",
      lang: "-",
      desc: "终端里的 Agent 多路复用器",
      stars: "2,600"
    },
    {
      rank: 7,
      name: "asgeirtj/system_prompts_leaks",
      url: "https://github.com/asgeirtj/system_prompts_leaks",
      lang: "-",
      desc: "提取的各大 AI 系统提示词合集",
      stars: "2,400"
    },
    {
      rank: 8,
      name: "diegosouzapw/OmniRoute",
      url: "https://github.com/diegosouzapw/OmniRoute",
      lang: "-",
      desc: "免费 AI 网关，231+ 提供商，支持 Caveman 压缩",
      stars: "2,200"
    },
    {
      rank: 9,
      name: "stablyai/orca",
      url: "https://github.com/stablyai/orca",
      lang: "-",
      desc: "并行 Agent 的 ADE 开发环境，桌面+移动端",
      stars: "2,000"
    },
    {
      rank: 10,
      name: "bradautomates/claude-video",
      url: "https://github.com/bradautomates/claude-video",
      lang: "Python",
      desc: "让 Claude 能看视频（下载、抽帧、转录）",
      stars: "4,353"
    }
  ],
  monthly: [
    {
      rank: 1,
      name: "DeusData/codebase-memory-mcp",
      url: "https://github.com/DeusData/codebase-memory-mcp",
      lang: "-",
      desc: "高性能代码智能 MCP 服务器，158 种语言，毫秒级查询"
    },
    {
      rank: 2,
      name: "calesthio/OpenMontage",
      url: "https://github.com/calesthio/OpenMontage",
      lang: "-",
      desc: "首个开源 Agent 视频制作系统，12 管道、52 工具、500+ Skills"
    },
    {
      rank: 3,
      name: "Panniantong/Agent-Reach",
      url: "https://github.com/Panniantong/Agent-Reach",
      lang: "-",
      desc: "让 AI 读取全网，一个 CLI 零 API 费用"
    },
    {
      rank: 4,
      name: "asgeirtj/system_prompts_leaks",
      url: "https://github.com/asgeirtj/system_prompts_leaks",
      lang: "-",
      desc: "各大 AI 系统提示词提取合集"
    },
    {
      rank: 5,
      name: "kunchenguid/no-mistakes",
      url: "https://github.com/kunchenguid/no-mistakes",
      lang: "-",
      desc: "防误提交的 git push 工具"
    },
    {
      rank: 6,
      name: "usestrix/strix",
      url: "https://github.com/usestrix/strix",
      lang: "-",
      desc: "开源 AI 渗透测试工具"
    },
    {
      rank: 7,
      name: "ogulcancelik/herdr",
      url: "https://github.com/ogulcancelik/herdr",
      lang: "-",
      desc: "终端 Agent 多路复用器"
    },
    {
      rank: 8,
      name: "stablyai/orca",
      url: "https://github.com/stablyai/orca",
      lang: "-",
      desc: "并行 Agent 开发环境"
    },
    {
      rank: 9,
      name: "Zackriya-Solutions/meetily",
      url: "https://github.com/Zackriya-Solutions/meetily",
      lang: "Rust",
      desc: "本地 AI 会议助手"
    },
    {
      rank: 10,
      name: "interviewstreet/hiring-agent",
      url: "https://github.com/interviewstreet/hiring-agent",
      lang: "-",
      desc: "评估和筛选简历的 AI Agent"
    }
  ],
  skills: [
    {
      rank: 1,
      name: "find-skills",
      installs: "190 万",
      source: "vercel-labs/skills",
      desc: "技能搜索引擎，在对话中查找并安装社区 Skills"
    },
    {
      rank: 2,
      name: "frontend-design",
      installs: "51.5 万",
      source: "anthropics/skills",
      desc: "提升 AI 生成 UI 的审美，告别「AI 风格」"
    },
    {
      rank: 3,
      name: "vercel-react-best-practices",
      installs: "45.9 万",
      source: "vercel-labs/agent-skills",
      desc: "React/Next.js 代码质量规范，45+ 条分级规则"
    },
    {
      rank: 4,
      name: "agent-browser",
      installs: "42.8 万",
      source: "vercel-labs/agent-browser",
      desc: "让 Agent 自动控制浏览器做网页操作和测试"
    },
    {
      rank: 5,
      name: "microsoft-foundry",
      installs: "37.7 万",
      source: "microsoft/azure-skills",
      desc: "Azure AI 基础设施与云服务编排"
    },
    {
      rank: 6,
      name: "web-design-guidelines",
      installs: "37.3 万",
      source: "vercel-labs/agent-skills",
      desc: "247 条网页设计规则，覆盖布局、色彩、间距"
    },
    {
      rank: 7,
      name: "remotion-best-practices",
      installs: "35.6 万",
      source: "remotion-dev/skills",
      desc: "用代码生成视频的最佳实践，效率提升 5 倍"
    },
    {
      rank: 8,
      name: "skill-creator",
      installs: "25.8 万",
      source: "anthropics/skills",
      desc: "元技能，将工作流封装成新的 SKILL.md"
    },
    {
      rank: 9,
      name: "caveman",
      installs: "22.3 万",
      source: "JuliusBrussee/caveman",
      desc: "极简「洞穴人风格」输出，节省 65% Token"
    },
    {
      rank: 10,
      name: "supabase-postgres-best-practices",
      installs: "21.7 万",
      source: "supabase/agent-skills",
      desc: "Supabase/Postgres 数据库设计规范"
    }
  ],
  skillRepos: [
    { name: "obra/superpowers", stars: "252K+", desc: "最流行的 Skills 框架，含 TDD、计划、子 Agent 隔离" },
    { name: "mattpocock/skills", stars: "85K+", desc: "TypeScript/前端工程实践技能集合" },
    { name: "anthropics/skills", stars: "40K+", desc: "Anthropic 官方技能仓库" },
    { name: "JuliusBrussee/caveman", stars: "快速增长", desc: "省 Token 的洞穴人技能" },
    { name: "alirezarezvani/claude-skills", stars: "热门", desc: "345 个跨领域技能合集" }
  ]
};