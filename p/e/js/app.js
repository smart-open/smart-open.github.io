/**
 * 英语对话剧本库 - 核心交互逻辑
 * 包含首页展示、剧本练习、语音合成、进度管理等功能
 */

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
    synth: window.speechSynthesis
  },

  // ============================
  // 首页初始化
  // ============================
  initHome() {
    this.renderCategoryTabs();
    this.renderScriptCards();
    this.bindHomeEvents();

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
    allBtn.textContent = '📖 全部';
    allBtn.addEventListener('click', () => this.switchCategory('all'));
    container.appendChild(allBtn);

    // 各分类按钮
    SCRIPT_CATEGORIES.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'category-tab';
      btn.dataset.category = cat.id;
      btn.innerHTML = `${cat.icon} ${cat.name}`;
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

    let filtered = SCRIPTS;

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
        : Math.round((progress.currentLine / script.lines.length) * 100);

      const card = document.createElement('div');
      card.className = 'script-card';
      card.innerHTML = `
        ${isDone ? '<div class="card-badges"><span class="badge-completed">✅ 已完成</span></div>' : ''}
        <div class="card-header">
          <span class="card-category">${cat ? cat.icon : ''} ${cat ? cat.name : script.category}</span>
          <button class="card-fav ${isFav ? 'active' : ''}" data-id="${script.id}">
            ${isFav ? '❤️' : '🤍'}
          </button>
        </div>
        <div class="card-title">${script.title}</div>
        <div class="card-scene">${script.scene}</div>
        <div class="card-meta">
          <span>⏱ ${script.duration}</span>
          <span>📊 ${script.difficulty}</span>
          <span>📝 ${script.lines.length}句</span>
        </div>
        <div class="card-roles">
          ${script.roles.map(r => `<span class="role-tag">${r}</span>`).join('')}
        </div>
        <div class="progress-bar" style="margin-top:14px;height:4px;">
          <div class="progress-fill" style="width:${progressPercent}%"></div>
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
          favBtn.innerHTML = '🤍';
          favBtn.classList.remove('active');
        } else {
          Storage.addFavorite(script.id);
          favBtn.innerHTML = '❤️';
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
    const filtered = SCRIPTS.filter(s => favorites.includes(s.id));

    if (filtered.length === 0) {
      grid.style.display = 'none';
      empty.style.display = 'block';
      empty.innerHTML = `
        <div class="icon">🤍</div>
        <p>还没有收藏任何剧本，快去剧本库添加吧！</p>
        <a href="index.html" style="display:inline-block;margin-top:12px;color:var(--primary);font-weight:600;">去剧本库 →</a>
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
        : Math.round((progress.currentLine / script.lines.length) * 100);

      const card = document.createElement('div');
      card.className = 'script-card';
      card.innerHTML = `
        ${isDone ? '<div class="card-badges"><span class="badge-completed">✅ 已完成</span></div>' : ''}
        <div class="card-header">
          <span class="card-category">${cat ? cat.icon : ''} ${cat ? cat.name : script.category}</span>
          <button class="card-fav ${isFav ? 'active' : ''}" data-id="${script.id}">❤️</button>
        </div>
        <div class="card-title">${script.title}</div>
        <div class="card-scene">${script.scene}</div>
        <div class="card-meta">
          <span>⏱ ${script.duration}</span>
          <span>📊 ${script.difficulty}</span>
          <span>📝 ${script.lines.length}句</span>
        </div>
        <div class="card-roles">
          ${script.roles.map(r => `<span class="role-tag">${r}</span>`).join('')}
        </div>
        <div class="progress-bar" style="margin-top:14px;height:4px;">
          <div class="progress-fill" style="width:${progressPercent}%"></div>
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
    const filtered = SCRIPTS.filter(s => completed.includes(s.id));

    if (filtered.length === 0) {
      grid.style.display = 'none';
      empty.style.display = 'block';
      empty.innerHTML = `
        <div class="icon">📋</div>
        <p>还没有完成任何剧本，去练习并标记完成吧！</p>
        <a href="index.html" style="display:inline-block;margin-top:12px;color:var(--primary);font-weight:600;">去剧本库 →</a>
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
        <div class="card-badges"><span class="badge-completed">✅ 已完成</span></div>
        <div class="card-header">
          <span class="card-category">${cat ? cat.icon : ''} ${cat ? cat.name : script.category}</span>
          <button class="card-fav ${isFav ? 'active' : ''}" data-id="${script.id}">
            ${isFav ? '❤️' : '🤍'}
          </button>
        </div>
        <div class="card-title">${script.title}</div>
        <div class="card-scene">${script.scene}</div>
        <div class="card-meta">
          <span>⏱ ${script.duration}</span>
          <span>📊 ${script.difficulty}</span>
          <span>📝 ${script.lines.length}句</span>
        </div>
        <div class="card-roles">
          ${script.roles.map(r => `<span class="role-tag">${r}</span>`).join('')}
        </div>
        <div class="progress-bar" style="margin-top:14px;height:4px;">
          <div class="progress-fill" style="width:100%"></div>
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
          favBtn.innerHTML = '🤍';
          favBtn.classList.remove('active');
        } else {
          Storage.addFavorite(script.id);
          favBtn.innerHTML = '❤️';
          favBtn.classList.add('active');
        }
      });

      grid.appendChild(card);
    });
  },

  // ============================
  // 剧本练习页初始化
  // ============================
  initScript() {
    const params = new URLSearchParams(window.location.search);
    const scriptId = parseInt(params.get('id'));

    const script = SCRIPTS.find(s => s.id === scriptId);
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
    if (this.state.synth.getVoices().length === 0) {
      this.state.synth.addEventListener('voiceschanged', () => {}, { once: true });
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
      <span>${cat ? cat.icon : ''} ${cat ? cat.name : script.category}</span>
      <span>⏱ ${script.duration}</span>
      <span>📊 ${script.difficulty}</span>
      <span>📝 ${script.lines.length}句台词</span>
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
    btn.querySelector('.action-icon').textContent = isFav ? '❤️' : '🤍';
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
    btn.querySelector('.action-icon').textContent = isDone ? '✅' : '⬜';
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
          <div class="line-role">${line.role} ${isMyRole ? '(我)' : ''}</div>
          <div class="line-en">${line.en}</div>
          <div class="line-zh ${this.state.showZh ? '' : 'hidden'}">${line.zh}</div>
        </div>
        <div class="line-actions">
          <button class="line-btn" data-action="speak" data-index="${index}" title="朗读">🔊</button>
          <button class="line-btn" data-action="repeat" data-index="${index}" title="复读">🔁</button>
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
      toggleZh.addEventListener('click', () => {
        this.state.showZh = !this.state.showZh;
        toggleZh.textContent = this.state.showZh ? '隐藏中文' : '显示中文';
        toggleZh.classList.toggle('active', !this.state.showZh);
        document.querySelectorAll('.line-zh').forEach(el => {
          el.classList.toggle('hidden', !this.state.showZh);
        });
      });
    }

    // 逐句播放
    const btnPlayAll = document.getElementById('btnPlayAll');
    if (btnPlayAll) {
      btnPlayAll.addEventListener('click', () => {
        this.startPlayback();
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
        pbRepeat.style.background = this.state.repeatMode ? 'var(--accent)' : '';
        pbRepeat.style.color = this.state.repeatMode ? 'var(--text)' : '';
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
          this.goToLine(index);
          this.state.repeatMode = true;
          document.getElementById('pbRepeat').style.background = 'var(--accent)';
          this.startPlayback();
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
      btn.textContent = this.state.isPlaying ? '⏸' : '▶';
    }
    const btnPlayAll = document.getElementById('btnPlayAll');
    if (btnPlayAll) {
      btnPlayAll.textContent = this.state.isPlaying ? '⏸ 暂停播放' : '▶ 逐句播放';
    }
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
    this.state.synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;

    // 获取可用声音列表（确保已加载）
    const voices = this.state.synth.getVoices();
    const enVoices = voices.filter(v => v.lang.startsWith('en'));

    if (enVoices.length >= 2 && role) {
      // 根据角色在剧本中的顺序选择不同声音
      const script = this.state.currentScript;
      const roleIndex = script ? script.roles.indexOf(role) : 0;
      // 交替使用不同声音，实现两个角色声音区分
      utterance.voice = enVoices[roleIndex % enVoices.length];
      // 第一个角色音调稍高（偏女性），第二个稍低（偏男性）
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
    }

    this.state.synth.speak(utterance);
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
