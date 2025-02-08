import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import cors from 'cors';

dotenv.config();

const app = express();

// Включаем CORS для всех запросов
app.use(cors());

app.use(bodyParser.json());

// Подключаем маршруты для аутентификации
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
