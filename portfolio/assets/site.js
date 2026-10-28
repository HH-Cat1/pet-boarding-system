const mail = "17760379772@163.com";
const nav = [
  ["product", "产品", "Product"],
  ["operations", "运营", "Operations"],
  ["data", "数据分析", "Data"],
];

const sharedIntro = {
  product: "我是广东工业大学大数据管理与应用专业本科生。关注如何从真实业务流程和用户需求出发，把问题梳理成清楚、可落地的产品方案。",
  operations: "我是广东工业大学大数据管理与应用专业本科生。参与过推广实践、校园就业活动和共创团队协作，习惯用清晰的分工、过程记录和复盘推进事情。",
  data: "我是广东工业大学大数据管理与应用专业本科生。关注数据从采集、整理到解释和行动的完整过程，也在练习把分析结论写成便于协作和决策的内容。",
};

function skills(groups) {
  return `<section class="section skills-section" id="skills"><div class="section-heading"><div><span class="eyebrow">TOOLS & PRACTICE</span><h2>工具与能力</h2></div><p>按当前方向呈现相关工具与实际练习，不以熟练度标签代替具体工作。</p></div><div class="skill-grid">${groups.map(([title, text, tags]) => `<article class="skill-card"><span class="skill-index">${title}</span><p>${text}</p><div class="tags">${tags.map(t => `<span>${t}</span>`).join("")}</div></article>`).join("")}</div></section>`;
}

function footer() {
  return `<footer class="footer"><div><span class="footer-mark">何</span><span>何梓奕 <small>· 个人作品集</small></span></div><a href="mailto:${mail}">${mail}<span aria-hidden="true"> ↗</span></a></footer>`;
}

function navigation(active) {
  const current = nav.find(([key]) => key === active)?.[1] || "个人作品";
  return `<header class="topbar"><div class="wordmark"><span class="monogram">何</span><span>何梓奕<small>个人作品集</small></span></div><div class="page-context"><small>左右滑动翻页</small><b>${current}</b></div><a class="contact-top" href="mailto:${mail}">联系我 <span>↗</span></a></header>`;
}

const petFlow = `<div class="flow-board" aria-label="寄养业务流程示意图"><div class="flow-line"></div>${[["01", "建档", "主人 · 宠物"], ["02", "预约入住", "订单 · 笼位"], ["03", "寄养服务", "记录 · 库存"], ["04", "结账退房", "费用 · 释放"]].map(([n, t, d]) => `<div class="flow-node"><span>${n}</span><b>${t}</b><small>${d}</small></div>`).join("")}<div class="flow-caption">从一次预约到完成结账，状态随业务推进</div></div>`;

const pages = {
  product: {
    section: "PRODUCT THINKING",
    label: "产品设计 · 业务梳理 · 方案落地",
    title: "把需求放回真实的<br><em>使用场景里。</em>",
    intro: sharedIntro.product,
    heroNote: "从业务规则到用户路径<br>让复杂问题变得可理解",
    heroVisual: `<div class="product-visual"><div class="visual-note">PRODUCT / 01</div><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="orbit-center"><span>需求</span><b>→</b><span>方案</span></div><div class="orbit-label label-a">用户任务</div><div class="orbit-label label-b">业务规则</div><div class="orbit-label label-c">落地路径</div><div class="visual-foot"><span>观察流程</span><i></i><span>设计功能</span><i></i><span>验证约束</span></div></div>`,
    lead: "两个项目，一项从业务流程拆解系统功能，一项从用户研究推演产品方案。",
    cases: [
      { number:"01", type:"独立个人项目 · 系统设计与实现", title:"宠物寄养服务管理系统", summary:"将预约、入住、寄养服务、库存与结账连接成一条清楚的业务链。重点是让信息能追溯、规则能执行、不同角色各自处理合适的事项。", body:`<div class="case-columns"><div><h4>业务问题</h4><p>纸面和分散表格难以同步主人、宠物、笼位与消费信息；人工核算费用也容易漏项。系统围绕记录分散、状态不一致和结账易错这些问题展开。</p><h4>用户与流程</h4><p>主人提交宠物资料和预约；员工办理入住、记录服务与商品；管理员维护基础数据并查看经营统计。权限按角色划分，主人仅查阅本人资料和账单。</p><h4>功能方案</h4><p>覆盖主人与宠物建档、预约、笼位分配、入住、服务记录、商品销售和库存扣减；退房时汇总笼位租金、服务与商品费用，抵扣押金并释放笼位。</p></div><div><h4>数据设计与实现</h4><p>以主人、宠物、笼位、寄养订单、服务、商品销售和员工等核心实体关联业务记录。通过主外键、状态约束与库存校验维护数据关系，统计查询覆盖营收、在住宠物、服务与员工绩效。系统采用 Python 前后端与数据库实现。</p><div class="entity-map" aria-label="核心实体关系示意图"><div class="entity-row"><span>主人</span><b>拥有</b><span>宠物</span></div><div class="entity-row"><span>宠物</span><b>关联</b><span>寄养订单</span></div><div class="entity-row"><span>寄养订单</span><b>产生</b><span>服务记录 · 商品销售</span></div><div class="entity-row"><span>订单</span><b>分配 / 结算</b><span>笼位 · 押金</span></div><small>核心实体关系示意 · 省略字段与非核心关系</small></div></div></div>${petFlow}<div class="case-actions"><a class="button button-primary" href="https://hh-cat1.github.io/pet-boarding-system/" target="_blank" rel="noreferrer">打开在线演示 <span>↗</span></a><span class="micro-note">个人项目演示 · 非商业运营系统</span></div>` },
      { number:"02", type:"腾讯未来产品经历创造营 · AI 陪伴产品方案设计", title:"AI 情感陪伴产品方案", summary:"以安全可信、场景化陪伴作为方案定位，先理解不同用户要完成的事，再决定首版应该解决什么问题。此项目为产品方案，不代表已上线或经过真实用户验证。", body:`<div class="research-strip"><div><strong>8 组</strong><span>用户访谈</span></div><div><strong>326 份</strong><span>问卷样本</span></div><div><strong>5 款</strong><span>竞品分析</span></div><small>项目调研记录</small></div><div class="persona-strip"><article><span>PERSONA 01</span><b>情绪倾听型</b><p>在孤独或焦虑时，寻找安全、不评判的倾听。</p></article><article><span>PERSONA 02</span><b>角色共创型</b><p>希望与角色或世界观持续互动、共同创作。</p></article><article><span>PERSONA 03</span><b>成长辅助型</b><p>需要计划、提醒与学习工作的轻量支持。</p></article></div><div class="story-steps"><article><span>01 / 研究发现</span><h4>陪伴需要具体而可信</h4><p>围绕情绪倾听、角色共创和成长辅助进行用户分层，整理 Persona、JTBD 与用户旅程，比较不同场景下的期待和顾虑。</p></article><article><span>02 / 核心问题</span><h4>理解连续性与回应质量</h4><p>方案聚焦记忆连续性、回应模板化，以及用户对安全和健康情感投入的担忧。</p></article><article><span>03 / 产品定位</span><h4>安全可信、场景化陪伴</h4><p>围绕情绪树洞与成长陪伴展开，让倾听和具体帮助并行；明确 AI 是情感补充，不替代现实关系或专业支持。</p></article><article><span>04 / 方案与优先级</span><h4>用 RICE 排清先后</h4><p>把情绪树洞、今日心情引导与计划提醒纳入优先讨论，并将多模态沉浸等能力放到后续阶段评估。</p></article><article><span>05 / MVP 与迭代</span><h4>先验证“被理解”和“被帮助”</h4><p>方案以基础倾听、轻量记忆和成长陪伴构成 MVP，再根据激活、留存与健康护栏规划后续迭代。文中指标均为方案设定，非实测结果。</p></article></div><div class="safety-note"><span>设计边界</span><p>将隐私保护、未成年人模式、危机识别与现实求助引导作为方案中的安全设计内容，关注健康的情感投入。</p></div>` },
    ],
    groups: [["01 · 产品方法", "从业务流程、角色任务和规则约束整理功能，再用用户研究与优先级方法组织产品方案。", ["需求梳理", "用户旅程", "Persona / JTBD", "RICE"]], ["02 · 数据与产品分析", "在调研、台账和方案分析中使用数据工具；系统项目涉及 Python 前后端与数据库。AI 工具用于信息整理、调研与编码辅助。", ["Python", "Excel", "数据库", "数据可视化", "ChatGPT", "Codex", "WorkBuddy"]], ["03 · 视觉内容制作", "用于视觉内容制作与视频剪辑的工具，按具体任务配合使用。", ["Photoshop（PS）", "剪映"]]],
    closing: "让复杂的过程，回到清楚的产品选择。",
  },
  operations: {
    section: "OPERATIONS IN PRACTICE",
    label: "推广执行 · 活动统筹 · 团队协作",
    title: "把计划拆成行动，<br><em>把行动接成结果。</em>",
    intro: sharedIntro.operations,
    heroNote: "目标清楚 · 协作顺畅<br>进度可见 · 复盘可用",
    heroVisual: `<div class="ops-visual"><div class="visual-note">OPERATIONS / 02</div><div class="ops-stamp">从目标<br>到交付</div><div class="ops-track"><div><span>01</span><b>拆解目标</b><small>对象与节奏</small></div><div><span>02</span><b>协同执行</b><small>分工与跟进</small></div><div><span>03</span><b>记录复盘</b><small>数据与沉淀</small></div></div><div class="ops-bars"><i style="--h:36%"></i><i style="--h:58%"></i><i style="--h:46%"></i><i style="--h:82%"></i><i style="--h:66%"></i><i style="--h:100%"></i><i style="--h:74%"></i></div><div class="ops-bars-label">过程看板示意 · 不代表项目数据</div></div>`,
    lead: "从渠道推广到校园活动和团队任务，关注目标、执行过程与交付复盘。",
    cases: [
      { number:"01", type:"网易 · 春耕计划实践", title:"用推广台账支持策略调整", summary:"围绕目标用户搭建推广数据信息台账，将用户数据整理、渠道选择与内容执行接起来。", body:`<div class="ops-case-grid"><div class="ops-stage"><span>目标与对象</span><p>面向春耕计划的目标用户开展推广。</p></div><div class="ops-stage"><span>策略</span><p>根据用户数据制定渠道投放策略，持续观察内容表现并调整推广方向。</p></div><div class="ops-stage"><span>执行动作</span><p>用 Excel 及 AI 工具整理推广数据、输出用户报告；AI 辅助文案创作、素材设计与数据初筛。</p></div></div><div class="result-band"><div><b>24%</b><span>内容点击率提升<br>简历记录的实际结果</span></div><div><b>1200+</b><span>目标用户覆盖<br>简历记录的实际结果</span></div><p>复盘方向：结合台账观察渠道与内容表现，为后续推广策略调整提供依据。</p></div>` },
      { number:"02", type:"校园就业活动 · 活动统筹", title:"把多部门协作落到现场流程", summary:"参与校园就业宣讲活动统筹，从宣传物料到现场执行和应急预案，协同多个部门完成活动。", body:`<div class="ops-case-grid"><div class="ops-stage"><span>目标与对象</span><p>服务校园就业宣讲活动的组织与参与同学。</p></div><div class="ops-stage"><span>策略</span><p>让宣传、现场执行和部门协同围绕同一套流程推进。</p></div><div class="ops-stage"><span>执行动作</span><p>统筹 20 余场活动；对接 3 个部门；参与宣传物料设计、现场流程安排、应急预案制定。</p></div></div><div class="result-band event-result"><div><b>20+</b><span>场宣讲活动<br>简历记录</span></div><div><b>3 个</b><span>协同部门<br>简历记录</span></div><p>复盘沉淀通用模板，支持后续活动复用；宣传点击表现有提升描述，简历未提供具体比例。</p></div>` },
      { number:"03", type:"30 人校园共创团队 · 浩鲸云计算科技有限公司 AI 产品智能研发部", title:"让协作进度看得见", summary:"通过分层任务拆解和周度数据看板协调团队执行，根据看板发现低效环节后调整分工与协作节奏。", body:`<div class="team-board"><div class="team-board-head"><span>周度任务看板 · 方法示意</span><span>任务 → 负责人 → 进度</span></div><div class="team-row"><span>任务拆分</span><i><b style="width:92%"></b></i><small>分层</small></div><div class="team-row"><span>周度跟进</span><i><b style="width:74%"></b></i><small>可视</small></div><div class="team-row"><span>协作调整</span><i><b style="width:84%"></b></i><small>迭代</small></div><small class="board-foot">示意图仅表达工作方法，不是原始项目看板截图</small></div><div class="result-band"><div><b>100%</b><span>任务按时交付率<br>简历记录的实际结果</span></div><div><b>40%</b><span>团队执行效率提升<br>简历记录的实际结果</span></div><p>复盘围绕看板暴露的低效环节，动态优化任务分工和协作节奏。</p></div>` },
    ],
    groups: [["01 · 执行与协同", "把目标拆成可跟进的任务，围绕现场流程、团队分工和应急准备协作。", ["任务拆解", "活动统筹", "跨部门协同", "周度看板"]], ["02 · 数据与复盘", "用表格台账整理推广信息、查看内容表现，并把执行经验整理为复用模板。实践中用 AI 辅助文案、素材设计和数据初筛；其他 AI 工具按需用于信息整理与编码辅助。", ["Excel", "数据台账", "数据复盘", "ChatGPT", "Codex", "WorkBuddy"]], ["03 · 视觉内容制作", "用于视觉内容制作与视频剪辑的工具；案例中参与宣传物料设计，不将工具使用描述为额外商业成果。", ["Photoshop（PS）", "剪映"]]],
    closing: "每次执行，都为下一次留下可复用的经验。",
  },
  data: {
    section: "DATA & DECISIONS",
    label: "数据处理 · 指标设计 · 分析支持",
    title: "从数据里找线索，<br><em>让判断有据可循。</em>",
    intro: sharedIntro.data,
    heroNote: "采集与整理<br>分析与解释<br>指标与行动",
    heroVisual: `<div class="data-visual"><div class="visual-note">DATA / 03</div><div class="data-axis"><span>数据工作路径</span><i></i></div><div class="data-flow">${[["A", "多源输入", "问卷 · 台账"], ["B", "整理处理", "清洗 · 校验"], ["C", "分析表达", "指标 · 图表"], ["D", "支持行动", "报告 · 迭代"]].map(([n,t,d])=>`<div><b>${n}</b><strong>${t}</strong><small>${d}</small></div>`).join("")}</div><div class="data-foot"><span>口径先明确</span><i></i><span>结论有来源</span></div></div>`,
    lead: "一项调研分析关注多源数据如何形成研究材料；一项产品方案展示如何从指标走向实验决策。",
    cases: [
      { number:"01", type:"独立个人项目 · 数据库设计与 Python 系统实现", title:"宠物寄养服务管理系统：从业务规则设计关系数据", summary:"以 MySQL 数据库为核心，将寄养业务拆分为可关联、可校验的数据实体，让预约、服务消费和结账统计沿着同一套数据关系运转。", body:`<div class="db-spotlight"><div><span>数据库重点</span><b>MySQL</b><small>关系建模 · 约束设计 · 业务查询</small></div><p>Python 前后端连接关系数据；页面与系统实现以 Python 为准。将主人、宠物、笼位、订单、员工、服务和商品销售建模关联，避免同一信息在多处重复维护。</p></div><div class="entity-map db-entity-map"><div class="entity-row"><span>主人</span><b>1 → N</b><span>宠物</span></div><div class="entity-row"><span>宠物</span><b>1 → N</b><span>寄养订单</span></div><div class="entity-row"><span>寄养订单</span><b>1 → N</b><span>服务记录 · 商品明细</span></div><div class="entity-row"><span>笼位 / 员工</span><b>关联</b><span>入住与服务执行</span></div><small>核心实体关系示意 · 省略字段与非核心关系</small></div><div class="case-columns db-columns"><div><h4>关系设计</h4><p>按主人、宠物、笼位规格、订单、服务项目、商品、员工和消费明细拆分实体，通过主键与外键表达归属和业务联系。报告采用规范化设计思路，减少重复数据并维护信息一致。</p><h4>完整性约束</h4><p>用键关系和业务约束降低无效记录：笼位占用后不可重复分配；商品销售需核对库存；主人仅查询本人宠物、订单与账单。</p></div><div><h4>围绕数据的业务查询</h4><p>按日期、订单、员工与商品汇总营收，查询在住宠物、服务消费与员工绩效。结账按笼位日租、实际入住天数、服务与商品金额核算，再抵扣押金。</p><h4>实现范围</h4><p>系统包含建档、预约、入住、服务记录、商品库存、费用结算和角色权限。作为独立个人项目展示，非商用系统。</p></div></div><div class="case-actions"><a class="button button-primary" href="https://hh-cat1.github.io/pet-boarding-system/" target="_blank" rel="noreferrer">打开在线演示 <span>↗</span></a><span class="micro-note">Python 前后端 · MySQL 数据库</span></div>` },
      { number:"02", type:"新文科项目 · 耕地保护政策调研数据分析", title:"把多源调研材料整理成研究依据", summary:"担任项目数据分析负责人，结合区域调研问卷与土地统计资料，完成数据整理、分析和可视化表达。", body:`<div class="analysis-flow"><div><span>01</span><b>多源收集</b><small>区域问卷<br>土地统计资料</small></div><i>→</i><div><span>02</span><b>处理与校验</b><small>文本提取<br>清洗 · 异常值处理</small></div><i>→</i><div><span>03</span><b>分析与比较</b><small>描述统计<br>相关性 · 区域差异</small></div><i>→</i><div><span>04</span><b>研究输出</b><small>图表<br>专题分析报告</small></div></div><div class="case-columns"><div><h4>方法与工具</h4><p>使用 Python、Excel，并借助 WorkBuddy 搭建 AI Agent 工作流，辅助批量完成问卷文本提取、数据清洗、异常值剔除、描述性统计与相关性分析。</p><h4>分析表达</h4><p>将不同区域的耕地利用差异可视化，形成数据分析图表和专题报告。</p></div><div><h4>研究支持</h4><p>基于分析结果提炼政策优化建议，为项目论文、成果汇报和课题结项提供定量支撑。</p><div class="data-integrity"><span>样本说明</span><p>简历仅记载“数百份”田野调研样本，页面不补写精确数量或具体统计结论。</p></div></div></div>` },
      { number:"03", type:"腾讯未来产品经历创造营 · AI 陪伴产品方案设计", title:"为 AI 陪伴产品搭建数据验证闭环", summary:"数据岗版方案围绕“如何度量、如何验证、如何优化”展开。指标、埋点与实验均为方案设计，不代表已有线上数据或实测效果。", body:`<div class="north-star"><span>方案定义 · 北极星指标</span><b>WAU-HEI</b><p>周活跃且完成 ≥3 次具有实质情绪或功能价值会话的去重用户数。</p><small>按方案口径定义 · 非实际线上指标</small></div><div class="metric-tree"><div class="metric-root">北极星：WAU-HEI</div><div class="metric-branches"><article><b>活跃与留存</b><span>WAU · D1 / D7 / D30 · WAU/MAU</span><small>按新老用户、渠道、人群与功能下钻</small></article><article><b>转化与收益</b><span>注册转化 · 付费率 · 订阅留存</span><small>连接行为数据与订单口径</small></article><article><b>算力成本</b><span>推理成本 ÷ 收入</span><small>在成本与增长之间持续观察</small></article><article><b>健康与合规护栏</b><span>时长频率异常 · 深夜互动占比 · 危机识别</span><small>未成年人模式 · 危机转介 · 过度依赖预警</small></article></div></div><div class="case-columns"><div><h4>埋点与指标口径</h4><p>规划应用启动、对话开始、消息发送、心情卡点击、记忆命中、计划创建、危机识别和订阅等核心事件，并记录渠道、人群、功能入口等关键属性。事件按清晰定义计算激活、留存、收益和护栏指标。</p><h4>分群下钻</h4><p>按获客渠道、人群类型和功能模块查看指标，沿着“北极星—子指标—下钻维度”组织看板，辅助定位变化来自哪里。</p></div><div><h4>A/B 实验设计</h4><p>示例假设：在情绪树洞首屏加入“今日心情”引导卡片，观察 D1 留存。主指标为 D1，辅指标为人均会话数；实验组与对照组按用户分层随机。</p><div class="experiment-card"><span>示例样本量假设</span><strong>约 1,400 / 组</strong><p>基线 p=35%、最小差异 Δ=5 个百分点、显著性水平 α=0.05、检验功效 0.8 时的方案估算。</p><small>总计约 2,800 人 · 仅为实验规划假设</small></div></div></div><div class="decision-rail"><span>决策阈值（方案设计）</span><p>只有当提升达到 5 个百分点且统计检验满足 p&lt;0.05，才考虑扩大覆盖；否则调整文案或交互后重新验证。</p></div>` },
    ],
    groups: [["01 · 数据处理", "将问卷、统计资料和推广数据整理为结构化材料，并留意清洗、异常值与口径。", ["Python", "Excel", "数据库"]], ["02 · 分析与表达", "用统计分析、分群和可视化呈现差异，再通过报告和看板支持沟通与行动。", ["描述统计", "相关性分析", "数据可视化", "分析报告"]], ["03 · AI 辅助工具", "在调研和数据处理中，将 AI 工具用于文本处理、初筛与流程辅助；也用于信息整理和编码辅助。", ["WorkBuddy", "ChatGPT", "Codex", "文心一言"]], ["04 · 视觉内容制作", "用于视觉内容制作与视频剪辑的工具。", ["Photoshop（PS）", "剪映"]]],
    closing: "好分析，让下一步行动更明确。",
  },
};

function renderCase(item, index) {
  return `<article class="case-card case-${index + 1}"><div class="case-top"><span class="case-number">${item.number}</span><span class="case-type">${item.type}</span></div><div class="case-intro"><h3>${item.title}</h3><p>${item.summary}</p></div><div class="case-body">${item.body}</div></article>`;
}

const pageKey = document.body.dataset.page || "product";
const page = pages[pageKey] || pages.product;
document.body.classList.add(`page-${pageKey}`);
document.title = `何梓奕｜${nav.find(([key]) => key === pageKey)?.[1] || "产品"}作品集`;
document.getElementById("app").innerHTML = `${navigation(pageKey)}<main><section class="hero"><div class="hero-copy"><span class="eyebrow"><i></i>${page.section}</span><p class="hero-label">${page.label}</p><h1>${page.title}</h1><p class="intro">${page.intro}</p><div class="hero-bottom"><a class="text-link" href="#cases">查看项目案例 <span>↓</span></a><span class="hero-note">${page.heroNote}</span></div></div><div class="hero-art">${page.heroVisual}</div><div class="hero-index"><span>作品集方向</span><b>0${nav.findIndex(([key]) => key === pageKey) + 1}</b><i></i><span>个人实践</span></div></section><section class="section cases-section" id="cases"><div class="section-heading"><div><span class="eyebrow">SELECTED WORK</span><h2>项目案例</h2></div><p>${page.lead}</p></div><div class="case-list">${page.cases.map(renderCase).join("")}</div></section>${skills(page.groups)}<section class="contact-band"><span class="eyebrow">SAY HELLO</span><h2>${page.closing}</h2><a href="mailto:${mail}">${mail}<span> ↗</span></a></section></main>${footer()}`;

const swipeOrder = ["product", "operations", "data"];
const currentIndex = swipeOrder.indexOf(pageKey);
const storedDirection = sessionStorage.getItem("portfolio-swipe-direction");
if (storedDirection) {
  document.body.classList.add(storedDirection === "next" ? "slide-enter-next" : "slide-enter-previous");
  sessionStorage.removeItem("portfolio-swipe-direction");
}
let touchStart = null;
document.addEventListener("touchstart", event => {
  if (event.touches.length !== 1 || event.target.closest("a, button, input, textarea, select, [contenteditable='true']")) {
    touchStart = null;
    return;
  }
  touchStart = { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY };
}, { passive: true });
document.addEventListener("touchend", event => {
  if (!touchStart || event.changedTouches.length !== 1) return;
  const dx = event.changedTouches[0].clientX - touchStart.x;
  const dy = event.changedTouches[0].clientY - touchStart.y;
  touchStart = null;
  if (Math.abs(dx) < 68 || Math.abs(dx) < Math.abs(dy) * 1.3) return;
  const delta = dx < 0 ? 1 : -1;
  const destination = swipeOrder[currentIndex + delta];
  if (!destination) return;
  sessionStorage.setItem("portfolio-swipe-direction", delta > 0 ? "next" : "previous");
  location.assign(new URL(`../${destination}/`, location.href));
}, { passive: true });
document.addEventListener("keydown", event => {
  if (!event.altKey || !["ArrowLeft", "ArrowRight"].includes(event.key)) return;
  const delta = event.key === "ArrowRight" ? 1 : -1;
  const destination = swipeOrder[currentIndex + delta];
  if (!destination) return;
  event.preventDefault();
  sessionStorage.setItem("portfolio-swipe-direction", delta > 0 ? "next" : "previous");
  location.assign(new URL(`../${destination}/`, location.href));
});

const reveal = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      reveal.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll(".case-card, .skill-card, .contact-band").forEach(el => reveal.observe(el));
