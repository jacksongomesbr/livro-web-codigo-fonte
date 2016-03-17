'use strict';

angular.module('phonecatServices', ['ngResource'])
    .factory('Telefones', function($resource) {
        return $resource('data/phones/:phoneId.json', {}, {
            query: {
                method: 'GET',
                params: { phoneId:'phones' },
                isArray:true
            }
        });
    });
