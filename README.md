# 💸 ExpenseSync – Interactive Expense Dashboard

**ExpenseSync** is a full-featured expense tracking dashboard that allows users to manually input their income and expenses, view categorized data, and explore insightful visualizations like monthly spending, income breakdown, and savings trends. Built with a clean frontend and real-time Chart.js updates, all data is securely stored in **MongoDB** with **token-based authentication**.

---

## 📊 Key Features

- ✅ **Manual Data Entry** for both income and expenses
- 📈 **Multiple Live Graphs**:
  - Monthly Expense Breakdown
  - Income Overview
  - Savings Trend (Income - Expenses)
- 🔐 **JWT Token-based Authentication** for secure login sessions
- 🌐 **Dashboard UI** with seamless navigation
- 🗃️ **MongoDB Integration** for persistent backend data storage
- 🌗 **Dark/Light Theme Toggle** (Optional)
- 📅 **Date-based Filtering** and Category-wise breakdown

---

## 🛠️ Tech Stack

| Layer        | Tech Used                     |
|--------------|-------------------------------|
| Frontend     | HTML, CSS, JavaScript         |
| Charts       | Chart.js                      |
| Backend      | Node.js, Express.js           |
| Database     | MongoDB (Mongoose)            |
| Auth         | JSON Web Tokens (JWT)         |

---

## 🧠 How It Works

1. **User Input:** Users manually add their expenses by entering the amount, category, and date.
2. **Data Storage:** Entries are stored in the browser (or a backend if configured).
3. **Live Graphs:** Charts update in real-time to reflect the latest data.
4. **Filtering:** Users can filter expenses by date ranges or categories.

