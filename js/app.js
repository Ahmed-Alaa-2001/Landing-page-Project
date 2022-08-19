let sec=document.querySelectorAll("section");
let navLst=document.querySelector("#nl");
// Add class 'active' to section when near top of viewport
window.onscroll=function(){
  for(i of sec){
      ((i.getBoundingClientRect().top>200||i.getBoundingClientRect().top<-200)?i.classList.remove("ac"):i.classList.add("ac"));
  }
}
// build the nav
function navList(){
    sec=Array.from(sec);
    for(i of sec){
        let lst=document.createElement("li");
        lst.innerHTML=`<li><a href="#${i.id}"  data-nav="${i.id}" class="menu__link">${i.dataset.nav}</a></li>`
        navLst.appendChild(lst);
    }
   // console.log(navLst);
}
// Scroll to section on link click
navLst.addEventListener("click", function(clk){
  clk.preventDefault();
    let getid=document.getElementById(`${clk.target.dataset.nav}`)
    getid.scrollIntoView({ behavior: "smooth" });
    setTimeout(()=>400);
});
navList();


