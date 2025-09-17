# 🤖 AI Virtual Assistant  

An AI-powered virtual assistant built with **React, Node.js, Gemini API, Web Speech API, MongoDB Atlas, and Docker**.  
The assistant can understand natural language, perform searches, fetch information, and respond with human-like conversational replies.  

---

## 🚀 Features  

- 🎤 **Voice-enabled AI Assistant** using Web Speech API (speech-to-text & text-to-speech).  
- 🔒 **JWT Authentication** with secure role-based access.  
- ⚡ **Fault-tolerant backend** with centralized error handling & resilience middleware.  
- 🗄 **MongoDB Atlas Integration** for scalable cloud-ready database.  
- 🔍 Supports multiple actions:
  - General Q&A (powered by Gemini API)  
  - Google & YouTube search/play  
  - Date, Time, Day, Month queries  
  - Weather queries  
  - Open apps (Calculator, Instagram, Facebook, etc.)  
- 🐳 **Dockerized backend** for easy local development & cloud deployment.  

---

## 🛠 Tech Stack  

**Frontend:** React + Vite + Web Speech API  
**Backend:** Node.js, Express.js  
**Database:** MongoDB Atlas  
**AI Engine:** Google Gemini API  
**Auth:** JWT + Cookies  
**Containerization:** Docker & Docker Compose  

---

## 📂 Project Structure  

```
4.virtualAssistant/
│── client/              # React frontend
│── server/              # Express backend
│   ├── config/          # DB config
│   ├── middleware/      # auth, errorHandler, resilient.js
│   ├── routes/          # auth & user routes
│   ├── models/          # User model
│   ├── gemini.js        # Gemini API integration
│   ├── index.js         # Main entry point
│   ├── Dockerfile       # Backend Dockerfile
│   └── .dockerignore    # Ignore files for Docker build
│── docker-compose.yml   # Orchestration
│── .env                 # Environment variables (NOT committed)
│── README.md            # Project docs
```

---

## ⚙️ Setup & Installation  

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/ai-virtual-assistant.git
cd ai-virtual-assistant
```

### 2️⃣ Install dependencies  
Backend:
```bash
cd server
npm install
```

Frontend:
```bash
cd client
npm install
```

### 3️⃣ Configure Environment Variables  
Create a `.env` file in the root:  

```ini
MONGODB_URL=mongodb+srv://<user>:<pass>@cluster.mongodb.net/assistant
PORT=8000
JWT_SECRET="s0m3R@nd0m$tr0ngKey"
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=<API_KEY>
```

---

## 🐳 Running with Docker  

### Build & Run with Docker Compose
```bash
docker-compose up --build
```

### Health Check
Visit:
```
http://localhost:8000/health
```
Response:
```json
{ "status": "ok", "db": "connected" }
```

---

## 🌍 Deployment  

You can deploy this containerized app on:  
- [Render](https://render.com)  
- [Railway](https://railway.app)  
- [AWS ECS / Fargate](https://aws.amazon.com/ecs/)  

Example for Render:  
- Connect GitHub repo  
- Select **Dockerfile** deployment  
- Add `.env` variables in dashboard  
- Deploy 🚀  

---

## 🧪 API Endpoints  

### Auth  
- `POST /api/auth/signup` → Register user  
- `POST /api/auth/signin` → Login user  
- `GET /api/auth/logout` → Logout  

### User / Assistant  
- `POST /api/user/update` → Update user profile  
- `POST /api/user/asktoassistant` → Ask question to AI Assistant  

Example request:
```json
{
  "command": "open YouTube and play song Aaj Ki Raat"
}
```

Response:
```json
{
  "type": "youtube-play",
  "userInput": "open YouTube and play song Aaj Ki Raat",
  "response": "Sure, playing Aaj Ki Raat on YouTube now."
}
```

---

## 📊 Demo  

- 🎥 Video Demo: *(add link if you record a short loom video)*  
- 🌐 Live Demo: *(add your Render/Vercel URL)*  

---

## 👨‍💻 Author  

👤 **Akash Chauhan**  
- GitHub: [@akashrana1001](https://github.com/akashrana1001)  
- LinkedIn: [@akashrana100](https://linkedin.com/in/akashrana100)  

---

## 📜 License  

This project is licensed under the MIT License.  
