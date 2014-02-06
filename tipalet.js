javascript:
(function(document){
    var starttagging = true;
	var tiplink = "";
    var css = document.createElement('style');

    var id = document.createElement('div');
	id.id                    = 'tipid';
    id.innerHTML             = 'Welcome to Doge Tips!';
    id.style.cssText = "position:fixed;top:50px;left:30px;height:145px;width:200px;background-Color:rgba(32,32,32,0.8);color:#fff;text-Shadow:0 2px 2px #000;padding:8px;font-Size:13px;font-Family:'Lucida Grande';border:1px solid #666;border-radius:5px;";
    document.body.appendChild(id);
	
	
	window.closetipwindow = (function() { document.getElementById("tipid").remove();	});
	
    
    document.body.addEventListener('mouseover',function(event){
		if (starttagging)
		{
			var el = event.target;
			var resultx = "";
			if ((el.nodeName=="IMG") && (el.parentNode.nodeName=="A"))
			{
				if ( ((el.clientWidth==32) && (el.clientHeight==32)) || ((el.clientWidth==50) && (el.clientHeight==50)) )
				{
					tiplink = el.parentNode.attributes['href'].value;
					var tipname = tiplink.replace('https://www.facebook.com/','');
					resultx+= "<img src='" + el.attributes['src'].value + "' style='float:left; margin-right:5px; margin-bottom:5px;'>";
					resultx+= "Tip <b>"+ tipname + "</b><br> with <input type='text' value='50' style='width:50px;'> DOGES";
					resultx+= "<br><button onclick='window.closetipwindow()'>Send Tip</button>";
					resultx+= "<br><textarea style='margin-top:5px; width:190px; height:40px;'>I tip my hat to "+ tipname + " with 50 #Doges. Join the Doge Revolution. http://bit.ly/1c58SrA Click to start giving tips and receiving tips from your friends!</textarea>";
					resultx+= "<br>copy the text to the comment window to tell everyone you tipped.";
				}
			}
			document.getElementById('tipid').innerHTML = resultx;
		}
    },false);

	
	document.body.addEventListener("mousedown", function(event) {
		if (starttagging)
		{
			event.stopPropagation();
			event.preventDefault();
			return false;
		}
	},false);
	
	document.body.addEventListener("mouseup", function(event) {
		if (starttagging)
		{
			event.stopPropagation();
			event.preventDefault();
			return false;
		}
	},false);
	
	document.body.addEventListener("click", function(event) {
		if (starttagging)
		{
			starttagging = false;
			
		    var origEl = event.target || event.srcElement;
			if(origEl.tagName === 'A') { }
			event.stopPropagation();
			event.preventDefault();
			return false;
		}
	}, false);
})(document);