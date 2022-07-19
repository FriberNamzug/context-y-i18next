import { useState } from 'react'
import { useTranslation } from "react-i18next"

function App() {

  const [t, i18n] = useTranslation("global")

  const [count, setCount] = useState(0)
  const footer = (
    <nav className="bg-gray-800 border  border-black px-2 sm:px-4 py-2.5 rounded-t-xl mt-36">
      <div className="flex justify-around items-center">
        <div className='hover:text-white text-gray-500 transition hover:animate-pulse font-semibold cursor-pointer'>
          ClickUp
        </div>
        <div className='hover:text-white text-gray-500 transition hover:animate-pulse font-semibold cursor-pointer'>
          Dropbox
        </div>
        <div className='hover:text-white text-gray-500 transition hover:animate-pulse font-semibold cursor-pointer'>
          PAYCHEX
        </div>
        <div className='hover:text-white text-gray-500 transition hover:animate-pulse font-semibold cursor-pointer'>
          elastic
        </div>
        <div className='hover:text-white text-gray-500 transition hover:animate-pulse font-semibold cursor-pointer'>
          Stripe
        </div>

      </div>
    </nav>
  )

  const navbar = (
    <nav className="bg-gray-800 border  border-black px-2 sm:px-4 py-2.5 rounded-b-xl mb-36">
      <div className="flex justify-between items-center">
        <div className='flex w-96 justify-around'>
          <div className='hover:text-white text-gray-500 transition hover:animate-pulse font-semibold cursor-pointer'>
            {t("navbar.inicio")}
          </div>
          <div onClick={() => { i18n.changeLanguage("en") }} className='hover:text-white text-gray-500 transition hover:animate-pulse font-semibold cursor-pointer'>
            {t("navbar.ingles")}
          </div>
          <div onClick={() => { i18n.changeLanguage("es") }} className='hover:text-white text-gray-500 transition hover:animate-pulse font-semibold cursor-pointer'>
            {t("navbar.espanol")}
          </div>
        </div>

        <div className='flex justify-end'>
          <div className='mx-5 hover:text-white text-gray-500 transition hover:animate-pulse font-semibold cursor-pointer'>
            LINKEDIN
          </div>
          <div className='mx-5 hover:text-white text-gray-500 transition hover:animate-pulse font-semibold cursor-pointer'>
            TWITTER
          </div>
        </div>

      </div>
    </nav>
  )
  return (
    <div className=''>
      {navbar}
      <div className='flex justify-around'>



      </div>
      {footer}
    </div>
  )
}

export default App
