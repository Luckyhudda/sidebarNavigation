const togglebtn = document.querySelector('.toggleBox');
const sideBar = document.querySelector('.sideBarBox');
const toggle = document.querySelector('.toggleBox');
let toggleText = document.querySelector('.toggleText')

togglebtn.addEventListener('click',function(){
    if(sideBar.classList.contains('hidden')){
        toggle.style.left = '210px';
    sideBar.style.left = '0px';
    sideBar.classList.remove('hidden');
    toggleText.classList.replace('fa-bars','fa-xmark')
} else{
    toggle.style.left = '10px';
    sideBar.style.left = '-200px';
    sideBar.classList.add('hidden');
    toggleText.classList.replace('fa-xmark','fa-bars');
    }
})


const welcome = document.querySelector('.welcome');
const endSymble = document.querySelector('.endSymble');



setInterval(function(){
    let randomColor1 = Math.trunc(Math.random() *222)
let randomColor2 = Math.trunc(Math.random() *222);
let randomColor3 = Math.trunc(Math.random() *222)
   welcome.style.color = `rgba(${randomColor1},${randomColor2},${randomColor3})`
   endSymble.style.color = `rgba(${randomColor2},${randomColor3},${randomColor1})`
},1000)
