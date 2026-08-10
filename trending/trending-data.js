/* ========================================
   Trending Data - update weekly
   ======================================== */
const TRENDING_DATA = {
  updated: "2026-08-10",
  weekly: [
    {
      rank: 1,
      name: "bojieli/ai-agent-book",
      url: "https://github.com/bojieli/ai-agent-book",
      lang: "Python",
      desc: "系统化 AI Agent 教材，含全书正文、编译版 PDF 与分章配套代码",
      stars: "30,913"
    },
    {
      rank: 2,
      name: "microsoft/AI-For-Beginners",
      url: "https://github.com/microsoft/AI-For-Beginners",
      lang: "Jupyter Notebook",
      desc: "微软 12 周 AI 入门课程，24 节课覆盖 AI 基础知识与实践",
      stars: "60,815"
    },
    {
      rank: 3,
      name: "block/buzz",
      url: "https://github.com/block/buzz",
      lang: "Rust",
      desc: "蜂群思维协作通信平台，Rust 实现的群体智能交流工具",
      stars: "21,872"
    },
    {
      rank: 4,
      name: "zhaoxuya520/reverse-skill",
      url: "https://github.com/zhaoxuya520/reverse-skill",
      lang: "PowerShell",
      desc: "安全技能路由，Agent 安全攻防与逆向工程技能集",
      stars: "15,924"
    },
    {
      rank: 5,
      name: "virgiliojr94/book-to-skill",
      url: "https://github.com/virgiliojr94/book-to-skill",
      lang: "Python",
      desc: "把技术书 PDF 一键转成 Claude Code Skill，边工作边查阅",
      stars: "15,949"
    },
    {
      rank: 6,
      name: "ayghri/i-have-adhd",
      url: "https://github.com/ayghri/i-have-adhd",
      lang: "Python",
      desc: "防止编码 Agent 把答案埋进长输出的 Skill，输出更聚焦更易读",
      stars: "16,322"
    },
    {
      rank: 7,
      name: "alibaba/open-code-review",
      url: "https://github.com/alibaba/open-code-review",
      lang: "Go",
      desc: "阿里开源代码审查工具，LLM Agent 精准行级评论，内置安全规则集",
      stars: "18,463"
    },
    {
      rank: 8,
      name: "google/skills",
      url: "https://github.com/google/skills",
      lang: "Python",
      desc: "Google 官方 Agent Skills 仓库，覆盖 Google 产品与技术生态",
      stars: "16,597"
    },
    {
      rank: 9,
      name: "different-ai/openwork",
      url: "https://github.com/different-ai/openwork",
      lang: "TypeScript",
      desc: "AI 协作工作台，多 Agent 协同开发环境，支持实时协作编辑",
      stars: "20,690"
    },
    {
      rank: 10,
      name: "moeru-ai/airi",
      url: "https://github.com/moeru-ai/airi",
      lang: "TypeScript",
      desc: "自托管虚拟 AI 伴侣，实时语音对话，支持 Minecraft 与 Factorio 游戏交互",
      stars: "46,717"
    }
  ],
  monthly: [
    {
      rank: 1,
      name: "bytedance/deer-flow",
      url: "https://github.com/bytedance/deer-flow",
      lang: "Python",
      desc: "字节跳动开源 SuperAgent 框架，研究+编码+创作全流程，沙箱+记忆+工具链"
    },
    {
      rank: 2,
      name: "NousResearch/hermes-agent",
      url: "https://github.com/NousResearch/hermes-agent",
      lang: "Python",
      desc: "长期运行 AI Agent，从使用经验中形成记忆、创建技能并持续自我改进"
    },
    {
      rank: 3,
      name: "PrimeIntellect-ai/prime-agent",
      url: "https://github.com/PrimeIntellect-ai/prime-agent",
      lang: "TypeScript",
      desc: "自我改进的 RLM Agent，编码工作流与长期自治任务，持续学习优化"
    },
    {
      rank: 4,
      name: "TencentCloud/TencentDB-Agent-Memory",
      url: "https://github.com/TencentCloud/TencentDB-Agent-Memory",
      lang: "TypeScript",
      desc: "腾讯团队级 AI Agent 记忆中心，四类记忆资产：对话/技能/Wiki/代码图谱"
    },
    {
      rank: 5,
      name: "Leonxlnx/taste-skill",
      url: "https://github.com/Leonxlnx/taste-skill",
      lang: "-",
      desc: "改善 AI 生成界面设计质量的 Agent Skills 集合，告别模板化 AI 界面"
    },
    {
      rank: 6,
      name: "esengine/DeepSeek-Reasonix",
      url: "https://github.com/esengine/DeepSeek-Reasonix",
      lang: "Go",
      desc: "围绕 DeepSeek 前缀缓存优化的终端 AI 编程 Agent，单二进制部署"
    },
    {
      rank: 7,
      name: "cloudflare/computer",
      url: "https://github.com/cloudflare/computer",
      lang: "TypeScript",
      desc: "给 Agent 一台电脑，Cloudflare 远程浏览器自动化环境"
    },
    {
      rank: 8,
      name: "vitali87/code-graph-rag",
      url: "https://github.com/vitali87/code-graph-rag",
      lang: "Python",
      desc: "Monorepo 终极 RAG，知识图谱+AI 理解多语言代码库，支持 MCP Server"
    },
    {
      rank: 9,
      name: "msitarzewski/agency-agents",
      url: "https://github.com/msitarzewski/agency-agents",
      lang: "Shell",
      desc: "完整 AI 机构，从前端到社区的专家 Agent 集合，个性+流程+交付物"
    },
    {
      rank: 10,
      name: "diegosouzapw/OmniRoute",
      url: "https://github.com/diegosouzapw/OmniRoute",
      lang: "TypeScript",
      desc: "免费 AI 网关，160+ 提供商，Caveman 压缩节省 15-95% Token"
    }
  ],
  skills: [
    {
      rank: 1,
      name: "find-skills",
      installs: "251.5K",
      source: "vercel-labs/skills",
      desc: "技能搜索引擎，在对话中查找并安装社区 Skills，必装元技能"
    },
    {
      rank: 2,
      name: "vercel-react-best-practices",
      installs: "141.5K",
      source: "vercel-labs/agent-skills",
      desc: "React/Next.js 代码质量规范，57 条分级规则，直通生产标准"
    },
    {
      rank: 3,
      name: "web-design-guidelines",
      installs: "107.0K",
      source: "vercel-labs/agent-skills",
      desc: "100+ 条网页设计规则，覆盖布局、色彩、间距、无障碍"
    },
    {
      rank: 4,
      name: "frontend-design",
      installs: "159K stars",
      source: "anthropics/skills",
      desc: "提升 AI 生成 UI 审美，告别「AI 风格」，打造有辨识度的界面"
    },
    {
      rank: 5,
      name: "mcp-builder",
      installs: "74.5K",
      source: "anthropics/skills",
      desc: "搭建 MCP 服务器的官方 Skill，30 秒内生成完整服务器骨架"
    },
    {
      rank: 6,
      name: "skill-creator",
      installs: "37.4K",
      source: "anthropics/skills",
      desc: "把个人经验封装成可复用 Skill 的元技能，官方出品"
    },
    {
      rank: 7,
      name: "agent-browser",
      installs: "42.8K",
      source: "vercel-labs/agent-browser",
      desc: "让 Agent 自动控制浏览器做网页操作和端到端测试"
    },
    {
      rank: 8,
      name: "remotion-best-practices",
      installs: "35.6K",
      source: "remotion-dev/skills",
      desc: "用代码生成视频的最佳实践，效率提升 5 倍"
    },
    {
      rank: 9,
      name: "superpowers",
      installs: "248K stars",
      source: "obra/superpowers",
      desc: "计划→规格→TDD 完整开发流程，子 Agent 隔离，最热门 Skill 框架"
    },
    {
      rank: 10,
      name: "claude-mem",
      installs: "86K stars",
      source: "thedotmack/claude-mem",
      desc: "跨会话持久记忆，Claude 记住架构决策、命名约定和历史经验"
    }
  ],
  skillRepos: [
    { name: "obra/superpowers", stars: "248K+", desc: "最流行的 Skills 框架，含 TDD、计划、子 Agent 隔离" },
    { name: "mattpocock/skills", stars: "207K+", desc: "TypeScript/前端工程实践技能集合，含 Grill Me 等" },
    { name: "anthropics/skills", stars: "159K+", desc: "Anthropic 官方技能仓库，含 frontend-design、mcp-builder 等" },
    { name: "addyosmani/agent-skills", stars: "82.8K+", desc: "Google 工程总监的 Agent 技能集，生产级工程实践" },
    { name: "google/skills", stars: "16.6K+", desc: "Google 官方 Agent Skills 仓库，覆盖 Google 产品与技术" }
  ]
};