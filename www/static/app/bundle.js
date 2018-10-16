/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _controllers = __webpack_require__(1);
	
	var _controllers2 = _interopRequireDefault(_controllers);
	
	var _directives = __webpack_require__(3);
	
	var _directives2 = _interopRequireDefault(_directives);
	
	var _services = __webpack_require__(4);
	
	var _services2 = _interopRequireDefault(_services);
	
	var _routes = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import {remote} from 'electron'
	
	// import 'angular'
	// import 'angular-ui-router/release/angular-ui-router.min'
	// import 'angular-bootstrap/ui-bootstrap.min'
	// import 'lodash/lodash.min'
	var app = angular.module('base', ['ui.router', 'ui.bootstrap', _controllers2.default.name]
	// directives.name,
	// services.name,
	).config(_routes.routes).run(function ($state) {
	    $state.go('index');
	    FastClick.attach(document.body);
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _baseCtrl = __webpack_require__(2);
	
	var _baseCtrl2 = _interopRequireDefault(_baseCtrl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var controllers = angular.module('base.controllers', []);
	
	controllers.controller('BaseCtrl', _baseCtrl2.default);
	
	exports.default = controllers;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function ($scope, $timeout) {
	
	    console.log('base控制器');
	
	    $scope.menus = nav;
	    $scope.openDrop = function (e) {
	        var dropMenu = $(e.target).children(".dropdown-menu")[0];
	        $(dropMenu).slideDown();
	    };
	    $scope.closeDrop = function (e) {
	        var dropMenu = $(e.target).children(".dropdown-menu")[0];
	        if ($(e.target).is('a') || $(e.target).is('li') && !$(e.target).hasClass('fli')) {
	            dropMenu = $(e.target).parents('.dropdown-menu')[0];
	        }
	        $(dropMenu).slideUp();
	    };
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var directives = angular.module('iag.directives', []);
	
	exports.default = directives;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	// import api from './http_service'
	
	var services = angular.module('base.services', []);
	// .service('Api',api);
	
	exports.default = services;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var routes = function routes($stateProvider, $urlRouterProvider) {
	    $stateProvider.state('index', {
	        url: '/index',
	        templateUrl: 'modules/index/index.html'
	        // controller:'MainCtrl'
	    }).state('knowledge', {
	        url: '/knowledge',
	        templateUrl: 'modules/knowledge/index.html'
	    }).state('component', {
	        url: '/component',
	        templateUrl: 'modules/component/index.html'
	    }).state('exam-loading', {
	        url: '/exam-loading',
	        templateUrl: 'modules/example/loading.html'
	    }).state('exam-system', {
	        url: '/exam-system',
	        templateUrl: 'modules/example/project.html'
	    });
	};
	
	exports.routes = routes;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map