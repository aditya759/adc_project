
function navbar_components() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
 // chnage active status on click 
  
     // Get the container element
     var btnContainer = document.getElementById("myTopnav");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("navbar_item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// from dropdownList.html
function showItem(){
  document.getElementById("elements").style.display='';
  var seltype = document.getElementById("selType");
  var typeValue = seltype.value;
  console.log(typeValue);
  //document.body.style.backgroundColor = color;
  if(typeValue=='Select Type'){
  console.log(typeValue);
    alert("select a type");
  return;}
  if (typeValue=='cereal')
  {
    document.querySelector('#cereal').style.display = '';
    document.querySelector('#pulses').style.display = 'none';
    document.querySelector('#oilSeed').style.display = 'none';
   document.innerthtml="ajnsjdkcl";
   return;
  }
  if (typeValue=='pulses')
  {
    console.log(typeValue);
    document.querySelector('#cereal').style.display = 'none';
    document.querySelector('#pulses').style.display = '';
    document.querySelector('#oilSeed').style.display = 'none';
    return;
  }
  if (typeValue="oilSeed")
   {
    console.log(typeValue);
    document.querySelector('#cereal').style.display = 'none';
    document.querySelector('#pulses').style.display = 'none';
    document.querySelector('#oilSeed').style.display = '';
    return;
  }
  
  } 
