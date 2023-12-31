import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  Button,
  useDisclosure,
  DrawerContent,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        zIndex={"overlay"}
        top={4}
        left={4}
        pos={"fixed"}
        colorScheme="orange"
        p={0}
        w={10}
        height={10}
        borderRadius={100}
        onClick={onOpen}
      >
        <BiMenu size={"20"} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Chakra</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              <Button onClick={onClose} color={"purple"} variant={"ghost"}>
                <Link to={"/"}>Home</Link>
              </Button>
              <Button onClick={onClose} color={"purple"} variant={"ghost"}>
                <Link to={"/videos"}>Videos</Link>
              </Button>
              <Button onClick={onClose} color={"purple"} variant={"ghost"}>
                <Link to={"/videos?category=free"}>Free Videos</Link>
              </Button>
              <Button onClick={onClose} color={"purple"} variant={"ghost"}>
                <Link to={"/upload"}>UpLoad Videos</Link>
              </Button>
            </VStack>
            <HStack
              pos={"absolute"}
              bottom={"10"}
              left={"0"}
              w={"full"}
              justifyContent={"space-evenly"}
            >
              <Button onClick={onClose} colorScheme="purple">
                <Link to={"/login"}>Log In</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme="purple"
                variant={"outline"}
              >
                <Link to={"/signup"}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
