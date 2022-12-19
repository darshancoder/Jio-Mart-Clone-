import { useToast,Button } from '@chakra-ui/react'
function Saveaddress() {
    const toast = useToast()
    return (
      <Button
        onClick={() =>
          toast({
            title: 'Address added successful.',
            // description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
        bg="blue" border="none" _hover="none"  color="white" cursor="pointer" 
      >
        Show Toast
      </Button>
    )
  }

  export {Saveaddress}

