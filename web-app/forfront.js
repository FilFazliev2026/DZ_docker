const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8098;
const HOST = '0.0.0.0'; // Важно для Docker, чтобы сервер слушал внешние запросы

const server = http.createServer((req, res) => {
    // Читаем созданный HTML-файл
    const filePath = path.join(__dirname, 'index.html');

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Ошибка сервера при чтении файла.');
            return;
        }
        // Отдаем успешный ответ со статусом 200
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(content);
    });
});

server.listen(PORT, HOST, () => {
    console.log('Сервер успешно запущен и слушает порт ${PORT}');
});
