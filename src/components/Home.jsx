import React from "react";
import {
  Box,
  Image,
  Heading,
  Container,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";
import { wrap } from "framer-motion";

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  padding: 4,
  size: "3xl",
};
const Home = () => {
  return (
    <>
      <Box>
        <MyCarousel />
        <Container maxW={"container.xl"} minH={"100vh"} p="16">
          <Heading
            textTransform={"uppercase"}
            py={2}
            w={"fit-content"}
            borderBottom={"2px solid"}
            m="auto"
          >
            Services
          </Heading>

          <Stack
            h={"full"}
            p={1}
            alignItems={"center"}
            direction={["column", "row"]}
          >
            <Image
              src={img5}
              alt="img5"
              filter={"hue-rotate(-120deg)"}
              h={["40", "400"]}
            />
            <Text m={5} letterSpacing={["1", "widest"]} lineHeight="190%">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium dolorum laudantium molestiae, ipsam aliquid quasi
              expedita, doloribus ab quia dolorem iste nostrum sequi nulla! Sit
              earum vero labore quo esse amet, nostrum ex, laboriosam doloribus
              nam exercitationem dolor officia tempore? Ad cumque ipsa vero
              pariatur cupiditate eos minima dignissimos. Beatae nobis veniam
              quae eos obcaecati. Qui nostrum enim quibusdam deleniti
              voluptatibus sed, illo quae aperiam rerum ut voluptate veniam
              pariatur quas illum laborum vel repudiandae. Ullam, veniam
              veritatis velit sed necessitatibus architecto fugiat pariatur
              blanditiis nulla delectus perferendis reprehenderit qui distinctio
              natus? Dolore, qui! Ratione quidem libero suscipit magnam
              repellendus.
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w={"full"} height={"100vh"}>
        <Image src={img1} alt="Image 1" />

        <Heading
          bgColor="blackAlpha.600"
          {...headingOptions}
          color={"white"}
          w={"fit-content"}
          size={["20", "30"]}
        >
          Watch the future
        </Heading>
      </Box>
      <Box w={"full"} height={"100vh"}>
        <Image src={img2} alt="Image 1" />

        <Heading
          {...headingOptions}
          w={"fit-content"}
          color="white"
          size={["20", "30"]}
          bgColor="blackAlpha.600"
        >
          Future is Gaming
        </Heading>
      </Box>
      <Box w={"full"} height={"100vh"}>
        <Image src={img3} alt="Image 1" />

        <Heading
          {...headingOptions}
          color="white"
          bgColor="blackAlpha.600"
          w={"fit-content"}
          size={["20", "30"]}
        >
          Gaming on Console
        </Heading>
      </Box>
      <Box w={"full"} height={"100vh"}>
        <Image src={img4} alt="Image 1" />

        <Heading
          {...headingOptions}
          color="white"
          bgColor="blackAlpha.600"
          w={"fit-content"}
          size={["20", "30"]}
        >
          Night Life is cool
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
