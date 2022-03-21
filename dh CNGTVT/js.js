var btnSearch = document.querySelector('.btn');
var btnSearch1 = document.querySelector('.btn-search1 ');

 btnSearch.addEventListener('click', function() {
    btnSearch1.classList.toggle('open');
   
 })


 const navsup = document.querySelector(".navsup");
const search = document.querySelector(".search button i");
const close1 = document.querySelector(".close i ");
const nav_main1 = document.querySelector(".nav_main1");


function toggleModal() {
   navsup.classList.toggle("hide");
}


search.addEventListener("click", toggleModal);
close1.addEventListener("click", toggleModal);


nav_main1.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) toggleModal();
});