var dialogTpl = require('../tpl/dialog.string');

SPA.defineView('dialog', {
  html: dialogTpl,

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
