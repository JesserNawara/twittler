 $(document).ready(function(){
        $("#tweet").click(function(){
          writeTweet($("input").val())
           })
          function refresh (){ var $container = $('#selector'); // A variable name to target the body.
        $container.html(''); //This will empty the body to be ready to add new tweets.

        var index = streams.home.length-1; //streams.home contains all of the tweets from all the users.
        while(index >= 0){
          var tweet = streams.home[index]; // We grab the current tweet from the end of streams.home 
          var $tweet = $('<div class="tweets"></div>'); // We create a new div for the tweet.
          $tweet.text('@' + tweet.user + ': ' + tweet.message +" "+ tweet.created_at); //We fill the div with the username and the tweet message.
          $tweet.appendTo($container); // Add the tweet to the body.
          index -= 1;
        }}
       refresh();
       $("#refresh").click(function(){
          refresh()
      })

      });


