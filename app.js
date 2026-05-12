// ============================================================
// BoAT landing — interactions
// ============================================================

const i18n = {
  en: {
    'brand.sub': 'by aitos.io',
    'nav.why': 'Why Now',
    'nav.stack': 'Trust Layer',
    'nav.tech': 'Technology',
    'nav.usecases': 'Use Cases',
    'nav.builders': 'Builders',
    'nav.partners': 'Partners',
    'nav.docs': 'Docs',

    'hero.eyebrow': 'The Embedded Trust Layer — evolved for the Agent era',
    'hero.title1': 'Give every AI agent',
    'hero.title2': 'a body, an identity, and a wallet.',
    'hero.sub': 'BoAT is the embedded trust layer where autonomous AI agents meet the physical and financial world. We turn any machine — a bike, a battery, a vehicle, a humanoid — into a cryptographically-verifiable, self-paying, accountable actor.',
    'hero.cta1': 'See the Stack',
    'hero.cta2': 'Read the Docs →',

    'hero.card1.t': 'Verifiable Identity',
    'hero.card1.d': 'Agent-Bound Identity (ABI) rooted in hardware keys. Every agent has a DID that can be challenged, signed, and audited.',
    'hero.card2.t': 'Autonomous Payment',
    'hero.card2.d': 'Native alignment with x402 / AP2 and on-chain rails. Agents pay, get paid, and settle without a human in the loop.',
    'hero.card3.t': 'Proof of Physical Action',
    'hero.card3.d': 'Sensor data + hardware signatures + on-chain anchoring. Cryptographic evidence that an agent actually did the thing.',

    'why.tag': 'Why Now',
    'why.title': "The last mile of the LLM revolution isn't in the cloud.",
    'why.sub': "Agents can think, plan, and call tools. What they can't do alone: prove who they are, pay for what they consume, and leave a trustworthy footprint in the physical world. BoAT has been quietly building that layer for 8 years — under a different name.",

    'why.t1.era': '2018 — 2023',
    'why.t1.t': 'Machine Economy',
    'why.t1.d': 'Devices as passive ledger nodes. BoAT gave IoT chips their first blockchain wallet. Partners: Telefónica, Qualcomm, Microsoft, Daimler, ARM, RISC-V.',
    'why.t2.era': '2023 — 2025',
    'why.t2.t': 'Physical AI Agents',
    'why.t2.d': 'DePIN, smart fleets, VPPs. Machines start to act, schedule, and earn. Arkreen, GreenBTC.Club and TLAY prove the playbook at scale.',
    'why.t3.era': '2026 →',
    'why.t3.t': 'Agentic Machine Economy',
    'why.t3.d': 'LLM-driven agents need bodies to act and trust to transact. BoAT becomes the identity, payment and proof layer for every agent — embedded or cloud-resident.',

    'stack.tag': 'The Agentic Trust Layer',
    'stack.title': 'Three things every AI agent is missing. We ship all three.',
    'stack.sub': 'MCP gives agents tools. A2A gives them teammates. x402 gives them rails. BoAT gives them a body, a name, and a signature that regulators, counterparties, and insurers can actually trust.',

    'stack.1.t': 'Agent-Bound Identity',
    'stack.1.d': 'A DID rooted in hardware — whether the "hardware" is a secure element in a robot, a TEE in a server, or an eSIM in a meter. Every action is signed, challengeable, and revocable.',
    'stack.1.f1': 'W3C DID compatible',
    'stack.1.f2': 'Hardware-rooted keys',
    'stack.1.f3': 'Per-agent, per-session, per-tool scopes',

    'stack.2.t': 'Agentic Wallet',
    'stack.2.d': 'A native wallet the agent owns — not a credit card it borrows. Supports streaming micropayments, budget caps, policy guardrails, and multi-chain settlement out of the box.',
    'stack.2.f1': 'x402 / AP2 ready',
    'stack.2.f2': 'Programmable spend policies',
    'stack.2.f3': 'Multi-chain, stablecoin-first',

    'stack.3.badge': 'New',
    'stack.3.t': 'Proof of Physical Action',
    'stack.3.d': "The antidote to hallucination. Sensor readings, actuator commands, and timestamps are co-signed on-device and anchored on-chain — turning an agent's claim into verifiable physical evidence.",
    'stack.3.f1': 'Sensor + key co-signature',
    'stack.3.f2': 'Auditable action logs',
    'stack.3.f3': 'Insurance-grade provenance',

    'tech.tag': 'Core Technology',
    'tech.title': 'Eight years of embedded cryptography. Ready for the agent era.',
    'tech.sub': 'The same open-source framework trusted by telecom, automotive, and silicon leaders — now re-aimed at the agentic stack.',

    'tech.1.t': 'Embedded C SDK',
    'tech.1.d': "Runs on MCUs, modems and edge SoCs where Python can't go. Lightweight, open-source, production-proven.",
    'tech.2.t': 'DID & Verifiable Credentials',
    'tech.2.d': 'Decentralized identity for every agent, device, and tool call. Interoperable with emerging agent-id standards.',
    'tech.3.t': 'Trusted Data On-Chain',
    'tech.3.d': 'Integrity and traceability for every reading an agent relies on — or every claim it makes.',
    'tech.4.t': 'Machine Payment',
    'tech.4.d': 'Wallet primitives designed for devices and agents: low-power signing, streaming settlement, policy-bound spend.',
    'tech.5.t': 'Secure Key Management',
    'tech.5.d': 'TEE, SE and HSM integrations. Private keys never leave the silicon.',
    'tech.6.t': 'Multi-chain Interop',
    'tech.6.d': 'Neutral by design. Plug into Ethereum, Solana, Bitcoin L2s, and more without rewriting your firmware.',

    'tech.phil.t': 'Open, neutral, silicon-agnostic.',
    'tech.phil.d': "BoAT doesn't pick winners. Any chip, any chain, any agent framework. The trust layer should be as universal as TCP/IP.",
    'tech.phil.c1': 'Multi-chip',
    'tech.phil.c2': 'Multi-chain',
    'tech.phil.c3': 'Open-source',
    'tech.phil.c4': 'Standards-first',

    'uc.tag': 'Agents in the Wild',
    'uc.title': 'Seven places the agentic economy is already arriving.',
    'uc.sub': "The use cases didn't change. The actors did. Every scene below now has an autonomous agent deciding, transacting, and being held accountable — because BoAT is inside.",

    'uc.1.k': 'Mobility',
    'uc.1.t': 'Self-Dispatching Bike Fleets',
    'uc.1.d': 'Each bike is an agent with its own wallet. A fleet-level LLM scheduler negotiates rebalancing with the bikes themselves, no central operator required.',
    'uc.2.k': 'Energy',
    'uc.2.t': 'Battery & VPP Trading Agents',
    'uc.2.d': 'Storage devices bid into energy markets autonomously. Revenue settles on-chain. Paired with Arkreen & GreenBTC for green-energy attestation.',
    'uc.3.k': 'Automotive',
    'uc.3.t': 'Mobility Agents in Every Car',
    'uc.3.d': 'The vehicle pays for tolls, charging, parking, insurance — and produces a cryptographic trip log good enough for regulators.',
    'uc.4.k': 'Solar / DePIN',
    'uc.4.t': 'Autonomous Green Assets',
    'uc.4.d': 'Distributed PV and storage operate, sell, and prove carbon credits as independent economic agents.',
    'uc.5.k': 'Industry',
    'uc.5.t': 'Self-Optimizing Factory Agents',
    'uc.5.d': 'Machines procure consumables, negotiate with neighbors, and log every action in a tamper-evident audit trail.',
    'uc.6.k': 'Home',
    'uc.6.t': 'Home AI Butlers with Budgets',
    'uc.6.d': 'A household agent with its own wallet, spend caps, and audit log. Subscriptions, energy, deliveries — all handled.',
    'uc.7.k': 'New · Robotics',
    'uc.7.t': 'Humanoid & Service Robots',
    'uc.7.d': 'When a robot walks into a store or factory, who does it represent, who pays for what it consumes, and who is liable when it errs? BoAT is the answer shipped in firmware.',

    'uc.vision.t': 'From a Trillion Machines to a Trillion Agents.',
    'uc.vision.d': 'The original thesis scaled by device count. The new math scales by agents × devices × interactions per second. We are not rounding the corner — we are jumping to a new axis.',
    'uc.vision.s1': 'connectable devices',
    'uc.vision.s2': 'agent × device pairings',
    'uc.vision.s3': 'autonomous economic activity',

    'build.tag': 'For AI & Robotics Builders',
    'build.title': "Plug BoAT into the stack you're already using.",
    'build.sub': "Whether you're shipping a humanoid, a DePIN network, or an MCP-powered agent that needs to actually spend money — BoAT slots in under your framework of choice.",

    'build.1.l': 'Agent Frameworks',
    'build.1.d': 'Expose BoAT as an MCP tool server. Any agent gains a signed identity and a wallet in one call.',
    'build.2.l': 'Payment Rails',
    'build.2.d': 'Settle agent-to-agent payments, streaming micropayments, and per-tool usage — all with on-device policy enforcement.',
    'build.3.l': 'Silicon & Edge',
    'build.3.d': "An open C SDK that runs where Python and containers can't. Production-deployed across telecom and automotive.",

    'part.tag': 'Trusted By',
    'part.title': 'The partners that powered machine economy are powering the agent economy.',

    'eco.t': 'Ecosystem',
    'eco.d': 'Real networks already running on the thesis.',
    'eco.1': 'Distributed renewable energy DePIN',
    'eco.2': 'Green-attested Bitcoin mining',
    'eco.3': 'Trust layer for autonomous systems',
    'eco.4': 'Sign-only wallet — agents act, humans approve',

    'cta.t': 'Building the agent economy? Start at the trust layer.',
    'cta.d': 'Whether you ship firmware, robots, or LLM agents that need to act in the real world — we want to talk.',
    'cta.b1': 'Contact Us',
    'cta.b2': 'Explore on GitHub →',

    'foot.about': 'The embedded trust layer for agentic machines. Identity, payment, and proof — shipped in firmware.',
    'foot.product': 'Product',
    'foot.l1': 'Trust Layer',
    'foot.l2': 'Technology',
    'foot.l3': 'For Builders',
    'foot.resources': 'Resources',
    'foot.company': 'Company',
    'foot.rights': 'All rights reserved.',
    'foot.privacy': 'Privacy',
    'foot.terms': 'Terms',
    'foot.cookie': 'Cookies'
  },

  zh: {
    'brand.sub': 'by aitos.io',
    'nav.why': '为何此刻',
    'nav.stack': '信任层',
    'nav.tech': '核心技术',
    'nav.usecases': '应用场景',
    'nav.builders': '开发者',
    'nav.partners': '合作伙伴',
    'nav.docs': '文档',

    'hero.eyebrow': '嵌入式信任层 · 面向 Agent 时代重构',
    'hero.title1': '给每一个 AI Agent',
    'hero.title2': '一副身体、一个身份、一张钱包。',
    'hero.sub': 'BoAT 是让自主 AI Agent 在物理与金融世界落地的嵌入式信任层。一辆单车、一块电池、一辆汽车、一台人形机器人——都能成为可被密码学验证、能够自主支付、可被问责的经济主体。',
    'hero.cta1': '查看架构',
    'hero.cta2': '阅读文档 →',

    'hero.card1.t': '可验证身份',
    'hero.card1.d': '根植于硬件密钥的 Agent-Bound Identity（ABI）。每个 Agent 都拥有可被挑战、可签名、可审计的 DID。',
    'hero.card2.t': '自主支付',
    'hero.card2.d': '原生对齐 x402 / AP2 与链上清算。Agent 自己付钱、自己收钱、自己结算——人类不在回路中。',
    'hero.card3.t': '物理行为证明',
    'hero.card3.d': '传感器数据 + 硬件签名 + 链上锚定。把 Agent 的"声称"变成可验证的物理证据。',

    'why.tag': '为何此刻',
    'why.title': 'LLM 革命的最后一公里，不在云端。',
    'why.sub': 'Agent 能思考、规划、调用工具，但它们做不到：证明自己是谁、为消耗的资源付费、在现实世界留下可信的足迹。BoAT 已经在这一层默默耕耘 8 年——只是当年的名字不叫 Agent。',

    'why.t1.era': '2018 — 2023',
    'why.t1.t': '机器经济',
    'why.t1.d': '设备作为被动的账本节点。BoAT 让 IoT 芯片第一次拥有区块链钱包。合作伙伴：Telefónica、Qualcomm、Microsoft、Daimler、ARM、RISC-V。',
    'why.t2.era': '2023 — 2025',
    'why.t2.t': '物理 AI Agent',
    'why.t2.d': 'DePIN、智能车队、虚拟电厂。机器开始行动、调度、获利。Arkreen、GreenBTC.Club、TLAY 在规模化场景中验证了这套方法论。',
    'why.t3.era': '2026 →',
    'why.t3.t': 'Agentic 机器经济',
    'why.t3.d': 'LLM 驱动的 Agent 需要身体来行动，需要信任来交易。BoAT 成为每一个 Agent（嵌入式或云端）的身份、支付与证明层。',

    'stack.tag': 'Agentic 信任层',
    'stack.title': '每一个 AI Agent 都缺的三样东西，我们全都交付。',
    'stack.sub': 'MCP 给 Agent 工具，A2A 给它队友，x402 给它支付轨道。BoAT 给它一副身体、一个名字、一个能让监管方、交易对手和保险公司都信的签名。',

    'stack.1.t': 'Agent-Bound Identity',
    'stack.1.d': '根植于硬件的 DID——无论硬件是机器人里的安全元件、服务器里的 TEE、还是电表里的 eSIM。每一次行动都可签名、可挑战、可撤销。',
    'stack.1.f1': '兼容 W3C DID',
    'stack.1.f2': '硬件根密钥',
    'stack.1.f3': '按 Agent / 会话 / 工具粒度授权',

    'stack.2.t': 'Agentic Wallet',
    'stack.2.d': 'Agent 真正拥有的钱包，而不是借用的信用卡。开箱支持流式微支付、预算上限、策略护栏和多链清算。',
    'stack.2.f1': '原生支持 x402 / AP2',
    'stack.2.f2': '可编程消费策略',
    'stack.2.f3': '多链，以稳定币优先',

    'stack.3.badge': 'New',
    'stack.3.t': '物理行为证明（PoPA）',
    'stack.3.d': '幻觉时代的解药。传感器读数、执行器指令、时间戳在设备上联合签名、链上锚定——把 Agent 的"声称"变成可验证的物理证据。',
    'stack.3.f1': '传感器 + 密钥联合签名',
    'stack.3.f2': '可审计的行为日志',
    'stack.3.f3': '达到保险级证据标准',

    'tech.tag': '核心技术',
    'tech.title': '八年嵌入式密码学积累，已为 Agent 时代就绪。',
    'tech.sub': '同一套被电信、汽车、芯片巨头信赖的开源框架，现在重新瞄准 Agentic 技术栈。',

    'tech.1.t': '嵌入式 C SDK',
    'tech.1.d': '运行在 Python 去不了的 MCU、基带和边缘 SoC 上。轻量、开源、久经生产考验。',
    'tech.2.t': 'DID 与可验证凭证',
    'tech.2.d': '面向每一个 Agent、每一台设备、每一次工具调用的去中心化身份。与新兴 agent-id 标准互通。',
    'tech.3.t': '可信数据上链',
    'tech.3.d': 'Agent 依赖的每一条读数、发出的每一个声明，都具备完整性与可追溯性。',
    'tech.4.t': '机器支付',
    'tech.4.d': '面向设备与 Agent 的钱包原语：低功耗签名、流式清算、策略受限消费。',
    'tech.5.t': '安全密钥管理',
    'tech.5.d': '集成 TEE / SE / HSM。私钥永远不离开硅片。',
    'tech.6.t': '多链互操作',
    'tech.6.d': '中立设计。接入 Ethereum、Solana、Bitcoin L2 及更多——固件不需要重写。',

    'tech.phil.t': '开放、中立、芯片无关。',
    'tech.phil.d': 'BoAT 不站队。任何芯片、任何链、任何 Agent 框架都能接入。信任层应该像 TCP/IP 一样通用。',
    'tech.phil.c1': '多芯片',
    'tech.phil.c2': '多链',
    'tech.phil.c3': '开源',
    'tech.phil.c4': '标准优先',

    'uc.tag': '荒野中的 Agent',
    'uc.title': 'Agentic 经济正在七个地方率先发生。',
    'uc.sub': '场景没变，主角换了。每一幕里，都是一个自主 Agent 在决策、在交易、在被问责——因为 BoAT 就在里面。',

    'uc.1.k': '出行',
    'uc.1.t': '自我调度的单车舰队',
    'uc.1.d': '每辆单车都是拥有自己钱包的 Agent。舰队级 LLM 调度器直接与单车协商再平衡——不需要中心化运营者。',
    'uc.2.k': '能源',
    'uc.2.t': '电池与 VPP 交易 Agent',
    'uc.2.d': '储能设备自主参与电力市场竞价，收益链上清算。与 Arkreen、GreenBTC 配合实现绿电身份证明。',
    'uc.3.k': '汽车',
    'uc.3.t': '每辆车里一个 Mobility Agent',
    'uc.3.d': '车辆自付过路费、充电、停车、保险，并产出足以交给监管的密码学级行程日志。',
    'uc.4.k': '太阳能 / DePIN',
    'uc.4.t': '自主运营的绿色资产',
    'uc.4.d': '分布式光伏与储能作为独立经济主体，自主运营、出售电力、证明碳积分。',
    'uc.5.k': '工业',
    'uc.5.t': '自优化的工厂 Agent',
    'uc.5.d': '设备自主采购耗材、与相邻机器协商，并把每一次行动记入防篡改的审计轨迹。',
    'uc.6.k': '家居',
    'uc.6.t': '带预算的家庭 AI 管家',
    'uc.6.d': '拥有自己钱包、消费上限和审计日志的家庭 Agent。订阅、能源、配送——全部自主打理。',
    'uc.7.k': '新 · 机器人',
    'uc.7.t': '人形与服务机器人',
    'uc.7.d': '当一台机器人走进商店或工厂——它代表谁？谁为它的消费付费？它出错时谁负责？BoAT 是烧在固件里的答案。',

    'uc.vision.t': '从万亿机器，到万亿 Agent。',
    'uc.vision.d': '旧论点以设备数量计算规模。新公式是 Agent × 设备 × 每秒交互次数。这不是顺势增长——是跳到了新坐标轴。',
    'uc.vision.s1': '可联网设备',
    'uc.vision.s2': 'Agent × 设备 组合',
    'uc.vision.s3': '自主经济活动',

    'build.tag': '面向 AI 与机器人开发者',
    'build.title': '把 BoAT 插进你已经在用的技术栈。',
    'build.sub': '无论你在做人形机器人、DePIN 网络，还是一个需要真的花钱的 MCP Agent——BoAT 都能嵌入你选择的框架之下。',

    'build.1.l': 'Agent 框架',
    'build.1.d': '把 BoAT 暴露为 MCP 工具服务器，任何 Agent 一次调用即可获得签名身份与钱包。',
    'build.2.l': '支付轨道',
    'build.2.d': '结算 Agent 之间的支付、流式微支付、按工具计费的消费——全部附带设备端策略执行。',
    'build.3.l': '芯片与边缘',
    'build.3.d': '一个能运行在 Python 与容器都去不了的地方的开源 C SDK，已在电信与汽车行业规模部署。',

    'part.tag': '行业领导者的信任之选',
    'part.title': '支撑机器经济的合作伙伴，正在支撑 Agent 经济。',

    'eco.t': '生态系统',
    'eco.d': '真实跑起来的网络，是论点最好的注脚。',
    'eco.1': '分布式可再生能源 DePIN',
    'eco.2': '绿色身份认证的比特币挖矿',
    'eco.3': '面向自主系统的信任层',
    'eco.4': '只签名钱包，代理执行，人类审批',

    'cta.t': '在构建 Agent 经济？从信任层开始。',
    'cta.d': '无论你做的是固件、机器人，还是需要在现实世界行动的 LLM Agent——我们想聊聊。',
    'cta.b1': '联系我们',
    'cta.b2': '探索 GitHub →',

    'foot.about': '面向 Agentic 机器的嵌入式信任层。身份、支付、证明——烧在固件里。',
    'foot.product': '产品',
    'foot.l1': '信任层',
    'foot.l2': '技术',
    'foot.l3': '开发者',
    'foot.resources': '资源',
    'foot.company': '关于',
    'foot.rights': '保留所有权利。',
    'foot.privacy': '隐私政策',
    'foot.terms': '服务条款',
    'foot.cookie': 'Cookies'
  }
};

// ---------- language ----------
function applyLang(lang) {
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.textContent = lang === 'zh' ? '中 / EN' : 'EN / 中';
  try { localStorage.setItem('boat_lang', lang); } catch (e) {}
}

(function initLang() {
  let lang = 'en';
  try {
    const saved = localStorage.getItem('boat_lang');
    if (saved === 'en' || saved === 'zh') lang = saved;
  } catch (e) {}
  applyLang(lang);
  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
      applyLang(current === 'zh' ? 'en' : 'zh');
    });
  }
})();

// ---------- nav scrolled state ----------
const nav = document.querySelector('.nav');
function onScroll() {
  if (!nav) return;
  if (window.scrollY > 12) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---------- reveal on scroll ----------
const revealSelectors = '.card, .tl-step, .stack-card, .tech-card, .uc-card, .builder-card, .partner, .eco-card, .philosophy, .vision, .code-block, .section-head';
document.querySelectorAll(revealSelectors).forEach(el => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}
