import requests
TOKEN = "7030384356:AAGAcD0J9wfej-9Ybrqby-EIcmtgrzjx-wU"
chat_id = ""
message = "Здесь напишите свое сообщение"

url = f"https://api.telegram.org/bot7030384356:AAGAcD0J9wfej-9Ybrqby-EIcmtgrzjx-wU/sendMessage?chat_id=840548708&text={message}"
print(requests.get(url).json()) # Эта строка отсылает сообщение