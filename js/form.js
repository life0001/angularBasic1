var form=angular.module('form',[]);
form.controller('userInfo',function($scope){
    $scope.userInfo={
        emal:'2222@qq.com',
        pwd:'222222',
        autoLogin:true

    };
    $scope.getFormData=function(){
        console.log($scope.userInfo);
    };
    $scope.setFormData=function(){
        $scope.userInfo={
            emal:'3333@qq.com',
            pwd:'33333',
            autoLogin:false
        }
    };
    $scope.reSet=function(){
        $scope.userInfo={
            emal:'2222@qq.com',
            pwd:'222222',
            autoLogin:true
        }
    };
    $scope.setFontColor=function(c){  //传参
        $scope.color=c;
    };
    $scope.showColor=function(){
        $scope.isRed=true;
    };

    //切换隐藏/显示
    $scope.toggle=new Object().boolean=false;
    $scope.toggle=function(){
        $scope.toggle.boolean=!$scope.toggle.boolean;
    }
});


