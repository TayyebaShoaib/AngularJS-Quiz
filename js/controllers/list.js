(function() {

  angular
    .module('turtleFacts')
    .controller('listCtrl', listController);

    listController.$inject = ['quizMetrics', 'DataService'];

    function listController(quizMetrics, DataService) {

      var vm = this; //vm stands for view model

      vm.quizMetrics = quizMetrics;

      vm.data = DataService.turtlesData;
      vm.activeTurtle = {};
      vm.changeActiveTurtle = changeActiveTurtle;
      vm.search = "";
      vm.activateQuiz = activateQuiz;
      vm.activateLearn = activateLearn;

      function changeActiveTurtle(index) {
        vm.activeTurtle = index;
      }

      function activateQuiz() {
        quizMetrics.changeState('quiz', true);
        quizMetrics.changeState('learn', false);
        quizMetrics.changeState('results', false);
      }

      function activateLearn() {
        quizMetrics.changeState('learn', true);
        quizMetrics.changeState('quiz', false);
      }

    }

})();
