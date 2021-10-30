try{
	  var alloweddomains = JSON.parse(localStorage.getItem("allowlist"))
	}
	catch(err){
		console.log(err)
		localStorage.setItem("allowlist","[]")
		var alloweddomains = []
	}
	console.log(alloweddomains)
var allowedt = ""
var t = 0
for(t = 0;t < alloweddomains.length;t++){
	allowedt += alloweddomains[t] + "\n"
	console.log(t,alloweddomains[t])
}
console.log(allowedt)
document.getElementById("allowed").value = allowedt
document.getElementById("save").onclick = function(){
	var at = document.getElementById("allowed").value
	alloweddomains = at.split("\n")
	localStorage.setItem("allowlist",JSON.stringify(alloweddomains))
}