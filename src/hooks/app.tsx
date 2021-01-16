import { IconType } from 'react-icons/lib'
import { FaGithub, FaTwitter } from 'react-icons/fa'

import siteConfig from '~/site.config'

export const useSocialMedia = () => {
  const socials: [string, IconType][] = [
    [siteConfig.socials.Github, FaGithub],
    [siteConfig.socials.Twitter, FaTwitter],
  ]

  return socials
}
