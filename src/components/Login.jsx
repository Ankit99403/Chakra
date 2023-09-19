import React from "react";
import {
  Container,
  Heading,
  VStack,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <VStack
        alignItems={"stretch"}
        spacing={8}
        w={["full", "96"]}
        m={"auto"}
        my={"16"}
      >
        <Heading>Welcome Back</Heading>
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
        <Button variant={"link"} alignSelf={"flex-end"}>
          <Link to="/forgetpassword">forget Password?</Link>
        </Button>
        <Button colorScheme="purple" type="submit">
          Login
        </Button>
        <Text textAlign={"right"}>
          New User?{" "}
          <Button variant={"link"} colorScheme="purple">
            <Link to="/signup">Sign up</Link>
          </Button>
        </Text>
      </VStack>
    </Container>
  );
}

export default Login;
