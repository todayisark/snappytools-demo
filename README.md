🌐 [日本語](README.ja.md)  📖[项目故事](项目故事.md)

# Frontend Portfolio: Split Bill Calculator & LED Text Scroller

This project is a simple frontend application built with **React**, **TypeScript**, **Vite**, and **Material UI (MUI)**. It includes two main features.

## Demo

[SnappyKit Demo](https://todayisark.github.io/snappykit-demo/)

## 🚀 Main Features

### 1. Split Bill Calculator

- A tool to easily calculate split bills among multiple people.
- Allows selecting participants, payment amounts, and exchange rates.
- Displays the split bill results in real-time.

### 2. LED Text Scroller (Running Text)

- A mobile-friendly LED-style scrolling text feature.
- Fully customizable text, font, colors, and scroll speed.
- Supports both landscape and portrait orientations.

## 🛠 Tech Stack

- **Framework**: [React](https://reactjs.org/)
- **Language**: TypeScript
- **Build Tool**: [Vite](https://vitejs.dev/)
- **UI Library**: [Material UI (MUI)](https://mui.com/)

## 📦 Installation and Running

```bash
git clone https://github.com/todayisark/snappykit-demo
npm install
npm run dev
```

## 📁 Project Structure (Overview)

```
snappykit-frontend/
├── public/            # Static files (favicon, etc.)
├── src/               # Application source code
│   ├── components/    # Common components (header, footer, etc.)
│   ├── pages/         # Screens for each tool
│   │   ├── LEDBoard/      # LED scrolling feature
│   │   └── SplitBill/     # Split bill calculator tool
│   ├── routes.tsx     # Routing configuration
│   └── theme.ts       # MUI theme settings
├── package.json       # Dependencies and scripts
└── vite.config.ts     # Vite configuration file
```

## 🧩 Future Plans

- Add more fonts for the LED text
- Export split bill results (CSV / image)
- Save LED settings and split bill results

  - Currently supports local storage
  - Backend integration planned for saving/loading data

- Add user registration and login functionality

## 📄 License

This project is licensed under the MIT License.
