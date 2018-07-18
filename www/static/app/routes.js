let routes =  ($stateProvider,$urlRouterProvider)=> {
    $stateProvider
        .state('index', {
            url:'/index',
            templateUrl:'modules/index/index.html',
            // controller:'MainCtrl'
        })
        .state('knowledge', {
            url:'/knowledge',
            templateUrl:'modules/knowledge/index.html'
        })
        .state('component', {
            url:'/component',
            templateUrl:'modules/component/index.html'
        })
        .state('exam-loading', {
            url:'/exam-loading',
            templateUrl:'modules/example/loading.html'
        })

};

export {routes}