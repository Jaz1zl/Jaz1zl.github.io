let tg = window.Telegram.WebApp
tg.expand()

tg.MainButton.text = "Changed Text"; //изменяем текст кнопки 
tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры 

const button = document.getElementById('btn')
function timer() {

    var seconds = 10;

    var seconds_timer_id = setInterval(function() {
        if (seconds > 0) {
            seconds --;
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            // $(".btn").text(seconds);
            button.textContent = ('Перейти ' + seconds + '...')
        } else {
            // clearInterval(seconds_timer_id);
            // button.textContent = ('Продолжить')
            button.style.display = "none";
            tg.MainButton.enable()

        }
    }, 1000);
}
timer()
Telegram.WebApp.onEvent('mainButtonClicked', function(){
    telegramAppChatLabs.sendData("Проверяем событие onEvent. Если был клик по кнопке, то отправляем данные при помощи sendData в виде данной строки"); 
     });