#!/bin/bash
# Запуск сайта last-landing — дважды кликни этот файл
cd "$(dirname "$0")"
echo "Last landing — запуск сайта"
echo "================================"
echo ""
echo "Устанавливаю зависимости (если уже стоят, пропустится)..."
npm install
echo ""
echo "Запускаю сайт..."
echo "Когда увидишь 'Ready in X seconds' — открой в браузере: http://localhost:3000"
echo "Чтобы остановить сайт — закрой это окно или нажми Cmd+C."
echo ""
npm run dev
