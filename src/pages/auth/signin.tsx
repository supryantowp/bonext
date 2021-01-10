import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { providers, signIn } from 'next-auth/client'
import React from 'react'

import Container from '@/components/container'
import Layout from '@/layouts/index'

const metaTags = {
  title: 'SignIn',
}

interface SignInProps {
  providers: [
    {
      id: string
      name: string
    }
  ]
}

export default function SignIn({ providers }: SignInProps) {
  return (
    <Layout metaTags={metaTags} navbar={false}>
      <Container>
        <Box d='grid' placeItems='center' minH='90vh'>
          <Stack
            w='md'
            p={8}
            bgColor={useColorModeValue('gray.200', 'gray.700')}
            borderRadius='md'
          >
            <Box mb={2}>
              <Heading>Sign In</Heading>
              <Text>login with your social media account</Text>
            </Box>
            {Object.values(providers).map((provider) => (
              <Button
                key={provider.name}
                onClick={() => signIn(provider.id)}
                colorScheme='blue'
              >
                {provider.name}
              </Button>
            ))}
          </Stack>
        </Box>
      </Container>
    </Layout>
  )
}

SignIn.getInitialProps = async () => {
  return {
    providers: await providers(),
  }
}
