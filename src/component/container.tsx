import { Box, ContainerProps } from '@chakra-ui/react'

const Container = ({ children, ...rest }: ContainerProps) => {
  return (
    <Box {...rest} px={{ base: 4, md: 20 }}>
      {children}
    </Box>
  )
}

export default Container
