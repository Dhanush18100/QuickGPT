# QuickGPT

![React](https://img.shields.io/badge/-React-blue?logo=react&logoColor=white)

## 📝 Description

QuickGPT is a versatile and high-performance application designed to provide seamless access to GPT-powered AI models. Built with a modern React frontend, it offers a dual-mode experience through both a sleek web interface and a powerful command-line interface (CLI). The platform is engineered for production readiness, featuring secure user authentication, integrated API management, and a persistent database to manage user data and history. With a focus on reliability and code quality, QuickGPT includes a comprehensive testing suite, making it a robust solution for developers and users who need fast, reliable, and secure AI interactions across multiple environments.

## ✨ Features

- 🌐 Api
- 🗄️ Database
- 🔐 Auth
- 🧪 Testing
- 🕸️ Web


## 🛠️ Tech Stack

- ⚛️ MERN


## 📦 Key Dependencies

```
@tailwindcss/vite: ^4.1.15
axios: ^1.13.0
lucide-react: ^0.547.0
moment: ^2.30.1
prismjs: ^1.30.0
react: ^19.1.1
react-dom: ^19.1.1
react-hot-toast: ^2.6.0
react-markdown: ^10.1.0
react-router-dom: ^7.9.4
tailwindcss: ^4.1.15
```

## 🚀 Run Commands

- **dev**: `npm run dev`
- **build**: `npm run build`
- **lint**: `npm run lint`
- **preview**: `npm run preview`
- **test**: `make test`


## 📁 Project Structure

```
.
├── client
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── public
│   │   └── favicon.svg
│   ├── src
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── assets
│   │   │   ├── ai_image1.jpg
│   │   │   ├── ai_image10.jpg
│   │   │   ├── ai_image11.jpg
│   │   │   ├── ai_image12.jpg
│   │   │   ├── ai_image2.jpg
│   │   │   ├── ai_image3.jpg
│   │   │   ├── ai_image4.jpg
│   │   │   ├── ai_image5.jpg
│   │   │   ├── ai_image6.jpg
│   │   │   ├── ai_image7.jpg
│   │   │   ├── ai_image8.jpg
│   │   │   ├── ai_image9.jpg
│   │   │   ├── assets.js
│   │   │   ├── bin_icon.svg
│   │   │   ├── close_icon.svg
│   │   │   ├── diamond_icon.svg
│   │   │   ├── favicon.svg
│   │   │   ├── gallery_icon.svg
│   │   │   ├── logo.svg
│   │   │   ├── logo_full.svg
│   │   │   ├── logo_full_dark.svg
│   │   │   ├── logout_icon.svg
│   │   │   ├── menu_icon.svg
│   │   │   ├── mountain_img.jpg
│   │   │   ├── prism.css
│   │   │   ├── search_icon.svg
│   │   │   ├── send_icon.svg
│   │   │   ├── stop_icon.svg
│   │   │   ├── theme_icon.svg
│   │   │   └── user_icon.svg
│   │   ├── components
│   │   │   ├── Chatbox.jsx
│   │   │   ├── Message.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── context
│   │   │   └── AppContext.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── pages
│   │       ├── Community.jsx
│   │       ├── Credits.jsx
│   │       ├── Loading.jsx
│   │       └── Login.jsx
│   ├── vercel.json
│   └── vite.config.js
└── server
    ├── configs
    │   ├── db.js
    │   ├── imagekit.js
    │   └── openai.js
    ├── controllers
    │   ├── chatController.js
    │   ├── creditController.js
    │   ├── messageController.js
    │   ├── userController.js
    │   └── webhooks.js
    ├── middlewares
    │   └── auth.js
    ├── models
    │   ├── User.js
    │   ├── chat.js
    │   └── transaction.js
    ├── package.json
    ├── routes
    │   ├── chatRoutes.js
    │   ├── creditRoutes.js
    │   ├── messageRoutes.js
    │   └── userRoutes.js
    ├── server.js
    └── vercel.json
```

## 🛠️ Development Setup

### Node.js/JavaScript Setup
1. Install Node.js (v18+ recommended)
2. Install dependencies: `npm install` or `yarn install`
3. Start development server: (Check scripts in `package.json`, e.g., `npm run dev`)


## 👥 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/Dhanush18100/QuickGPT.git`
3. **Create** a new branch: `git checkout -b feature/your-feature`
4. **Commit** your changes: `git commit -am 'Add some feature'`
5. **Push** to your branch: `git push origin feature/your-feature`
6. **Open** a pull request

Please ensure your code follows the project's style guidelines and includes tests where applicable.

--
