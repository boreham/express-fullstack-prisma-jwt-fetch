# Используем официальный Node.js образ
FROM node:22-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (или yarn.lock)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта
COPY . .

# Строим проект
RUN npm run build

# Открываем порт, на котором будет работать приложение
EXPOSE 5173

# Команда для запуска сервера разработки или продакшн версии (в зависимости от режима)
CMD ["npm", "run", "preview"]
