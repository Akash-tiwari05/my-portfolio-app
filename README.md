Portfolio Website with Responsive Navigation
This is a dynamic and interactive personal portfolio website built with React, featuring a responsive design, smooth animations powered by Framer Motion, and an engaging 3D background using Three.js. The site is designed to be easily customizable through an intuitive edit mode.

Features
Responsive Navigation Bar: A fixed top navigation bar with smooth scrolling to sections, including a mobile-friendly hamburger menu.

Interactive 3D Background: A subtle, animated 3D background powered by Three.js that reacts to mouse movement.

Editable Content: A built-in "Edit Mode" allows you to easily update your personal information, add/remove projects, and manage skills and certificates directly on the page.

Dynamic Sections:

Hero Section: Introduces your name and title with call-to-action buttons for resume download and contact.

About Me Section: Details your professional background and includes a dynamic skill showcase with progress bars.

Featured Projects: Displays your key projects with descriptions, technologies used, and links.

Certificates Section: Highlights your professional certifications.

Contact Section: Provides quick links for communication.

Smooth Animations: Utilizes Framer Motion for appealing scroll-triggered and interactive animations.

Modern Styling: Styled with Tailwind CSS for a clean, modern, and fully responsive user interface.

Technologies Used
React: A JavaScript library for building user interfaces.

Tailwind CSS: A utility-first CSS framework for rapid UI development.

Framer Motion: A production-ready motion library for React.

Three.js: A JavaScript 3D library for creating and displaying animated 3D graphics in a web browser.

Lucide React: A collection of beautiful and customizable open-source icons.

Setup Instructions
To get this project up and running on your local machine, follow these steps:

Prerequisites
Make sure you have Node.js (which includes npm) installed.

Installation
Clone the repository (if you have it in a Git repository):

git clone <your-repository-url>
cd <your-project-folder>

If you don't have a repository, create a new React project using Vite (recommended) or Create React App, and then copy the Portfolio.jsx component into your src/components folder.

For Vite (Recommended):

npm create vite@latest my-portfolio-app -- --template react
cd my-portfolio-app

Install dependencies:

npm install framer-motion three lucide-react
npm install -D tailwindcss postcss autoprefixer

Initialize Tailwind CSS (if not already done):

npx tailwindcss init -p

Configure tailwind.config.js:
Update your tailwind.config.js file to include paths to your React components:

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

Add Tailwind Directives to your CSS:
Add the following to your main CSS file (e.g., src/index.css):

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  overflow-x: hidden; /* Prevents horizontal scroll */
}

Integrate the Portfolio component:
Place the Portfolio.jsx code into src/components/Portfolio.jsx and ensure your src/App.jsx renders it:

// src/App.jsx
import React from 'react';
import Portfolio from './components/Portfolio';
import './index.css'; // Make sure your main CSS file is imported

function App() {
  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;

Running the Project
Once the setup is complete, you can run the development server:

npm run dev
# or for Create React App:
# npm start


