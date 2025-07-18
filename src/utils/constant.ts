import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { MediumIcon } from "./icon"

export const socialLinksData = [
    {
      iconName: 'Github',
      name: 'GitHub',
      url: 'https://github.com/veliulugut',
      bgColor: 'hover:bg-gray-700',
      iconColor: 'group-hover:text-white'
    },
    {
      iconName: 'Linkedin',
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/veliulugut',
      bgColor: 'hover:bg-blue-600',
      iconColor: 'group-hover:text-blue-400'
    },
    {
      iconName: 'Medium',
      name: 'Medium',
      url: 'https://medium.com/@veliulugut',
      bgColor: 'hover:bg-green-600',
      iconColor: 'group-hover:text-green-400'
    },
    {
      iconName: 'Twitter',
      name: 'Twitter',
      url: 'https://twitter.com/veliulugut',
      bgColor: 'hover:bg-blue-600',
      iconColor: 'group-hover:text-cyan-400'
    },
    {
      iconName: 'Mail',
      name: 'Email',
      url: 'mailto:veli.ulugut@gmail.com',
      bgColor: 'hover:bg-purple-600',
      iconColor: 'group-hover:text-purple-400'
    }
]

export const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return Github
      case 'Linkedin':
        return Linkedin
      case 'Medium':
        return MediumIcon
      case 'Twitter':
        return Twitter
      case 'Mail':
        return Mail
      default:
        return Mail
    }
}

