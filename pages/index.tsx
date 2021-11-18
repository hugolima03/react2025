import { Button, Heading, Code, Text } from "@chakra-ui/react";
import { useAuth } from "@/lib/auth";

export default function Home() {
  const auth = useAuth();

  console.log(auth);

  return (
    <div>
      <main>
        <Heading>Fast Feedback</Heading>

        <Text>
          Current user: <Code>{auth?.user?.name}</Code>
        </Text>

        <Button
          onClick={(e) => {
            auth.signinWithGithub();
          }}
        >
          Sign In
        </Button>

        {auth?.user && (
          <Button
            onClick={() => {
              auth.signout();
            }}
          >
            Sign Out
          </Button>
        )}
      </main>
    </div>
  );
}
