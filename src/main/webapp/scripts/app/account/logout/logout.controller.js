'use strict';

angular.module('fusionApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
