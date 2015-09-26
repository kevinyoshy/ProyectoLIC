function init(){
 var imgElem = document.getElementById("box");
 var links = document.getElementsByTagName("a");
 if(imgElem.addEventListener){
 imgElem.addEventListener("click", function(){
 toggle("box");
 }, false); 
 }
 else if(imgElem.attachEvent){
 imgElem.attachEvent("onclick", function(){
 toggle("box");
 });
 }
 
}
function toggle(id) {
 var el = document.getElementById(id);
 var img = document.getElementById("arrow");
 var box = el.getAttribute("class");
 if(box == "hide"){
 el.setAttribute("class", "show");
 delay(img, "img/buscanos.png", 400);
 }
 else{
 el.setAttribute("class", "hide");
 delay(img, "img/buscanos.png", 400);
 }
}
function delay(elem, src, delayTime){
 window.setTimeout(function() {
 elem.setAttribute("src", src);
 }, delayTime);
}
if(window.addEventListener){
 window.addEventListener("load", init, false);
}
else if(window.attachEvent){
 window.attachEvent("onload", init);
}
