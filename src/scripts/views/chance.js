var tplChance = require('../tpl/chance.string');

SPA.defineView('chance', {
  html: tplChance,
  
  plugins: ['delegated'],
  
   init: {
    mySwiper: null
  },
  bindActions:{
  	 'swipe': function (e) {
      var index = $(e.el).index();
      this.mySwiper.slideTo(index);
    },
    'show.search': function () {
      SPA.open('search');
    },
    'show.dialog': function () {
      SPA.open('dialog', {
        ani: {
          name: 'dialog',
          width: 280,
          height: 150
        }
      });
    }
 
  },
  
  bindEvents: {
    'beforeShow': function () {
    	var  screenWidth=window.screen.width;
    	var MyScroll=new IScroll("#wrapper",{
					scrollX:true,
					bounce:false,
     	});
     	var self=this;
     	this.mySwiper = new Swiper('#list-swiper', {
					loop:false,
					onSlideChangeStart: function () {
          	var $curLi = $('.list-show ul li').eq(self.mySwiper.activeIndex);
          	$curLi.addClass('active').siblings().removeClass('active');
          	 switch (self.mySwiper.activeIndex) {
              case 0:MyScroll.scrollTo(0, 0);
                break;
              case 1:MyScroll.scrollTo(0, 0);
                break;
              case 2:MyScroll.scrollTo(-screenWidth/12, 0);
                break;
              case 3:MyScroll.scrollTo(-screenWidth/4, 0);
                break;
              case 4:MyScroll.scrollTo(-screenWidth/2, 0);
                break;
              case 5:MyScroll.scrollTo(-screenWidth/1.5, 0);
                break;
              case 6:MyScroll.scrollTo(-screenWidth/1, 0);
                break;
              case 7:MyScroll.scrollTo(-screenWidth/0.5, 0);
                break;
            }
        }
				});
				var myswiper=new Swiper("#chance-swiper",{
					autoplay:3000,
				})
			
    }
  }
});
