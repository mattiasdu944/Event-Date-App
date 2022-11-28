import { Button } from '@chakra-ui/react'

export const ButtonFollow = ({ title, funcion }) => {
    return (
        <Button 
            color='orange.200'                     
            borderColor="whiteAlpha.300"
            focusBorderColor="orange.500"
            _hover={{ outline: "orange.200" }} 
            _active={{bg:'transparent'}} 
            mt={2} 
            py={1} 
            alignItems='center' 
            variant='outline' 
            width='100%'
            onClick={funcion}
        >
            {title}
        </Button>
    )
}
