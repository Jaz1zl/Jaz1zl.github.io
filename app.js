let tg = window.Telegram.WebApp
tg.expand()

tg.MainButton.text = "Changed Text"; //изменяем текст кнопки 
tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры 

const button = document.getElementById('btn')
function timer() {

    var seconds = 20;

    var seconds_timer_id = setInterval(function() {
        if (seconds > 0) {
            seconds --;
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            $(".seconds").text(seconds);
        } else {
            clearInterval(seconds_timer_id);    
        }
    }, 1000);

}