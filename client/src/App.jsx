import React, { useState } from 'react'
import axios from "axios";

const App = () => {
  const [items, setItems] = useState([])
  const [name, setName] = useState("");
  const [cls, setCls] = useState("");
  const [sub, setSub] = useState("");
  const [grade, setGrade] = useState("");

  const sendData = () => {
    const newItems = { name, cls, sub, grade }
    axios.post("http://localhost:3000/items", newItems)
      .then(res => { console.log("Data has been send successfully: ", res.data); getData(); })
      .catch(err => console.error("Error occured: ", err))
  }

  const getData = () => {
    axios.get("http://localhost:3000/items")
      .then(response => {
        setItems(response.data)
      })
      .catch(err => console.err(`Error occured: `, err))
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-800 text-slate-100 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-5xl">
        <header className="text-center mb-10">
          <p className="text-sm tracking-[0.35em] uppercase text-slate-400">Student Manager</p>
          <h1 className="mt-3 text-3xl font-semibold">Classroom Roster</h1>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">Store class details, fetch them on demand, and keep tabs on every student at a glance.</p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[360px,1fr]">
          <section className="bg-slate-900/70 border border-slate-800 rounded-3xl shadow-2xl p-8 backdrop-blur">
            <h2 className="text-xl font-medium mb-6">Add a new student</h2>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-slate-300">
                Student Name
                <input
                  type="text"
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  placeholder="Enter name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </label>
              <label className="block text-sm font-medium text-slate-300">
                Class
                <input
                  type="text"
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  placeholder="Enter class"
                  onChange={(e) => setCls(e.target.value)}
                  value={cls}
                />
              </label>
              <label className="block text-sm font-medium text-slate-300">
                Subject
                <input
                  type="text"
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  placeholder="Enter subject"
                  onChange={(e) => setSub(e.target.value)}
                  value={sub}
                />
              </label>
              <label className="block text-sm font-medium text-slate-300">
                Grade / Status
                <input
                  type="text"
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  placeholder="Enter status"
                  onChange={(e) => setGrade(e.target.value)}
                  value={grade}
                />
              </label>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-4 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400 hover:shadow-blue-400/30"
                onClick={sendData}
              >
                Submit
              </button>
              <button
                className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-4 py-3 text-sm font-semibold tracking-wide text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
                onClick={() => getData()}
              >
                Fetch Records
              </button>
            </div>
          </section>

          <section className="bg-slate-900/60 border border-slate-800 rounded-3xl shadow-2xl backdrop-blur p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-medium">Current roster</h2>
                <p className="mt-1 text-sm text-slate-400">A snapshot of every stored student and their progress.</p>
              </div>
              <span className="inline-flex h-10 min-w-[3rem] items-center justify-center rounded-full bg-blue-500/20 px-3 text-sm font-semibold text-blue-300">
                {items.length}
              </span>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800">
              <table className="min-w-full divide-y divide-slate-800 text-left text-sm">
                <thead className="bg-slate-900/80 text-slate-300">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Student ID</th>
                    <th className="px-5 py-3 font-semibold">Name</th>
                    <th className="px-5 py-3 font-semibold">Class</th>
                    <th className="px-5 py-3 font-semibold">Subject</th>
                    <th className="px-5 py-3 font-semibold">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {items.length === 0 ? (
                    <tr>
                      <td className="px-5 py-6 text-center text-slate-500" colSpan={5}>No records yet. Fetch data to populate the table.</td>
                    </tr>
                  ) : (
                    Object.values(items).map((ele) => (
                      <tr key={ele.id} className="transition hover:bg-slate-800/60">
                        <td className="px-5 py-3 text-slate-300">{ele.id}</td>
                        <td className="px-5 py-3 text-slate-100">{ele.name}</td>
                        <td className="px-5 py-3 text-slate-300">{ele.cls}</td>
                        <td className="px-5 py-3 text-slate-300">{ele.sub}</td>
                        <td className="px-5 py-3 text-slate-300">{ele.grade}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App