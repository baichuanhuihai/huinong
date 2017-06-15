/**
 * Created by 范川汇 on 2017/6/14.
 */
app.controller("shouye",["$scope","$http",function($scope,$http){
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,//重复轮播
        autoplay: 2000,//多少毫秒轮播一次
        pagination: '.swiper-pagination',//分页器
        autoplayDisableOnInteraction : false,//点击切换后继续轮播
        paginationClickable:true,//点击分页器轮播
    })

    $http({
        method:"get",
        url:"../json/shouye.json"
    }).then(function(data){
        console.log(data);
        $scope.data = data;
    },function(err){
        console.error(err);
    })
}])