var s = document.createElement("script");
//s.onload = function () { this.parentNode.removeChild(this); };
s.src = chrome.extension.getURL("injected.js");
s.setAttribute("data-worker-url", chrome.extension.getURL("worker.js"));
s.setAttribute("data-bandages-url", chrome.extension.getURL("bandages.js"));
s.setAttribute("data-override-url", chrome.extension.getURL("override.js"));
document.body.appendChild(s);
