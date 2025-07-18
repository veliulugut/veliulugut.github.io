import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'tr', name: 'TR', flag: '🇹🇷' },
    { code: 'en', name: 'EN', flag: '🇬🇧' }
  ]

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode)
    navigate(`/${langCode}`)
    setIsOpen(false)
    // HTML lang attribute'unu da güncelle
    document.documentElement.lang = langCode
  }

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-600 hover:border-slate-500 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-xl">{currentLanguage.flag}</span>
        <span className="text-white text-sm font-medium">
          {currentLanguage.name}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-400"
        >
        </motion.div>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full mt-2 right-0 bg-slate-800/95 backdrop-blur-sm rounded-lg border border-slate-600 shadow-xl z-50 "
        >
          {languages.map((language) => (
            <motion.button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-slate-700/50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                currentLanguage.code === language.code ? 'bg-slate-700/30 text-blue-400' : 'text-white'
              }`}
              whileHover={{ backgroundColor: 'rgba(51, 65, 85, 0.5)' }}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="text-sm font-medium">{language.name}</span>
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default LanguageSwitcher 