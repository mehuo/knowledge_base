// import 'angular'
// import 'angular-ui-router/release/angular-ui-router.min'
// import 'angular-bootstrap/ui-bootstrap.min'
// import 'lodash/lodash.min'
import controllers from './controllers'
import directives from './directives'
import services from './services'
import {routes} from './routes'

// import {remote} from 'electron'

let app = angular.module('base', [
    'ui.router',
    'ui.bootstrap',
    controllers.name,
    // directives.name,
    // services.name,
]).config(routes).run(function($state) {
    $state.go('index');
    FastClick.attach(document.body);
});
