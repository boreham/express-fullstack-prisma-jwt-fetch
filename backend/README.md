### 📌 1. Регистрация пользователя
```sh
# Метод: POST /api/auth/register

curl -X POST http://localhost:5000/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{
           "email": "test@example.com",
           "username": "testuser",
           "password": "password123"
         }'
```

### 📌 2. Вход в систему
```sh
# Метод: POST /api/auth/login

curl -X POST http://localhost:5000/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{
           "email": "test@example.com",
           "password": "password123"
         }'
```

### 📌 3. Доступ к защищённому ресурсу (Logout)
```sh
# Метод: POST /api/auth/logout

curl -X POST http://localhost:5000/api/auth/logout \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer <ВАШ_JWT_ТОКЕН>"
```

### 🛠 Дополнительные проверки
```sh
# Проверка валидации email (неправильный формат):
curl -X POST http://localhost:5000/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{
           "email": "invalid-email",
           "password": "password123"
         }'

# Проверка валидации пароля (слишком короткий):
curl -X POST http://localhost:5000/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{
           "email": "test@example.com",
           "password": "123"
         }'
```