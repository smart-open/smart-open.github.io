/* ========================================
   Trending Data - update weekly
   数据调研日期：2026-10-12（本周 10-06 ~ 10-12）
   来源：GitHub Trending 周榜/月榜、GitHub Repositories API、skills.sh 排行榜
   ======================================== */
const TRENDING_DATA = {
  updated: "2026-10-12",
  weekly: [
    {
      rank: 1,
      name: "morluto/rea",
      url: "https://github.com/morluto/rea",
      lang: "TypeScript",
      desc: "让 Agent 逆向工程任意软件：从应用行为到原生二进制，无需源码即可解释功能原理与证据边界，本周爆增 40k+ stars",
      stars: "161.3k"
    },
    {
      rank: 2,
      name: "boykopovar/AnyPS5",
      url: "https://github.com/boykopovar/AnyPS5",
      lang: "C++",
      desc: "PS5 游戏文件自动转换工具，让其原生运行在 Linux 与 Windows 上，连续两周霸榜，本周再增 8.8k stars",
      stars: "26.8k"
    },
    {
      rank: 3,
      name: "mattpocock/skills",
      url: "https://github.com/mattpocock/skills",
      lang: "Shell",
      desc: "「真实工程师」Agent Skills 技能集，本周新增 4.4k stars，skills.sh Top10 仍占 3 席",
      stars: "286.2k"
    },
    {
      rank: 4,
      name: "storytold/artcraft",
      url: "https://github.com/storytold/artcraft",
      lang: "Rust",
      desc: "面向艺术家与电影人的 AI 图像/视频创作引擎：先 3D 布景再生成，角色与机位可复现",
      stars: "24.0k"
    },
    {
      rank: 5,
      name: "cathrynlavery/diagram-design",
      url: "https://github.com/cathrynlavery/diagram-design",
      lang: "HTML",
      desc: "编辑级图表设计 Skill，44 种图表类型，自包含 HTML+SVG 输出，拒绝 Mermaid 垃圾图",
      stars: "50.2k"
    },
    {
      rank: 6,
      name: "tester-army/e2e",
      url: "https://github.com/tester-army/e2e",
      lang: "TypeScript",
      desc: "面向 Web 与移动应用的下一代 e2e 测试框架，AI 编码时代的测试新基建",
      stars: "8.4k"
    },
    {
      rank: 7,
      name: "DuarteSantos8/openGym",
      url: "https://github.com/DuarteSantos8/openGym",
      lang: "JavaScript",
      desc: "私有健康监测仪表盘：训练计划编排、运动记录与体能状态追踪，本周再增 1.7k stars",
      stars: "10.0k"
    },
    {
      rank: 8,
      name: "Panniantong/Agent-Reach",
      url: "https://github.com/Panniantong/Agent-Reach",
      lang: "Python",
      desc: "让 AI Agent 用一条命令行指令浏览并查询主流社交媒体，Agent 触达外部信息层的代表",
      stars: "95.5k"
    },
    {
      rank: 9,
      name: "heygen-com/hyperframes",
      url: "https://github.com/heygen-com/hyperframes",
      lang: "TypeScript",
      desc: "写 HTML 直接渲染可播放视频文件，为 AI Agent 工作流优化的视频生成框架",
      stars: "60.3k"
    },
    {
      rank: 10,
      name: "thedotmack/claude-mem",
      url: "https://github.com/thedotmack/claude-mem",
      lang: "TypeScript",
      desc: "跨编码会话的长期项目记忆 Agent 插件，自动总结过往动作加速后续任务，累计逼近 100k stars",
      stars: "99.2k"
    }
  ],
  monthly: [
    {
      rank: 1,
      name: "bilawalsidhu/gods-eye-view",
      url: "https://github.com/bilawalsidhu/gods-eye-view",
      lang: "JavaScript",
      desc: "浏览器中的间谍卫星模拟器，基于真实开源空间数据与照片级 3D 地球（本月 +30.2k）"
    },
    {
      rank: 2,
      name: "tt-a1i/archify",
      url: "https://github.com/tt-a1i/archify",
      lang: "JavaScript",
      desc: "把任意想法、计划或代码库变成精美交互式架构图表的 Agent Skill（本月 +28.8k）"
    },
    {
      rank: 3,
      name: "DietrichGebert/ponytail",
      url: "https://github.com/DietrichGebert/ponytail",
      lang: "JavaScript",
      desc: "让 AI Agent 像房间里最懒的资深工程师一样思考：能不写的代码就不写（本月 +28.6k）"
    },
    {
      rank: 4,
      name: "ayghri/i-have-adhd",
      url: "https://github.com/ayghri/i-have-adhd",
      lang: "Python",
      desc: "专治编码 Agent 把答案埋进长篇输出的 Skill，ADHD 友好排版，结论直给（本月 +27.1k）"
    },
    {
      rank: 5,
      name: "affaan-m/ECC",
      url: "https://github.com/affaan-m/ECC",
      lang: "JavaScript",
      desc: "Agent 运行框架的性能优化系统：记忆、安全与研究驱动的开发方式，累计 277.5k stars（本月 +25.1k）"
    },
    {
      rank: 6,
      name: "vectorize-io/hindsight",
      url: "https://github.com/vectorize-io/hindsight",
      lang: "Python",
      desc: "会学习的 Agent 记忆框架，持续保留上下文信息，月榜稳定在前列（本月 +23.8k）"
    },
    {
      rank: 7,
      name: "alibaba/open-code-review",
      url: "https://github.com/alibaba/open-code-review",
      lang: "Go",
      desc: "阿里混合架构代码评审：确定性流水线 + LLM Agent，行级精确评论与多语言规则集（本月 +22.4k）"
    },
    {
      rank: 8,
      name: "paperclipai/paperclip",
      url: "https://github.com/paperclipai/paperclip",
      lang: "TypeScript",
      desc: "开源的工作场景 Agent 管理应用，团队统一调度与监控多个 Agent 的入口级产品（本月 +18.2k）"
    },
    {
      rank: 9,
      name: "heygen-com/hyperframes",
      url: "https://github.com/heygen-com/hyperframes",
      lang: "TypeScript",
      desc: "写 HTML 直接渲染可播放视频文件，为 AI Agent 工作流优化的视频生成框架（本月 +13.6k）"
    },
    {
      rank: 10,
      name: "JustVugg/colibri",
      url: "https://github.com/JustVugg/colibri",
      lang: "C",
      desc: "纯 C 零依赖，在自有硬件上运行前沿 MoE 大模型，专家权重直接从磁盘流式加载（本月 +13.2k）"
    }
  ],
  skills: [
    {
      rank: 1,
      name: "find-skills",
      installs: "2.5M",
      source: "vercel-labs/skills",
      desc: "按任务发现并安装 Agent Skills，生态发现层的基础设施，安装量断层领先"
    },
    {
      rank: 2,
      name: "frontend-design",
      installs: "660.2K",
      source: "anthropics/skills",
      desc: "Anthropic 官方前端设计 Skill，高质量 UI 生成的事实标准"
    },
    {
      rank: 3,
      name: "vercel-react-best-practices",
      installs: "549.1K",
      source: "vercel-labs/agent-skills",
      desc: "Vercel 官方 React 最佳实践 Skill，新仓库两个 Skill 一周冲进 Top6"
    },
    {
      rank: 4,
      name: "grill-me",
      installs: "542.0K",
      source: "mattpocock/skills",
      desc: "用高强度追问打磨计划与设计，动手前先与 Agent 对齐需求"
    },
    {
      rank: 5,
      name: "agent-browser",
      installs: "540.7K",
      source: "vercel-labs/agent-browser",
      desc: "给 Agent 的浏览器自动化能力，网页操作类任务的基础组件"
    },
    {
      rank: 6,
      name: "web-design-guidelines",
      installs: "461.3K",
      source: "vercel-labs/agent-skills",
      desc: "Vercel 官方 Web 界面设计规范 Skill，与 frontend-design 形成设计双雄"
    },
    {
      rank: 7,
      name: "grill-with-docs",
      installs: "456.5K",
      source: "mattpocock/skills",
      desc: "grill-me 的工程增强版：追问同时构建项目共享语言，内联更新术语表与 ADR 文档"
    },
    {
      rank: 8,
      name: "microsoft-foundry",
      installs: "451.5K",
      source: "microsoft/azure-skills",
      desc: "微软官方 Azure Skills 仓库的领衔 Skill，整仓安装量已超 6.2M，大厂批量进场"
    },
    {
      rank: 9,
      name: "azure-ai",
      installs: "448.2K",
      source: "microsoft/azure-skills",
      desc: "微软 Azure AI 场景 Skill，官方插件包覆盖部署、Foundry、迁移等全链路"
    },
    {
      rank: 10,
      name: "improve-codebase-architecture",
      installs: "448.2K",
      source: "mattpocock/skills",
      desc: "扫描代码库寻找模块深化机会并给出改进候选，官方建议每隔几天跑一次"
    }
  ],
  skillRepos: [
    { name: "obra/superpowers", stars: "296.4K+", desc: "Agentic Skills 框架与软件开发方法论，稳居 Skill 集合仓库第一" },
    { name: "mattpocock/skills", stars: "286.2K+", desc: "面向真实工程师的技能集，持续霸榜 skills.sh（Top10 占 3 席）" },
    { name: "anthropics/skills", stars: "180.3K+", desc: "Anthropic 官方 Agent Skills 公共仓库，持续更新 claude-api 等 Skill" },
    { name: "vercel-labs/skills", stars: "33.9K+", desc: "开放的 Agent Skills 安装工具（npx skills），生态分发入口" },
    { name: "tech-leads-club/agent-skills", stars: "7.0K+", desc: "面向专业 AI 编码 Agent 的安全校验 Skill 注册表" },
    { name: "microsoft/azure-skills", stars: "1.6K+", desc: "微软官方 Azure 场景 Agent 插件包，上线后安装量狂飙至 6.2M，大厂生态卡位" }
  ]
};
