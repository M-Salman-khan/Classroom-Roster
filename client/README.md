# Classroom Roster Frontend

This Vite-powered React client is the UI for the **Classroom Roster - MERN Student Manager using OOPS** project. It collects student details, posts them to the Express API, and renders the roster in a responsive data table backed by Tailwind CSS styling.

## 🧭 Key Features

- **Polished layout:** Gradient backdrop, card-style form, and accessible typography for quick scanning.
- **Dynamic form state:** Controlled inputs mirror local state before dispatching to the API.
- **Axios integration:** `sendData` and `getData` helpers communicate with `http://localhost:3000/items` by default.
- **Empty state messaging:** Guides users when no records have been fetched yet.

## ⚙️ Local Development

```bash
pnpm install
pnpm run dev
```

The Vite dev server will print a local URL (usually `http://localhost:5173`). Make sure the backend Express server is running so API calls succeed.

## 🔧 Configuration

- **API endpoint:** If the backend runs on a different host or port, update the Axios base URL inside `src/App.jsx`.
- **Styling:** Component-level tweaks live in `src/App.jsx`. Add global overrides in `src/App.css` if needed.

## 📂 Notable Files

| File           | Purpose                                |
| -------------- | -------------------------------------- |
| `src/App.jsx`  | Main React component, form + table UI  |
| `src/App.css`  | Optional custom styles                 |
| `src/main.jsx` | Entry point mounting the React app     |

## ✅ Next Steps

- Capture screenshots/GIFs and drop them in `public/` to surface in documentation.
- Extend the roster table with sorting, filtering, or pagination as requirements grow.
