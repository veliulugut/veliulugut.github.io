import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { getIconComponent, socialLinksData } from '../utils/constant'


const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-800 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">Suzan Bülbül</h3>
            <p className="text-gray-400">{t('footer.title')}</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6"
          >
            {socialLinksData.map((social) => {
              const IconComponent = getIconComponent(social.iconName)
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <IconComponent size={20} className={`text-gray-400 ${social.iconColor}`} />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-gray-500 text-sm">
              {t('footer.built')}
            </p>
            <p className="text-gray-400 flex items-center justify-center md:justify-end gap-1 mt-2">
              © {currentYear} {t('footer.copyright')}   <a 
                href="https://linkedin.com/in/suzanbulbul" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:underline"
              >
                Suzan Bülbül
              </a>{' '}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 