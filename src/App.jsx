import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Preloader from './components/Preloader'
import RequestModal from './components/RequestModal'
import logo from './assets/logo.png'
import about1 from './assets/about1.jpg'
import about2 from './assets/about2.jpg'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [phone, setPhone] = useState('')
  const [vehicleType, setVehicleType] = useState('Легковое авто')
  const [includeLocation, setIncludeLocation] = useState(true)
  const [isSending, setIsSending] = useState(false)

  // Пока идёт прелоадинг
  if (isLoading) {
    return <Preloader onLoaded={() => setIsLoading(false)} />
  }

  const handleSendRequest = async () => {
    setIsSending(true)
    let locationText = ''
    if (includeLocation && 'geolocation' in navigator) {
      try {
        const position = await new Promise((res, rej) =>
          navigator.geolocation.getCurrentPosition(res, rej)
        )
        const { latitude, longitude } = position.coords
        locationText = `\n\n📍 Локация: https://2gis.kz/geo/${latitude},${longitude}`
      } catch {
        locationText = '\n\n❌ Не удалось определить геолокацию.'
      }
    }
    const message = `🚨 Заявка с сайта:\n\nТелефон: ${phone}\nТип авто: ${vehicleType}${locationText}`
    const token = 'ВАШ_TELEGRAM_BOT_TOKEN'
    const chatId = 'ВАШ_CHAT_ID'
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message })
    })
    setIsSending(false)
    setShowModal(false)
  }

  const scrollToSection = id => {
    const section = document.getElementById(id)
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main
      className="relative z-0 min-h-screen w-full text-white font-sans overflow-x-hidden"
      style={{
        backgroundColor: '#000',
        backgroundImage:
          'linear-gradient(90deg, rgba(0,229,255,0.1) 1px, transparent 1px),linear-gradient(rgba(0,229,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        animation: 'gridMove 40s linear infinite'
      }}
    >
      {/* Hero */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center pt-10">
        <motion.img
          src={logo}
          alt="CYBER TOW"
          className="w-40 h-40 sm:w-60 sm:h-60 mb-2 drop-shadow-[0_0_40px_#00E5FF]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <h1 className="-mt-2 text-4xl sm:text-6xl font-extrabold text-cyan-400 drop-shadow-[0_0_30px_#00E5FF]">
          CYBER TOW
        </h1>
        <p className="text-pink-400 mt-1 drop-shadow-[0_0_10px_#FF4FC3]">
          Служба Эвакуации 24/7
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button
            onClick={() => setShowModal(true)}
            className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 px-8 rounded-full shadow-[0_0_25px_#00E5FF] transition"
          >
            Вызвать эвакуатор
          </button>
          <button
            onClick={() => scrollToSection('tariffs')}
            className="border border-cyan-500 hover:bg-cyan-600 hover:text-black text-cyan-300 font-bold py-3 px-8 rounded-full transition"
          >
            Смотреть тарифы
          </button>
        </div>
      </div>

      {/* О нас */}
      <section id="about" className="z-10 px-4 py-16 text-center">
        <h2 className="text-cyan-400 text-2xl font-bold mb-6">О нас</h2>
        <p className="text-pink-200 max-w-3xl mx-auto mb-6">
          CYBER TOW — это не просто эвакуатор. Это стиль, скорость и техно-душа!
          Мы бережно транспортируем авто по городу и за его пределами, создавая
          новый стандарт помощи на дороге.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-6"
        >
          <img
            src={about1}
            alt="about1"
            className="w-64 h-40 object-cover rounded-lg shadow-lg shadow-cyan-400/30"
          />
          <img
            src={about2}
            alt="about2"
            className="w-64 h-40 object-cover rounded-lg shadow-lg shadow-cyan-400/30"
          />
        </motion.div>
        <Link
          to="/gallery"
          className="inline-block border border-pink-400 text-pink-300 font-bold py-3 px-8 rounded-full hover:bg-pink-600 hover:text-black transition"
        >
          Галерея
        </Link>
      </section>

      {/* Тарифы */}
      <motion.section
        id="tariffs"
        className="z-10 px-4 py-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-xl shadow-xl w-full max-w-3xl border border-cyan-700">
          <h2 className="text-cyan-400 text-xl font-bold mb-4 text-center">
            Тарифы
          </h2>
          <table className="w-full text-sm sm:text-base">
            <thead>
              <tr className="text-cyan-300 border-b border-cyan-600">
                <th className="text-left p-2">Тип авто</th>
                <th className="text-left p-2">По городу</th>
                <th className="text-left p-2">Межгород</th>
              </tr>
            </thead>
            <tbody className="text-pink-300">
              <tr>
                <td className="p-2">Легковые</td>
                <td className="p-2">от 10 000 ₸</td>
                <td className="p-2">по направлению</td>
              </tr>
              <tr>
                <td className="p-2">Кроссоверы</td>
                <td className="p-2">от 12 000 ₸</td>
                <td className="p-2">по направлению</td>
              </tr>
              <tr>
                <td className="p-2">Джипы</td>
                <td className="p-2">от 15 000 ₸</td>
                <td className="p-2">по направлению</td>
              </tr>
              <tr>
                <td className="p-2">Газели / Фургоны</td>
                <td className="p-2">от 15 000 ₸</td>
                <td className="p-2">по направлению</td>
              </tr>
              <tr>
                <td className="p-2">Спецтехника</td>
                <td className="p-2">по договорённости</td>
                <td className="p-2">по договорённости</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Контакты */}
      <section className="z-10 py-6 text-center text-sm">
        <p className="text-pink-300 mb-2 drop-shadow-[0_0_10px_#FF4FC3]">
          <a href="tel:+77066686664" className="underline hover:text-cyan-400">
            +7 706 668 66 64
          </a>
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="http://wa.me/77066686644"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 px-4 py-2 rounded-full shadow-[0_0_15px_#00FF00] hover:bg-green-600"
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/evakuator_15region"
            target="_blank"
            rel="noreferrer"
            className="bg-pink-500 px-4 py-2 rounded-full shadow-[0_0_15px_#FF4FC3] hover:bg-pink-600"
          >
            Instagram
          </a>
        </div>
      </section>

      {/* Модалка */}
      <AnimatePresence>
        {showModal && (
          <RequestModal
            phone={phone}
            setPhone={setPhone}
            vehicleType={vehicleType}
            setVehicleType={setVehicleType}
            includeLocation={includeLocation}
            setIncludeLocation={setIncludeLocation}
            isSending={isSending}
            onSend={handleSendRequest}
            onClose={() => setShowModal(false)}
            isVisible={showModal}
          />
        )}
      </AnimatePresence>
    </main>
  )
}

export default App
