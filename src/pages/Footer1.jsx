import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Footer1 = () => {
  return (
    <Flex
      w={{base:"100%",md:"85%"}}
      h="500px"
      border="1px solid red"
      gap="1rem"
      m="auto"
      flexWrap={{ base: "wrap", md: "nowrap" }}
      p={{base:"1rem",md:"1rem"}}
    >
      <Box w={{base:"100%",md:"95%"}} h="90%" border="1px solid blue">
      <Box display="flex" justifyContent="center">
      <Image  src="https://img.freepik.com/premium-vector/medical-halth-care-icon_602006-1675.jpg?size=626&ext=jpg&uid=R109029813&ga=GA1.2.308968135.1688668115&semt=ais"
        alt="logo"
        width="12rem"
      />
      </Box>
      <Text fontSize="17px" w={{base:"96%",md:"95%"}}>
      Aliquam orci nullam tempor sapien gravida donec an enim ipsum porta justo at velna auctor congue
      </Text>
      <Box>
        
      </Box>
      </Box>

      <Box w={{base:"100%",md:"95%"}} h="90%" border="1px solid blue"></Box>
      <Box w={{base:"100%",md:"95%"}} h="90%" border="1px solid blue"></Box>
      <Box w={{base:"100%",md:"95%"}} h="90%" border="1px solid blue"></Box>
    </Flex>
  );
};

export default Footer1;
