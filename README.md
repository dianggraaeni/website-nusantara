# Nusantara Website

## Overview

The Nusantara Website is a modern web application that showcases Indonesia’s cultural heritage through structured content such as history, traditions, regional languages, and traditional scripts. The purpose of this project is to provide an interactive digital platform that educates and informs a broad audience about the diversity of Indonesian culture.

## Features

- Structured cultural content pages
- Responsive navigation for optimal user experience on all devices
- Modular architecture to support future development
- Static data integration for easy content updates

## Technology Stack

This project is built with the following technologies:

| Technology | Description |
|------------|-------------|
| React | UI library |
| TypeScript | Strongly typed superset of JavaScript |
| Vite | Fast build tool |
| HTML & CSS | Markup and styling |

## Project Structure

```

/
├── public/                 # Static assets (favicon, images, etc.)
├── src/
│   ├── assets/             # Images and raw assets
│   ├── components/         # Reusable UI components
│   ├── data/               # Cultural content data
│   ├── pages/              # Application pages
│   ├── services/           # Utilities and helpers
│   ├── App.tsx             # Main application entry
│   └── main.tsx            # Mounting root file
├── .gitignore              # Git ignore rules
├── index.html              # Base HTML template
├── package.json            # Dependencies and scripts
└── vite.config.ts          # Vite configuration

````

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/dianggraaeni/website-nusantara.git
````

2. **Navigate to the project folder**

   ```bash
   cd website-nusantara
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

## Development

To start the development server with hot reload:

```bash
npm run dev
```

Once started, open your browser and visit:

```
http://localhost:5173
```

The application will reload automatically when changes are made.

## Production Build

To build the optimized production version:

```bash
npm run build
```

The output will be generated in the `dist/` folder. This folder is ready for deployment.
