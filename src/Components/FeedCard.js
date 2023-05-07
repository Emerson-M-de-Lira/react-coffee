import {
  Center, Box, 
  useColorModeValue,
  Heading, Stack,
  Image, Button,
} from '@chakra-ui/react';

const FeedCard = ({ title, img }) => {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}

          _after={{
            transition: 'all .3s ease',
            content: '"',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${img})`,
            filter: 'blur(15)',
            zIndex: -1,
          }}
          _groupHover={{
            after: {
              filter: 'blur(20px)',
            }
          }}
        >
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={img}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {title}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Button>
              Details
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
export default FeedCard