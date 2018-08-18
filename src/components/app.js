angular
  .module('video-player')

  .component('app', {
    controller: function() {
      this.selectVideo = () => {};
      this.searchResults = () => {};
      this.onClick = () => {};
      this.currentVideo = exampleVideoData[0];
      this.videos = exampleVideoData;
    },

    templateUrl: 'src/templates/app.html'
  });
