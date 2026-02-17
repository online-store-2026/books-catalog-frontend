# 📚 Books Catalog Frontend

A modern online book catalog with an intuitive interface and powerful search capabilities.

## 🚀 Live Demo

**[View Live Project →](https://books-catalog-frontend.vercel.app)**

[![Deployment Status](https://img.shields.io/badge/deployment-ready-success?style=flat&logo=vercel)](https://books-catalog-frontend.vercel.app)
[![React](https://img.shields.io/badge/React-18.3-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite)](https://vitejs.dev/)

---

## 📋 About The Project

Books Catalog is a full-featured web application for browsing and discovering books. Built with modern technologies, it delivers exceptional performance and an outstanding user experience across all devices.

### ✨ Key Features

- 📖 **Comprehensive Catalog** - Browse extensive collections of books across multiple formats
- 🔍 **Smart Search** - Find books by title, author, or category with instant results
- 📑 **Detailed Information** - View complete book details, descriptions, and pricing
- 🛒 **Shopping Cart** - Add books to cart with real-time updates
- ❤️ **Favorites** - Save books to your wishlist for later
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI/UX** - Clean, intuitive interface with smooth animations

---

## 🛠️ Tech Stack

### Core Technologies

- **Frontend Framework:** React 18.3 + TypeScript 5.6
- **Build Tool:** Vite 6.0
- **Styling:** CSS/SCSS + Tailwind CSS
- **Routing:** React Router v7
- **UI Components:** Radix UI, shadcn-style components, Lucide React icons

### Development Tools

- **Code Quality:** ESLint, Prettier
- **Git Hooks:** Husky + lint-staged
- **Deployment:** Vercel (with automatic CI/CD)
- **Version Control:** Git + GitHub

---

## 💻 Getting Started

### Prerequisites

- **Node.js** (v16.0 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/online-store-2026/books-catalog-frontend.git
   cd books-catalog-frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   ```
   http://localhost:5173
   ```

### Available Scripts

```bash
npm run dev          # Start development server with hot reload
npm run build        # Build production-ready bundle
npm run preview      # Preview production build locally
npm run lint         # Run ESLint to check code quality
npm run format       # Format code with Prettier
```

---

## 📦 Project Structure

```
books-catalog-frontend/
├── src/
│   ├── api/              # API client and services
│   │   └── products.ts
│   ├── assets/           # Static assets (SVG, images)
│   ├── components/       # React components
│   │   ├── Cart/         # Shopping cart components
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
│   │   ├── ui/          # Reusable UI components (buttons, inputs, etc.)
│   │   ├── ProductCard.tsx
│   │   └── YouMightLike.tsx
│   ├── constants/        # App constants (typography, colors, routes)
│   ├── context/          # React Context providers
│   ├── data/             # Static data and mock data
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and helpers
│   ├── pages/            # Page components (route views)
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
│   ├── styles/           # Global styles (SCSS)
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Helper functions
│   ├── App.tsx           # Main application component
│   ├── App.css
│   ├── main.tsx          # Application entry point
│   └── index.css
├── public/               # Public static files
│   ├── api/              # JSON data (paperback, kindle, audiobook)
│   ├── fonts/            # Custom fonts
│   └── img/              # Images
│       ├── audiobook/    # Audiobook covers
│       ├── kindle/       # Kindle covers
│       ├── paperback/    # Paperback covers
│       ├── banner/       # Banner images
│       ├── categories/   # Category images
│       ├── hero/         # Hero section images
│       └── icons/        # Icon assets
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
└── README.md
```

---

## 🚀 Deployment

This project uses **Vercel** for continuous deployment with automatic builds on every push to the `main` branch.

### Automatic Deployments

- **Production:** Automatic deployment from `main` branch
- **Preview:** Automatic preview deployments for every Pull Request
- **Build Time:** ~1-2 minutes
- **Performance:** Optimized with Vite's build pipeline

### Deployment URL

- **Production:** [https://books-catalog-frontend.vercel.app](https://books-catalog-frontend.vercel.app)

---

## 🎯 Features In Detail

### Book Catalog

- Browse books by format (Paperback, Kindle, Audiobook)
- Filter by categories
- Sort by price, popularity, or newest releases

### Shopping Experience

- Add items to cart with quantity selection
- Real-time cart updates
- Persistent cart state
- Checkout flow

### User Interface

- Clean, modern design
- Smooth animations and transitions
- Loading states and error handling
- Accessibility-focused components

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👥 Team

Developed by the **online-store-2026** team

---

## 📄 License

This project was created for educational purposes.

---

## 🔗 Links

- **Live Demo:** [https://books-catalog-frontend.vercel.app](https://books-catalog-frontend.vercel.app)
- **GitHub Repository:** [https://github.com/online-store-2026/books-catalog-frontend](https://github.com/online-store-2026/books-catalog-frontend)
- **Vercel Dashboard:** [Dashboard Link](https://vercel.com/artem-stadniks-projects/books-catalog-frontend)

---

## 📞 Contact

For questions or feedback, please open an issue on GitHub.

---

**Made with ❤️ by the online-store-2026 team**
