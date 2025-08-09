# WDD430 - Project Structure

This workspace contains two separate projects:

## 📁 Project Directories

### 1. `react-todo-app/`
- **Technology**: React + Vite
- **Description**: Todo application with React components
- **Main Files**: 
  - `src/App.jsx` - Main React app
  - `src/TodoItem.jsx`, `src/TodoList.jsx`, `src/NewTodoForm.jsx` - Todo components
  - `package.json` - React/Vite dependencies
  - `vite.config.js` - Vite configuration

**To run the React Todo App:**
```bash
cd react-todo-app
npm install  # if needed
npm run dev
```
- Runs on: `http://localhost:5173` (or next available port)

### 2. `nextjs-dashboard/`
- **Technology**: Next.js 15 + TypeScript + Tailwind CSS
- **Description**: Dashboard application following Next.js tutorial (Chapters 1-5)
- **Main Files**:
  - `app/` - Next.js App Router structure
  - `app/dashboard/` - Dashboard pages and layout
  - `app/ui/` - UI components and styling
  - `package.json` - Next.js dependencies

**To run the Next.js Dashboard:**
```bash
cd nextjs-dashboard
npm install  # if needed
npm run dev
```
- Runs on: `http://localhost:3000`

## 🚀 Running Both Projects

Both projects can run simultaneously on different ports:
- React Todo App: `http://localhost:5173`
- Next.js Dashboard: `http://localhost:3000`

## 📋 Assignment Status

### Next.js Dashboard Tutorial (Chapters 1-5) ✅ COMPLETE
- ✅ Chapter 1: Getting Started
- ✅ Chapter 2: CSS Styling  
- ✅ Chapter 3: Optimizing Fonts and Images
- ✅ Chapter 4: Creating Layouts and Pages
- ✅ Chapter 5: Navigating Between Pages

**Ready for Canvas submission!**

### React Todo App
- Existing React project with todo functionality
- Separate from Next.js assignment

## 🗂️ Clean Separation

The projects are now properly separated with no file conflicts or dependency issues. Each project has its own:
- `package.json` and dependencies
- `node_modules/`
- Build configurations
- Development servers
