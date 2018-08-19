angular
  .module('video-player')

  .component('search', {
    bindings: {
      result: '<',
      search: '<',
      query: '<'
    },
    templateUrl: 'src/templates/search.html'
  });
