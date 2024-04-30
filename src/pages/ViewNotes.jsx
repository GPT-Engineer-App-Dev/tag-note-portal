import { Box, Text, Select, VStack } from "@chakra-ui/react";

const ViewNotes = () => {
  return (
    <VStack spacing={4}>
      <Text fontSize="2xl" fontWeight="bold">View Notes</Text>
      <Select placeholder="Filter by tag">
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        <option value="misc">Miscellaneous</option>
      </Select>
      <Box p={5} shadow="md" borderWidth="1px">
        <Text mt={4}>Note content goes here...</Text>
      </Box>
    </VStack>
  );
};

export default ViewNotes;