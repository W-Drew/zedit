ngapp.controller('editMergeModalController', function($scope, mergeService) {
    // scope functions
    $scope.createMerge = function() {
        $scope.modalOptions.merges.push($scope.merge);
        $scope.$emit('closeModal');
    };

    // initialization
    $scope.editing = $scope.modalOptions.hasOwnProperty('merge');
    $scope.merge = $scope.modalOptions.merge || mergeService.newMerge();
});
