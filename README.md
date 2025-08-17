AI CODE REVIEWER - A webpage to review your code and correct it.
✨ Overview
This project is a minimal full-stack application that provides an interactive web UI for automated code review. Users can paste their source code into a code editor and receive an AI-generated review powered by the Google Gemini model (gemini-2.5-flash). This application demonstrates a clean, end-to-end integration of a modern Large Language Model (LLM) into a web application, showcasing both front-end and back-end development best practices.

🚀 Tech Stack
Frontend:
React 19: A modern JavaScript library for building user interfaces.

Vite: A lightning-fast build tool that significantly improves the development experience.

react-simple-code-editor & Prism.js: For providing a lightweight, functional code editor with syntax highlighting.

react-markdown & rehype-highlight: To beautifully render the markdown-formatted AI review with syntax highlighting for code snippets.

Axios: A promise-based HTTP client for making API requests to the backend.

Backend:
Express.js: A fast, unopinionated, and minimalist web framework for Node.js.

Google Generative AI SDK (@google/generative-ai): The official library for interacting with the Google Gemini API.

dotenv: To manage environment variables securely, particularly for the Gemini API key.

Vercel CLI: The server is configured for seamless serverless deployment on Vercel.

📂 Project Structure
.
├── client
│   ├── src/
│   │   ├── App.jsx           # Main React component
│   │   ├── components/       # UI components (if any)
│   │   └── index.css         # Styling
│   ├── public/               # Static assets
│   ├── package.json          # Frontend dependencies
│   └── vite.config.js        # Vite configuration
│
└── server
    ├── src/
    │   ├── app.js            # Express application setup
    │   ├── controllers/
    │   │   └── ai.controller.js  # Handles AI API logic
    │   ├── routes/
    │   │   └── ai.routes.js      # API routes definitions
    │   └── services/
    │       └── ai.service.js     # Manages interaction with the Gemini API
    ├── server.js             # Entry point for the server
    ├── package.json          # Backend dependencies
    ├── .env                # Environment variables (e.g., GEMINI_API_KEY)
    └── vercel.json           # Vercel deployment configuration
🌟 Features
Intuitive User Interface: A clean and simple two-panel layout for code input and review output.

Real-time Code Highlighting: The code editor uses Prism.js to provide syntax highlighting as you type.

Sophisticated AI Prompting: The backend uses a detailed system prompt to instruct Gemini to act as a "senior code reviewer," ensuring high-quality, professional feedback.

Markdown-Formatted Output: The AI's response is in markdown, which is then rendered on the front end with rich formatting, including code blocks and lists.

Cross-Platform Reviews: The system prompt is designed to handle a wide range of programming languages, offering a versatile review tool.

Deployment Ready: Both the client and server are pre-configured for easy deployment on platforms like Vercel.

📸 Screenshots
Page	Screenshot
Main UI	[Please insert a screenshot of the main application here]
Code Review Example	[Please insert a screenshot showing a code review in action here]

Export to Sheets
🎯 Contributors
👤 Nikhil Lad – Developer & Maintainer  
📧 Contact: nikhil.lad24india@gmail.com  
🔗 GitHub: @nikhillad  

Thank you for checking out the AI Code Reviewer project! Happy coding!
