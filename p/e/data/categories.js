/**
 * 分类数据 + 本地存储工具
 */
const SCRIPT_CATEGORIES = [
  {
    "id": "daily",
    "name": "日常交际",
    "icon": "💬",
    "color": "#4ECDC4"
  },
  {
    "id": "school",
    "name": "校园生活",
    "icon": "🎒",
    "color": "#FF6B6B"
  },
  {
    "id": "shopping",
    "name": "购物消费",
    "icon": "🛍️",
    "color": "#FF9F1C"
  },
  {
    "id": "travel",
    "name": "出行旅游",
    "icon": "✈️",
    "color": "#1A535C"
  },
  {
    "id": "restaurant",
    "name": "餐厅用餐",
    "icon": "🍽️",
    "color": "#E17055"
  },
  {
    "id": "hospital",
    "name": "医院就诊",
    "icon": "🏥",
    "color": "#2EC4B6"
  },
  {
    "id": "family",
    "name": "家庭生活",
    "icon": "🏠",
    "color": "#A29BFE"
  },
  {
    "id": "sports",
    "name": "运动健身",
    "icon": "⚽",
    "color": "#00B894"
  },
  {
    "id": "party",
    "name": "聚会社交",
    "icon": "🎉",
    "color": "#FD79A8"
  },
  {
    "id": "emergency",
    "name": "紧急情况",
    "icon": "🆘",
    "color": "#D63031"
  },
  {
    "id": "workplace",
    "name": "职场工作",
    "icon": "💼",
    "color": "#636E72"
  },
  {
    "id": "online",
    "name": "网络生活",
    "icon": "💻",
    "color": "#0984E3"
  },
  {
    "id": "adultlife",
    "name": "成人生活",
    "icon": "🏡",
    "color": "#E84393"
  },
  {
    "id": "services",
    "name": "社会服务",
    "icon": "🏛️",
    "color": "#2D3436"
  }
];

// 本地存储工具函数（兼容微信/小米等浏览器，localStorage 不可用时降级到内存）
const Storage = (function () {
  // 检测 localStorage 是否可用
  let _memStore = {};
  let _lsAvailable = false;
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const testKey = '__dialogue_test__';
      window.localStorage.setItem(testKey, '1');
      window.localStorage.removeItem(testKey);
      _lsAvailable = true;
    }
  } catch (e) {
    _lsAvailable = false;
  }

  function _get(key) {
    if (_lsAvailable) {
      try { return window.localStorage.getItem(key); }
      catch (e) { return _memStore[key] || null; }
    }
    return _memStore[key] || null;
  }
  function _set(key, val) {
    if (_lsAvailable) {
      try { window.localStorage.setItem(key, val); return; }
      catch (e) {}
    }
    _memStore[key] = val;
  }

  return {
    _lsAvailable: _lsAvailable,
    getFavorites() {
      const data = _get('dialogue_favorites');
      if (!data) return [];
      try { return JSON.parse(data) || []; }
      catch (e) { return []; }
    },
    addFavorite(id) {
      const favorites = this.getFavorites();
      if (favorites.indexOf(id) === -1) {
        favorites.push(id);
        _set('dialogue_favorites', JSON.stringify(favorites));
      }
    },
    removeFavorite(id) {
      const favorites = this.getFavorites().filter(function (f) { return f !== id; });
      _set('dialogue_favorites', JSON.stringify(favorites));
    },
    isFavorite(id) {
      return this.getFavorites().indexOf(id) !== -1;
    },
    getProgress(id) {
      const data = _get('dialogue_progress_' + id);
      if (!data) return { currentLine: 0, completed: false };
      try { return JSON.parse(data) || { currentLine: 0, completed: false }; }
      catch (e) { return { currentLine: 0, completed: false }; }
    },
    saveProgress(id, progress) {
      try { _set('dialogue_progress_' + id, JSON.stringify(progress)); }
      catch (e) {}
    },
    // 已完成标记
    getCompleted() {
      const data = _get('dialogue_completed');
      if (!data) return [];
      try { return JSON.parse(data) || []; }
      catch (e) { return []; }
    },
    setCompleted(id) {
      const completed = this.getCompleted();
      if (completed.indexOf(id) === -1) {
        completed.push(id);
        _set('dialogue_completed', JSON.stringify(completed));
      }
      // 同步更新 progress
      const progress = this.getProgress(id);
      progress.completed = true;
      this.saveProgress(id, progress);
    },
    unsetCompleted(id) {
      const completed = this.getCompleted().filter(function (c) { return c !== id; });
      _set('dialogue_completed', JSON.stringify(completed));
      // 同步更新 progress
      const progress = this.getProgress(id);
      progress.completed = false;
      this.saveProgress(id, progress);
    },
    isCompleted(id) {
      return this.getCompleted().indexOf(id) !== -1;
    }
  };
})();



