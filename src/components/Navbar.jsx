import React from "react";
import { Box, Flex, Button, IconButton, useBoolean, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

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
    to: "/login",
    label: "Login",
  },
];

const Navbar = () => {
  const [flag, setFlag] = useBoolean(false);
  // console.log(flag, setFlag)
  return (
    <Box>
      <Box pos="fixed" top="1rem" right="1rem" align="center">
        <Flex display={{ base: "none", md: "flex" }}>
          {links.map((link) => {
            return (
              <Link to={link.to} key={link.to}>
                <Button variant="ghost">{link.label}</Button>
                
                <Box>
            
          </Box>
              </Link>
            );
          })}
        </Flex>
        <IconButton
          display={{ base: "block", md: "none" }}
          onClick={setFlag.on}
          icon={<HamburgerIcon />}
        ></IconButton>

      </Box>

      {flag && (
        <Box
          pos="fixed"
          top="0"
          left="0"
          w="100vw"
          h="100vh"
          bgColor="white"
          zIndex={20}
          overflowY="auto"
          display={{ base: "block", md: "none" }}
        >
          <Flex>
            <Box pos="fixed" top="1rem" right="1rem">
              <IconButton
                onClick={setFlag.off}
                icon={<CloseIcon />}
              ></IconButton>
            </Box>
          </Flex>

          <Flex
            direction="column"
            align="center"
            justify="center"
            marginTop="3rem"
          >
            {links.map((link) => {
              return (
                <Link to={link.to} key={link.to}>
                  <Button variant="ghost">{link.label}</Button>
                </Link>
              );
            })}
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;

