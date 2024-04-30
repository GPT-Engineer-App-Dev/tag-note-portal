import { Box, Button, Textarea, VStack, Text } from "@chakra-ui/react";

const CreateNote = () => {
  return (
    <VStack spacing={4}>
      <Text fontSize="2xl" fontWeight="bold">Create New Note</Text>
      <Textarea placeholder="Write your note here..." />
      <Button colorScheme="blue">Save Note</Button>
    </VStack>
  );
};

export default CreateNote;