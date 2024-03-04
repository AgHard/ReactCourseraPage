import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      bg="white"
      borderRadius="md"
      boxShadow="md"
      p={4}
      spacing={4}
      maxW="md"
      alignItems="start"
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <VStack alignItems="start" spacing={1}>
        <Text color="black" fontWeight={"extrabold"} fontSize={"20px"}>{title}</Text>
        <Text color="gray.600">{description}</Text>
      </VStack>
      <HStack spacing={2}>
        <Text color="black" fontWeight={"bold"}>See more</Text>
        <FontAwesomeIcon icon={faArrowRight} color="black" size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
