import { FaGithub, FaTwitter } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'

import siteConfig from '~/site.config.ts'

export const useSocialMedia = () => {
  const socials: [string, IconType][] = [
    [siteConfig.socials.Github, FaGithub],
    [siteConfig.socials.Twitter, FaTwitter],
  ]

  return socials
}
