'use strict';

angular.module('pokExamApp').controller('questionModalCtrl', ['$http', '$scope', '$uibModalInstance',
  function ($http, $scope, $uibModalInstance) {

    $scope.user = "Victoria";

    $scope.ok = function () {

      $uibModalInstance.close();
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

  }
]);
