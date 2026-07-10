(function() {
  // Step 1: 合并分片（使用 concat 代替 push.apply，更安全）
  var A = Array.prototype.concat.apply([],
    Array.from({length: 10}, function(_, i) { return window['dataChunk' + i] || []; })
  );

  // Step 2: URL 还原
  A.forEach(function(sk) {
    if (sk.url && sk.url.charAt(0) === 'p') {
      var idx = sk.url.indexOf(':');
      if (idx > 0) {
        var key = sk.url.substring(0, idx);
        var rest = sk.url.substring(idx + 1);
        sk.url = (URL_P[key] || '') + rest;
      }
    }
  });

  // Step 3: 建立索引 (O(n) 而非 O(n*m))
  var index = new Map();
  A.forEach(function(sk) {
    var key = sk.c + '-' + sk.s;
    if (!index.has(key)) index.set(key, []);
    index.get(key).push(sk);
  });

  // Step 4: 构建嵌套 categories 结构
  window.categories = schema.categories.map(function(cat) {
    return {
      id: String(cat.id),
      name: cat.name,
      subcategories: cat.subcategories.map(function(sub) {
        var key = cat.id + '-' + sub.id;
        return {
          id: String(sub.id),
          name: sub.name,
          parentCatId: String(cat.id),
          skills: index.get(key) || []
        };
      })
    };
  });

  // Step 5: 暴露扁平数据供搜索使用
  window.allSkills = A;

  // Step 6: 构建 catId-subId -> { catName, subName } 映射供搜索分组
  var catMap = new Map();
  schema.categories.forEach(function(cat) {
    cat.subcategories.forEach(function(sub) {
      catMap.set(cat.id + '-' + sub.id, { catName: cat.name, subName: sub.name });
    });
  });
  window.categoryMap = catMap;
})();
