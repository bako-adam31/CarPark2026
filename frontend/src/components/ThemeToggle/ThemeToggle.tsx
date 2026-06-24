import { useEffect, useState } from "react"
import "./ThemeToggle.css"

export function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(() => {
    try {
      return localStorage.getItem('theme') === 'dark'
    } catch {
      return false
    }
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('theme-dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('theme-dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <button
      className={`btn ${dark ? 'btn--primary' : 'btn--ghost'}`}
      onClick={() => setDark(d => !d)}
      aria-pressed={dark}
      aria-label="Toggle theme"
    >
      {dark ? 'Dark' : 'Light'}
    </button>
  )
}
