📚 EdTech Adaptive Learning Platform — Frontend (React)
This is the React-based frontend of the EdTech Adaptive Learning Platform. It communicates with a FastAPI backend and provides features like:

📋 Course and lesson browsing

💬 AI-powered Chatbot (using Ollama + Gemma/LLMs)

🤖 AI Feedback system for student answers

🎓 Personalized learning interface

🚀 Getting Started
✅ Prerequisites
Make sure you have these installed on your machine:

Node.js (v16+)

npm (comes with Node) or Yarn

🔧 Installation Steps

# 1. Clone the repo
git clone https://github.com/your-username/edtech-frontend.git
cd edtech-frontend

# 2. Install dependencies
npm install
# or
yarn install

and also install all mentioed in the requirements.txt using npm

# 3. Start the development server
npm run dev
# or
yarn dev
Your app will be running at:
🔗 http://localhost:5173

🧩 Project Structure

src/
├── components/        # Reusable UI components (Chatbot, etc.)
├── pages/             # Page components (Home, Courses, Feedback, etc.)
├── axiosInstance.js   # Configured Axios for API calls
├── App.jsx            # Main app with routes
└── main.jsx           # React entry point
🔌 Backend API
Make sure your FastAPI backend is running at:


http://localhost:8000
You can configure the base URL inside:


// src/axiosInstance.js
const instance = axios.create({
  baseURL: 'http://localhost:8000', // Your FastAPI URL
});
💡 Features
Chatbot UI with typing + loading spinner

AI feedback integrated with backend for lesson answers

Bootstrap-based responsive design

Fully connected to backend via REST API

