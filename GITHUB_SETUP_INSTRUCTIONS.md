# 🚀 GitHub Setup Instructions

Both projects are now ready to be pushed to GitHub! Follow these step-by-step instructions to create repositories and push your code.

## 📋 What's Ready for GitHub

### ✅ Next.js Dashboard (`nextjs-dashboard/`)
- ✅ Git repository initialized
- ✅ All files committed
- ✅ Assignment completion documentation included
- ✅ Ready for Canvas submission

### ✅ React Todo App (`react-todo-app/`)
- ✅ Git repository initialized  
- ✅ Essential files committed (excluding node_modules)
- ✅ Proper .gitignore configured
- ✅ Clean project structure

---

## 🎯 Option 1: Two Separate Repositories (Recommended)

### For Next.js Dashboard (Assignment Submission)

1. **Create GitHub Repository:**
   - Go to https://github.com
   - Click "New repository" (green button)
   - Repository name: `nextjs-dashboard-tutorial`
   - Description: `Next.js Dashboard Tutorial - Chapters 1-5 Complete`
   - Make it **Public** (required for Canvas submission)
   - **Do NOT** initialize with README (we already have files)
   - Click "Create repository"

2. **Push Next.js Dashboard:**
   ```bash
   cd nextjs-dashboard
   git remote add origin https://github.com/YOUR_USERNAME/nextjs-dashboard-tutorial.git
   git branch -M main
   git push -u origin main
   ```

3. **For Canvas Submission:**
   - Repository URL: `https://github.com/YOUR_USERNAME/nextjs-dashboard-tutorial`

### For React Todo App

1. **Create Second GitHub Repository:**
   - Go to https://github.com
   - Click "New repository"
   - Repository name: `react-todo-app`
   - Description: `React Todo Application with Vite`
   - Make it **Public**
   - **Do NOT** initialize with README
   - Click "Create repository"

2. **Push React Todo App:**
   ```bash
   cd react-todo-app
   git remote add origin https://github.com/YOUR_USERNAME/react-todo-app.git
   git branch -M main
   git push -u origin main
   ```

---

## 🎯 Option 2: Single Repository with Both Projects

If you prefer to keep both projects in one repository:

1. **Create GitHub Repository:**
   - Repository name: `wdd430-projects`
   - Description: `WDD430 Projects - React Todo App & Next.js Dashboard`
   - Make it **Public**

2. **Initialize Git in Root Directory:**
   ```bash
   # In C:\Users\ange.gohouri\WDD430\
   git init
   git add .
   git commit -m "Initial commit - React Todo App and Next.js Dashboard"
   git remote add origin https://github.com/YOUR_USERNAME/wdd430-projects.git
   git branch -M main
   git push -u origin main
   ```

---

## 📸 Taking Screenshots for Canvas

### Next.js Dashboard Screenshot:

1. **Start the development server:**
   ```bash
   cd nextjs-dashboard
   npm run dev
   ```

2. **Navigate and capture:**
   - Go to `http://localhost:3000`
   - Click through the navigation tabs:
     - Dashboard (`/dashboard`)
     - Invoices (`/dashboard/invoices`)
     - Customers (`/dashboard/customers`)
   - Take a screenshot showing:
     - Working navigation
     - Active tab highlighting (blue background)
     - URL changes in browser
     - One of the placeholder pages

### React Todo App Screenshot (Optional):

1. **Start the development server:**
   ```bash
   cd react-todo-app
   npm run dev
   ```
   - Runs on `http://localhost:5173`

---

## 📋 Canvas Submission Checklist

For your Next.js assignment, submit a document containing:

### ✅ Required Items:
1. **GitHub Repository URL**: 
   - `https://github.com/YOUR_USERNAME/nextjs-dashboard-tutorial`
   
2. **Screenshot**: 
   - Shows working navigation tabs
   - Demonstrates hover/focus highlighting
   - Displays placeholder pages with unique URLs

### ✅ Verification Points:
- [ ] Repository is **public**
- [ ] All 5 chapters completed (verified in `ASSIGNMENT_COMPLETION.md`)
- [ ] Navigation tabs work and highlight properly
- [ ] Unique URLs for each page
- [ ] Screenshot clearly shows functionality

---

## 🔧 Troubleshooting

### If Git Commands Fail:
- Make sure you're in the correct directory (`cd nextjs-dashboard` or `cd react-todo-app`)
- Replace `YOUR_USERNAME` with your actual GitHub username
- Ensure the repository exists on GitHub before pushing

### If Development Server Won't Start:
```bash
npm install  # Install dependencies if needed
npm run dev  # Start development server
```

### If Ports Are Busy:
- Next.js will use `http://localhost:3000`
- React/Vite will use `http://localhost:5173` (or next available port)
- Both can run simultaneously

---

## 🎉 You're All Set!

Both projects are properly configured and ready for GitHub. The Next.js dashboard is complete for your Canvas submission with all tutorial requirements met!

**Next.js Tutorial Status: ✅ COMPLETE**
- Chapter 1: Getting Started ✅
- Chapter 2: CSS Styling ✅  
- Chapter 3: Optimizing Fonts and Images ✅
- Chapter 4: Creating Layouts and Pages ✅
- Chapter 5: Navigating Between Pages ✅
