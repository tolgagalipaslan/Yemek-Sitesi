const seachForm = document.querySelector('.search-form');

//! button
const searchBtn =document.querySelector('#search-btn');
const menuBtn =document.querySelector('#menu-btn');
const navbar =document.querySelector('.navbar');

searchBtn.addEventListener('click',function(){
    seachForm.classList.toggle('active');
    document.addEventListener('click',function(e){
        if(!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm)){
            seachForm.classList.remove('active');
        }
    })
})



menuBtn.addEventListener('click',function(){
    navbar.classList.toggle('active');
    document.addEventListener('click',function(e){
        if(!e.composedPath().includes(menuBtn) && !e.composedPath().includes(navbar)){
            navbar.classList.remove('active');
        }
    })
})






