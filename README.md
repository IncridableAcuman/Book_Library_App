# 📚 Book Library App (MERN Stack)

A MERN stack-based book library application where users can add, search, and rate books.

---

## 🛠 Technologies Used  

### Backend:  
- **Node.js & Express.js** – API server  
- **MongoDB & Mongoose** – Database  
- **JWT & Bcrypt** – Authentication  
- **Nodemailer** – Email services  
- **Express-validator** – Input validation  

### Frontend:  
- **React + Vite** – Frontend framework  
- **Tailwind CSS** – Styling  
- **React Router** – Navigation  
- **React Toastify** – Notifications  
- **Axios** – HTTP requests  
- **Lucide React** – Icons  

---

## 📦 Installation  

### Clone the Repository  
```sh
git clone https://github.com/your-username/book-library.git
cd book-library
```

### Backend Setup  
```sh
cd backend
npm install
npm install express mongoose jsonwebtoken bcrypt cors cookie-parser nodemailer express-validator
```
Start the backend server:  
```sh
npm run dev
```

### Frontend Setup  
```sh
cd frontend
npm create vite@latest
npm install
npm install react-router-dom react-toastify axios lucide-react
```
Start the frontend server:  
```sh
npm run dev
```

---

## 🔑 Environment Variables (`.env`)  

Create a `.env` file in the backend root directory and add:  

```env
PORT=8080
MONGO_URI="your-mongodb-url"
JWT_ACCESS="your-access-secret"
JWT_REFRESH="your-refresh-secret"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email"
SMTP_PASS="your-smtp-password"
```

---

## 🚀 Features  
✔ Add, update, and delete books  
✔ Search and filter books  
✔ User authentication (JWT)  
✔ Rate books  
✔ Email notifications  

---

## 🤝 Contributing  
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.  

---

## 📜 License  
This project is licensed under the MIT License.

