import { Button, Box, Heading, Text, Flex, Link } from "@chakra-ui/react";
import { useAuth } from "@/lib/auth";
import { Logo } from "@/styles/theme";

export default function Home() {
  const auth = useAuth();

  return (
    <>
      <Box bg="gray.100" py={16} px={4}>
        <Flex as="main" direction="column" maxW="700px" margin="0 auto">
          <Heading>
            <script
              dangerouslySetInnerHTML={{
                __html: `
            if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
              window.location.href = "/sites"
            }
          `,
              }}
            />
          </Heading>
          <Logo color="black" name="logo" w={9} h={9} mb={2} />
          <Text mb={4} fontSize="lg" py={4}>
            <Text as="span" fontWeight="bold" display="inline">
              Fast Feedback
            </Text>
            {" was built as part of "}
            <Link
              href="https://react2025.com"
              isExternal
              textDecoration="underline"
            >
              React 2025
            </Link>
            {`. It's the easiest way to add comments or reviews to your static site. Try it out by leaving a comment below. After the comment is approved, it will display below.`}
          </Text>
          {auth.user ? (
            <Button
              as="a"
              href="/sites"
              backgroundColor="gray.900"
              color="white"
              fontWeight="medium"
              mt={4}
              maxW="200px"
              _hover={{ bg: "gray.700" }}
              _active={{
                bg: "gray.800",
                transform: "scale(0.95)",
              }}
            >
              View Dashboard
            </Button>
          ) : null}
        </Flex>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        width="full"
        maxWidth="700px"
        margin="0 auto"
        mt={8}
        px={4}
      >
        asd
      </Box>
    </>
  );
}
