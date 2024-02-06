import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Anchor, Flex, Title, ActionIcon, Button, Loader } from "@mantine/core";
import { IconSearch, IconUser } from "@tabler/icons-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <Flex py="3rem" align="center" gap="md">
      <Title>Next Blog</Title>
      <Anchor component={Link} href="/news" ml="auto">
        News
      </Anchor>
      <Anchor component={Link} href="/topics">
        Topics
      </Anchor>
      <Anchor component={Link} href="/about">
        About
      </Anchor>
      <ActionIcon variant="subtle">
        <IconSearch size={18} />
      </ActionIcon>
      <ClerkLoading>
        <Button variant="light" leftSection={<Loader size={15} color="gray" />} disabled>
          Sign in
        </Button>
      </ClerkLoading>
      <ClerkLoaded>
        <SignedOut>
          <Button
            component={Link}
            href="/sign-in"
            variant="light"
            leftSection={<IconUser size={15} />}>
            Sign in
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </ClerkLoaded>
    </Flex>
  );
};

export default Navbar;
