# 🍔 Food Admin Panel

A full-featured **Food Admin Panel** built using **Node.js**, **Express.js**, **MongoDB**, **EJS**, and **Bootstrap 5** with **Datta Able Dashboard Template**.  
This admin system is designed for managing categories, subcategories, extra categories, products, admins, user authentication, and more — making it ideal for restaurant or food ordering platforms.

---

## 🚀 Features  

### 🎨 **UI & Dashboard**
- ✨ Clean & modern design built with **Datta Able (Bootstrap 5)** theme  
- 📱 Fully responsive layout for desktop and mobile  

---

### 🔐 **Authentication System**
- ✅ **Admin Sign Up / Sign In** with form validation  
- 🔑 **Forgot Password via OTP Email Verification**  
- 🔁 **Reset Password** securely using **Nodemailer**  
- 🧠 Session-based authentication using **Express & MongoDB**  

---

### 👥 **Admin Management**
- ➕ Add new admins  
- ✏️ Edit existing admin details  
- ❌ Delete admins  
- 👤 View & update admin profiles  
- 🔒 Change password functionality  

---

### 🗂️ **Category Management**
- 📁 Manage **Main**, **Sub**, and **Extra Categories**  
- 🧾 Create, edit, and delete category records dynamically  
- 🔍 Organized category views for better structure  

---

### 🍱 **Product Management**
- 🛒 Add new food products with image upload  
- ✏️ Edit or update product details  
- 👁️ View complete product information  
- 🗑️ Delete products easily  
- 💾 All data stored securely in **MongoDB (Mongoose)**  

---

### 🖼️ **Image Upload System**
- 📸 Upload and store images in local `uploads/` directory  
- ⚙️ Uses **Multer** for secure file handling  

---

### 📧 **Email OTP System**
- ✉️ OTP generation and delivery through **Nodemailer**  
- 🔐 Secure verification during password recovery  

---

### 🧩 **Technology & Integration**
- 🌐 **EJS Templating** for dynamic UI rendering  
- 🧱 Modular route & controller structure  
- 💾 **MongoDB + Mongoose** for data management  
- ⚡ **Node.js + Express** for fast backend performance  

---

### 🧰 **Developer Friendly**
- 🧩 Well-structured project folders  
- 🔄 Reusable components (Header, Footer, Dashboard)  
- 💡 Easy to extend or integrate new modules  

---
## 📁 Project Structure

```
Food-Admin-Panel/
│
├── config/
│ ├── adminDB.js
│ ├── passportLocalStrategy.js
│
├── controllers/
│ ├── adminPanelCTR.js
│ ├── categoryCTR.js
│ ├── extraCategoryCTR.js
│ ├── productCTR.js
│ └── subCategoryCTR.js
│
├── middleware/
│ ├── adminMulter.js
│ ├── categoryMulter.js
│ ├── extraCategoryMulter.js
│ ├── productMulter.js
│ └── subCategoryMulter.js
│
├── models/
│ ├── adminModel.js
│ ├── categoryModel.js
│ ├── extraCategoryModel.js
│ ├── productModel.js
│ └── subCategoryModel.js
│
├── node_modules/
|
├── public/
│ ├── assets/
│ │ ├── css/
│ │ │ ├── material-dashboard.css
│ │ │ ├── material-dashboard.min.css
│ │ │ └── node-waves.css
│ │ ├── fonts/
│ │ ├── js/
│ │ └── icons/
│ └── upload/
│ └── 1730475623123author.png
│
├── routes/
│ ├── adminRoute.js
│ ├── categoryRoute.js
│ ├── extraCategoryRoute.js
│ ├── productRoute.js
│ └── subCategoryRoute.js
|
├── uploads/
│   └── admin/
│   └── category/
│   └── subCategory/
│   └── extraCategory/
│   └── product/
│
├── views/
│   ├── admin/
│   │   ├── addAdminPage.ejs
│   │   ├── adminProfile.ejs
│   │   ├── adminTable.ejs
│   │   ├── editAdminPage.ejs
│   │   └── editCurrentAdminPage.ejs
│   │
│   ├── auth/
│   │   ├── lossPasswordPage.ejs
│   │   ├── otpVerifyPage.ejs
│   │   ├── setNewPasswordPage.ejs
│   │   ├── signInPage.ejs
│   │   └── signUpPage.ejs
│   │
│   ├── category/
│   │   ├── addCategoryPage.ejs
│   │   ├── editCategoryPage.ejs
│   │   └── viewCategoryPage.ejs
│   │
│   ├── changePassword/
│   │   └── changePasswordPage.ejs
│   │
│   ├── extraCategory/
│   │   ├── addExtraCategoryPage.ejs
│   │   ├── editExtraCategoryPage.ejs
│   │   └── viewExtraCategoryPage.ejs
│   │
│   ├── product/
│   │   ├── addProductPage.ejs
│   │   ├── editProductPage.ejs
│   │   └── viewProductPage.ejs
│   │
│   ├── subCategory/
│   │   ├── addSubCategoryPage.ejs
│   │   ├── editSubCategoryPage.ejs
│   │   └── viewSubCategoryPage.ejs
│   │
│   ├── dashboard.ejs
│   ├── header.ejs
│   └── footer.ejs
│
├── .gitignore
├── example/
├── index.js
├── package.json
└── package-lock.json        # Project metadata and dependencies
```

---

## 🛠️ Tech Stack

| Technology                   | Description                           |
| ---------------------------- | ------------------------------------- |
| **Node.js**                  | Backend runtime environment           |
| **Express.js**               | Server-side framework                 |
| **MongoDB**                  | Database for storing all records      |
| **EJS**                      | Templating engine for rendering pages |
| **Multer**                   | File upload middleware                |
| **Nodemailer**               | For sending OTP emails                |
| **Bootstrap 5 (Datta Able)** | Admin dashboard UI design             |

---

## 📦 Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/jaypawar12/Food-Admin-Panel.git
cd Food-Admin-Panel
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the root and add:

```env
PORT=5000
MONGODB_URL=mongodb://localhost:27017/foodAdmin
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=your-email-password
```

> ⚠️ Make sure to enable **Less Secure App Access** in your Gmail settings or use **App Password** if 2FA is enabled.

### 4️⃣ Run the Project
```bash
npm start
```

Visit: [http://localhost:5000](http://localhost:5000)

---

## 🔐 Admin Authentication

- Login page: `/admin`
- Forgot Password with OTP via email.
- Change password available after login.
- Only verified users can access dashboard routes.

---

## 📸 Screenshot Preview

> Add your own screenshots here if needed.

---

## 👨‍💻 Author

**Jay Pawar**  
📫 GitHub: [@jaypawar12](https://github.com/jaypawar12)

---

## ⭐️ Show Your Support

If you like this project, feel free to ⭐️ the repository or fork it for your own use!

---

## 📃 License

This project is open-source and available under the [MIT License](LICENSE).
