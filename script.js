const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here

btn_toggle.onclick = () => {
  // your code here
  
  if(btn_toggle.innerHTML === "Display Calculation") {
    btn_toggle.innerHTML = "Display Author";
    
  }

  else btn_toggle.innerHTML = "Display Calculation";
}

// more codes for Search and Reset buttons here
