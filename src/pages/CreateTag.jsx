import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";

const CreateTag = () => {
  return (
    <VStack spacing={4}>
      <Text fontSize="2xl" fontWeight="bold">Create New Tag</Text>
      <Input placeholder="Tag name" />
      <Button colorScheme="blue">Create Tag</Button>
    </VStack>
  );
};

export default CreateTag;