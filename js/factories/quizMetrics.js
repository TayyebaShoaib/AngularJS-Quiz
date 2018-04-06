(function () {

  angular
    .module('turtleFacts')
    .factory('quizMetrics', quizMetrics);

    quizMetrics.$inject = ['DataService']

    function quizMetrics(DataService) {

      var quizObj = {
        quizActive: false,
        learnActive: true,
        resultsActive: false,
        correctAnswers: [],
        numCorrect : 0,

        changeState: changeState,
        markQuiz: markQuiz
      };

      function changeState(metric, state) {
        if (metric === 'quiz') {
          quizObj.quizActive = state;
        } else if (metric === 'learn') {
          quizObj.learnActive = state;
        } else if (metric === 'results') {
          quizObj.resultsActive = state;
        } else {
          return false;
        }
      }

      function markQuiz() {
        quizObj.correctAnswers = DataService.correctAnswers;
        for (var i = 0; i < DataService.quizQuestions.length; i++) {
          if (DataService.quizQuestions[i].selected === DataService.correctAnswers[i]) {
            DataService.quizQuestions[i].correct = true;
            quizObj.numCorrect++;
          } else {
            DataService.quizQuestions[i].correct = false;
          }
        }
      }

      return quizObj;

    }
})();
