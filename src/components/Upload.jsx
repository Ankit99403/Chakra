import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import {
  Box,
  Image,
  Heading,
  Container,
  Stack,
  Text,
  Flex,
  VStack,
  HStack,
  Button,
  Input,
} from "@chakra-ui/react";
const Upload = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <VStack color={"purple.500"} h={"full"} justifyContent={"center"}>
        <AiOutlineCloudUpload size="10vmax" />
        <form>
          <HStack>
            <Input
              required
              type="file"
              css={{
                "&::file-selector-button": {
                  border: "none",
                  width: "calc(100%*1.2)",
                  height: "100%",
                  marginLeft: "-18px",
                  color: "purple",
                  backgroundColor: "white",
                },
                cursor: "pointer",
              }}
            />
            <Button colorScheme="purple">Upload</Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
