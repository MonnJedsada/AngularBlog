app.controller('contactCtrl',function ($scope){

    $scope.createContact = function(data){
        alert(data.name)
    }
})