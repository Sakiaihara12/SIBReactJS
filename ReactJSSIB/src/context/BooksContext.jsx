import { createContext, useContext, useState } from 'react'
import initialBooks, { makeCover } from '../Utils/books'

const BooksContext = createContext(null)

const palettes = [
  ['#d71f3b', '#6e0f1f'], ['#f2b82e', '#8a6408'], ['#1d4f91', '#0b1f3d'],
  ['#1c1c27', '#05050a'], ['#e04a5f', '#8f1226'], ['#c99a1e', '#3a2a05'],
]

// State daftar buku dibagi ke semua halaman, jadi buku baru muncul di Home dan Book.
export function BooksProvider({ children }) {
  const [books, setBooks] = useState(initialBooks)

  const addBook = ({ title, author, year, price, description }) => {
    setBooks((prev) => {
      const nextId = prev.length ? Math.max(...prev.map((b) => b.id)) + 1 : 1
      const [c1, c2] = palettes[nextId % palettes.length]
      return [
        ...prev,
        { id: nextId, title, author, year: Number(year), price: Number(price), description, image: makeCover(title, author, c1, c2) },
      ]
    })
  }

  return <BooksContext.Provider value={{ books, addBook }}>{children}</BooksContext.Provider>
}

export const useBooks = () => useContext(BooksContext)
