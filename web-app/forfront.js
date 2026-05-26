const http = require('http');

const PORT = 8098;

// Зашиваем HTML-код прямо в память сервера, чтобы не читать его с диска
const htmlContent = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Мое Веб Приложение</title>
</head>
<body>
    <p>Спасибо за полезные пары)</p>
</body>
</html>`;

const server = http.createServer((req, res) => {
    // Игнорируем автоматические запросы к иконке сайта
    if (req.url === '/favicon.ico') {
        res.writeHead(204);
        res.end();
        return;
    }

    // На любой запрос к серверу (включая "/") мгновенно отдаем статус 200 и наш HTML
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(htmlContent);
});

server.listen(PORT, () => {
    console.log(`Сервер успешно запущен и слушает порт ${PORT}`);
});