import { Flex, HStack, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

import routes from '@/routes'
import siteConfig from '~/site.config.ts'

import MobileDrawer from './mobile-drawer'
import ToggleColorMode from './toggle-color-mode'

const Navbar = () => {
  return (
    <Flex
      as='nav'
      pos='sticky'
      flexDir='row'
      justify='space-between'
      align='center'
      px={{ base: 4, md: 20 }}
      py={8}
      top={0}
    >
      <Text fontSize='xl' fontWeight='bold'>
        {siteConfig.title}
      </Text>

      <HStack d={{ base: 'none', md: 'flex' }} spacing={6}>
        {routes.map(([text, href]) => (
          <div key={href}>
            <NextLink href={href} key={href}>
              <Link href={href}>{text}</Link>
            </NextLink>
          </div>
        ))}
        <ToggleColorMode />
      </HStack>

      <MobileDrawer />
    </Flex>
  )
}

export default Navbar
