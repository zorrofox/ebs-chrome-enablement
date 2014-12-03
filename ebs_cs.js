var a = document.createElement("script");
a.type = "text/javascript";
a.innerText += "var new_nav = new function() {};";
a.innerText += "var x;";
a.innerText += "for (x in navigator) {";
a.innerText += 'eval("new_nav." + x + " = navigator." + x + ";");';
a.innerText += "}";
a.innerText += 'new_nav.userAgent = "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.77 Safari/535.7";';
a.innerText += "window.navigator = new_nav;";
document.documentElement.insertBefore(a)
