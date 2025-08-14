# Markdown Previewer

A real-time markdown editor and previewer built with React. This project was built as part of the FreeCodeCamp Frontend Development Libraries certification.

## 🚀 Live Demo

The application is automatically deployed to GitHub Pages on every push to the main branch.

**[View Live Demo →](https://codedstrings.github.io/fcc-markdown-previewer/)**

## ✨ Features

- **Real-time Preview**: See your markdown rendered as HTML instantly as you type
- **GitHub Flavored Markdown**: Full support for GFM including tables, strikethrough, and more
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Theme**: Modern dark UI that's easy on the eyes
- **Line Break Support**: Converts carriage returns to line breaks automatically
- **Syntax Highlighting**: Code blocks are properly formatted and highlighted


## 🛠️ Built With

- **[React](https://reactjs.org/)** - Frontend framework
- **[Vite](https://vitejs.dev/)** - Build tool and development server
- **[Marked](https://marked.js.org/)** - Markdown parser and compiler


## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/codedstrings/fcc-markdown-previewer.git
cd fcc-markdown-previewer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   └── main.jsx         # React entry point
├── public/              # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions deployment workflow
├── package.json         # Project dependencies and scripts
└── README.md           # This file
```


## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ If you found this project helpful, please give it a star!
