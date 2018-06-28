function waitForAddedNode(params) {
    new MutationObserver(function(mutations) {
        var el = document.getElementsByClassName(params.id);
        if (el) {

            //this.disconnect();
            params.done(el);
        }
    }).observe(params.parent || document, {
        subtree: true, //!!params.recursive,
        childList: true,
    });
}
Usage:

waitForAddedNode({
    id: 'stream-item',
    parent: document.querySelector('stream-items'),
    recursive: false,
    done: function(el) {
      for(var key=0; key<el.length; key++){
        var tweetHeader = el[key].getElementsByClassName("tweet-timestamp")[0];
        var mediaHeader = el[key].getElementsByClassName('AdaptiveMedia-photoContainer')[0];

        var tweetUrl  = "https://twitter.com" + $(tweetHeader).attr("href");
        var mediaUrl = $(mediaHeader).attr("data-image-url");

        if(mediaHeader == null){

        } else {
          //console.log(tweetUrl);
          //console.log(mediaUrl);

        }

      }
    }
});
