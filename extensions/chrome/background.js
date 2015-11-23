chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    localStorage["sketch"] = request.msg;
});
