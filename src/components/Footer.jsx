import React from "react";
import { Link } from "react-router-dom";
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
import { AiOutlineSend } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <Box bgColor={"blackAlpha.800"} minH={"40"} p={16} color={"white"}>
        <Stack direction={["column", "row"]}>
          <VStack alignItems={"stretch"} width={"full"} px={4}>
            <Heading
              size={"md"}
              textAlign={["center", ""]}
              textTransform={"uppercase"}
            >
              Subscribe to get updates
            </Heading>
            <HStack borderBottom={"2px solid white"} py={2}>
              <Input
                placeholder="Enter Email Here..."
                border={"none"}
                borderRadius={"none"}
                outline={"none"}
                focusBorderColor="none"
                size={25}
              />
              <Button
                p={0}
                colorScheme="purple"
                variant={"ghost"}
                borderRadius={"0  20px 20px 0"}
              >
                <AiOutlineSend size={20} />
              </Button>
            </HStack>
          </VStack>
          <VStack
            w={"full"}
            borderLeft={["none", "1px solid white"]}
            borderRight={["none", "1px solid white"]}
          >
            <Heading size={"md"} m={["1", 0]}>
              Video Hub{" "}
            </Heading>
            <Text textAlign={["center", ""]} m={["1", 0]}>
              Copyright © Sunrise Mentors Pvt. Ltd.
            </Text>
          </VStack>
          <VStack w={"full"}>
            <Heading size={"md"}>Social Media</Heading>
            <Button variant={"link"} color={"white"}>
              <Link>Youtube</Link>
            </Button>{" "}
            <Button variant={"link"} color={"white"}>
              <Link>Instagram</Link>
            </Button>{" "}
            <Button variant={"link"} color={"white"}>
              <Link>Github </Link>
            </Button>{" "}
            <Button variant={"link"} color={"white"}>
              <Link>Facebook</Link>
            </Button>
          </VStack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
