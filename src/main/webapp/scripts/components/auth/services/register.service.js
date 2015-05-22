'use strict';

angular.module('fusionApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


