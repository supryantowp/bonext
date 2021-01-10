import { FiFacebook, FiGithub } from 'react-icons/fi'
import { IconType } from 'react-icons/lib'

export const useSocialsLogin = () => {
  const socials: [string, IconType][] = [
    ['facebook', FiFacebook],
    ['github', FiGithub],
  ]

  return socials
}
