var actionsheetTpl = require('../tpl/actionsheet.string');

SPA.defineView('actionsheet', {
  html: actionsheetTpl,

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
