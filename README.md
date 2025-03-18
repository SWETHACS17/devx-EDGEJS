# React Project Setup with Tailwind CSS and React Router

This guide will help you set up a React project with **Tailwind CSS** and **React Router**.

## Event name: DevX
## Team name: EdgeJS

## Prerequisites
Make sure you have **Node.js** and **npm** installed. You can check by running:

```sh
node -v
npm -v
```

If not installed, download from [Node.js official website](https://nodejs.org/).

## Step 1: Create a React App
First, create a new React project using Vite:

```sh
npm create vite@latest my-app --template react
cd my-app
```

## Step 2: Install Dependencies
Install Tailwind CSS and its Vite plugin:

```sh
npm install tailwindcss @tailwindcss/vite
```

Initialize Tailwind CSS:

```sh
npx tailwindcss init -p
```

This creates `tailwind.config.js` and `postcss.config.js` files.

## Step 3: Configure Tailwind CSS
Edit `tailwind.config.js` to include your project files:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add Tailwind to `src/index.css`:

```css
@import "tailwindcss";
```

## Step 4: Install React Router
To set up navigation in your React app, install React Router:

```sh
npm install react-router-dom
```
```sh
npm install @shadcn/ui
```
## Step 5: Install lucide-react
For icons in the leaderboard

```sh
npm install lucide-react
```
## Step 5: Install React-Calendar (for calendar functionality)
To display and manage dates:

```sh
npm install react-calendar
```
## Step 6:Install React-Icons (for additional icons)
To use more icons in the project:

```sh
npm install react-icons
```

## Step 7: Run the Project
Start your development server:

```sh
npm run dev
```

Now your project is set up with **Tailwind CSS** and **React Router**! 🚀

