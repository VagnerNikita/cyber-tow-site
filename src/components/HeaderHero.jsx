import { motion } from 'framer-motion'
import logo from '../assets/cyber-logo.png'

function HeaderHero({ onRequest }) {
  return (
    <section className="h-screen flex flex-col justify-center items-center space-y-8 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={logo}
          alt="CYBER TOW"
          className="h-20 md:h-24 w-auto drop-shadow-[0_0_25px_#00E5FF]"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-cyan-400 drop-shadow-[0_0_30px_#00E5FF]"
      >
        CYBER TOW
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-lg sm:text-xl text-purple-400"
      >
        Служба Эвакуации 24/7
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onRequest}
        className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 px-6 rounded-full text-lg shadow-[0_0_20px_#00E5FF] transition"
      >
        Вызвать эвакуатор
      </motion.button>
    </section>
  )
}

export default HeaderHero
