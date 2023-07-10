import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, IconButton, Image, Text, useBoolean } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [flag,setFlag] = useBoolean(false)
  const links = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/about",
      label: "About",
    },
    {
      to: "/contact",
      label: "Contact",
    },
    {
      to: "/info",
      label: "More Details",
    },
  ];
  return (
    <Box>
      <Box
        pos="fixed"
        top="1rem"
        right="1rem"
        w="100%"
        align="center"
      >
        <Flex justifyContent="space-between">
          <Flex>
            <Image
              src="https://as2.ftcdn.net/v2/jpg/01/22/04/45/1000_F_122044550_CjRVM90rIus8RcB2B3jVe5DX0myf6DF8.jpg"
              width="100px"
              h="80px"
            />
            <Text mt="1rem" fontSize="20px" fontWeight="bold">
              Name hospital
            </Text>
          </Flex>
          <Flex display={{ base: "none", md: "flex" }} gap="1rem">
            {links.map((item) => {
              return (
                <Link to={item.to} key={item.to}>
                  <Button variant="ghost">{item.label}</Button>
                </Link>
              );
            })}
            <Button mt="0.25rem" colorScheme="pink">Make Appoinment</Button>
          </Flex>

          <IconButton
          align="center"
            display={{ base: "flex", md: "none" }}
            onClick={setFlag.on}
            icon={<HamburgerIcon />}
          ></IconButton>
        </Flex>
      </Box>
      {
        flag && (
            <Box
            pos='fixed'
            top="0"
            left="0"
            w="100vw"
            h="100vh"
            bgColor="white"
            zIndex={20}
            overflow="auto"
            display={{base:"block",md:"none"}}
            >
            <Flex>
                <Box pos="fixed" top="1rem" right="1rem">
                    <IconButton
                    onClick={setFlag.off}
                    icon={<CloseIcon/>}
                    >

                    </IconButton>
                </Box>
            </Flex>
            <Flex
            direction="column"
            align="center"
            justify="center"
            mt="3rem"
            >
            {links.map((item) => {
              return (
                <Link to={item.to} key={item.to}>
                  <Button variant="ghost">{item.label}</Button>
                </Link>
              );
            })}
            <Button colorScheme="pink">Make Appoinment</Button>
            </Flex>

            </Box>
        )
      }

      <Box w="100%" h="1000px" m='auto'></Box>
    </Box>
  );
};

export default Header;
