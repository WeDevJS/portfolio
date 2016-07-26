'use strict';

angular.module('wedevjsApp.auth', ['wedevjsApp.constants', 'wedevjsApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
