import { HStack, Icon, IconButton, Link, Stack, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

import { useSocialMedia } from '@/hooks/app'
import routes from '@/routes'

const Footer = () => {
  const socials = useSocialMedia()
  return (
    <Stack my={8} align='center' spacing={4} maxW='4xl' mx='auto'>
      <HStack spacing={6}>
        {routes.map(([text, href]) => (
          <div key={href}>
            <NextLink href={href} key={href}>
              <Link href={href}>{text}</Link>
            </NextLink>
          </div>
        ))}
      </HStack>
      <HStack spacing={4}>
        {socials.map(([href, IconType]) => (
          <Link href={href} isExternal key={href}>
            <Icon as={IconType} boxSize={5} />
          </Link>
        ))}
      </HStack>
      <Text fontSize='xs'>
        Made using Nextj.js and Chakra UI. Hosted on Vercel
      </Text>
    </Stack>
  )
}

export default Footer
