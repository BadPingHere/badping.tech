function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
  }
  return "";
}

function checkCookieOnLoad() {
  if(getCookie("theme") === "light") {
     // Show content and hide clicklink
     document.getElementById("dark").style.display = "none";
     document.getElementById("light").style.display = "initial";

  } else {
     // Hide content and show clicklink
     document.getElementById("dark").style.display = "initial";
     document.getElementById("light").style.display = "none";
  }
}

setInterval(getCookie, 100); 
setInterval(checkCookieOnLoad, 100); 