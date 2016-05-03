var searchTpl = require('../tpl/search.string');

SPA.defineView('search', {
  html: searchTpl,

  plugins: ['delegated'],

  bindActions: {
    'tap.back': function () {
      this.hide();
    }
  },

  bindEvents: {
    'beforeShow': function () {
      console.log(0);
    }
  }
});
