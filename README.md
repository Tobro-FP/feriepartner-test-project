# Feriepartner Test Project

Welcome to the Feriepartner Test! This project is designed to assess your React skills by building a simple employee directory application.

## Project Overview

You will build a small React application that displays company information and allows users to browse employee profiles. The backend API is already set up for you - your task is to implement the frontend.

---

## What's Already Done

- ✅ Basic React app created with Create React App
- ✅ Mock REST API with employee data (JSON Server)
- ✅ Fake employee images provided via API

---

## Your Task

Build a React application with the following features:

### 1. Landing Page (`/`)

Create a landing page that displays:
- **Company name**: "Feriepartner"
- **Company slogan**: "Your Gateway to Amazing Holidays"

The company name should be **clickable** and navigate to the employees page when clicked.

### 2. Employees Page (`/employees`)

Create an employees page that includes:
- A **dropdown menu** populated with employee names
- Display the dropdown at the top of the page
- Fetch the employee list from the API when the page loads

### 3. Employee Details

When a user selects an employee from the dropdown:
- Update the URL to `/employee/:id` (where `:id` is the employee's ID)
- Display the selected employee's information below the dropdown:
  - Name
  - Position
  - Department
  - Email
  - Phone
  - Profile image

### 4. Direct URL Navigation

- Users should be able to navigate directly to `/employee/:id` via URL
- When loading the page with an employee ID in the URL, that employee should be pre-selected in the dropdown
- The employee's information should be displayed automatically

---

## Requirements

### Technical Requirements

1. **Routing**: Use React Router for navigation between pages
2. **State Management**: Use React hooks (`useState`, `useEffect`, etc.)
3. **API Integration**: Fetch data from the mock API using `fetch` or `axios`
4. **URL Parameters**: Read and update the employee ID from the URL

### Functionality Requirements

- All employee data must come from the API (no hardcoded employee info)
- The dropdown should be populated dynamically from API data
- Changing the dropdown selection should update the URL
- The URL should reflect the currently selected employee
- Direct navigation via URL should work correctly

### Code Quality

- Write clean, readable code
- Use proper component structure
- Handle loading states
- Handle error states (e.g., invalid employee ID)
- Follow React best practices

---

## Getting Started

### 1. Install Dependencies

First, you'll need to install React Router:

\`\`\`bash
npm install react-router-dom
\`\`\`

### 2. Start the Mock API Server

In one terminal, run:

\`\`\`bash
npm run start:api
\`\`\`

This starts the JSON Server on \`http://localhost:3001\`

### 3. Start the React Development Server

In another terminal, run:

\`\`\`bash
npm start
\`\`\`

This starts the React app on \`http://localhost:3000\`

---

## API Documentation

The mock API is available at \`http://localhost:3001\`

### Endpoints

#### Get All Employees
\`\`\`
GET http://localhost:3001/employees
\`\`\`

Returns an array of all employees.

**Example Response:**
\`\`\`json
[
  {
    "id": 1,
    "name": "Sarah Johnson",
    "position": "Senior Developer",
    "department": "Engineering",
    "email": "sarah.johnson@company.com",
    "phone": "+1 (555) 123-4567",
    "image": "https://i.pravatar.cc/150?img=1"
  },
  ...
]
\`\`\`

#### Get Single Employee
\`\`\`
GET http://localhost:3001/employees/:id
\`\`\`

Returns a single employee by ID.

**Example:**
\`\`\`
GET http://localhost:3001/employees/1
\`\`\`

**Example Response:**
\`\`\`json
{
  "id": 1,
  "name": "Sarah Johnson",
  "position": "Senior Developer",
  "department": "Engineering",
  "email": "sarah.johnson@company.com",
  "phone": "+1 (555) 123-4567",
  "image": "https://i.pravatar.cc/150?img=1"
}
\`\`\`

---

## Project Structure Suggestions

Here's a suggested structure for your components:

\`\`\`
src/
├── components/
│   ├── LandingPage.js      # Landing page with company info
│   ├── EmployeesPage.js    # Main employees page with dropdown
│   └── EmployeeDetails.js  # Employee details display component
├── App.js                  # Main app with routing
└── index.js               # Entry point
\`\`\`

---

## Troubleshooting

### API Not Working?
Make sure you're running \`npm run start:api\` in a separate terminal.

### Port Already in Use?
If port 3000 or 3001 is already in use, you can change the ports:
- For React: Set the \`PORT\` environment variable
- For API: Modify the \`--port\` flag in \`package.json\`

### CORS Issues?
JSON Server automatically handles CORS, but make sure you're making requests to \`http://localhost:3001\`

---

Good luck! 🚀
