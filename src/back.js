chrome.webNavigation.onCompleted.addListener(
  function(details){
	try{
	  var alloweddomains = JSON.parse(localStorage.getItem("allowlist"))
	}
	catch(err){
		localStorage.setItem("allowlist","[]")
		var alloweddomains = []
	}
	var domain = new URL(details.url).hostname
	console.log(domain)
	  console.log(details)
	  if(alloweddomains.includes(domain)){console.log("Domain " + domain + " is allowlisted");return true}
	  chrome.tabs.executeScript(details.tabId,{
		  "code":`
		  (function(){
		  const script = new Blob(["BeforeUnloadEvent.prototype.preventDefault = function(){return true}"],{type:"text/javascript"})
		  const s = document.createElement("script")
		  s.src = URL.createObjectURL(script)
		  s.onload = function(){s.remove()}
		  s.onerror = function(){s.remove()}
		  document.body.appendChild(s)
		  })()
		  `
		  
	  })
  },
  {url:[{schemes:["http","https"]}]}                    // optional object
)
console.log("Hello")
