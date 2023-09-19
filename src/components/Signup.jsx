import React from "react";
import {
  Container,
  Heading,
  VStack,
  Input,
  Button,
  Text,
  Avatar,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <VStack
        alignItems={"stretch"}
        spacing={8}
        w={["full", "96"]}
        m={"auto"}
        my={"16"}
      >
        <Heading textAlign={"center"}>Sign In</Heading>
        <Avatar alignSelf={"center"} boxSize={"32"} />
        <Input
          placeholder="Please enter your name"
          type="text"
          focusBorderColor="purple.500"
          outline={"none"}
          required
        />
        <Input
          placeholder="Email"
          type="email"
          focusBorderColor="purple.500"
          outline={"none"}
          required
        />
        <Input
          placeholder="password"
          type="password"
          focusBorderColor="purple.500"
          outline={"none"}
          required
        />

        <Button colorScheme="purple" type="submit">
          Sign up
        </Button>
        <Text textAlign={"right"}>
          Already Signup up?{" "}
          <Button variant={"link"} colorScheme="purple">
            <Link to="/login">Login</Link>
          </Button>
        </Text>
      </VStack>
    </Container>
  );
}

export default Signup;
