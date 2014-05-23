function interceptRequest(request) {
    return { redirectUrl: 'https://cdn.mxpnl.com/libs/mixpanel-2.2.js' }
}
        
chrome.webRequest.onBeforeRequest.addListener(interceptRequest, { urls: ['https://cdn.mxpnl.com/libs/mixpanel-2.2.min.js','http://cdn.mxpnl.com/libs/mixpanel-2.2.min.js'] }, ['blocking']);
