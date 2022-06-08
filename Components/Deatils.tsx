import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Select,
  Checkbox,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

type Props = {};

const Deatils = (props: Props) => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading as="h1" size="xl">
          Your Details
        </Heading>
        <Text>If you already have an account, click here</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <Input placeholder="John" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel htmlFor="LastName">Last Name</FormLabel>
            <Input placeholder="Doe" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel htmlFor="Address">Address</FormLabel>
            <Input placeholder="Shantiroop, Akurdi Pune,411033" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel htmlFor="City">City</FormLabel>
            <Input placeholder="Pune " />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel htmlFor="Country">Country</FormLabel>
            <Select>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked> Ship to billing addsress</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button variant={"primary"} colorScheme={"brand"} w="full" size="lg">
            Place Order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Deatils;
