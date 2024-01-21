let tg = window.Telegram.WebApp
tg.expand()

tg.MainButton.text = "Перейти 20..."; //изменяем текст кнопки 
tg.MainButton.setText("Перейти 20..."); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#ffffff"; //изменяем цвет текста кнопки
tg.MainButton.color = "#2096c5"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры 
var seconds = 5;

const button = document.getElementById('btn')
button.style.display = "none";
tg.MainButton.show()
tg.MainButton.enable()

// tg.MainButton.setText('Перейти ' + seconds + '...')

function timer() {

    // var seconds = 5;

    var seconds_timer_id = setInterval(function() {
        if (seconds > 0) {
            seconds --;
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            // $(".btn").text(seconds);

            text = 'Перейти ' + seconds + '...'
            tg.MainButton.setText(text)
            
            // tg.MainButton.show()

            

            // button.textContent = ('Перейти ' + seconds + '...')
        } else {
            // clearInterval(seconds_timer_id);
            // button.textContent = ('Продолжить')
            seconds = 0
            // button.style.display = "none";
            // tg.MainButton.enable()
            tg.MainButton.setText('Продолжить')
            // tg.MainButton.show()

            // location.href = 'https://t.me/Kino_filming_bot?start';


        }
    }, 1000);
}
timer()
console.log(timer)
button.onclick = function(){
    var meni_1 = 'https://beruma.click/?i=16496';
	// location.href = meni_1;
    tg.openLink(meni_1)
}
Telegram.WebApp.onEvent('mainButtonClicked', function(){
    // console.log(seconds)
    tg.showAlert(seconds)
    if (seconds > 0) {
        var meni_1 = 'https://beruma.click/?i=16496';
        tg.openLink(meni_1)
    
    }
    // tg.sendData('True')
    tg.close();

    // telegramAppChatLabs.sendData("Проверяем событие onEvent. Если был клик по кнопке, то отправляем данные при помощи sendData в виде данной строки"); 
    // tg.sendData('True')
    // WebApp.close();
     });
