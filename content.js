chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "analyzePage") {
    const keywords = ["python loop", "javascript function", etc.]; // Add your keywords here
    let foundConcepts = [];
    for (const keyword of keywords) {
      if (document.body.innerText.toLowerCase().indexOf(keyword) !== -1) {
        foundConcepts.push(keyword);
      }
    }
    sendResponse({concepts: foundConcepts});
  }
});
