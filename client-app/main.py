import urllib.request
import time


URL = "http://web:8098"

print("Python-клиент запущен. Ожидание инициализации сети...", flush=True)
time.sleep(5)  # Пауза для запуска сервера

while True:
    try:
        # Выполняем GET-запрос
        with urllib.request.urlopen(URL, timeout=5) as response:
            status_code = response.getcode()
            print(f"[ЛОГ] Подключение успешное. Статус веб-приложения: {status_code}", flush=True)
    except Exception as e:
        # Если веб-сервер еще упал или не отвечает
        print(f"[ЛОГ] Ошибка подключения к веб-приложению: {e}", flush=True)

    # Задержка 10 секунд перед следующим опросом
    time.sleep(10)