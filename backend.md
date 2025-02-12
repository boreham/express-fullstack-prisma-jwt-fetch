### Список зависимостей
```
express 
typescript 
prisma 
```

### СУБД
```
postgresql
```

### Структура проекта:
```
backend/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── controllers/
|   |   └── authController.ts        
│   ├── repositories/
│   │   └── authRepository.ts
│   ├── middleware/
│   │   └── authMiddleware.ts
│   ├── routes/
│   │   └── authRoutes.ts
|   ├── services/
│   │   └── authService.ts
│   └── app.ts
├── package.json
└── tsconfig.json
```