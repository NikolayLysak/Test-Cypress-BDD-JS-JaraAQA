function getLeftSideBlockDesc(): string {
  return 'Vue.js provides efficient MVVM data bindings with a simple and flexible API. It uses plain JavaScript object models, DOM-based templating and extendable directives and filters.';
}

function getLeftFrameFooterText() {
  return 'If you have other helpful links to share, or find any of the links above no longer work, please let us know.';
}

function resourcesList() {
  return ['Documentation', 'API Reference', 'Examples', 'Vue.js on GitHub'];
}

function resourcesListLinks() {
  return [
    'http://vuejs.org/guide/',
    'http://vuejs.org/api/',
    'http://vuejs.org/examples/',
    'https://github.com/vuejs/vue'
  ];
}

function communityList() {
  return ['Twitter', 'Gitter Channel', 'Discussions on GitHub'];
}

function communityListLinks() {
  return ['http://twitter.com/vuejs', 'https://gitter.im/yyx990803/vue', 'https://github.com/vuejs/Discussion/issues'];
}

export {
  getLeftSideBlockDesc,
  communityListLinks,
  resourcesListLinks,
  resourcesList,
  communityList,
  getLeftFrameFooterText
};
