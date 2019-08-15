function roundToTwo(num)
{
    return +(Math.round(num + "e+2")  + "e-2");
 }

function checkboxes()
    {
     var modalContent = document.getElementById('modalContentContainer');
     var inputElems = document.getElementsByTagName("input"),
      count = 0;

      for (var i=0; i<inputElems.length; i++) {
        if (inputElems[i].type == "checkbox" && inputElems[i].checked == true){
            count++
            total= roundToTwo(count*4.2);
        }
      }
     modalContent.innerHTML = total +" %";
 }

document.addEventListener("DOMContentLoaded", function()
{
       const box = document.querySelectorAll(".modal");
       M.Modal.init(box, {
           opacity:0.6,
           inDuration:400,
           outDuration:375,

       });
 });

$(".drag").draggable();
$(".drag").droppable();
var takeScreenShot = function() {
    html2canvas(document.getElementById("container"), {
        onrendered: function (canvas) {
            var tempcanvas=document.createElement('canvas');
            tempcanvas.width=350;
            tempcanvas.height=350;
            var context=tempcanvas.getContext('2d');
            context.drawImage(canvas,112,0,288,200,0,0,350,350);
            var link=document.createElement("a");
            link.href=tempcanvas.toDataURL('image/jpg');   //function blocks CORS
            link.download = 'screenshot.jpg';
            link.click();
        }
    });
}