
let url = document.location.href
let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.setParams({"color": "#2096c5"}); //так изменяются все параметры 
let data_user = tg.initData;
let data_user2 = tg.initDataUnsafe;
let api_tg = 'https://api.telegram.org/bot6826593475:AAFLtXKk4NiaUKSHgUaoscUhEdai9ZW-Fhc';
const Http = new XMLHttpRequest();
var admin_id_tg = 840548708;


function url_user(){
    let user_id = new URL(url).searchParams.get('user_id')
    let film_id = new URL(url).searchParams.get('film_id')
    Http.open("GET", api_tg+"/sendMessage?chat_id="+admin_id_tg+'&text=qqq'+url+'_'+user_id+"_"+film_id)
    // Http.send()
    
    // requst(user_id, film_id)
    console.log(url+'__'+user_id+'__'+film_id)
}

function requst(user_id, film_id){

    var callback = 'vip_status_reklama_'+film_id
    var adf = {"inline_keyboard": [[{"text": "Menu", "callback_data": "user_menu"}, {"text": "Продолжить", "callback_data": callback}]]}
    
    Http.open("GET", api_tg+"/sendMessage?chat_id="+user_id+'&text=Спасибо за просмотр рекламы, заказать рекламу @kino_film_admin&reply_markup='+JSON.stringify(adf))
    Http.send()

}

window.onload = function(){

    setInterval(() => url_user(), 20000);

}

Telegram.WebApp.onEvent('mainButtonClicked', function(){
    
    tg.close();

     });

document.addEventListener('DOMContentLoaded', ()=>{
    const divFiles = document.querySelectorAll('div');
    const imgFiles = document.querySelectorAll('img');
    const imageFiles = document.querySelectorAll('image');
    const videoFiles = document.querySelectorAll('video');
    const linkFiles = document.querySelectorAll('link');
    let i=0;
    if(linkFiles){for(l in linkFiles){i++;}}
    if(videoFiles){for(l in videoFiles){i++;}}
    if(divFiles){for(l in divFiles){i++;}}
    if(imgFiles){for(l in imgFiles){i++;}}
    if(imageFiles){for(l in imageFiles){i++;}}

    Array.from(divFiles).forEach((file, index)=>{
        file.onload=()=>{i++}   
    })
    Array.from(imgFiles).forEach((file, index)=>{
        file.onload=()=>{i++}   
    })
    Array.from(imageFiles).forEach((file, index)=>{
        file.onload=()=>{i++}   
    })
    Array.from(videoFiles).forEach((file, index)=>{
        file.onload=()=>{i++}   
    })
    console.log(i)
    document.getElementById('preloader').style.display = 'none'
    
})
