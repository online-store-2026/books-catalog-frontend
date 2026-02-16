# 📚 Books Catalog Frontend

Онлайн каталог книг з сучасним інтерфейсом та зручним пошуком.

## 🚀 Live Demo

**[Переглянути проект →](https://books-catalog-frontend.vercel.app)**

[![Deployment Status](https://img.shields.io/badge/deployment-ready-success?style=flat&logo=vercel)](https://books-catalog-frontend.vercel.app)

---

## 📋 Опис проекту

Books Catalog - це веб-додаток для перегляду та пошуку книг. Проект створено з використанням сучасних технологій для забезпечення швидкої роботи та приємного користувацького досвіду.

### ✨ Основні можливості

- 📖 Перегляд каталогу книг
- 🔍 Пошук за назвою та автором
- 📑 Детальна інформація про кожну книгу
- 🛒 Кошик для обраних товарів
- 📱 Адаптивний дизайн для всіх пристроїв

---

## 🛠️ Технології

- **Frontend Framework:** React + TypeScript
- **Build Tool:** Vite
- **Styling:** CSS/SCSS, Tailwind CSS
- **Routing:** React Router
- **UI:** Radix UI, shadcn-style components, Lucide React
- **Deployment:** Vercel
- **Version Control:** Git + GitHub
- **Code quality:** ESLint, Prettier, Husky + lint-staged

---

## 💻 Локальна розробка

### Передумови

- Node.js (v16 або новіше)
- npm або yarn

### Встановлення

1. **Клонуйте репозиторій:**
   ```bash
   git clone https://github.com/online-store-2026/books-catalog-frontend.git
   cd books-catalog-frontend
   ```

2. **Встановіть залежності:**
   ```bash
   npm install
   ```

3. **Запустіть development сервер:**
   ```bash
   npm run dev
   ```

4. **Відкрийте браузер:**
   ```
   http://localhost:5173
   ```

### Доступні команди

```bash
npm run dev          # Запуск development сервера
npm run build        # Збірка production версії
npm run preview      # Перегляд production збірки
npm run lint         # Перевірка коду
```

---

## 📦 Структура проекту

```
books-catalog-frontend/
├── src/
│   ├── api/              # API-клієнт
│   │   └── products.ts
│   ├── assets/            # Статичні ресурси (svg тощо)
│   ├── components/       # React-компоненти
│   │   ├── Cart/         # Кошик
│   │   │   ├── Cart.tsx
│   │   │   ├── CartCheckout.tsx
│   │   │   ├── CartItem.tsx
│   │   │   └── index.tsx
│   │   ├── Catalog/
│   │   ├── CategoriesSection/
│   │   ├── Footer/
│   │   ├── GridContainer/
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   ├── HeaderNav.tsx
│   │   │   ├── HeaderSearch.tsx
│   │   │   └── HeaderToolBar.tsx
│   │   ├── ui/          # UI-кіт (button, select, pagination тощо)
│   │   ├── ProductCard.tsx
│   │   └── YouMightLike.tsx
│   ├── constants/        # Константи (typography, colors, routes)
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── lib/              # Утиліти (utils)
│   ├── pages/            # Сторінки додатку
│   │   ├── HomePage.tsx
│   │   ├── CatalogPage.tsx
│   │   ├── CartPage.tsx
│   │   ├── CheckoutPage.tsx
│   │   ├── FavouritesPage.tsx
│   │   ├── ItemCardPage.tsx
│   │   ├── PaperPage.tsx
│   │   ├── KindlePage.tsx
│   │   ├── AudiobookPage.tsx
│   │   ├── ContactsPage.tsx
│   │   ├── RightsPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── styles/           # Глобальні стилі (SCSS)
│   ├── types/            # TypeScript-типи
│   ├── utils/            # Допоміжні функції
│   ├── App.tsx           # Головний компонент
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── public/               # Статичні файли
│   ├── api/              # JSON-дані (paperback, kindle, audiobook)
│   ├── fonts/
│   └── img/              # Зображення
│       ├── audiobook/    # Обкладинки аудіокниг
│       ├── kindle/       # Обкладинки Kindle
│       ├── paperback/    # Обкладинки паперових книг
│       ├── banner/
│       ├── categories/
│       ├── hero/
│       ├── icons/
│       └── ...           # (cart-is-empty, favorites-is-empty, тощо)
├── index.html
├── package.json          # Залежності проекту
├── tsconfig.json
├── vite.config.ts
└── ...
```

---

## 🚀 Deployment

Проект автоматично деплоїться на Vercel при кожному push в гілку `main`.

### Automatic Deployments

- **Production:** Автоматичний деплой з гілки `main`
- **Preview:** Автоматичний деплой для кожного Pull Request

---

## 👥 Команда

Проект розроблено командою **online-store-2026**

---

## 📝 Ліцензія

Цей проект створено в навчальних цілях.

---

## 🔗 Корисні посилання

- [Live Demo](https://books-catalog-frontend.vercel.app)
- [GitHub Repository](https://github.com/online-store-2026/books-catalog-frontend)
- [Vercel Dashboard](https://vercel.com/artem-stadniks-projects/books-catalog-frontend)

---

**Зроблено з ❤️ командою online-store-2026**
