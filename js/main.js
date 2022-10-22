
function celuNosotros(){
  document.getElementById("idNosotros").classList.toggle("celuNosotros");
}
function navCelu(){
  document.getElementById("idDiv").classList.toggle("navCelu");
} 
  function funcionBTN1() {
      var x = document.getElementById("primero");
      var y = document.getElementById("segundo");
      if (x.style.display === "none") {
          x.style.display = "block";
          y.style.display = "none";
      } else {
          x.style.display = "block";
          y.style.display = "none";
      }
      
  }
  
  function funcionBTN2() {
      var x = document.getElementById("primero");
      var y = document.getElementById("segundo");
      if (y.style.display === "none") {
          y.style.display = "block";
          x.style.display = "none";
      } else {
          x.style.display = "none";
          y.style.display = "block";
      }
  }


