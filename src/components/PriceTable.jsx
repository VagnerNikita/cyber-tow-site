function PriceTable() {
    return (
      <div className="text-center mt-10 space-y-4">
        <h2 className="text-cyan-400 text-2xl font-bold">📋 Тарифы</h2>
        <div className="overflow-x-auto max-w-full">
          <table className="w-full max-w-2xl mx-auto text-left border-collapse border border-cyan-800 text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-800 text-cyan-400">
                <th className="border border-cyan-800 px-4 py-2">Тип авто</th>
                <th className="border border-cyan-800 px-4 py-2">По городу</th>
                <th className="border border-cyan-800 px-4 py-2">Межгород</th>
              </tr>
            </thead>
            <tbody className="text-pink-400">
              <tr>
                <td className="border border-cyan-800 px-4 py-2">Легковые</td>
                <td className="border border-cyan-800 px-4 py-2">от 10 000 ₸</td>
                <td className="border border-cyan-800 px-4 py-2">по направлению</td>
              </tr>
              <tr>
                <td className="border border-cyan-800 px-4 py-2">Кроссоверы</td>
                <td className="border border-cyan-800 px-4 py-2">от 12 000 ₸</td>
                <td className="border border-cyan-800 px-4 py-2">по направлению</td>
              </tr>
              <tr>
                <td className="border border-cyan-800 px-4 py-2">Джипы</td>
                <td className="border border-cyan-800 px-4 py-2">от 15 000 ₸</td>
                <td className="border border-cyan-800 px-4 py-2">по направлению</td>
              </tr>
              <tr>
                <td className="border border-cyan-800 px-4 py-2">Газели / Фургоны</td>
                <td className="border border-cyan-800 px-4 py-2">от 15 000 ₸</td>
                <td className="border border-cyan-800 px-4 py-2">по направлению</td>
              </tr>
              <tr>
                <td className="border border-cyan-800 px-4 py-2">Спецтехника</td>
                <td className="border border-cyan-800 px-4 py-2">по договорённости</td>
                <td className="border border-cyan-800 px-4 py-2">по договорённости</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  
  export default PriceTable