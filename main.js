const burgermenu = document.getElementById("burger-button");
const navcontents = document.querySelector(".nav-contents");

burgermenu.addEventListener("click", function () {
  console.log("clicked burger btn");
  burgermenu.classList.toggle("burger-menu--active");
  navcontents.classList.toggle("showdropdown");
});

// targeted the product btn
const productbtn = document.getElementById("product-btn");
// targeted the product dropdown
const productdropdwn = document.getElementById("product-dropdwn");
// targeted the comapny btn
const companybtn = document.getElementById("company-btn");
// targeted the comapny drop down
const companydropdwn = document.getElementById("company-dropdwn");
// targeted the connect btn
const connectbtn = document.getElementById("connect-btn");
// targeted the connect dropdown
const connectdropdwn = document.getElementById("connect-dropdwn");
// added a click function to check the product btn to show or hide property
productbtn.addEventListener("click", function () {
  console.log("clicked product btn");
  productdropdwn.classList.toggle("showdropdown");
});

companybtn.addEventListener("click", function () {
  console.log("clicked company btn");
  companydropdwn.classList.toggle("showdropdown");
});

connectbtn.addEventListener("click", function () {
  console.log("clicked connect btn");
  connectdropdwn.classList.toggle("showdropdown");
});
