var tplMessage = require('../tpl/message.string');

SPA.defineView('message', {
  html: tplMessage,
  
   plugins: ['delegated'],
   
   bindActions:{
   	'show.actionsheet': function () {
      SPA.open('actionsheet', {
        ani: {
          name: 'actionSheet',
          distance: 280
        }
      });
    }
   },
   bindEvents: {
    'beforeShow': function(){
    	   var $li=$("#three-ul");
    		$("#two-ul li").eq(2).on("click",function(){
    			$(this).remove();
    		
    			$li.css("display","block")
    		})
   } 
  },
});
