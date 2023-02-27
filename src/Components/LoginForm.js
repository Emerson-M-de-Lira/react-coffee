
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image
} from '@chakra-ui/react';
import cremoso from "../assets/coffe.cremoso.jpg"

const LoginForm = ({ login, form, onChange, navigate, goToFeedPage}) => {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1}>
        <Image
          h="100vh"
          w="100vw"
          alt={'Login Image'}
          objectFit={'cover'}
          src={cremoso}
        />
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Enter  account</Heading>

          <FormControl id="email">
            <FormLabel>Email </FormLabel>
            <Input
              type="email"
              name="email"
              onChange={onChange}
              value={form.email}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              onChange={onChange}
              value={form.password}
            />
          </FormControl>
          <Stack spacing={6}>

            <Button
              colorScheme={'blue'}
              variant={'solid'}
              onClick={() => login(form, navigate)}
            >
              Regiter
            </Button>

            <Button
              colorScheme={'green'}
              variant={'solid'}
              onClick={() =>(goToFeedPage)}
            >
              Create
            </Button>

          </Stack>
        </Stack>
      </Flex>

    </Stack>
  );
}
export default LoginForm
