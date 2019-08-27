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
     modalContent.innerHTML = total+"%";
 }

document.addEventListener("DOMContentLoaded", function()
{
       const box = document.querySelectorAll(".modal");
       M.Modal.init(box, {
           opacity:0.6,
           inDuration:250,
           outDuration:250,
           dismissible: true,

       });
 });

document.addEventListener('DOMContentLoaded', function()
{
    const elems = document.querySelectorAll('.tooltipped');
     M.Tooltip.init(elems, {
         exitDelay:0,
         enterDelay:200,
         html: 'Time Tracker!',
         margin:5,
         inDuration:300,
         outDuration:250,
         position: 'right',
         transitionMovement:10,
     });
});
