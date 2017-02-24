'use strict';

/**
 * @ngdoc overview
 * @name prealarmFrontendApp
 * @description
 * # prealarmFrontendApp
 *
 * Services module of the application.
 */
componentApp.factory('cache', ['$cacheFactory',
    function ($cacheFactory) {
        return {
            flash: $cacheFactory('flash', {
                capacity: 1
            }),
            short: $cacheFactory('short', {
                capacity: 5
            }),
            long: $cacheFactory('long', {
                capacity: 20
            }),
            list: $cacheFactory('list', {
                capacity: 100
            })
        };
    }
])
/**
 * http请求共用方法
 */
componentApp.factory('promise', ['$http', '$q',
    function ($http, $q) {
        return {
            post: function (param, url, cacheId, cache) {
                var result, defer = $q.defer();
                result = cacheId && cache && cache.get(cacheId);
                if (result) {
                    defer.resolve(result);
                } else {
                    $http({
                        method: 'post',
                        url: url,
                        data: param
                    }).then(function (data, status, headers, config) {
                        if (cacheId && cache) {
                            cache.put(cacheId, data);
                        }
                        defer.resolve(data);
                        ;
                    },function (data, status, headers, config) {
                        defer.reject(data)
                    });

                }
                return defer.promise;
            },

            get: function (param, url, cacheId, cache) {
                var result, defer = $q.defer();

                result = cacheId && cache && cache.get(cacheId);
                if (result) {
                    defer.resolve(result);
                } else {
                    $http({
                        method: 'get',
                        url: url,
                        data: param
                    }).then(function (data, status, headers, config) {
                        if (cacheId && cache) {
                            cache.put(cacheId, data);
                        }
                        defer.resolve(data);
                    },function (data, status, headers, config) {
                        defer.reject(data)
                    });

                }
                return defer.promise;
            },
            put: function (param, url) {
                var result, defer = $q.defer();
                $http({
                    method: 'put',
                    url: url,
                    data: param
                }).then(function (data, status, headers, config) {
                    defer.resolve(data);
                },function (data, status, headers, config) {
                    defer.reject(data)
                });
                return defer.promise;
            },
            delete: function (param, url) {
                var result, defer = $q.defer();
                $http({
                    method: 'delete',
                    url: url,
                    data: param
                }).then(function (data, status, headers, config) {
                    defer.resolve(data);
                },function (data, status, headers, config) {
                    defer.reject(data)
                });
                return defer.promise;
            }
        }
    }
])