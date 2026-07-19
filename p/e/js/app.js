/**
 * 英语对话剧本库 - 核心交互逻辑
 * 包含首页展示、剧本练习、语音合成、进度管理等功能
 */

// SVG 图标库 - 统一线条风格
const ICONS = {
  heartFilled: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  heartOutline: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  checkSquare: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
  square: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
  volume: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>',
  repeat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="6 4 20 12 6 20 6 4"/></svg>',
  pause: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  eyeOff: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>'
};

const App = {
  // 当前状态
  state: {
    currentCategory: 'all',
    searchQuery: '',
    currentScript: null,
    currentLine: 0,
    isPlaying: false,
    isPaused: false,
    myRole: null,
    showZh: true,
    repeatMode: false,
    synth: (typeof window !== 'undefined' && window.speechSynthesis) ? window.speechSynthesis : null,
    currentAudio: null,
    _scriptIndex: null  // 首页摘要数据缓存
  },

  // ============================
  // 数据加载（按需 fetch，兼容微信浏览器）
  // ============================
  // 通用 JSON 加载（兼容微信/小米等老浏览器，优先 fetch，回退 XHR）
  _fetchJSON(url) {
    if (typeof fetch === 'function') {
      return fetch(url).then(res => {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      });
    }
    // 回退到 XMLHttpRequest
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) return;
        if (xhr.status >= 200 && xhr.status < 300) {
          try { resolve(JSON.parse(xhr.responseText)); }
          catch (e) { reject(e); }
        } else {
          reject(new Error('HTTP ' + xhr.status));
        }
      };
      xhr.onerror = () => reject(new Error('network error'));
      xhr.send();
    });
  },

  async _loadIndex() {
    if (this.state._scriptIndex) return this.state._scriptIndex;
    try {
      this.state._scriptIndex = await this._fetchJSON('data/index.json');
      return this.state._scriptIndex;
    } catch (e) {
      console.error('Failed to load index:', e);
      return [];
    }
  },

  async _loadScript(id) {
    try {
      return await this._fetchJSON('data/scripts/' + id + '.json');
    } catch (e) {
      console.error('Failed to load script', id, ':', e);
      return null;
    }
  },

  // ============================
  // 首页初始化
  // ============================
  async initHome() {
    this.renderCategoryTabs();
    this.bindHomeEvents();

    // 异步加载首页数据
    const index = await this._loadIndex();
    this.state._scriptIndex = index;
    this.renderScriptCards();

    // 检查是否从收藏页或已完成页进入
    const params = new URLSearchParams(window.location.search);
    if (params.get('fav') === '1') {
      this.showFavorites();
    } else if (params.get('done') === '1') {
      this.showCompleted();
    }
  },

  // 渲染分类标签（包含「全部」按钮）
  renderCategoryTabs() {
    const container = document.getElementById('categoryTabs');
    if (!container) return;

    container.innerHTML = '';

    // 「全部」按钮
    const allBtn = document.createElement('button');
    allBtn.className = 'category-tab active';
    allBtn.dataset.category = 'all';
    allBtn.innerHTML = `${ICONS.book}<span>全部</span>`;
    allBtn.addEventListener('click', () => this.switchCategory('all'));
    container.appendChild(allBtn);

    // 各分类按钮
    SCRIPT_CATEGORIES.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'category-tab';
      btn.dataset.category = cat.id;
      btn.innerHTML = `<span class="cat-emoji">${cat.icon}</span><span>${cat.name}</span>`;
      btn.addEventListener('click', () => this.switchCategory(cat.id));
      container.appendChild(btn);
    });
  },

  // 切换分类
  switchCategory(catId) {
    this.state.currentCategory = catId;

    document.querySelectorAll('.category-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.category === catId);
    });

    this.renderScriptCards();
  },

  // 渲染剧本卡片
  renderScriptCards() {
    const grid = document.getElementById('scriptGrid');
    const empty = document.getElementById('emptyState');
    if (!grid) return;

    const indexData = this.state._scriptIndex || [];
    let filtered = indexData;

    // 按分类过滤
    if (this.state.currentCategory !== 'all') {
      filtered = filtered.filter(s => s.category === this.state.currentCategory);
    }

    // 按搜索过滤
    if (this.state.searchQuery.trim()) {
      const q = this.state.searchQuery.toLowerCase();
      filtered = filtered.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.scene.toLowerCase().includes(q) ||
        s.roles.some(r => r.toLowerCase().includes(q))
      );
    }

    // 清空并渲染
    grid.innerHTML = '';

    if (filtered.length === 0) {
      grid.style.display = 'none';
      empty.style.display = 'block';
      return;
    }

    grid.style.display = 'grid';
    empty.style.display = 'none';

    filtered.forEach(script => {
      const cat = SCRIPT_CATEGORIES.find(c => c.id === script.category);
      const isFav = Storage.isFavorite(script.id);
      const isDone = Storage.isCompleted(script.id);
      const progress = Storage.getProgress(script.id);
      const progressPercent = isDone
        ? 100
        : Math.round((progress.currentLine / (script.lineCount || 1)) * 100);

      const card = document.createElement('div');
      card.className = 'script-card';
      card.innerHTML = `
        ${isDone ? `<div class="card-badges"><span class="badge-completed">${ICONS.check} 已完成</span></div>` : ''}
        <div class="card-header">
          <span class="card-category"><span class="cat-emoji">${cat ? cat.icon : ''}</span> ${cat ? cat.name : script.category}</span>
          <button class="card-fav ${isFav ? 'active' : ''}" data-id="${script.id}" aria-label="收藏">
            ${isFav ? ICONS.heartFilled : ICONS.heartOutline}
          </button>
        </div>
        <div class="card-title">${script.title}</div>
        <div class="card-scene">${script.scene}</div>
        <div class="card-meta">
          <span>${ICONS.clock} ${script.duration}</span>
          <span>${ICONS.chart} ${script.difficulty}</span>
          <span>${ICONS.file} ${script.lineCount || '--'}句</span>
        </div>
        <div class="card-roles">
          ${script.roles.map(r => `<span class="role-tag">${r}</span>`).join('')}
        </div>
        <div class="card-progress">
          <div class="card-progress-fill" style="width:${progressPercent}%"></div>
        </div>
      `;

      // 点击进入剧本详情
      card.addEventListener('click', (e) => {
        if (e.target.closest('.card-fav')) return;
        window.location.href = `script.html?id=${script.id}`;
      });

      // 收藏按钮
      const favBtn = card.querySelector('.card-fav');
      favBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (Storage.isFavorite(script.id)) {
          Storage.removeFavorite(script.id);
          favBtn.innerHTML = ICONS.heartOutline;
          favBtn.classList.remove('active');
        } else {
          Storage.addFavorite(script.id);
          favBtn.innerHTML = ICONS.heartFilled;
          favBtn.classList.add('active');
        }
      });

      grid.appendChild(card);
    });
  },

  // 绑定首页事件
  bindHomeEvents() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.state.searchQuery = e.target.value;
        this.renderScriptCards();
      });
    }

    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        this.state.searchQuery = searchInput.value;
        this.renderScriptCards();
      });
    }
  },

  // 显示收藏列表
  showFavorites() {
    const favorites = Storage.getFavorites();
    const grid = document.getElementById('scriptGrid');
    const empty = document.getElementById('emptyState');
    const tabs = document.getElementById('categoryTabs');

    if (tabs) tabs.style.display = 'none';

    grid.innerHTML = '';
    const indexData = this.state._scriptIndex || [];
    const filtered = indexData.filter(s => favorites.includes(s.id));

    if (filtered.length === 0) {
      grid.style.display = 'none';
      empty.style.display = 'block';
      empty.innerHTML = `
        <div class="icon">${ICONS.heartOutline}</div>
        <p>还没有收藏任何剧本，快去剧本库添加吧！</p>
        <a href="index.html">去剧本库 →</a>
      `;
      return;
    }

    grid.style.display = 'grid';
    empty.style.display = 'none';

    filtered.forEach(script => {
      const cat = SCRIPT_CATEGORIES.find(c => c.id === script.category);
      const isFav = true;
      const isDone = Storage.isCompleted(script.id);
      const progress = Storage.getProgress(script.id);
      const progressPercent = isDone
        ? 100
        : Math.round((progress.currentLine / (script.lineCount || 1)) * 100);

      const card = document.createElement('div');
      card.className = 'script-card';
      card.innerHTML = `
        ${isDone ? `<div class="card-badges"><span class="badge-completed">${ICONS.check} 已完成</span></div>` : ''}
        <div class="card-header">
          <span class="card-category"><span class="cat-emoji">${cat ? cat.icon : ''}</span> ${cat ? cat.name : script.category}</span>
          <button class="card-fav active" data-id="${script.id}" aria-label="取消收藏">${ICONS.heartFilled}</button>
        </div>
        <div class="card-title">${script.title}</div>
        <div class="card-scene">${script.scene}</div>
        <div class="card-meta">
          <span>${ICONS.clock} ${script.duration}</span>
          <span>${ICONS.chart} ${script.difficulty}</span>
          <span>${ICONS.file} ${script.lineCount || '--'}句</span>
        </div>
        <div class="card-roles">
          ${script.roles.map(r => `<span class="role-tag">${r}</span>`).join('')}
        </div>
        <div class="card-progress">
          <div class="card-progress-fill" style="width:${progressPercent}%"></div>
        </div>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.closest('.card-fav')) return;
        window.location.href = `script.html?id=${script.id}`;
      });

      const favBtn = card.querySelector('.card-fav');
      favBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        Storage.removeFavorite(script.id);
        this.showFavorites(); // 重新渲染
      });

      grid.appendChild(card);
    });
  },

  // 显示已完成列表
  showCompleted() {
    const completed = Storage.getCompleted();
    const grid = document.getElementById('scriptGrid');
    const empty = document.getElementById('emptyState');
    const tabs = document.getElementById('categoryTabs');

    if (tabs) tabs.style.display = 'none';

    grid.innerHTML = '';
    const indexData2 = this.state._scriptIndex || [];
    const filtered = indexData2.filter(s => completed.includes(s.id));

    if (filtered.length === 0) {
      grid.style.display = 'none';
      empty.style.display = 'block';
      empty.innerHTML = `
        <div class="icon">${ICONS.clipboard}</div>
        <p>还没有完成任何剧本，去练习并标记完成吧！</p>
        <a href="index.html">去剧本库 →</a>
      `;
      return;
    }

    grid.style.display = 'grid';
    empty.style.display = 'none';

    filtered.forEach(script => {
      const cat = SCRIPT_CATEGORIES.find(c => c.id === script.category);
      const isFav = Storage.isFavorite(script.id);
      const isDone = true;

      const card = document.createElement('div');
      card.className = 'script-card';
      card.innerHTML = `
        <div class="card-badges"><span class="badge-completed">${ICONS.check} 已完成</span></div>
        <div class="card-header">
          <span class="card-category"><span class="cat-emoji">${cat ? cat.icon : ''}</span> ${cat ? cat.name : script.category}</span>
          <button class="card-fav ${isFav ? 'active' : ''}" data-id="${script.id}" aria-label="收藏">
            ${isFav ? ICONS.heartFilled : ICONS.heartOutline}
          </button>
        </div>
        <div class="card-title">${script.title}</div>
        <div class="card-scene">${script.scene}</div>
        <div class="card-meta">
          <span>${ICONS.clock} ${script.duration}</span>
          <span>${ICONS.chart} ${script.difficulty}</span>
          <span>${ICONS.file} ${script.lines.length}句</span>
        </div>
        <div class="card-roles">
          ${script.roles.map(r => `<span class="role-tag">${r}</span>`).join('')}
        </div>
        <div class="card-progress">
          <div class="card-progress-fill" style="width:100%"></div>
        </div>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.closest('.card-fav')) return;
        window.location.href = `script.html?id=${script.id}`;
      });

      const favBtn = card.querySelector('.card-fav');
      favBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (Storage.isFavorite(script.id)) {
          Storage.removeFavorite(script.id);
          favBtn.innerHTML = ICONS.heartOutline;
          favBtn.classList.remove('active');
        } else {
          Storage.addFavorite(script.id);
          favBtn.innerHTML = ICONS.heartFilled;
          favBtn.classList.add('active');
        }
      });

      grid.appendChild(card);
    });
  },

  // ============================
  // 剧本练习页初始化
  // ============================
  async initScript() {
    // 兼容老浏览器：URLSearchParams 不存在时手动解析
    let scriptIdRaw = null;
    if (typeof URLSearchParams === 'function') {
      scriptIdRaw = new URLSearchParams(window.location.search).get('id');
    } else {
      const search = window.location.search || '';
      const m = search.match(/[?&]id=([^&]+)/);
      scriptIdRaw = m ? decodeURIComponent(m[1]) : null;
    }
    const scriptId = parseInt(scriptIdRaw, 10);

    // 通过 fetch 按需加载单个剧本数据
    const script = await this._loadScript(scriptId);
    if (!script) {
      document.body.innerHTML = `
        <div class="container" style="text-align:center;padding-top:80px;">
          <h1>剧本未找到</h1>
          <p style="margin:16px 0;">该剧本不存在或已被删除。</p>
          <a href="index.html" class="btn btn-primary">返回剧本库</a>
        </div>
      `;
      return;
    }

    this.state.currentScript = script;
    this.state.myRole = script.roles[0];
    this.state.currentLine = 0;

    // 预加载语音列表（部分浏览器 voices 异步加载）
    // 安全检查：微信/小米等浏览器可能不支持 speechSynthesis
    try {
      if (this.state.synth && typeof this.state.synth.getVoices === 'function') {
        if (this.state.synth.getVoices().length === 0) {
          this.state.synth.addEventListener('voiceschanged', () => {}, { once: true });
        }
      }
    } catch (e) {
      this.state.synth = null;
    }

    // 恢复进度
    const progress = Storage.getProgress(script.id);
    this.state.currentLine = progress.currentLine || 0;

    this.renderScriptDetail();
    this.renderDialogue();
    this.bindScriptEvents();
    this.updateProgress();
    this.updatePlaybackInfo();
  },

  // 渲染剧本详情头部
  renderScriptDetail() {
    const script = this.state.currentScript;
    const cat = SCRIPT_CATEGORIES.find(c => c.id === script.category);

    document.getElementById('detailTitle').textContent = script.title;
    document.getElementById('detailScene').textContent = script.scene;
    document.getElementById('detailMeta').innerHTML = `
      <span><span class="cat-emoji">${cat ? cat.icon : ''}</span> ${cat ? cat.name : script.category}</span>
      <span>${ICONS.clock} ${script.duration}</span>
      <span>${ICONS.chart} ${script.difficulty}</span>
      <span>${ICONS.file} ${script.lines.length}句台词</span>
    `;

    // 角色选择下拉框
    const roleSelect = document.getElementById('roleSelect');
    roleSelect.innerHTML = script.roles.map((r, i) =>
      `<option value="${r}" ${i === 0 ? 'selected' : ''}>${r}</option>`
    ).join('');

    // 渲染收藏按钮状态
    this.updateFavoriteButton();
    // 渲染完成按钮状态
    this.updateCompleteButton();
  },

  // 更新收藏按钮显示
  updateFavoriteButton() {
    const btn = document.getElementById('btnFavorite');
    if (!btn) return;
    const script = this.state.currentScript;
    if (!script) return;
    const isFav = Storage.isFavorite(script.id);
    btn.querySelector('.action-icon').innerHTML = isFav ? ICONS.heartFilled : ICONS.heartOutline;
    btn.querySelector('.action-text').textContent = isFav ? '已收藏' : '收藏';
    btn.classList.toggle('active-fav', isFav);
  },

  // 更新完成按钮显示
  updateCompleteButton() {
    const btn = document.getElementById('btnComplete');
    if (!btn) return;
    const script = this.state.currentScript;
    if (!script) return;
    const isDone = Storage.isCompleted(script.id);
    btn.querySelector('.action-icon').innerHTML = isDone ? ICONS.checkSquare : ICONS.square;
    btn.querySelector('.action-text').textContent = isDone ? '已完成' : '标记完成';
    btn.classList.toggle('active-done', isDone);
  },

  // 渲染对话
  renderDialogue() {
    const container = document.getElementById('dialogueContainer');
    const script = this.state.currentScript;
    if (!container || !script) return;

    container.innerHTML = '';

    script.lines.forEach((line, index) => {
      const roleIndex = script.roles.indexOf(line.role);
      const roleClass = ['role-A', 'role-B', 'role-C', 'role-D'][roleIndex] || 'role-A';
      const isMyRole = line.role === this.state.myRole;

      const div = document.createElement('div');
      div.className = `dialogue-line ${index === this.state.currentLine ? 'active' : ''}`;
      div.dataset.index = index;
      div.innerHTML = `
        <div class="line-avatar ${roleClass}">${line.role[0]}</div>
        <div class="line-content">
          <div class="line-role">${line.role} ${isMyRole ? '<span class="my-role">我</span>' : ''}</div>
          <div class="line-en">${line.en}</div>
          <div class="line-zh ${this.state.showZh ? '' : 'hidden'}">${line.zh}</div>
        </div>
        <div class="line-actions">
          <button class="line-btn" data-action="speak" data-index="${index}" title="朗读" aria-label="朗读">${ICONS.volume}</button>
          <button class="line-btn" data-action="repeat" data-index="${index}" title="复读" aria-label="复读">${ICONS.repeat}</button>
        </div>
      `;

      div.addEventListener('click', (e) => {
        if (e.target.closest('.line-btn')) return;
        this.goToLine(index);
      });

      container.appendChild(div);
    });

    // 滚动到当前行
    this.scrollToActiveLine();
  },

  // 绑定剧本页事件
  bindScriptEvents() {
    // 收藏按钮
    const btnFavorite = document.getElementById('btnFavorite');
    if (btnFavorite) {
      btnFavorite.addEventListener('click', () => {
        const script = this.state.currentScript;
        if (!script) return;
        if (Storage.isFavorite(script.id)) {
          Storage.removeFavorite(script.id);
        } else {
          Storage.addFavorite(script.id);
        }
        this.updateFavoriteButton();
      });
    }

    // 标记完成按钮
    const btnComplete = document.getElementById('btnComplete');
    if (btnComplete) {
      btnComplete.addEventListener('click', () => {
        const script = this.state.currentScript;
        if (!script) return;
        if (Storage.isCompleted(script.id)) {
          Storage.unsetCompleted(script.id);
        } else {
          Storage.setCompleted(script.id);
          // 完成时进度条设为100%
          this.updateProgress();
        }
        this.updateCompleteButton();
        this.updateProgress();
      });
    }

    // 角色切换
    const roleSelect = document.getElementById('roleSelect');
    if (roleSelect) {
      roleSelect.addEventListener('change', (e) => {
        this.state.myRole = e.target.value;
        this.renderDialogue();
      });
    }

    // 中文显示切换
    const toggleZh = document.getElementById('toggleZh');
    if (toggleZh) {
      const updateToggleZh = () => {
        toggleZh.innerHTML = `${this.state.showZh ? ICONS.eyeOff : ICONS.eye}<span>${this.state.showZh ? '隐藏中文' : '显示中文'}</span>`;
        toggleZh.classList.toggle('active', !this.state.showZh);
      };
      updateToggleZh();
      toggleZh.addEventListener('click', () => {
        this.state.showZh = !this.state.showZh;
        updateToggleZh();
        document.querySelectorAll('.line-zh').forEach(el => {
          el.classList.toggle('hidden', !this.state.showZh);
        });
      });
    }

    // 逐句播放（上方按钮，支持暂停）
    const btnPlayAll = document.getElementById('btnPlayAll');
    if (btnPlayAll) {
      btnPlayAll.addEventListener('click', () => {
        if (this.state.isPlaying) {
          this.pausePlayback();
        } else {
          this.startPlayback();
        }
      });
    }

    // 底部控制栏
    const pbPlay = document.getElementById('pbPlay');
    const pbPrev = document.getElementById('pbPrev');
    const pbNext = document.getElementById('pbNext');
    const pbRepeat = document.getElementById('pbRepeat');

    if (pbPlay) {
      pbPlay.addEventListener('click', () => {
        if (this.state.isPlaying) {
          this.pausePlayback();
        } else {
          this.startPlayback();
        }
      });
    }

    if (pbPrev) {
      pbPrev.addEventListener('click', () => this.prevLine());
    }

    if (pbNext) {
      pbNext.addEventListener('click', () => this.nextLine());
    }

    if (pbRepeat) {
      pbRepeat.addEventListener('click', () => {
        this.state.repeatMode = !this.state.repeatMode;
        this.updateRepeatButton();
      });
    }

    // 行内按钮事件委托
    const container = document.getElementById('dialogueContainer');
    if (container) {
      container.addEventListener('click', (e) => {
        const btn = e.target.closest('.line-btn');
        if (!btn) return;

        const index = parseInt(btn.dataset.index);
        const action = btn.dataset.action;

        if (action === 'speak') {
          this.speakLine(index);
        } else if (action === 'repeat') {
          // toggle：如果当前行正在复读，取消并停止；否则开启复读
          if (this.state.isPlaying && this.state.repeatMode && this.state.currentLine === index) {
            this.pausePlayback();
            this.state.repeatMode = false;
            this.updateRepeatButton();
          } else {
            this.goToLine(index);
            this.state.repeatMode = true;
            this.updateRepeatButton();
            this.startPlayback();
          }
        }
      });
    }

    // 键盘快捷键
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        if (this.state.isPlaying) {
          this.pausePlayback();
        } else {
          this.startPlayback();
        }
      } else if (e.code === 'ArrowLeft') {
        this.prevLine();
      } else if (e.code === 'ArrowRight') {
        this.nextLine();
      }
    });
  },

  // ============================
  // 播放控制
  // ============================
  startPlayback() {
    if (!this.state.currentScript) return;

    this.state.isPlaying = true;
    this.state.isPaused = false;
    this.updatePlayButton();

    this.playCurrentLine();
  },

  pausePlayback() {
    this.state.isPlaying = false;
    this.state.isPaused = true;
    if (this.state.currentAudio) {
      this.state.currentAudio.pause();
      this.state.currentAudio.currentTime = 0;
      this.state.currentAudio = null;
    }
    this.state.synth.cancel();
    this.updatePlayButton();

    // 移除 playing 动画
    document.querySelectorAll('.dialogue-line').forEach(el => {
      el.classList.remove('playing');
    });
  },

  updatePlayButton() {
    const btn = document.getElementById('pbPlay');
    if (btn) {
      btn.innerHTML = this.state.isPlaying ? ICONS.pause : ICONS.play;
    }
    const btnPlayAll = document.getElementById('btnPlayAll');
    if (btnPlayAll) {
      btnPlayAll.innerHTML = `${this.state.isPlaying ? ICONS.pause : ICONS.play}<span>${this.state.isPlaying ? '暂停播放' : '逐句播放'}</span>`;
    }
  },

  updateRepeatButton() {
    const pbRepeat = document.getElementById('pbRepeat');
    if (pbRepeat) {
      pbRepeat.classList.toggle('repeat-active', this.state.repeatMode);
      pbRepeat.style.background = '';
      pbRepeat.style.color = '';
    }
    // 同步行内复读按钮状态
    document.querySelectorAll('.line-btn[data-action="repeat"]').forEach(btn => {
      const idx = parseInt(btn.dataset.index);
      btn.classList.toggle('active-repeat', this.state.repeatMode && idx === this.state.currentLine);
    });
  },

  playCurrentLine() {
    if (!this.state.isPlaying || !this.state.currentScript) return;

    const script = this.state.currentScript;
    const line = script.lines[this.state.currentLine];
    if (!line) {
      // 播放完成
      this.state.isPlaying = false;
      this.updatePlayButton();
      Storage.saveProgress(script.id, { currentLine: 0, completed: true });
      this.updateProgress();
      return;
    }

    // 更新UI
    this.highlightLine(this.state.currentLine);
    this.updateProgress();
    this.updatePlaybackInfo();

    // 朗读
    this.speak(line.en, () => {
      if (!this.state.isPlaying) return;

      if (this.state.repeatMode) {
        // 复读模式：重复当前句
        setTimeout(() => this.playCurrentLine(), 500);
      } else {
        // 正常模式：进入下一句
        setTimeout(() => {
          this.state.currentLine++;
          Storage.saveProgress(script.id, {
            currentLine: this.state.currentLine,
            completed: false
          });
          this.playCurrentLine();
        }, 800);
      }
    }, line.role);
  },

  speak(text, onEnd, role) {
    // 停止当前播放
    if (this.state.currentAudio) {
      try {
        this.state.currentAudio.pause();
        this.state.currentAudio.currentTime = 0;
      } catch (e) {}
      this.state.currentAudio = null;
    }
    if (this.state.synth && typeof this.state.synth.cancel === 'function') {
      try { this.state.synth.cancel(); } catch (e) {}
    }

    const script = this.state.currentScript;
    if (script && this.state.currentLine >= 0 && this.state.currentLine < script.lines.length) {
      const lineIndex = this.state.currentLine;
      const audioUrl = 'audio/' + script.id + '/' + lineIndex + '.m4a';
      const audio = new Audio(audioUrl);

      const handleEnd = () => {
        this.state.currentAudio = null;
        if (onEnd) onEnd();
      };

      audio.addEventListener('ended', handleEnd, { once: true });
      audio.addEventListener('error', () => {
        // 音频文件不存在，回退到 speechSynthesis
        this.state.currentAudio = null;
        this._speakFallback(text, onEnd, role);
      }, { once: true });

      this.state.currentAudio = audio;
      // 兼容老浏览器：play() 可能不返回 Promise
      try {
        const playRet = audio.play();
        if (playRet && typeof playRet.catch === 'function') {
          playRet.catch(() => {
            this.state.currentAudio = null;
            this._speakFallback(text, onEnd, role);
          });
        }
      } catch (e) {
        this.state.currentAudio = null;
        this._speakFallback(text, onEnd, role);
      }
      return;
    }

    // 没有剧本上下文，直接用回退方案
    this._speakFallback(text, onEnd, role);
  },

  // speechSynthesis 回退方案（桌面浏览器）
  _speakFallback(text, onEnd, role) {
    // 浏览器不支持 speechSynthesis 时，直接结束
    if (!this.state.synth || typeof SpeechSynthesisUtterance === 'undefined') {
      if (onEnd) { try { onEnd(); } catch (e) {} }
      return;
    }

    let utterance;
    try {
      utterance = new SpeechSynthesisUtterance(text);
    } catch (e) {
      if (onEnd) { try { onEnd(); } catch (e2) {} }
      return;
    }
    utterance.lang = 'en-US';
    utterance.rate = 0.9;

    let enVoices = [];
    try {
      const voices = this.state.synth.getVoices() || [];
      enVoices = voices.filter(v => v.lang && v.lang.indexOf('en') === 0);
    } catch (e) {}

    if (enVoices.length >= 2 && role) {
      const script = this.state.currentScript;
      const roleIndex = script ? script.roles.indexOf(role) : 0;
      utterance.voice = enVoices[roleIndex % enVoices.length];
      if (roleIndex === 0) {
        utterance.pitch = 1.15;
        utterance.rate = 0.95;
      } else {
        utterance.pitch = 0.85;
        utterance.rate = 0.9;
      }
    } else if (enVoices.length === 1) {
      utterance.voice = enVoices[0];
    }

    if (onEnd) {
      utterance.onend = onEnd;
      utterance.onerror = onEnd;
    }

    try {
      this.state.synth.speak(utterance);
    } catch (e) {
      if (onEnd) { try { onEnd(); } catch (e2) {} }
    }
  },

  speakLine(index) {
    const script = this.state.currentScript;
    if (!script || !script.lines[index]) return;

    this.goToLine(index);
    this.speak(script.lines[index].en, null, script.lines[index].role);
  },

  goToLine(index) {
    this.state.currentLine = index;
    this.highlightLine(index);
    this.updateProgress();
    this.updatePlaybackInfo();

    const script = this.state.currentScript;
    if (script) {
      Storage.saveProgress(script.id, {
        currentLine: index,
        completed: false
      });
    }
  },

  prevLine() {
    if (this.state.currentLine > 0) {
      this.goToLine(this.state.currentLine - 1);
    }
  },

  nextLine() {
    const script = this.state.currentScript;
    if (script && this.state.currentLine < script.lines.length - 1) {
      this.goToLine(this.state.currentLine + 1);
    }
  },

  highlightLine(index) {
    document.querySelectorAll('.dialogue-line').forEach((el, i) => {
      el.classList.toggle('active', i === index);
      el.classList.toggle('playing', i === index && this.state.isPlaying);
    });
    this.scrollToActiveLine();
  },

  scrollToActiveLine() {
    const active = document.querySelector('.dialogue-line.active');
    if (active) {
      active.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  },

  updateProgress() {
    const script = this.state.currentScript;
    if (!script) return;

    const isDone = Storage.isCompleted(script.id);
    const percent = isDone
      ? 100
      : Math.round(((this.state.currentLine + 1) / script.lines.length) * 100);
    const fill = document.getElementById('progressFill');
    if (fill) {
      fill.style.width = `${percent}%`;
    }
  },

  updatePlaybackInfo() {
    const script = this.state.currentScript;
    if (!script) return;

    const info = document.getElementById('pbInfo');
    if (info) {
      info.textContent = `${this.state.currentLine + 1} / ${script.lines.length}`;
    }
  }
};
