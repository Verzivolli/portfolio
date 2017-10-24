window.onload = function(){
$("svg").mouseover(function(){
  var svgID = $(this).attr("id");
  var strokeID = "#" + svgID + "-nofill";
  var centerID = "." + svgID + "-center";
  var circleID = "#" + svgID + "-circle";
  //var lineLength = $(circleID).getTotalLength();
  $(circleID).css({"stroke-dasharray": "63","stroke": "black", "stroke-dashoffset": "63"});
  $(strokeID).css({'fill': '#d8eeff'});
  $(centerID).css({"fill": "black"});
  
});
$("svg").mouseenter(function(){
  var svgID = $(this).attr("id");
  var circleID = "#" + svgID + "-circle";
$(circleID).animate({"stroke-dashoffset": "0"},1000,"easeOutBounce",function(){
    $(this).css({"stroke-dasharray": "63","stroke-dashoffset": "63"})
  });
});
$("svg").mouseout(function(){
  var svgID = $(this).attr("id");
  var strokeID = "#" + svgID + "-nofill";
  var centerID = "." + svgID + "-center";
  var circleID = "#" + svgID + "-circle";
  
  $(circleID).css({"stroke-dasharray": "63","stroke-dashoffset": "63"});
  $(strokeID).css({'fill': 'none', "stroke": "#e0e0e0"});
  $(centerID).css({"fill": "#e0e0e0"})
});
}