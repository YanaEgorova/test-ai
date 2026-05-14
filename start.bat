@echo off
chcp 65001 >nul
REM Запуск сайта last-landing — дважды кликни этот файл

cd /d "%~dp0"
echo Last landing — запуск сайта
echo ================================
echo.
echo Устанавливаю зависимости (если уже стоят, пропустится)...
call npm install
echo.
echo Запускаю сайт...
echo Когда увидишь "Ready in X seconds" — открой в браузере: http://localhost:3000
echo Чтобы остановить сайт — закрой это окно или нажми Ctrl+C.
echo.
call npm run dev
pause
