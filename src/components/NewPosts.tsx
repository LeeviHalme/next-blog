import { Anchor, Divider, Flex, Text, Title } from "@mantine/core";
import Link from "next/link";

const NewPosts = () => {
  return (
    <Flex direction="column" flex={1}>
      <Flex align="center" justify="space-between">
        <Title order={3}>New</Title>
        <Anchor size="sm" component={Link} href="/news">
          View all new
        </Anchor>
      </Flex>
      <Divider size="sm" my="md" />
      <Flex direction="column" gap="md">
        <Anchor component={Link} href="/post/10-web-design-principles" underline="never" c="white">
          <Text c="grey" ff="mono" tt="uppercase" size="sm" mb="sm" className="tracking-wider">
            Jul 16 2019
          </Text>
          <Title order={4}>10 web design principles every designer should know</Title>
        </Anchor>
        <Anchor component={Link} href="/post/10-web-design-principles" underline="never" c="white">
          <Text c="grey" ff="mono" tt="uppercase" size="sm" mb="sm" className="tracking-wider">
            Jul 16 2019
          </Text>
          <Title order={4}>10 web design principles every designer should know</Title>
        </Anchor>
        <Anchor component={Link} href="/post/10-web-design-principles" underline="never" c="white">
          <Text c="grey" ff="mono" tt="uppercase" size="sm" mb="sm" className="tracking-wider">
            Jul 16 2019
          </Text>
          <Title order={4}>10 web design principles every designer should know</Title>
        </Anchor>
      </Flex>
    </Flex>
  );
};

export default NewPosts;
