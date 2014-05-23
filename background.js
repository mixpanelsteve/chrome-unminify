function interceptRequest(request) {
    return { redirectUrl: 'https://cdn.mxpnl.com/libs/mixpanel-2.2.js' }
}
        
var target_url = "cdn.mxpnl.com/libs/mixpanel-2.2.min.js"
chrome.webRequest.onBeforeRequest.addListener(interceptRequest, { urls: ['https://'+target_url,'http://'+target_url] }, ['blocking']);
