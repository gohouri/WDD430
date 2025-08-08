# React Todo List Application

A simple and functional todo list application built with React, following the tutorial from Web Dev Simplified.

## Features

- ✅ Add new todo items
- ✅ Mark todos as complete/incomplete
- ✅ Delete todos
- ✅ Persistent storage using localStorage
- ✅ Clean and modern UI
- ✅ Responsive design

## Technologies Used

- React 18
- Vite (for build tooling)
- CSS3 for styling
- Local Storage for data persistence

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd react-todo-list
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## How to Use

1. **Add a Todo**: Type your todo item in the input field and click "Add" or press Enter
2. **Complete a Todo**: Click the checkbox next to any todo item to mark it as complete
3. **Delete a Todo**: Click the "Delete" button next to any todo item to remove it
4. **Persistent Storage**: Your todos are automatically saved to localStorage and will persist between browser sessions

## Project Structure

```
src/
├── App.jsx          # Main application component
├── NewTodoForm.jsx  # Form component for adding new todos
├── TodoList.jsx     # Component that renders the list of todos
├── TodoItem.jsx     # Individual todo item component
├── main.jsx         # Application entry point
└── styles.css       # Application styles
```

## Assignment Requirements

This project was created as part of the React Introduction assignment for WDD430. The application demonstrates:

- React component structure
- State management with useState hook
- Event handling
- Local storage integration
- Modern React development practices

## Screenshots

The application features a clean, dark-themed interface with:
- A form to add new todos
- A list of todos with checkboxes and delete buttons
- Completed todos are visually distinguished with strikethrough text
- Responsive design that works on different screen sizes

## License

This project is created for educational purposes as part of the WDD430 course.
