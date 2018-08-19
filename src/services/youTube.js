angular.module('video-player').service('youTube', function($http) {
  this.search = function(query, callback) {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        videoEmbeddable: true,
        type: 'video',
        q: query,
        maxResults: 5,
        key: YOUTUBE_API_KEY
      }
    }).then(
      response => {
        callback(response.data);
      },
      fail => {
        console.log('FAILED', fail);
      }
    );
  };
});

// $http
//     .get(
//       'https://www.googleapis.com/youtube/v3/search',
//       (params: {
//         part: 'snippet',
//         videoEmbeddable: true,
//         type: 'video',
//         q: 'Learn angular',
//         maxResults: 5,
//         key: YOUTUBE_API_KEY
//       })
//     )
//     .then(
//       response => {
//         console.log('SUCESS', response);
//       },
//       fail => {
//         console.log('FAILED', fail);
//       }
//     );
