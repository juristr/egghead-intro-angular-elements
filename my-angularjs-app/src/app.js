const appModule = angular.module('myApp', []);

appModule.component('myApp', {
  template: `
    <h1>AngularJS <3 Angular</h1>

    <feedback-form ng-prop-name="$ctrl.name" ng-on-feedback_submit="$ctrl.onFeedbackSubmit($event)"></feedback-form>
  `,
  controller: function() {
    this.name = 'Juri';

    this.onFeedbackSubmit = ev => {
      console.log('Got ', ev.detail);
    };
  }
});

angular.element(function() {
  angular.bootstrap(document, ['myApp']);
});
