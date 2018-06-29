
function clear_cache(){
  var checked = document.getElementById('safety_check').checked;
  if(checked){
    localStorage.clear();
    document.getElementById("safety_check").checked = false;
    location.reload();
    console.log("cleared cache");
  }
}

// 表の動的作成
function make_table(){

    var recordLength = localStorage.length;
    console.log(recordLength);
    
    for(var i=0; i < recordLength; i++){
      var tweetUrl =  localStorage.key(i);
      var mediaUrl = localStorage.getItem(tweetUrl);
      cell = document.createElement('div');
      link = document.createElement('a');
      img = document.createElement('img');
      desc = document.createElement('div');

      cell.setAttribute('class', 'gallery');

      link.setAttribute('target', '_blank');
      link.setAttribute('href', tweetUrl);

      img.setAttribute('src', mediaUrl);
      img.setAttribute('width', '640');
      img.setAttribute('height', '480');

      desc.setAttribute('class', 'desc');
      desc.innerHTML = tweetUrl;

      link.appendChild(img);
      cell.appendChild(link);
      cell.appendChild(desc);

      document.getElementById("gallery_parent").appendChild(cell);
      //console.log(tweetUrl, mediaUrl);
      }
}

document.getElementById('clear').addEventListener('click',  clear_cache);
document.getElementById('load').addEventListener('click',  make_table);
