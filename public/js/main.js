//Criação de todas as rotas da aplição na parte do cliente - Júnior Mendonca
angular.module('contatooh', ['ngRoute', 'ngResource'])
   .config(function($routeProvider) {

      $routeProvider.when('/contatos', {
         templateUrl: 'partials/contatos.html',
         controller: 'ContatosController'
      });

      $routeProvider.when('/contato/:contatoId', {
         templateUrl: 'partials/contato.html',
         controller: 'ContatoController'
      });

      $routeProvider.when('/contato', {
         templateUrl: 'partials/contato.html',
         controller: 'ContatoController'
      });

      $routeProvider.when('/ajuda', {
         templateUrl: 'partials/ajuda.html',
         controller: 'ContatoController'
      });

      $routeProvider.when('/auth', {
         templateUrl: 'partials/auth.html'
      });

      $routeProvider.otherwise({redirectTo: '/contatos'});

   });