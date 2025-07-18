import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../contexts/ThemeContext'
import { 
  Code2, 
  Database, 
  Cloud,
  Settings,
  BarChart3,
  Wrench,
  GitBranch
} from 'lucide-react'

const Skills = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const skillCategories = [
    {
      title: t('skills.categories.programming'),
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', years: `5+ ${t('skills.years')}` },
        { name: 'Golang', years: `3+ ${t('skills.years')}` },
        { name: 'SQL', years: `5+ ${t('skills.years')}` },
        { name: 'Java', years: `2+ ${t('skills.years')}` },
        { name: 'R', years: `2+ ${t('skills.years')}` },
        { name: 'Scala', years: `1+ ${t('skills.years')}` },
      ]
    },
    {
      title: t('skills.categories.databases'),
      icon: Database,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Oracle', years: `4+ ${t('skills.years')}` },
        { name: 'PostgreSQL', years: `4+ ${t('skills.years')}` },
        { name: 'MongoDB', years: `3+ ${t('skills.years')}` },
        { name: 'Redis', years: `2+ ${t('skills.years')}` },
        { name: 'Elasticsearch', years: `2+ ${t('skills.years')}` },
        { name: 'Cassandra', years: `1+ ${t('skills.years')}` },
      ]
    },
    {
      title: t('skills.categories.dataengineering'),
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Apache Airflow', years: `3+ ${t('skills.years')}` },
        { name: 'Apache Kafka', years: `3+ ${t('skills.years')}` },
        { name: 'Apache Spark', years: `2+ ${t('skills.years')}` },
        { name: 'dbt', years: `2+ ${t('skills.years')}` },
        { name: 'ETL/ELT Pipelines', years: `4+ ${t('skills.years')}` },
        { name: 'Data Modeling', years: `4+ ${t('skills.years')}` },
      ]
    },
    {
      title: t('skills.categories.cloud'),
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Docker', years: `4+ ${t('skills.years')}` },
        { name: 'Kubernetes', years: `2+ ${t('skills.years')}` },
        { name: 'AWS', years: `3+ ${t('skills.years')}` },
        { name: 'Google Cloud', years: `2+ ${t('skills.years')}` },
        { name: 'Terraform', years: `2+ ${t('skills.years')}` },
        { name: 'CI/CD', years: `3+ ${t('skills.years')}` },
      ]
    },
    {
      title: t('skills.categories.tools'),
      icon: Wrench,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Git & GitHub', years: `5+ ${t('skills.years')}` },
        { name: 'Linux/Unix', years: `4+ ${t('skills.years')}` },
        { name: 'Jupyter', years: `4+ ${t('skills.years')}` },
        { name: 'VS Code', years: `5+ ${t('skills.years')}` },
        { name: 'Postman', years: `3+ ${t('skills.years')}` },
        { name: 'DBeaver', years: `4+ ${t('skills.years')}` },
      ]
    },
    {
      title: t('skills.categories.visualization'),
      icon: GitBranch,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Tableau', years: `3+ ${t('skills.years')}` },
        { name: 'Power BI', years: `2+ ${t('skills.years')}` },
        { name: 'Grafana', years: `2+ ${t('skills.years')}` },
        { name: 'Matplotlib/Seaborn', years: `4+ ${t('skills.years')}` },
        { name: 'Plotly', years: `2+ ${t('skills.years')}` },
        { name: 'Apache Superset', years: `1+ ${t('skills.years')}` },
      ]
    },
    {
      title: t('skills.categories.project'),
      icon: Settings,
      color: 'from-teal-500 to-green-500',
      skills: [
        { name: 'Scrum', years: `4+ ${t('skills.years')}` },
        { name: 'Agile Development', years: `4+ ${t('skills.years')}` },
        { name: 'Remote Collaboration', years: `4+ ${t('skills.years')}` },
        { name: 'JIRA', years: `3+ ${t('skills.years')}` },
        { name: 'Confluence', years: `2+ ${t('skills.years')}` },
        { name: 'Data Documentation', years: `3+ ${t('skills.years')}` },
      ]
    }
  ]

  return (
    <section id="skills" className={`py-20 px-6 ${
      theme === 'light' ? 'bg-gray-100/50' : 'bg-slate-800/20'
    }`}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('skills.title')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className={`text-lg max-w-3xl mx-auto ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
          }`}>
            {t('skills.description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                theme === 'light'
                  ? 'bg-white/80 border-gray-200 hover:border-gray-300 hover:shadow-lg'
                  : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl mr-4`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className={`text-lg font-semibold ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex justify-between items-center py-2 px-3 rounded-lg transition-colors duration-300 ${
                      theme === 'light'
                        ? 'bg-gray-100/60 hover:bg-gray-200/60'
                        : 'bg-slate-700/30 hover:bg-slate-700/50'
                    }`}
                  >
                    <span className={`font-medium text-sm ${
                      theme === 'light' ? 'text-gray-800' : 'text-gray-300'
                    }`}>{skill.name}</span>
                    <span className={`text-xs font-mono ${
                      theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                    }`}>{skill.years}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/*        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Öne Çıkan Uzmanlık Alanlarım</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Frontend Development',
                description: 'React.js ve Vue.js ile modern, responsive web uygulamaları geliştirme',
                icon: '⚛️',
                technologies: ['React.js', 'Vue.js', 'TypeScript', 'Tailwind CSS']
              },
              {
                title: 'Full Stack Solutions',
                description: 'Frontend ve backend teknolojilerini entegre ederek complete solutions',
                icon: '🔧',
                technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST API']
              },
              {
                title: 'Modern Development',
                description: 'CI/CD, Docker ve modern deployment araçları ile efficient development',
                icon: '🚀',
                technologies: ['Docker', 'GitHub Actions', 'Cloudflare Workers']
              }
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-slate-500 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{area.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-3">{area.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-md border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        */}
       
      </div>
    </section>
  )
}

export default Skills 