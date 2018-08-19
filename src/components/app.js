angular
  .module('video-player')

  .component('app', {
    controller: function(youTube) {
      this.selectVideo = () => {};
      this.searchResults = query => {
        youTube.search(query, data => {
          this.currentVideo = data.items[0];
          this.videos = data.items;
        });
      };
      this.onClick = () => {};
      this.currentVideo = exampleVideoData[0];
      this.videos = exampleVideoData;
    },

    templateUrl: 'src/templates/app.html'
  });
