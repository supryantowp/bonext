import { Heading } from '@chakra-ui/react'

import Container from '@/components/container'
import Layout from '@/layouts'

const metaTags = {
  title: 'My Account',
}

const MyAccount = () => {
  return <Layout metaTags={metaTags}>
    <Container>
      <Heading>Mantap</Heading>
    </Container>
  </Layout>
}

export default MyAccount
