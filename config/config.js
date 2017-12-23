
const app = window.app;
const configDefaults = {
  environment: '# Hi from `environment`',
  filename: '.strider.yml'
};

app.controller('FileConfigurationController', ['$scope', function ($scope) {

  $scope.saving = false;

  $scope.$watch('configs[branch.name].file_configuration.config', function (value) {
    $scope.config = value || configDefaults;
  });

  $scope.save = function () {
    $scope.saving = true;
    $scope.pluginConfig('file_configuration', $scope.config, function () {
      $scope.success('Saved custom scripts');
      $scope.saving = false;
    });
  };

}]);
