$(document).ready(function() {

    function updateVideoData(id) {
        $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/video/" + id, function(videoData) {
          $("#video-player").attr("src", ("https://player.vimeo.com/video/" + videoData.vimeoId));
          $("#views-count").html(videoData.views);
          $("#video-title").html(videoData.title);
          $("#video-description").html(videoData.description);

          $(".playlist-card").removeClass("active-card");
          $("#" + id).addClass("active-card");

          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        })
    }
   $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/playlist", function(videoList){

      for(var i=0; i<videoList.length; i++) {
        var mainCard = $("<div>").addClass("playlist-card").attr("id", videoList[i].id);
        if(i === 0) {
            mainCard.addClass(".active-class")
        }
        var thumbnail = $("<img>").addClass("thumbnail").attr("src", videoList[i].thumbnail);
        var title = $("<h3>").html(videoList[i].title);
        mainCard.append(thumbnail, title);
        $("#playlist-wrapper").append(mainCard);
        mainCard.click(function() {
            updateVideoData($(this).attr("id"))
        });
      }
      updateVideoData(videoList[0].id)   
   })
});