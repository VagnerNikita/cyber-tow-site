function Contacts() {
    return (
      <div className="text-center mt-10 space-y-4">
        <h2 className="text-cyan-400 text-2xl font-bold">Контакты</h2>
        <p>
          📞 <a href="tel:+77066686664" className="underline hover:text-cyan-400">+7 706 668 66 64</a>
        </p>
        <div className="flex justify-center gap-4 flex-wrap mt-4">
          <a
            href="https://wa.me/77066686644"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-6 rounded-full shadow-md transition cursor-pointer"
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/evakuator_15region"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition cursor-pointer"
          >
            Instagram
          </a>
        </div>
      </div>
    )
  }
  
  export default Contacts