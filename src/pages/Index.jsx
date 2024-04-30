import { Box, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <VStack spacing={4}>
      <Text fontSize="3xl" fontWeight="bold">Welcome to the Notes App</Text>
      <Text fontSize="xl">Navigate using the menu to start managing your notes!</Text>
    </VStack>
  );
};

export default Index;