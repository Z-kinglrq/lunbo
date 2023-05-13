const Data = [
    {url:`../img/1.jpg`,title:'北京',color:'rgba(100,67,68,.8)'},
    {url:`../img/2.jpg`,title:'上海',color:'rgba(119,91,113,.8)'},
    {url:`../img/3.jpg`,title:'深圳',color:'rgba(162,154,178,.8)'},
    {url:`../img/4.jpg`,title:'长沙',color:'rgba(106,145,175,.8)'},
    {url:`../img/5.jpg`,title:'成都',color:'rgba(154,141,115,.8)'}
]

let i = 0;
const right = document.querySelector('.right');
const img = document.querySelector('.wrapper img');
const title = document.querySelector('.footer p');
const color =document.querySelector('.footer');

// 右侧按钮
right.addEventListener('click',function(){
    i++;
    if(i>=Data.length){
        i=0;
    }
    toggle();
})
// 右边按钮
const left = document.querySelector('.left');
left.addEventListener('click',function(){
    i--;
    if(i<0){
        i=Data.length-1;
    }
    toggle();
})
function toggle(){
    const lis = document.querySelector(`.footer ul li:nth-child(${i+1})`);
    const li = document.querySelector(`.footer ul .active`)
    img.src = Data[i].url;
    title.innerHTML = Data[i].title;
    color.style.background = Data[i].color;
    li.classList.remove('active');
    lis.classList.add('active');
}

// 自动播放
let timer = setInterval(() => {
    right.click();
}, 2000);

const box = document.querySelector('.container');
box.addEventListener('mouseenter',function(){
    clearInterval(timer);
})
box.addEventListener('mouseleave',function(){
    clearInterval(timer);
    timer = setInterval(() => {
        right.click();
    }, 2000);
})

// function getRandom(n,m){//随机返回n到m之间的数
//     return Math.floor(Math.random()*(m-n+1))+n;
// }
// const random = parseInt(Math.random() * Data.length);
// console.log(Data[random])
// const img = document.querySelector('.wrapper img');
// img.src = Data[random].url;
// const title = document.querySelector('.footer p');
// title.innerHTML = Data[random].title;
// const color =document.querySelector('.footer');
// color.style.background = Data[random].color;
// const li = document.querySelector(`.footer ul li:nth-child(${random+1})`);
// li.classList.add('active');


// let i = 0;
// setInterval(function(){
//     i++;
//     if(i>=Data.length){
//         i = 0;
//     }
//     const img = document.querySelector('.wrapper img');
//     img.src = Data[i].url;
//     const title = document.querySelector('.footer p');
//     title.innerHTML = Data[i].title;
//     const color =document.querySelector('.footer');
//     color.style.background = Data[i].color;
//     const li = document.querySelector(`.footer ul .active`);
//     const li1 = document.querySelector(`.footer ul li:nth-child(${i+1})`);
//     li.classList.remove('active');
//     li1.classList.add('active');
// },2000)

