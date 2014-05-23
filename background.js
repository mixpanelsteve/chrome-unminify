function interceptRequest(request) {
    console.dir(request);
    return { redirectUrl: request.url.replace('.min','') } 
}
        
chrome.webRequest.onBeforeRequest.addListener(interceptRequest, { urls: ['*://*/libs/mixpanel-2.2.min.js'] }, ['blocking']);
