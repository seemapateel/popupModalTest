var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('myCtrl', function($uibModal){
	console.log("myCtrl");
	var vm = this;
	vm.open = function(wish){
		console.log("clicked open");
		var modalInstance = $uibModal.open({
			templateUrl: 'pop.html',
			controller: 'popCtrl',
			controllerAs: 'vm',
			resolve: {
				wishes: function(){
					return wish;
				}
			}
		});
	}
});

app.controller('popCtrl', function($uibModalInstance, wishes){
	console.log('popCtrl-' + wishes);
	var vm = this;
	vm.greet = wishes;
	vm.close = function(){
		$uibModalInstance.dismiss('cancel');
	}
});

/*
Added to handle an error that occurs on clicking close button on the modal:
Possibly unhandled rejection: cancel  angular.min.js:122:8
	f/< https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js:122:8
	uf/this.$get</< https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js:94:42
	g https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js:133:147
	Hf/this.$get</m.prototype.$eval https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js:147:309
	Hf/this.$get</m.prototype.$digest https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js:144:412
	Hf/this.$get</m.prototype.$apply https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js:148:76
	Wc[b]</<.compile/</< https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js:282:245
	cg https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js:38:297
	bg/d https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js:38:246

*/
app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);