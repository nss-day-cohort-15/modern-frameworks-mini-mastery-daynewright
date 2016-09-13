'use strict';

app.controller('FlowerCtrl', function($scope, FBDataFactory, $q){
  FBDataFactory()
  .then((flowers)=>{
    let categories = [];

      flowers.reduce((prev, cur, i)=> {
        if(prev === cur.category && categories.indexOf(prev) === -1){
          categories.push(prev);
          flowers[(i-1)].headingCat = prev;
        }
        return cur.category;
      }, '');

      $scope.flowers = flowers;
  });

});
