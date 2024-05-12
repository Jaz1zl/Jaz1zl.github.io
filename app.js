
const button = document.getElementById('btn');
let p_test_01 = document.getElementById('test_01');
let url = document.location.href

button.style.display = "none";
let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.text = "Перейти 20..."; //изменяем текст кнопки 
tg.MainButton.setText("Перейти 20..."); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#ffffff"; //изменяем цвет текста кнопки
tg.MainButton.color = "#2096c5"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#2096c5"}); //так изменяются все параметры 
var seconds = 5;
let data_user = tg.initData;
let data_user2 = tg.initDataUnsafe;
tg.MainButton.show();
tg.MainButton.enable();
var meni_1 = 'https://1wxekk.com/casino/list?open=register#8a5v';
let api_tg = 'https://api.telegram.org/bot6826593475:AAFLtXKk4NiaUKSHgUaoscUhEdai9ZW-Fhc';
const Http = new XMLHttpRequest();

function timer() {

    var seconds_timer_id = setInterval(function() {
        if (seconds > 0) {
            seconds --;
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            text = 'Перейти ' + seconds + '...'
			tg.MainButton.setText(text);
            
        } else {
            seconds = 0;
            p_test_01.innerHTML = 'Благодарим за просмотр';
            tg.MainButton.setText('Продолжить');
        }
    }, 1000);
}
timer();

function url_user(){
    let url = document.location.href
    Http.open("GET", api_tg+"/sendMessage?chat_id="+user_id+'&text=qqq'+url)
    
    let user_id = new URL(url).searchParams.get('user_id')
    let film_id = new URL(url).searchParams.get('film_id')
    requst(user_id, film_id)
    console.log(url+'__'+user_id+'__'+film_id)
}

function requst(user_id, film_id){

    var callback = 'vip_status_reklama_'+film_id
    var adf = {"inline_keyboard": [[{"text": "Menu", "callback_data": "user_menu"}, {"text": "Продолжить", "callback_data": callback}]]}
    
    Http.open("GET", api_tg+"/sendMessage?chat_id="+user_id+'&text=Спасибо за просмотр рекламы, заказать рекламу @kino_film_admin&reply_markup='+JSON.stringify(adf))
    Http.send()


}


btn.onclick = function() {
    this.style.background = "red";

    if (seconds > 0) {
        tg.openLink(meni_1);
        
    }
}
Telegram.WebApp.onEvent('mainButtonClicked', function(){
    if (seconds > 0) {
        tg.openLink(meni_1);
        return
    }
    url_user()
    tg.close();

     });


