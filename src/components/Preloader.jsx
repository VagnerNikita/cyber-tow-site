import { useEffect } from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

/**
 * Preloader: показывает анимированный логотип и цифровой шум,
 * пока все ресурсы страницы загружаются.
 */
export default function Preloader({ onLoaded }) {
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => onLoaded(), 800)
    }
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [onLoaded])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Цифровой шум */}
      <div
        className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,229,255,0.05)0,rgba(0,229,255,0.05)1px,transparent1px,transparent2px)] animate-[gridMove_5s_linear_infinite]"
        style={{
          backgroundSize: '20px 20px'
        }}
      />
      {/* Пульсирующий логотип */}
      <motion.img
        src={logo}
        alt="CYBER TOW"
        className="relative w-40 h-40 sm:w-56 sm:h-56 drop-shadow-[0_0_60px_#00E5FF]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
