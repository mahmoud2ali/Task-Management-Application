# Task Management App

## Overview

The **Task Management App** is a full-stack application built using the MERN stack. It allows users to add, update, delete, and track tasks with filters for category, date, and priority level. The app provides a seamless and responsive user experience.

## Features

- **Task Management:** Create, edit, delete, and mark tasks as completed.
- **Filtering & Sorting:** Filter tasks based on category, date, and priority level.
- **User-Friendly UI:** A clean and intuitive interface for easy task management.
- **Full-Stack Integration:** Uses MongoDB for data storage, Express.js for the backend, React.js for the frontend, and Node.js for server-side logic.

## Technologies Used

- **Frontend:** React.js, Redux, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **API Tools:** RESTful APIs
- **Version Control:** Git & GitHub

## Installation & Setup

### Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB
- Git

### Steps to Run the Project

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/task-management-app.git
   cd task-management-app
   ```
2. **Install dependencies:**
   ```sh
   npm install
   cd client
   npm install
   ```
3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```sh
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. **Run the backend server:**
   ```sh
   npm run server
   ```
5. **Run the frontend application:**
   ```sh
   cd client
   npm start
   ```

## API Endpoints

| Method | Endpoint        | Description             |
| ------ | --------------- | ----------------------- |
| GET    | /api/tasks      | Get all tasks           |
| POST   | /api/tasks      | Add a new task          |
| PUT    | /api/tasks/\:id | Update an existing task |
| DELETE | /api/tasks/\:id | Delete a task           |

