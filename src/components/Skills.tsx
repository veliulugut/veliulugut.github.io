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
// Teknoloji ikonları için react-icons
import { 
  SiGo, 
  SiPython, 
  SiApacheairflow, 
  SiOracle,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiElasticsearch,
  SiApachekafka,
  SiApachespark,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGit,
  SiLinux,
  SiJupyter,
  SiPostman,
  SiTableau,
  SiGrafana,
  SiPlotly,
  SiMysql,
  SiAmazons3,
  SiGooglecloud,
  SiGithubactions,
  SiJira,
  SiConfluence,
  SiApachecassandra,
  SiSupabase
} from 'react-icons/si'
import { DiJava, DiScala } from 'react-icons/di'
import { FaR, FaDatabase, FaCode, FaUsers, FaFile } from 'react-icons/fa6'

const Skills = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  // Teknoloji isimlerine göre ikon eşleştirme fonksiyonu
  const getTechIcon = (techName: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      'Python': <SiPython className={`w-5 h-5 ${theme === 'light' ? 'text-blue-600' : 'text-blue-400'}`} />,
      'Golang': <SiGo className={`w-5 h-5 ${theme === 'light' ? 'text-cyan-600' : 'text-cyan-400'}`} />,
      'Apache Airflow': <SiApacheairflow className={`w-5 h-5 ${theme === 'light' ? 'text-red-600' : 'text-red-400'}`} />,
      'Oracle': <SiOracle className={`w-5 h-5 ${theme === 'light' ? 'text-red-700' : 'text-red-500'}`} />,
      'PostgreSQL': <SiPostgresql className={`w-5 h-5 ${theme === 'light' ? 'text-blue-700' : 'text-blue-400'}`} />,
      'MongoDB': <SiMongodb className={`w-5 h-5 ${theme === 'light' ? 'text-green-600' : 'text-green-400'}`} />,
      'Redis': <SiRedis className={`w-5 h-5 ${theme === 'light' ? 'text-red-600' : 'text-red-400'}`} />,
      'Elasticsearch': <SiElasticsearch className={`w-5 h-5 ${theme === 'light' ? 'text-yellow-600' : 'text-yellow-400'}`} />,
      'Apache Kafka': <SiApachekafka className={`w-5 h-5 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`} />,
      'Apache Spark': <SiApachespark className={`w-5 h-5 ${theme === 'light' ? 'text-orange-600' : 'text-orange-400'}`} />,
      'Docker': <SiDocker className={`w-5 h-5 ${theme === 'light' ? 'text-blue-600' : 'text-blue-400'}`} />,
      'Kubernetes': <SiKubernetes className={`w-5 h-5 ${theme === 'light' ? 'text-blue-700' : 'text-blue-400'}`} />,
      'Terraform': <SiTerraform className={`w-5 h-5 ${theme === 'light' ? 'text-purple-700' : 'text-purple-400'}`} />,
      'Git & GitHub': <SiGit className={`w-5 h-5 ${theme === 'light' ? 'text-orange-700' : 'text-orange-400'}`} />,
      'Linux/Unix': <SiLinux className={`w-5 h-5 ${theme === 'light' ? 'text-yellow-700' : 'text-yellow-400'}`} />,
      'Jupyter': <SiJupyter className={`w-5 h-5 ${theme === 'light' ? 'text-orange-600' : 'text-orange-400'}`} />,
      'Postman': <SiPostman className={`w-5 h-5 ${theme === 'light' ? 'text-orange-600' : 'text-orange-400'}`} />,
      'Tableau': <SiTableau className={`w-5 h-5 ${theme === 'light' ? 'text-blue-700' : 'text-blue-400'}`} />,
      'Grafana': <SiGrafana className={`w-5 h-5 ${theme === 'light' ? 'text-orange-600' : 'text-orange-400'}`} />,
      'Plotly': <SiPlotly className={`w-5 h-5 ${theme === 'light' ? 'text-blue-600' : 'text-blue-400'}`} />,
      'Java': <DiJava className={`w-5 h-5 ${theme === 'light' ? 'text-red-700' : 'text-red-400'}`} />,
      'R': <FaR className={`w-5 h-5 ${theme === 'light' ? 'text-blue-700' : 'text-blue-400'}`} />,
      'Scala': <DiScala className={`w-5 h-5 ${theme === 'light' ? 'text-red-700' : 'text-red-400'}`} />,
      'SQL': <SiMysql className={`w-5 h-5 ${theme === 'light' ? 'text-blue-700' : 'text-blue-400'}`} />,
      'Cassandra': <SiApachecassandra className={`w-5 h-5 ${theme === 'light' ? 'text-yellow-600' : 'text-yellow-400'}`} />,
      'ETL/ELT Pipelines': <FaDatabase className={`w-5 h-5 ${theme === 'light' ? 'text-purple-700' : 'text-purple-400'}`} />,
      'Data Modeling': <FaDatabase className={`w-5 h-5 ${theme === 'light' ? 'text-green-700' : 'text-green-400'}`} />,
      'AWS': <SiAmazons3 className={`w-5 h-5 ${theme === 'light' ? 'text-orange-700' : 'text-orange-400'}`} />,
      'Google Cloud': <SiGooglecloud className={`w-5 h-5 ${theme === 'light' ? 'text-blue-700' : 'text-blue-400'}`} />,
      'CI/CD': <SiGithubactions className={`w-5 h-5 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`} />,
      'VS Code': <FaCode className={`w-5 h-5 ${theme === 'light' ? 'text-blue-700' : 'text-blue-400'}`} />,
      'DBeaver': <FaDatabase className={`w-5 h-5 ${theme === 'light' ? 'text-orange-700' : 'text-orange-400'}`} />,
      'Power BI': <FaCode className={`w-5 h-5 ${theme === 'light' ? 'text-yellow-700' : 'text-yellow-400'}`} />,
      'Matplotlib/Seaborn': <SiPython className={`w-5 h-5 ${theme === 'light' ? 'text-blue-700' : 'text-blue-400'}`} />,
      'Apache Superset': <SiSupabase className={`w-5 h-5 ${theme === 'light' ? 'text-green-700' : 'text-green-400'}`} />,
      'Scrum': <FaUsers className={`w-5 h-5 ${theme === 'light' ? 'text-purple-700' : 'text-purple-400'}`} />,
      'Agile Development': <FaUsers className={`w-5 h-5 ${theme === 'light' ? 'text-blue-700' : 'text-blue-400'}`} />,
      'Remote Collaboration': <FaUsers className={`w-5 h-5 ${theme === 'light' ? 'text-green-700' : 'text-green-400'}`} />,
      'JIRA': <SiJira className={`w-5 h-5 ${theme === 'light' ? 'text-blue-700' : 'text-blue-400'}`} />,
      'Confluence': <SiConfluence className={`w-5 h-5 ${theme === 'light' ? 'text-blue-700' : 'text-blue-400'}`} />,
      'Data Documentation': <FaFile className={`w-5 h-5 ${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`} />,
      'dbt': <FaDatabase className={`w-5 h-5 ${theme === 'light' ? 'text-orange-700' : 'text-orange-400'}`} />,
    }
    
    return iconMap[techName] || null
  }

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
              className={`backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 cursor-pointer perspective-1000 preserve-3d ${
                theme === 'light'
                  ? 'bg-white/90 border-gray-200 hover:border-blue-300 hover:shadow-xl shadow-lg'
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
                {category.skills.map((skill, skillIndex) => {
                   // Özel animasyon için belirli teknolojileri belirliyoruz
                   const hasSpecialRotation = ['Python', 'Golang', 'Apache Airflow', 'Oracle'].includes(skill.name);
                   
                   return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex justify-between items-center py-2 px-3 rounded-lg transition-colors duration-300 ${
                        hasSpecialRotation ? 'perspective-1000 preserve-3d' : ''
                      } ${
                        theme === 'light'
                          ? 'bg-gray-50/80 hover:bg-blue-50/80 border border-gray-100 hover:border-blue-200'
                          : 'bg-slate-700/30 hover:bg-slate-700/50'
                      }`}
                      style={hasSpecialRotation ? { transformStyle: 'preserve-3d' } : {}}
                    >
                      <div className="flex items-center gap-2">
                        {getTechIcon(skill.name)}
                        <span className={`font-medium text-sm ${
                          theme === 'light' ? 'text-gray-800' : 'text-gray-300'
                        }`}>{skill.name}</span>
                      </div>
                      <span className={`text-xs font-mono ${
                        theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                      }`}>{skill.years}</span>
                    </motion.div>
                  );
                })}
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