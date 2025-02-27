# 📚 Book Library App (MERN Stack)

A MERN stack-based book library application where users can add, search, and rate books.

---

## 🛠 Technologies Used  

### Backend:  
- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) **Node.js & Express.js** – API server  
- ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) **MongoDB & Mongoose** – Database  
- ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=json-web-tokens&logoColor=white) **JWT & Bcrypt** – Authentication  
- ![Nodemailer](https://img.shields.io/badge/Nodemailer-yellow?style=for-the-badge) **Nodemailer** – Email services  
- ![Validator](https://img.shields.io/badge/Validator-blue?style=for-the-badge) **Express-validator** – Input validation  

### Frontend:  
- ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white) **React + Vite** – Frontend framework  
- ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) **Tailwind CSS** – Styling  
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) **React Router** – Navigation  
- ![Toastify](https://img.shields.io/badge/React_Toastify-FF8800?style=for-the-badge&logo=react&logoColor=white) **React Toastify** – Notifications  
- ![Axios](https://img.shields.io/badge/Axios-blue?style=for-the-badge) **Axios** – HTTP requests  
- ![Lucide](https://img.shields.io/badge/Lucide-000000?style=for-the-badge) **Lucide React** – Icons  

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
✔ Wishlist – Save books for later reading  
✔ Mark books as read  
✔ Leave reviews and comments on books  
✔ Advanced search and filtering options  
✔ Real-time notifications using Socket.io  
✔ Email alerts for new book additions  
✔ Upload and download book PDFs  
✔ Dark Mode for better UI/UX  
✔ User profile management with roles (Admin/User)  
✔ Book reading statistics and insights  

---

## 🤝 Contributing  
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.  

---

## 📜 License  
This project is licensed under the MIT License.
