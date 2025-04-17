import { motion } from 'framer-motion'

function RequestModal({
  phone,
  setPhone,
  vehicleType,
  setVehicleType,
  includeLocation,
  setIncludeLocation,
  isSending,
  onClose,
  onSend,
  isVisible
}) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 overflow-hidden">
      {/* Мигающие узлы */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-70 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${1 + Math.random() * 3}s`,
              boxShadow: '0 0 10px #00e5ff',
            }}
          />
        ))}
      </div>

      {/* SVG прожилки */}
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <path
          d="M0,50 L100,50 M50,0 L50,100"
          stroke="#9B5CFF"
          strokeWidth="0.5"
          strokeDasharray="2,2"
          opacity="0.2"
        />
      </svg>

      {/* Анимированная трасса */}
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C30,100 70,0 100,100"
          stroke="#00E5FF"
          strokeWidth="1"
          fill="none"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="100;0"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dasharray"
            values="5,5;1,5;5,5"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
        transition={{ duration: 0.3 }}
        className="bg-black border border-cyan-500 rounded-xl p-6 w-full max-w-md shadow-[0_0_40px_#00E5FF] z-20"
      >
        <h2 className="text-xl font-bold text-cyan-400 mb-4 text-center">Вызвать эвакуатор</h2>

        <input
          type="tel"
          placeholder="Введите номер телефона"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 mb-4 outline-none border border-cyan-700 focus:ring-2 focus:ring-cyan-400"
        />

        <select
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 text-white mb-4 border border-cyan-700 focus:ring-2 focus:ring-cyan-400"
        >
          <option>Легковое авто</option>
          <option>Кроссовер</option>
          <option>Джип</option>
          <option>Газель / Фургон</option>
          <option>Спецтехника</option>
        </select>

        <div className="flex items-center gap-3 mb-4">
          <label htmlFor="locationToggle" className="text-sm text-cyan-300 flex items-center gap-3 cursor-pointer">
            <div className="relative">
              <input
                id="locationToggle"
                type="checkbox"
                checked={includeLocation}
                onChange={() => setIncludeLocation(!includeLocation)}
                className="sr-only"
              />
              <div className="w-12 h-6 bg-gray-700 rounded-full shadow-inner" />
              <div className={`dot absolute left-1 top-1 w-4 h-4 rounded-full transition transform ${
                includeLocation ? 'translate-x-6 bg-cyan-400' : 'bg-gray-400'
              }`} />
            </div>
            📍 Приложить моё местоположение
          </label>
        </div>

        {isSending && (
          <div className="text-center text-cyan-400 mb-2 animate-pulse">
            🚗 Отправляем эвакуатор…
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 sm:justify-between">
          <button
            onClick={onSend}
            disabled={isSending}
            className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-6 rounded-full shadow-[0_0_15px_#00E5FF] transition disabled:opacity-50"
          >
            Отправить
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto text-white underline hover:text-pink-400"
          >
            Отмена
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default RequestModal