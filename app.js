	function askName(){
		var n = prompt(`Hello, what is your name?`)
		return n
	}
	
	askTemp(askName()) //argument
	
	function askTemp(n){
		var t = prompt (`${n}, insert the degrees you want to convert to`)
		return t
	}

	function askResult(){
		var result = prompt (` Type c if you want your result to be celsius and f if you want your result to be farenheit`)
		return result
	}
	var result = (askResult)
	askResult(result)


	function cTof(t){
		var celTemp= (t *9 / 5 + 32)
		return celTemp
	}
	var celTemp = (cTof)
	cTof(celTemp)
	
	  
	function fToc(t){
		var farTemp = (t - 32 * 5 / 9)
		return farTemp
	}
	var farTemp = (fToc)
	fToc(farTemp)

	function end(a, b){

		if (result=="c"){
		alert (`${b} in celcius`)
	  	}else if (result=="f"){
		alert (`${a} in farenheight`)
		}
	}

end(fToc())