# MERN Auth Server

Простой сервер на стеке MongoDB, Express, Node.js для аутентификации с использованием двух конечных точек: входа и регистрации.

## API Endpoints

### Вход (Login)

-   Метод: POST
-   Путь: /login
-   Обработчик: loginUser

### Регистрация (Signup)

-   Метод: POST
-   Путь: /signup
-   Обработчик: signupUser

### Root url

-   https://authentication-server-ci9t.onrender.com

## Используемые технологии

-   Express.js
-   Mongoose
-   bcrypt
-   jsonwebtoken
