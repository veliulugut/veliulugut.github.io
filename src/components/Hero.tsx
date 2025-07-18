import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { getIconComponent, socialLinksData } from '../utils/constant'
import { useTheme } from '../contexts/ThemeContext'
import { ArrowRight } from 'lucide-react'


const Hero = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Effects */}
      <div className={`absolute inset-0 ${
        theme === 'light'
          ? 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
          : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
      }`}></div>
      <div className={`absolute inset-0 opacity-70 ${
        theme === 'light'
          ? 'bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent)]'
          : 'bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent)]'
      }`}></div>
      <div className={`absolute inset-0 opacity-70 ${
        theme === 'light'
          ? 'bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent)]'
          : 'bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent)]'
      }`}></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-ping"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-1 h-1 bg-pink-500 rounded-full animate-ping"></div>

      <div className="relative z-10 container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <span className={`font-medium ${
              theme === 'light' ? 'text-blue-600' : 'text-blue-400'
            }`}>{t('hero.greeting')}</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className={theme === 'light' ? 'text-gray-900' : 'text-white'}>Veli</span> {""}
            <span className="gradient-text">Uluğut</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl"
          >
            <span className={theme === 'light' ? 'text-blue-600' : 'text-blue-400'}>{t('hero.title')}</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className={`text-lg leading-relaxed max-w-2xl ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}
            dangerouslySetInnerHTML={{ __html: t('hero.description') }}
          >
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight size={20} className="ml-2" />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex space-x-6"
          >
              {socialLinksData.map((social) => {
                const IconComponent = getIconComponent(social.iconName)
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition-all duration-300 hover:scale-110 group ${
                      theme === 'light'
                        ? 'bg-white/80 hover:bg-white shadow-md hover:shadow-lg'
                        : 'bg-slate-800 hover:bg-slate-700'
                    }`}
                  >
                    <IconComponent 
                      size={24} 
                      className={`transition-colors ${
                        theme === 'light' 
                          ? 'text-gray-600 group-hover:text-blue-600' 
                          : `text-gray-400 ${social.iconColor}`
                      }`} 
                    />
                  </a>
                )
              })}
          </motion.div>
        
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            
            {/* Profile Image Container */}
            <div className={`relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 shadow-2xl ${
              theme === 'light'
                ? 'border-gray-200 shadow-gray-300/50'
                : 'border-slate-700 shadow-slate-900/50'
            }`}>
              <div className={`absolute inset-0 z-10 ${
                theme === 'light'
                  ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10'
                  : 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'
              }`}></div>
              <img
                src="/photo.webp"
                alt="Veli Uluğut"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Floating Tech Icons */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg"
            >
              <span className="text-white font-bold text-sm">Python</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-20 -left-8 w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg"
            >
              <span className="text-white font-bold text-lg">Go</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -right-8 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg"
            >
              <span className="text-white font-bold text-sm">Oracle</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg"
            >
              <span className="text-white font-bold text-xs">Airflow</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center space-y-2 cursor-pointer hover:scale-110 transition-all duration-300"
        >
          <span className={`text-sm transition-colors ${
            theme === 'light'
              ? 'text-gray-600 hover:text-gray-900'
              : 'text-gray-400 hover:text-white'
          }`}>{t('hero.scroll')}</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-6 h-10 border-2 rounded-full flex justify-center transition-colors ${
              theme === 'light'
                ? 'border-gray-400 hover:border-blue-600'
                : 'border-gray-400 hover:border-blue-400'
            }`}
          >
            <div className={`w-1 h-3 rounded-full mt-2 ${
              theme === 'light' ? 'bg-gray-600' : 'bg-gray-400'
            }`}></div>
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}

export default Hero 