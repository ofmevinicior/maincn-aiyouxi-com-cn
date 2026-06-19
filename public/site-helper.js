/**
 * 在页面中生成提示卡片、关键词徽章与访问说明。
 */
(function() {
  'use strict';

  // 配置数据
  var CONFIG = {
    siteUrl: 'https://maincn-aiyouxi.com.cn',
    keywords: ['爱游戏', '休闲', '益智', '在线', '攻略'],
    cardTitle: '欢迎来到爱游戏世界',
    cardDescription: '这里汇聚了最有趣的在线游戏，点击即可开始畅玩！'
  };

  // 工具函数：创建DOM元素并设置属性
  function createElement(tag, attrs, text) {
    var el = document.createElement(tag);
    if (attrs) {
      for (var key in attrs) {
        if (attrs.hasOwnProperty(key)) {
          el.setAttribute(key, attrs[key]);
        }
      }
    }
    if (text !== undefined) {
      el.textContent = text;
    }
    return el;
  }

  // 构建提示卡片
  function buildCard() {
    var card = createElement('div', { class: 'site-helper-card' });
    var title = createElement('h3', {}, CONFIG.cardTitle);
    var desc = createElement('p', {}, CONFIG.cardDescription);
    var link = createElement('a', { href: CONFIG.siteUrl, target: '_blank' }, '立即访问');
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(link);
    return card;
  }

  // 构建关键词徽章列表
  function buildBadges() {
    var container = createElement('div', { class: 'site-helper-badges' });
    var label = createElement('span', { class: 'badge-label' }, '热门关键词：');
    container.appendChild(label);
    CONFIG.keywords.forEach(function(kw) {
      var badge = createElement('span', { class: 'badge' }, kw);
      container.appendChild(badge);
    });
    return container;
  }

  // 构建访问说明
  function buildGuide() {
    var guide = createElement('div', { class: 'site-helper-guide' });
    var steps = [
      '1. 点击上方卡片链接，进入游戏主页。',
      '2. 浏览分类或搜索关键词，找到喜欢的游戏。',
      '3. 点击游戏图标，开始在线体验。',
      '4. 如有疑问，可在页面底部联系客服。'
    ];
    var heading = createElement('h4', {}, '访问指南');
    guide.appendChild(heading);
    steps.forEach(function(step) {
      var p = createElement('p', {}, step);
      guide.appendChild(p);
    });
    return guide;
  }

  // 插入样式
  function injectStyles() {
    var css = [
      '.site-helper-card { background: #f0f8ff; border: 1px solid #b0d4f1; border-radius: 8px; padding: 16px; margin: 12px 0; }',
      '.site-helper-card h3 { margin: 0 0 8px 0; color: #2c3e50; }',
      '.site-helper-card p { margin: 0 0 12px 0; color: #34495e; }',
      '.site-helper-card a { display: inline-block; padding: 8px 16px; background: #3498db; color: #fff; text-decoration: none; border-radius: 4px; }',
      '.site-helper-card a:hover { background: #2980b9; }',
      '.site-helper-badges { margin: 12px 0; }',
      '.site-helper-badges .badge-label { font-weight: bold; margin-right: 8px; color: #2c3e50; }',
      '.site-helper-badges .badge { display: inline-block; background: #ecf0f1; color: #2c3e50; padding: 4px 10px; margin: 4px; border-radius: 12px; font-size: 0.9em; }',
      '.site-helper-guide { background: #f9f9f9; border-left: 4px solid #3498db; padding: 12px 16px; margin: 12px 0; }',
      '.site-helper-guide h4 { margin: 0 0 8px 0; color: #2c3e50; }',
      '.site-helper-guide p { margin: 4px 0; color: #555; }'
    ].join('\n');
    var style = createElement('style', { type: 'text/css' });
    style.textContent = css;
    document.head.appendChild(style);
  }

  // 挂载到页面
  function init() {
    injectStyles();
    var container = document.getElementById('site-helper-root') || document.body;
    if (container === document.body) {
      var wrapper = createElement('div', { id: 'site-helper-root' });
      document.body.insertBefore(wrapper, document.body.firstChild);
      container = wrapper;
    }
    container.appendChild(buildCard());
    container.appendChild(buildBadges());
    container.appendChild(buildGuide());
  }

  // 等待DOM就绪
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();