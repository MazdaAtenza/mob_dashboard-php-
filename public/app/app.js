'use strict';

/**
 * @ngdoc overview
 * @name prealarmFrontendApp
 * @description
 * # prealarmFrontendApp
 *
 * Main module of the application.
 * app.js->config.js->router.js->run.js
 */
var componentApp = angular
    .module('prealarmFrontendApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ui.router',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap',
        'bw.paging',
        'froala',
        'daterangepicker',
        'ngFileUpload'
    ]).value('froalaConfig', {
        toolbarInline: false,
        heightMin: 680,
        placeholderText: '请输入您的内容',
        toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'inlineStyle',  'align','paragraphFormat', 'align', 'insertImage', '|', 'quote', 'insertHR', 'undo', 'redo', 'clearFormatting', 'selectAll'],
        language: 'zh_cn'
    });




