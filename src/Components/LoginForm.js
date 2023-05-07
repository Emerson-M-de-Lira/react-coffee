import React from 'react';
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
import cremoso from '../assets/coffe.cremoso.jpg';

const LoginForm = ({ Login, form, onChange, navigate, goToFeedPage }) => {
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
          <Heading fontSize={'2xl'}>Enter account</Heading>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={form.password}
              onChange={onChange}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={'#588157'}
              colorScheme={'blue'}
              variant={'solid'}
              onClick={() => Login(form, navigate, goToFeedPage)}
            >
              Enter
            </Button>
            <Button
              bg={'#588157'}
              colorScheme={'green'}
              variant={'solid'}
            >
              Create Users
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default LoginForm;

