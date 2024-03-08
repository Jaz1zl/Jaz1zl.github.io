
const button = document.getElementById('btn')
let p_test_01 = document.getElementById('test_01')
// button.style.display = "none";
let tg = window.Telegram.WebApp
tg.expand()
tg.MainButton.text = "Перейти 20..."; //изменяем текст кнопки 
tg.MainButton.setText("Перейти 20..."); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#ffffff"; //изменяем цвет текста кнопки
tg.MainButton.color = "#2096c5"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#2096c5"}); //так изменяются все параметры 
var seconds = 2;

tg.MainButton.show()
tg.MainButton.enable()
var meni_1 = 'https://1wxekk.com/casino/list?open=register#8a5v';

let inputData =  tg.initData 
let check_tg = tg.viewportHeight
console.log(inputData)
console.log(check_tg)
if (check_tg != true){
    p_test_01.innerHTML = check_tg
    tg.MainButton.hide()
    tg.MainButton.disable()
    btn.innerText = "Ошибка открыто не в Telegram";

}
if (check_tg === true){
    timer()
}
function timer() {
    // button.localName('test')
    var seconds_timer_id = setInterval(function() {
        if (seconds > 0) {
            seconds --;
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
			// console.log(seconds)
            text = 'Перейти ' + seconds + '...'
			tg.MainButton.setText(text);
            // btn.innerText = text;

            // console.log(text)
        } else {
            seconds = 0
            

            tg.MainButton.setText('Продолжить')

        }
    }, 1000);
}


btn.onclick = function() {
    this.style.background = "red";

    if (seconds > 0) {
        tg.openLink(meni_1)
        
    }
}
Telegram.WebApp.onEvent('mainButtonClicked', function(){
    if (seconds > 0) {
        // var meni_1 = 'https://1wxekk.com/casino/list?open=register#8a5v';
        tg.openLink(meni_1)
        return
    }
    tg.close();

    tg.sendData('True')
     });
