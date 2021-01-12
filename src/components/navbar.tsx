import {
  Button,
  Flex,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

import routes from '@/routes'

import ToggleColorMode from './toggle-color-mode'

const Navbar = (): JSX.Element => {
  const [session, loading] = useSession()

  return (
    <Flex
      as='nav'
      pos='sticky'
      top={0}
      flexDir='row'
      px={{ base: 10, md: 20 }}
      py={8}
      align='center'
      justify='space-between'
    >
      <HStack spacing={6} justify='center'>
        <Text fontSize='xl' fontWeight='bold'>
          Sakura
        </Text>
        {routes.map(([text, href]) => (
          <div key={href}>
            <NextLink href={href} key={href}>
              <Link href={href}>{text}</Link>
            </NextLink>
          </div>
        ))}
      </HStack>
      <HStack spacing={6}>
        {!session && (
          <Button variant='ghost' colorScheme='sakura' onClick={() => signIn()}>
            Login
          </Button>
        )}
        {session && (
          <Menu>
            <MenuButton as={Button} colorScheme='pink'>
              Profile
            </MenuButton>
            <MenuList>
              <MenuGroup title='Profile'>
                <NextLink href='/my-account'>
                  <MenuItem>
                    <Link>My Account</Link>
                  </MenuItem>
                </NextLink>
              </MenuGroup>
              <MenuDivider />
              <MenuItem>
                <Button variant='link' onClick={() => signOut()}>
                  Sign Out
                </Button>
              </MenuItem>
            </MenuList>
          </Menu>
        )}

        <ToggleColorMode />
      </HStack>
    </Flex>
  )
}

export default Navbar
