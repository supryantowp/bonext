import { Heading, Text } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

import Container from '@/components/container'
import Layout from '@/layouts'
import siteConfig from '~/site-config'

const metaTags = {
  title: 'Sakura Starter Project',
  titleTemplate: '%s',
}

const Index = () => {
  return (
    <Layout metaTags={metaTags}>
      <Container>
        <Heading
          bgGradient='linear(to-l, #7928CA,#FF0080)'
          bgClip='text'
          fontSize='6xl'
          fontWeight='extrabold'
        >
          {siteConfig.title}
        </Heading>
        <Text>{siteConfig.description}</Text>
      </Container>
    </Layout>
  )
}

export default Index
