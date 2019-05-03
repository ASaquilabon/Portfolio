 // Change style of navbar on scroll
  window.onscroll = function() {myFunction()};
  function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
      } else {
          navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
      }
  }
  
  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
      } else {
          x.className = x.className.replace(" w3-show", "");
      }
  }
  //Youtube iFrame api
  var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '800px',
          width: '100%',
          videoId: 'yJbH_nyBMxI',
          playerVars: {
            playlist: 'yJbH_nyBMxI',
            loop: 1,    
            mute: 1,
            modestbranding: 0,
            rel: 0, 
            controls: 0,
            autoplay: 1, 
            disablekb: 1,

        },   
          events: {
            'onReady': onPlayerReady,
            // 'onStateChange': onPlayerStateChange 
          }
        });
        console.log(player);
      }
      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        player.setPlaybackQuality('hd1080')
        event.target.playVideo();
      }
    //   event.target.setVolume(0);
      var done = false;
