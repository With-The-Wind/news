var js = angular.module('jsStr',['ngAnimate','ngRoute','ngTouch']);
js.controller('shanCtrl',['$scope',function($scope){
  $scope.list=[];
  $scope.change = function(v,p1,p2){
    console.log(p1,p2)
    if(p1===p2){
      $scope.list.push({name:v,pass1:p1,pass2:p2});
      localStorage.lists = angular.toJson($scope.list)
    }else{
      return
    }
  };
}]).controller('server',['$scope',function($scope){

}]).controller('header',['$scope',function($scope){

}]).controller('footer',['$scope',function($scope){

}]).controller('find',['$scope',function($scope){

}]).controller('love',['$scope',function($scope){

}]).controller('include',['$scope',function($scope){

}]).controller('personal',['$scope',function($scope){

}]).controller('bodyer',['$scope',function($scope){

}]).controller('jsMain',['$scope',function($scope){

}]).directive('jsHeader',function(){
  return{
    replace:true,
    restrict:"AEC",
    templateUrl:"./vistor/header.html",
    link:function($scope,elem){
      var mySwiper = new Swiper('.swiper-container', {
        // autoplay: 1000,//可选选项，自动滑动
        slidesPerView : 5,
        slidesPerGroup : 1,
        loop:true
      })
      $(document).ready(function(){
        $('ul.tabs').tabs();
      });
    }
  }
}).directive('jsFooter',function(){
  return{
    replace:true,
    restrict:"AEC",
    templateUrl:"./vistor/footer.html"
  }
}).directive('jsBodyer',function(){
  return{
    replace:true,
    restrict:'AEC',
    templateUrl:'./vistor/bodyer.html',
  }
}).directive('jsShan',[function(){
    return{
      replace:true,
      restrict:'AEC',
      templateUrl:'./vistor/jsShan.html',
      link:function($scope,elem){
        var mySwiper = new Swiper('.swiper-container', {
        	// autoplay: 1000,//可选选项，自动滑动
          pagination : '.swiper-pagination',
          loop : true
        })
        if(localStorage.active){
          $('.swiper-container').addClass('active-a');
        }else{
          $scope.li=['a'];
          $('.enter-main').on('click',function(){
            $('.main-header').removeClass('active')
            $('.swiper-container').addClass('active');
            localStorage.active=angular.toJson($scope.li)
          })
          // $('.swiper-pass').on('click',function(){
          //   $('.swiper-container').addClass('active');
          //   localStorage.active=angular.toJson($scope.li)
          // })
        }
        $('.lr_register').on('click',function(){
          $('.loading').addClass('active');
          $('.register').addClass('active');
        })
        var jsList = [];
        var flag = true;
        $('.eyes').on('click',function(){
          if(flag){
            flag = false;
            $(this).addClass('active');
            $(".register_password[type='text']").attr('type','password');
          }else{
            flag = true;
            $(this).removeClass('active');
            $(".register_password[type='password']").attr('type','text');
          }
        })
        $('.register_finished').on('click',function(){
          if($('.register_password_one').val()===$('.register_password_two').val()){
            $('.register').removeClass('active');
            $('.register_change').val('');
          }
          else{
            return
          }
        })
      }
    }
}]).config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/server',{
    contorller:'server',
    templateUrl:'./vistor/server.html'
  }).when('/find',{
    controller:'find',
    templateUrl:'./vistor/server.html'
  }).when('/love',{
    controller:'love',
    templateUrl:'./view/love.html'
  }).when('/include',{
    controller:'include',
    templateUrl:'./view/include.html'
  }).when('/personal',{
    controller:'personal',
    templateUrl:'./view/personal.html'
  })
  .otherwise({
    redirectTo:'/'
  })
}])
