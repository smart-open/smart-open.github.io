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

// 本地存储工具函数
const Storage = {
  getFavorites() {
    const data = localStorage.getItem('dialogue_favorites');
    return data ? JSON.parse(data) : [];
  },
  addFavorite(id) {
    const favorites = this.getFavorites();
    if (!favorites.includes(id)) {
      favorites.push(id);
      localStorage.setItem('dialogue_favorites', JSON.stringify(favorites));
    }
  },
  removeFavorite(id) {
    const favorites = this.getFavorites().filter(f => f !== id);
    localStorage.setItem('dialogue_favorites', JSON.stringify(favorites));
  },
  isFavorite(id) {
    return this.getFavorites().includes(id);
  },
  getProgress(id) {
    const data = localStorage.getItem('dialogue_progress_' + id);
    return data ? JSON.parse(data) : { currentLine: 0, completed: false };
  },
  saveProgress(id, progress) {
    localStorage.setItem('dialogue_progress_' + id, JSON.stringify(progress));
  },
  // 已完成标记
  getCompleted() {
    const data = localStorage.getItem('dialogue_completed');
    return data ? JSON.parse(data) : [];
  },
  setCompleted(id) {
    const completed = this.getCompleted();
    if (!completed.includes(id)) {
      completed.push(id);
      localStorage.setItem('dialogue_completed', JSON.stringify(completed));
    }
    // 同步更新 progress
    const progress = this.getProgress(id);
    progress.completed = true;
    this.saveProgress(id, progress);
  },
  unsetCompleted(id) {
    const completed = this.getCompleted().filter(c => c !== id);
    localStorage.setItem('dialogue_completed', JSON.stringify(completed));
    // 同步更新 progress
    const progress = this.getProgress(id);
    progress.completed = false;
    this.saveProgress(id, progress);
  },
  isCompleted(id) {
    return this.getCompleted().includes(id);
  }
};



