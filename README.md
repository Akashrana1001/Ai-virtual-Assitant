
# AI Virtual Assistant (MERN Stack)

## 🧠 Project Overview

This project is a fully functional **AI Virtual Assistant** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js), inspired by Iron Man's J.A.R.V.I.S. It listens to the user's voice commands and responds intelligently using AI integration.

Users can create a customized assistant with their own name and image. The assistant can perform actions like telling the time, current date, weather, answering questions, and searching YouTube — all through voice commands without clicking any buttons.

---

## 🚀 Features

- 🔐 User Authentication (JWT)
- 🗣️ Voice Recognition Activation by Name (no click)
- 🎨 Assistant Customization (name + avatar)
- 🧠 AI-Powered Responses (e.g. weather, YouTube search)
- 📝 Conversation History Tracking per user
- ☁️ Image Upload using Cloudinary and Multer
- 📦 Modular Backend (controllers, routes, models)
- 🌐 Deployed and shareable with friends

---

## 🛠 Tech Stack

- **Frontend:** React.js + Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JWT + bcrypt.js
- **Voice Handling:** Web Speech API
- **AI:** Gemini API (configurable)
- **Deployment:** Render/Vercel/Heroku (user choice)

---

## 🔧 Setup Instructions

1. Clone the repo
2. Setup `.env` files for both frontend and backend with:
   - `MONGO_DB_URL`
   - `JWT_SECRET`
   - `CLOUDINARY_CLOUD_NAME`, `API_KEY`, `API_SECRET`
3. Install dependencies:

```
cd backend
npm install

cd ../frontend
npm install
```

4. Start the servers:
```
# In backend
npm run dev

# In frontend
npm run dev
```

5. Visit: `http://localhost:3000`

---

## 🧪 Usage

- Register and login to create your own assistant
- Customize your assistant’s name and avatar
- Interact with it by saying its name (e.g., “Jarvis”) followed by your command
- Commands supported: weather, date, time, YouTube search, etc.

---

## 📦 Folder Structure

```
/backend
  ├── controllers/
  ├── routes/
  ├── models/
  ├── middlewares/
  ├── config/
  └── index.js

/frontend
  ├── src/
  │   ├── pages/
  │   ├── components/
  │   └── assets/
```

---

## 📄 License

This project is built for educational purposes based on a YouTube tutorial by Ayush Sahu.
