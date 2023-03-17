import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
} from "native-base";

export default function Form() {
  return (
    <Box safeArea bg="primary.900" display="flex" p={10} w="100%" h="100%">
      <Heading size="lg" color="primary.500">
        Welcome
      </Heading>
      <Heading size="xs" color="muted.400">
        Sign In To Continue!
      </Heading>

      <VStack space={2} mt={5}>
        <FormControl>
          <FormControl.Label
            _text={{ color: "white", fontSize: "md", fontWeight: "600" }}
          >
            Email/ID
          </FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label
            _text={{ color: "white", fontSize: "md", fontWeight: "600" }}
          >
            Password
          </FormControl.Label>
          <Input type="password" />
          <Link
            _text={{ fontSize: "xs", fontWeight: 700, color: "cyan.500" }}
            alignSelf="flex-end"
            mt={1}
          >
            Forget Password?
          </Link>
        </FormControl>
        <VStack space={2}>
          <Button colorScheme="amber" _text={{ color: "white" }}>
            Login
          </Button>
          <HStack justifyContent="center" alignItems="center">
            <IconButton
              variant="unstyled"
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  name="github"
                  color="muted.900"
                  size="xl"
                />
              }
            />
            <IconButton
              variant="unstyled"
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  name="google"
                  color="muted.900"
                  size="xl"
                />
              }
            />
            <IconButton
              variant="unstyled"
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  name="discord"
                  color="muted.900"
                  size="xl"
                />
              }
            />
            <IconButton
              variant="unstyled"
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  name="snapchat"
                  color="muted.900"
                  size="xl"
                />
              }
            />
            <IconButton
              variant="unstyled"
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  name="facebook"
                  color="muted.900"
                  size="xl"
                />
              }
            />
            <IconButton
              variant="unstyled"
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  name="wechat"
                  color="muted.900"
                  size="xl"
                />
              }
            />
          </HStack>
        </VStack>
        <HStack justifyContent="center">
          <Text fontSize="sm" color="white" fontWeight={400}>
            I'm a new user.{" "}
          </Text>
          <Link
            _text={{ color: "white", fontSize: "sm" }}
            href="https://wa.me/628971406428"
          >
            Sign Up
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
}
