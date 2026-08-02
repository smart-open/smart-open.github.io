/* ========================================
   Trending Data — update weekly
   ======================================== */
const TRENDING_DATA = {
  updated: "2026-07-22",
  weekly: [
    {
      rank: 1,
      name: "MadsLorentzen/ai-job-search",
      url: "https://github.com/MadsLorentzen/ai-job-search",
      lang: "TypeScript",
      desc: "基于 Claude Code 的 AI 求职自动化框架，本地运行，定制简历+求职信+面试辅导",
      stars: "13,195"
    },
    {
      rank: 2,
      name: "OpenCut-app/OpenCut",
      url: "https://github.com/OpenCut-app/OpenCut",
      lang: "TypeScript",
      desc: "开源 CapCut 替代品，AI 辅助视频剪辑，持续走红的长线项目",
      stars: "7,247"
    },
    {
      rank: 3,
      name: "iOfficeAI/OfficeCLI",
      url: "https://github.com/iOfficeAI/OfficeCLI",
      lang: "C#",
      desc: "面向 AI Agent 的免装 Office 自动化工具，读写 Word/Excel/PowerPoint",
      stars: "7,129"
    },
    {
      rank: 4,
      name: "Graphify-Labs/graphify",
      url: "https://github.com/Graphify-Labs/graphify",
      lang: "Python",
      desc: "把代码/文档转成可查询知识图谱的 Agent Skill，兼容主流编码 Agent",
      stars: "6,724"
    },
    {
      rank: 5,
      name: "stablyai/orca",
      url: "https://github.com/stablyai/orca",
      lang: "TypeScript",
      desc: "管理并行编码 Agent 集群的 ADE 开发环境，桌面+移动端",
      stars: "5,724"
    },
    {
      rank: 6,
      name: "Zackriya-Solutions/meetily",
      url: "https://github.com/Zackriya-Solutions/meetily",
      lang: "Rust",
      desc: "隐私优先的本地 AI 会议助手，4x 实时转录+说话人识别+Ollama 总结",
      stars: "4,389"
    },
    {
      rank: 7,
      name: "diegosouzapw/OmniRoute",
      url: "https://github.com/diegosouzapw/OmniRoute",
      lang: "TypeScript",
      desc: "免费 AI 网关，231+ 提供商，支持 Caveman 压缩节省 15%-95% Token",
      stars: "4,297"
    },
    {
      rank: 8,
      name: "HKUDS/Vibe-Trading",
      url: "https://github.com/HKUDS/Vibe-Trading",
      lang: "Python",
      desc: "个人交易 Agent，AI 驱动的量化交易自动化",
      stars: "4,252"
    },
    {
      rank: 9,
      name: "usestrix/strix",
      url: "https://github.com/usestrix/strix",
      lang: "Python",
      desc: "开源 AI 渗透测试工具，自动发现安全漏洞并生成修复代码",
      stars: "3,090"
    },
    {
      rank: 10,
      name: "TencentCloud/CubeSandbox",
      url: "https://github.com/TencentCloud/CubeSandbox",
      lang: "Rust",
      desc: "面向 AI Agent 的即时、并发、安全、轻量级沙箱",
      stars: "1,944"
    }
  ],
  monthly: [
    {
      rank: 1,
      name: "asgeirtj/system_prompts_leaks",
      url: "https://github.com/asgeirtj/system_prompts_leaks",
      lang: "-",
      desc: "各大 AI 系统提示词提取合集，覆盖 Claude/GPT-5.6/Gemini 3.5 等"
    },
    {
      rank: 2,
      name: "Panniantong/Agent-Reach",
      url: "https://github.com/Panniantong/Agent-Reach",
      lang: "-",
      desc: "让 Agent 读取全网，CLI 零 API 费用，支持 Twitter/Reddit/YouTube/B站"
    },
    {
      rank: 3,
      name: "usestrix/strix",
      url: "https://github.com/usestrix/strix",
      lang: "Python",
      desc: "开源 AI 渗透测试工具，Agent 自主扫描漏洞并修复"
    },
    {
      rank: 4,
      name: "calesthio/OpenMontage",
      url: "https://github.com/calesthio/OpenMontage",
      lang: "-",
      desc: "首个开源 Agent 音视频生产系统，12 管道、52 工具、500+ Skills"
    },
    {
      rank: 5,
      name: "DeusData/codebase-memory-mcp",
      url: "https://github.com/DeusData/codebase-memory-mcp",
      lang: "-",
      desc: "高性能代码智能 MCP 服务器，毫秒级图查询，减少 99% Token 消耗"
    },
    {
      rank: 6,
      name: "topoteretes/cognee",
      url: "https://github.com/topoteretes/cognee",
      lang: "-",
      desc: "AI Agent 长期记忆管理平台，构建持久化知识图谱实现跨会话学习"
    },
    {
      rank: 7,
      name: "alibaba/page-agent",
      url: "https://github.com/alibaba/page-agent",
      lang: "JavaScript",
      desc: "网页内 GUI 代理，用自然语言操控浏览器点击、输入与导航"
    },
    {
      rank: 8,
      name: "MadsLorentzen/ai-job-search",
      url: "https://github.com/MadsLorentzen/ai-job-search",
      lang: "TypeScript",
      desc: "基于 Claude Code 的本地 AI 求职自动化框架"
    },
    {
      rank: 9,
      name: "stablyai/orca",
      url: "https://github.com/stablyai/orca",
      lang: "TypeScript",
      desc: "并行 Agent 协同编码 ADE，支持管理 Agent 舰队"
    },
    {
      rank: 10,
      name: "simplex-chat/simplex-chat",
      url: "https://github.com/simplex-chat/simplex-chat",
      lang: "-",
      desc: "无标识符隐私聊天网络，无手机号、邮箱、公钥 ID"
    }
  ],
  skills: [
    {
      rank: 1,
      name: "find-skills",
      installs: "192 万",
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
      name: "azure-validate",
      installs: "37.3 万",
      source: "microsoft/azure-skills",
      desc: "Azure 资源配置和服务校验，适合云工程自动化"
    },
    {
      rank: 8,
      name: "remotion-best-practices",
      installs: "35.6 万",
      source: "remotion-dev/skills",
      desc: "用代码生成视频的最佳实践，效率提升 5 倍"
    },
    {
      rank: 9,
      name: "azure-hosted-copilot-sdk",
      installs: "34.6 万",
      source: "microsoft/azure-skills",
      desc: "基于 Azure 构建托管 Copilot/Agent 应用"
    },
    {
      rank: 10,
      name: "azure-compute",
      installs: "31.7 万",
      source: "microsoft/azure-skills",
      desc: "Azure 计算资源创建与管理自动化"
    }
  ],
  skillRepos: [
    { name: "obra/superpowers", stars: "252K+", desc: "最流行的 Skills 框架，含 TDD、计划、子 Agent 隔离" },
    { name: "mattpocock/skills", stars: "176K+", desc: "TypeScript/前端工程实践技能集合" },
    { name: "Graphify-Labs/graphify", stars: "87K+", desc: "代码/文档转知识图谱的 Agent Skill" },
    { name: "addyosmani/agent-skills", stars: "68K+", desc: "Google 工程总监的 Agent 技能集" },
    { name: "anthropics/skills", stars: "40K+", desc: "Anthropic 官方技能仓库" }
  ]
};
