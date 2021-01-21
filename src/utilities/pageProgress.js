export default function pageProgress () {
  var e = document.querySelectorAll(".circle-bar path")[0];
  var l = e.getTotalLength();
  e.style.strokeDashoffset = l - (window.pageYOffset * l / (document.body.clientHeight - window.innerHeight));
}