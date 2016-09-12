'use strict';

app.controller('FlowerCtrl', function($scope, FBDataFactory){
  FBDataFactory()
  .then((flowers)=>{
    $scope.flowers = flowers;
  });

});
