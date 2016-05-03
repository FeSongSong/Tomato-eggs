var tplIndex = require('../tpl/index.string');

SPA.defineView('index', {
  html: tplIndex,

  plugins: ['delegated'],

  modules: [{
    name: 'indexContent',
    container: '.m-index-body',
    views: ['search', 'my', 'chance', 'message'],
    defaultTag: 'chance'
  }],

  bindActions: {
    'tap.switch': function (el, data) {
      this.modules.indexContent.launch(data.tag);
    }
  },

  bindEvents: {
    'beforeShow': function() {
    	//图标切换
    $('footer').delegate('li','click',function(){
    	$(this).addClass("active").siblings().removeClass("active")
    })

    }
  }
});
