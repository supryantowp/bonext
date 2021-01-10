import { Box } from '@chakra-ui/react'

const Container = ({ children, ...rest }) => {
  return (
    <Box py={4} px={{ base: 10, md: 20 }} {...rest}>
      {children}
    </Box>
  )
}

export default Container
