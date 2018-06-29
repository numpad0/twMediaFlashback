chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  switch (request.method) {
    case 'getLength': // 保存されているデータ数を取得
      sendResponse({data: localStorage.length});
      break;
    case 'getKeyName': // 指定されたn番目のkey名を取得
      sendResponse({data: localStorage.key(request.number)});
      break;
    case 'getItem': // 指定されたkeyの値を取得
      sendResponse({data: JSON.parse(localStorage.getItem(request.key))});
      break;
    case 'setItem': // 指定されたkeyと値を保存（更新）
      if(localStorage.length > 250){
         localStorage.clear();
         console.log("More than 250 stored items found. Cleared LocalStorage");
      }
      sendResponse({data: localStorage.setItem(request.key, request.value)});
      console.log("setItem is called");
      break;
    case 'removeItem': // 指定されたkeyの値を削除
      sendResponse({data: localStorage.removeItem[request.key]});
      break;
    case 'clearAll': //　すべてのデータを削除
      sendResponse({data: localStorage.clear()});
      console.log('Cache cleared');
      break;
    default:
      console.log('Listener called without argument');
      break;
  }
});

chrome.browserAction.setPopup({popup:''});  //disable browserAction's popup

chrome.browserAction.onClicked.addListener(()=>{
    chrome.tabs.create({url:'options.html'});
});
