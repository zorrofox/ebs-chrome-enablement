var a = document.createElement("script");
a.type = "text/javascript";
a.innerText += "var new_nav = new function() {};";
a.innerText += "var x;";
a.innerText += "for (x in navigator) {";
a.innerText += 'eval("new_nav." + x + " = navigator." + x + ";");';
a.innerText += "}";
a.innerText += 'new_nav.userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/534.55.3 (KHTML, like Gecko) Version/5.1.3 Safari/534.53.10";';
a.innerText += "window.navigator = new_nav;";
document.documentElement.insertBefore(a)