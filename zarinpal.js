
 const hamburgerIcon = document.querySelector(".hamburger-icon");
 const hamburgerMenu = document.querySelector(".humburger-menu");
 const cressIcon = document.querySelector(".cross-icon");
 const showMareMenu = document.querySelector('#show-manu')
 const showPruductMenu = document.querySelector('#show-pruduct-menu');


 hamburgerIcon.addEventListener("click", function(){
  hamburgerMenu.classList.add("show-hamburger-menu")
 })

 cressIcon.addEventListener("click", function(){
  hamburgerMenu.classList.remove("show-hamburger-menu")
})
 

showMareMenu.addEventListener("mouseenter", function(e) {
    const ul = e.target.childNodes[5];
    console.log(e.target.childNodes)
    ul.style.animation = 'showUp 0.35s 1';
    ul.style.display = 'block';
});
 

showMareMenu.addEventListener("mouseleave", function(e) {
  const ul = e.target.childNodes[5];
  ul.style.display = 'none'
})


showPruductMenu.addEventListener("mouseenter", function(e) {
  const div = e.target.childNodes[5];
  console.log(e.target.childNodes)
div.style.animation = 'showUp 0.35s 1';
  div.style.display = 'flex'
});
showPruductMenu.addEventListener("mouseleave", function(e) {

  const div = e.target.childNodes[5];
  div.style.display = 'none';
})