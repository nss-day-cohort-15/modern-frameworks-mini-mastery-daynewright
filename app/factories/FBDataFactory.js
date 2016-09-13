'use strict';

app.factory('FBDataFactory', function($q, $http){

  let getFlowers = ()=>{
    let flowers = [];
    return $q((resolve, reject) => {
      $http.get(`https://flower-power-angular.firebaseio.com/arrangements.json`)
        .success((objFromFirebase) => {
          Object.keys(objFromFirebase).forEach((key)=>{
            objFromFirebase[key].id = key;
            objFromFirebase[key].price = parseFloat(objFromFirebase[key].price).toFixed(2);
            objFromFirebase[key].category = (objFromFirebase[key].category).charAt(0).toUpperCase() + (objFromFirebase[key].category).slice(1);
            flowers.push(objFromFirebase[key]);
          });
          resolve(flowers);
        })
        .error((errorFromFirebase) => {
          reject(errorFromFirebase);
        });
    });
  };

  return getFlowers;

});
