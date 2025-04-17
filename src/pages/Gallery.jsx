import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const images = [
  '/gallery/photo1.jpg',
  '/gallery/photo2.jpg',
  '/gallery/photo3.jpg',
  '/gallery/photo4.jpg',
  '/gallery/photo5.jpg',
  '/gallery/photo6.jpg',
  '/gallery/photo7.jpg',
  '/gallery/photo8.jpg',
  '/gallery/photo9.jpg',
  '/gallery/photo10.jpg'
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <Link to="/" className="text-cyan-400 underline mb-4 inline-block">
        ← Назад
      </Link>
      <h1 className="text-3xl text-cyan-400 text-center mb-6">Галерея</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {images.map(src => (
          <motion.img
            key={src}
            src={src}
            alt="Gallery photo"
            className="w-full h-32 object-cover cursor-pointer hover:opacity-80"
            onClick={() => setSelected(src)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              alt="Enlarged"
              className="max-w-full max-h-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
