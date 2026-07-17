// ============================================================
// aitos.io landing — i18n + interactions + canvas animations
// ============================================================

const i18n = {
  en: {
    'nav.why': 'Why',
    'nav.thesis': 'Thesis',
    'nav.loop': 'The Loop',
    'nav.stack': 'Stack',
    'nav.pai': 'Physical AI',
    'nav.eco': 'Ecosystem',
    'nav.cta': 'BUILD WITH BoAT',

    'hero.eyebrow': 'AI × IoT × Onchain Systems',
    'hero.title': 'The Sovereign<br>Data OS for AI<br>and Things',
    'hero.sub': '<strong>Data sovereignty infrastructure for the physical world.</strong> aitos.io makes physical-world data authentic, verifiable and privately usable — so its value can flow across machines, AI and the onchain economy.',
    'hero.cta1': 'EXPLORE THE INFRASTRUCTURE',
    'hero.cta2': 'BUILD WITH BoAT',

    'gap.label': 'The Gap',
    'gap.title': 'The world has abundant data.<br><span class="mut">Very little of it is </span><span class="cy">sovereign</span><span class="mut">.</span>',
    'gap.sub': 'Billions of devices, machines and AI agents digitize the physical world every second — energy, mobility, industry, the environment, human activity. Yet almost none of that data can be verified, owned, or fairly monetized.',
    'gap.1.t': 'No proof of origin',
    'gap.1.d': 'Which real device produced this data? Today, nothing can prove it.',
    'gap.2.t': 'No proof of integrity',
    'gap.2.d': 'Altered, duplicated, replayed — and no one can tell the difference.',
    'gap.3.t': 'No control',
    'gap.3.d': 'Owners cannot govern who accesses their data, or for what.',
    'gap.4.t': 'No privacy',
    'gap.4.d': 'Once shared, data escapes its owner — forever.',
    'gap.5.t': 'No reward',
    'gap.5.d': 'Value flows to platforms — not to the people and machines who contribute.',
    'gap.kicker': 'Data is everywhere. <span class="ink">Trust, ownership and value flow are not.</span>',

    'thesis.label': 'The Thesis',
    'thesis.1.e': 'IoT — TRUSTED CONNECTION',
    'thesis.1.t': 'IoT makes data<br><span class="cy">authentic.</span>',
    'thesis.1.d': 'Hardware-rooted identity and cryptographic signatures prove where data comes from — the moment it is born.',
    'thesis.2.e': 'BLOCKCHAIN — THE OPEN OPERATING SYSTEM FOR TRUST',
    'thesis.2.t': 'Blockchain makes data<br><span class="cy">verifiable.</span>',
    'thesis.2.d': 'Tamper-resistant provenance, ownership, authorization and settlement — a shared world computer no single party controls.',
    'thesis.3.e': 'AI — VALUE EXTRACTION',
    'thesis.3.t': 'AI makes data<br><span class="cy">valuable.</span>',
    'thesis.3.d': 'Edge intelligence and privacy-preserving computation turn raw signals into decisions, services and economic value — without taking control away from the owner.',
    'thesis.4.e': 'AITOS.IO — THE CLOSED LOOP',
    'thesis.4.t': 'aitos.io makes that value <span class="am">flow</span> — while sovereignty stays with the owner.',

    'loop.label': 'The Loop',
    'loop.title': 'From physical signal<br>to settled value.',
    'loop.1.t': 'Sense',
    'loop.1.d': 'IoT captures reality at the source.',
    'loop.2.t': 'Prove',
    'loop.2.d': 'Device identity signs every byte.',
    'loop.3.t': 'Protect',
    'loop.3.d': 'Sovereignty and privacy by design.',
    'loop.4.t': 'Understand',
    'loop.4.d': 'AI extracts intelligence in place.',
    'loop.5.t': 'Exchange',
    'loop.5.d': 'Programmable authorization and trade.',
    'loop.6.t': 'Settle',
    'loop.6.d': 'Value returns to its contributors.',
    'loop.close': 'Move the <span class="am">value</span>, not the <span class="cy">data</span>.',
    'loop.exp': 'The goal is not free-flowing raw data — it is a closed loop where data stays under its owner’s control while its value becomes verifiable, exchangeable and fairly distributed.',

    'name.label': 'The name is the thesis',
    'name.ai.l': 'ARTIFICIAL INTELLIGENCE',
    'name.ai.d': 'Intelligence and value extraction — turning trusted data into decisions and services.',
    'name.t.l': 'THINGS · IoT',
    'name.t.d': 'The trusted connection to the physical world — where authentic data is born.',
    'name.os.l': 'THE BLOCKCHAIN OPERATING SYSTEM',
    'name.os.d': 'An open, decentralized operating system for trust — state, identity, rights and settlement no single party controls.',
    'name.io.l': 'INPUT / OUTPUT',
    'name.io.d': 'The interface between the physical and digital worlds — in both directions.',
    'name.kicker': '<span class="cy">AI understands.</span> <span class="ink">Things sense.</span> <span class="am">The blockchain OS verifies, coordinates and settles.</span>',

    'stack.label': 'The Stack',
    'stack.title': 'One infrastructure.<br>Trust from silicon to settlement.',
    'stack.boat.tag': 'DEVICE SIDE',
    'stack.boat.tl': 'The Embedded Trust Runtime for Sovereign Data',
    'stack.boat.d': 'Inside chips, sensors, machines and edge devices — so data is born trusted.',
    'stack.boat.c1': 'Device identity',
    'stack.boat.c2': 'Hardware keys',
    'stack.boat.c3': 'Data signing',
    'stack.boat.c4': 'Secure storage',
    'stack.boat.c5': 'Privacy authorization',
    'stack.boat.c6': 'Onchain proof',
    'stack.boat.c7': 'Machine wallet & payment',
    'stack.boat.f': '↳ Trust <span class="cy">at the source</span>',
    'stack.tlay.tag': 'NETWORK SIDE',
    'stack.tlay.tl': 'The Trust and Value Layer for Physical-World Data',
    'stack.tlay.d': 'Where trusted data becomes rights, proofs, services and settled value.',
    'stack.tlay.c1': 'Data verification',
    'stack.tlay.c2': 'Data ownership',
    'stack.tlay.c3': 'Proof of Physical Work',
    'stack.tlay.c4': 'Programmable authorization',
    'stack.tlay.c5': 'AI-agent access',
    'stack.tlay.c6': 'Machine payments',
    'stack.tlay.c7': 'Data assetization & settlement',
    'stack.tlay.f': '↳ Trust and value <span class="am">across the network</span>',
    'stack.bar': 'aitos.io <span class="ink">defines and builds</span> the sovereign data infrastructure beneath both.',
    'stack.chain': 'SILICON → NETWORK → ECONOMY',

    'pai.label': 'First Application · Physical AI',
    'pai.title': 'AI is leaving<br>the cloud.',
    'pai.d1': 'When AI acts through robots, vehicles, energy assets and industrial machines, every decision depends on data that is real, unaltered and private.',
    'pai.d2': 'Physical AI needs a sovereign data layer before it needs another model.',
    'pai.kicker': 'The agentic machine economy is the first application<br>of sovereign data — <span class="am">not the whole story.</span>',
    'pai.1.t': 'Machine Identity',
    'pai.1.d': 'Prove who acted, and whose data it is.',
    'pai.2.t': 'Trusted Data',
    'pai.2.d': 'Prove the inputs AI relies on are real.',
    'pai.3.t': 'Proof of Physical Action',
    'pai.3.d': 'Prove what AI actually did in the real world.',
    'pai.4.t': 'Machine Wallet',
    'pai.4.d': 'Let data, services and machine work earn.',
    'pai.5.t': 'Machine Payment',
    'pai.5.d': 'Settle value automatically, machine to machine.',

    'eco.label': 'Ecosystem',
    'eco.title': 'Real networks,<br>already running on the thesis.',
    'eco.sub': 'Eight years of embedded trust — <span class="ink">across telecom, silicon and automotive.</span>',
    'eco.1.d': 'Distributed renewable energy DePIN',
    'eco.2.d': 'Green-attested Bitcoin mining',
    'eco.3.d': 'The trust and value layer for physical-world data',
    'eco.4.d': 'Sign-only wallet — agents act, humans approve',

    'cta.m1': 'Data stays <span class="cy">sovereign</span>.',
    'cta.m2': 'Value moves <span class="am">freely</span>.',
    'cta.d': 'From sensors to AI, from physical activity to the onchain economy — aitos.io enables data to be authenticated, protected, utilized and fairly monetized.',

    'foot.tagline': 'DATA SOVEREIGNTY INFRASTRUCTURE FOR THE PHYSICAL WORLD',
    'foot.top': '↑ TOP'
  },

  zh: {
    'nav.why': '为什么',
    'nav.thesis': '核心论点',
    'nav.loop': '价值闭环',
    'nav.stack': '技术栈',
    'nav.pai': 'Physical AI',
    'nav.eco': '生态',
    'nav.cta': '用 BoAT 构建',

    'hero.eyebrow': 'AI × IoT × 链上系统',
    'hero.title': '为 AI 与万物打造的<br>主权数据操作系统',
    'hero.sub': '<strong>面向物理世界的数据主权基础设施。</strong>aitos.io 让物理世界的数据真实可信、可被验证、可在隐私保护下使用——让数据的价值在机器、AI 与链上经济之间自由流动。',
    'hero.cta1': '探索基础设施',
    'hero.cta2': '用 BoAT 构建',

    'gap.label': '差距所在',
    'gap.title': '世界上数据无处不在。<br><span class="mut">但称得上</span><span class="cy">主权数据</span><span class="mut">的，寥寥无几。</span>',
    'gap.sub': '每一秒，数十亿台设备、机器与 AI 智能体都在把物理世界数字化——能源、出行、工业、环境、人类活动。然而这些数据几乎都无法被验证、被拥有、或被公平地变现。',
    'gap.1.t': '无法证明来源',
    'gap.1.d': '这条数据究竟出自哪台真实设备？今天没有任何机制能证明。',
    'gap.2.t': '无法证明完整性',
    'gap.2.d': '被篡改、被复制、被重放——没有人能分辨真假。',
    'gap.3.t': '无法控制',
    'gap.3.d': '数据的主人无法决定谁能访问自己的数据、用于什么。',
    'gap.4.t': '没有隐私',
    'gap.4.d': '数据一旦共享，就永远脱离了主人的掌控。',
    'gap.5.t': '没有回报',
    'gap.5.d': '价值流向平台，而不是贡献数据的人和机器。',
    'gap.kicker': '数据无处不在。<span class="ink">但信任、所有权与价值流动并非如此。</span>',

    'thesis.label': '核心论点',
    'thesis.1.e': 'IoT — 可信连接',
    'thesis.1.t': 'IoT 让数据<br><span class="cy">真实可信。</span>',
    'thesis.1.d': '硬件根植的身份与加密签名，在数据诞生的那一刻就证明它来自哪里。',
    'thesis.2.e': '区块链 — 开放的信任操作系统',
    'thesis.2.t': '区块链让数据<br><span class="cy">可被验证。</span>',
    'thesis.2.d': '防篡改的溯源、所有权、授权与结算——一台不受任何单一方控制的共享世界计算机。',
    'thesis.3.e': 'AI — 价值提取',
    'thesis.3.t': 'AI 让数据<br><span class="cy">产生价值。</span>',
    'thesis.3.d': '边缘智能与隐私计算把原始信号变成决策、服务与经济价值——而控制权始终属于数据的主人。',
    'thesis.4.e': 'AITOS.IO — 闭环',
    'thesis.4.t': 'aitos.io 让这些价值<span class="am">流动</span>起来——而数据主权始终留在主人手中。',

    'loop.label': '价值闭环',
    'loop.title': '从物理信号<br>到结算的价值。',
    'loop.1.t': '感知',
    'loop.1.d': 'IoT 在源头捕捉真实世界。',
    'loop.2.t': '证明',
    'loop.2.d': '设备身份为每个字节签名。',
    'loop.3.t': '守护',
    'loop.3.d': '主权与隐私，从设计之初就内建。',
    'loop.4.t': '理解',
    'loop.4.d': 'AI 就地提取智能。',
    'loop.5.t': '交换',
    'loop.5.d': '可编程的授权与交易。',
    'loop.6.t': '结算',
    'loop.6.d': '价值回到贡献者手中。',
    'loop.close': '流动的是<span class="am">价值</span>，而非<span class="cy">数据</span>。',
    'loop.exp': '我们的目标不是让原始数据自由流通，而是一个闭环：数据始终在主人的掌控之下，而它的价值变得可验证、可交换、并被公平分配。',

    'name.label': '名字即论点',
    'name.ai.l': '人工智能',
    'name.ai.d': '智能与价值提取——把可信数据变成决策与服务。',
    'name.t.l': '万物 · IoT',
    'name.t.d': '通向物理世界的可信连接——真实数据的诞生之地。',
    'name.os.l': '区块链操作系统',
    'name.os.d': '一个开放、去中心化的信任操作系统——状态、身份、权利与结算不受任何单一方控制。',
    'name.io.l': '输入 / 输出',
    'name.io.d': '物理世界与数字世界之间的双向接口。',
    'name.kicker': '<span class="cy">AI 负责理解。</span><span class="ink">万物负责感知。</span><span class="am">区块链操作系统负责验证、协调与结算。</span>',

    'stack.label': '技术栈',
    'stack.title': '一套基础设施。<br>信任从芯片直达结算。',
    'stack.boat.tag': '设备侧',
    'stack.boat.tl': '主权数据的嵌入式可信运行时',
    'stack.boat.d': '运行在芯片、传感器、机器与边缘设备之内——让数据在诞生时就可信。',
    'stack.boat.c1': '设备身份',
    'stack.boat.c2': '硬件密钥',
    'stack.boat.c3': '数据签名',
    'stack.boat.c4': '安全存储',
    'stack.boat.c5': '隐私授权',
    'stack.boat.c6': '链上存证',
    'stack.boat.c7': '机器钱包与支付',
    'stack.boat.f': '↳ 信任<span class="cy">始于源头</span>',
    'stack.tlay.tag': '网络侧',
    'stack.tlay.tl': '物理世界数据的信任与价值层',
    'stack.tlay.d': '在这里，可信数据变成权利、证明、服务与结算后的价值。',
    'stack.tlay.c1': '数据验证',
    'stack.tlay.c2': '数据确权',
    'stack.tlay.c3': '物理工作量证明',
    'stack.tlay.c4': '可编程授权',
    'stack.tlay.c5': 'AI 智能体接入',
    'stack.tlay.c6': '机器支付',
    'stack.tlay.c7': '数据资产化与结算',
    'stack.tlay.f': '↳ 信任与价值<span class="am">贯通全网</span>',
    'stack.bar': 'aitos.io <span class="ink">定义并构建</span>两者之下的主权数据基础设施。',
    'stack.chain': '芯片 → 网络 → 经济',

    'pai.label': '首个应用 · Physical AI',
    'pai.title': 'AI 正在<br>离开云端。',
    'pai.d1': '当 AI 通过机器人、车辆、能源资产与工业机器采取行动时，每一个决策都依赖真实、未被篡改且受隐私保护的数据。',
    'pai.d2': '在需要下一个模型之前，Physical AI 更需要一层主权数据。',
    'pai.kicker': '智能体机器经济是主权数据的第一个应用<br>——<span class="am">但远不是全部。</span>',
    'pai.1.t': '机器身份',
    'pai.1.d': '证明是谁在行动，数据属于谁。',
    'pai.2.t': '可信数据',
    'pai.2.d': '证明 AI 所依赖的输入真实可信。',
    'pai.3.t': '物理行为证明',
    'pai.3.d': '证明 AI 在真实世界里到底做了什么。',
    'pai.4.t': '机器钱包',
    'pai.4.d': '让数据、服务与机器劳动获得收益。',
    'pai.5.t': '机器支付',
    'pai.5.d': '价值在机器与机器之间自动结算。',

    'eco.label': '生态',
    'eco.title': '真实运行的网络，<br>是这套论点最好的注脚。',
    'eco.sub': '八年嵌入式信任积累——<span class="ink">横跨电信、芯片与汽车。</span>',
    'eco.1.d': '分布式可再生能源 DePIN',
    'eco.2.d': '绿色认证的比特币挖矿',
    'eco.3.d': '物理世界数据的信任与价值层',
    'eco.4.d': '只签名钱包——智能体执行，人类审批',

    'cta.m1': '数据<span class="cy">主权不移</span>。',
    'cta.m2': '价值<span class="am">自由流动</span>。',
    'cta.d': '从传感器到 AI，从物理世界的活动到链上经济——aitos.io 让数据可被认证、被守护、被利用，并被公平地变现。',

    'foot.tagline': '面向物理世界的数据主权基础设施',
    'foot.top': '↑ 回到顶部'
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
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.textContent = lang === 'zh' ? '中 / EN' : 'EN / 中';
  try { localStorage.setItem('aitos_lang', lang); } catch (e) {}
}

(function initLang() {
  let lang = 'en';
  try {
    const saved = localStorage.getItem('aitos_lang') || localStorage.getItem('boat_lang');
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

// ---------- helpers ----------
function hexToRgb(h) {
  const m = h.replace('#', '');
  return [parseInt(m.slice(0, 2), 16), parseInt(m.slice(2, 4), 16), parseInt(m.slice(4, 6), 16)];
}
const C_DATA = hexToRgb('5ce1ff');
const C_VALUE = hexToRgb('ffb454');

function motionFactor() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0.35 : 1;
}

// ---------- year ----------
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// ---------- nav chrome ----------
const nav = document.getElementById('nav');

// ---------- scroll reveal (staggered by data-reveal index) ----------
(function setupReveals() {
  const els = Array.from(document.querySelectorAll('[data-reveal]'));
  const vh = window.innerHeight;
  const below = els.filter(el => el.getBoundingClientRect().top > vh * 0.88);
  below.forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(26px)'; });
  if (!('IntersectionObserver' in window)) {
    below.forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const idx = parseInt(el.getAttribute('data-reveal') || '0', 10);
      el.style.transition = `opacity 0.85s cubic-bezier(.2,.7,.2,1) ${idx * 0.08}s, transform 0.85s cubic-bezier(.2,.7,.2,1) ${idx * 0.08}s`;
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
      io.unobserve(el);
    });
  }, { threshold: 0.12 });
  below.forEach(el => io.observe(el));
})();

// ---------- thesis sticky narrative + nav scrolled state ----------
(function setupScroll() {
  const thesisEl = document.getElementById('thesis');
  const statements = Array.from(document.querySelectorAll('[data-thesis]'));
  const ticks = Array.from(document.querySelectorAll('[data-tick]'));
  let activeThesis = -1;

  function onScroll() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);

    if (thesisEl && statements.length) {
      const rect = thesisEl.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const prog = Math.min(1, Math.max(0, -rect.top / Math.max(1, total)));
      const idx = Math.min(statements.length - 1, Math.floor(prog * statements.length));
      if (idx !== activeThesis) {
        activeThesis = idx;
        statements.forEach((el, i) => {
          el.classList.toggle('active', i === idx);
          el.classList.toggle('passed', i < idx);
        });
        ticks.forEach((el, i) => {
          el.classList.toggle('active', i === idx);
          el.classList.toggle('last', i === ticks.length - 1);
        });
      }
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ---------- canvas animations ----------
(function setupCanvases() {
  const heroCanvas = document.getElementById('heroCanvas');
  const loopCanvas = document.getElementById('loopCanvas');
  if (!heroCanvas || !loopCanvas || !heroCanvas.getContext) return;

  let heroVisible = true;
  let loopVisible = false;
  let t = 0;
  const heroParticles = [];
  const loopParticles = [];

  function sizeCanvases() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    [heroCanvas, loopCanvas].forEach(c => {
      const w = c.offsetWidth, h = c.offsetHeight;
      if (c.width !== Math.round(w * dpr)) {
        c.width = Math.round(w * dpr);
        c.height = Math.round(h * dpr);
      }
      c.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0);
    });
  }

  function spawnHero(anywhere) {
    const w = heroCanvas.offsetWidth || 1400;
    const h = heroCanvas.offsetHeight || 800;
    return {
      x: anywhere ? Math.random() * w : -8,
      y: Math.random() * h,
      lane: Math.floor(Math.random() * 30),
      sp: 0.5 + Math.random() * 1.3,
      isValue: Math.random() < 0.15,
      jit: Math.random() * Math.PI * 2,
      sz: 1 + Math.random() * 1.6
    };
  }

  sizeCanvases();
  const mf0 = motionFactor();
  const heroN = Math.round(340 * (mf0 < 1 ? 0.45 : 1));
  for (let i = 0; i < heroN; i++) heroParticles.push(spawnHero(true));
  for (let i = 0; i < 80; i++) {
    loopParticles.push({
      x: Math.random(),
      sp: 0.0009 + Math.random() * 0.0022,
      off: Math.random() * Math.PI * 2,
      amp: 5 + Math.random() * 16
    });
  }

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.target === heroCanvas) heroVisible = e.isIntersecting;
      if (e.target === loopCanvas) loopVisible = e.isIntersecting;
    }), { threshold: 0.02 });
    io.observe(heroCanvas);
    io.observe(loopCanvas);
  } else {
    loopVisible = true;
  }

  window.addEventListener('resize', sizeCanvases);

  function drawHero(mf) {
    const ctx = heroCanvas.getContext('2d');
    const w = heroCanvas.offsetWidth, h = heroCanvas.offsetHeight;
    const d = C_DATA, v = C_VALUE;
    ctx.fillStyle = 'rgba(5,7,13,0.16)';
    ctx.fillRect(0, 0, w, h);
    const planeX = w * 0.46;
    // verification plane
    const pa = 0.35 + 0.2 * Math.sin(t * 1.4);
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, `rgba(${d[0]},${d[1]},${d[2]},0)`);
    grad.addColorStop(0.5, `rgba(${d[0]},${d[1]},${d[2]},${pa})`);
    grad.addColorStop(1, `rgba(${d[0]},${d[1]},${d[2]},0)`);
    ctx.fillStyle = grad;
    ctx.fillRect(planeX - 0.6, 0, 1.2, h);
    const laneH = h / 31;
    for (const p of heroParticles) {
      if (p.x < planeX) {
        p.x += p.sp * 0.9 * mf;
        p.y += Math.sin(t * 2 + p.jit) * 0.45 * mf;
        ctx.fillStyle = 'rgba(140,155,175,0.32)';
      } else {
        p.x += p.sp * 1.7 * mf;
        const ty = (p.lane + 0.5) * laneH;
        p.y += (ty - p.y) * 0.06;
        if (p.isValue && p.x > w * 0.72) {
          p.y -= 0.35 * mf;
          ctx.fillStyle = `rgba(${v[0]},${v[1]},${v[2]},0.85)`;
        } else {
          ctx.fillStyle = `rgba(${d[0]},${d[1]},${d[2]},0.6)`;
        }
      }
      ctx.fillRect(p.x, p.y, p.sz + (p.x > planeX ? 1.4 : 0), p.sz * 0.55 + 0.4);
      if (p.x > w + 10 || p.y < -12) {
        const np = spawnHero(false);
        p.x = np.x; p.y = np.y; p.lane = np.lane; p.sp = np.sp;
        p.isValue = np.isValue; p.jit = np.jit; p.sz = np.sz;
      }
    }
  }

  function drawLoop(mf) {
    const ctx = loopCanvas.getContext('2d');
    const w = loopCanvas.offsetWidth, h = loopCanvas.offsetHeight;
    const d = C_DATA, v = C_VALUE;
    ctx.clearRect(0, 0, w, h);
    const y = h * 0.5;
    ctx.strokeStyle = 'rgba(148,163,184,0.18)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    for (let i = 0; i < 6; i++) {
      const nx = ((i + 0.5) / 6) * w;
      const rgb = i >= 4 ? v : d;
      const pulse = 0.5 + 0.5 * Math.sin(t * 2 - i * 0.9);
      ctx.beginPath();
      ctx.arc(nx, y, 14 + pulse * 5, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${0.14 + pulse * 0.18})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(nx, y, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.95)`;
      ctx.fill();
    }
    for (const p of loopParticles) {
      p.x += p.sp * mf;
      if (p.x > 1.02) p.x = -0.02;
      const px = p.x * w;
      const py = y + Math.sin(p.x * 22 + p.off) * p.amp * 0.35;
      const rgb = p.x > 4.02 / 6 ? v : d;
      ctx.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.75)`;
      ctx.fillRect(px, py, 3, 1.4);
    }
  }

  function frame() {
    t += 0.016;
    const mf = motionFactor();
    if (heroVisible) drawHero(mf);
    if (loopVisible) drawLoop(mf);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
