import requests, json
TOKEN = "6826593475:AAFLtXKk4NiaUKSHgUaoscUhEdai9ZW-Fhc"
chat_id = "840548708"
message = "Здесь напишите свое сообщение"
URL = 'https://api.telegram.org/bot'

# url = f"https://api.telegram.org/bot{TOKEN}/sendMessage?chat_id={chat_id}&text={message}"
# print(requests.get(url).json()) # Эта строка отсылает сообщение


def inline_keyboard(chat_id, text, user, film):
    
    reply_markup = {'inline_keyboard': [[{'text': 'Наш сайт', 'data': f'web_{user}_{film}'}]]}
    data = {'chat_id': chat_id, 'text': text, 'reply_markup': json.dumps(reply_markup)}
    requests.post(f'{URL}{TOKEN}/sendMessage', data=data)