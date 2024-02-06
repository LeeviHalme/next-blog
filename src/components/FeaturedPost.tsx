import { Flex, Highlight, Text, Title } from "@mantine/core";
import Image from "next/image";
import shapes from "@/assets/shapes.png";
import Link from "next/link";

const FeaturedPost = () => {
  return (
    <Link href="/post/10-web-design-principles">
      <Flex
        pos="relative"
        w="40vw"
        h="50vh"
        className="hover:scale-[1.01] hover:shadow-md transition-all ease-in-out">
        <Flex direction="column" gap="md" pos="absolute" m="5rem" className="z-10">
          <Highlight
            highlight={["by", "in"]}
            highlightStyles={{ color: "grey", background: "transparent" }}
            tt="uppercase"
            ff="mono"
            fw="bold"
            className="tracking-wider">
            By Jeff Carbello in Web Design
          </Highlight>
          <Title>10 web design principles every designer should know</Title>
          <Text>
            Follow these effective web design principles to make your next project a success.
          </Text>
        </Flex>
        <Image src={shapes} alt="Blog Post Image" className="absolute opacity-30 z-0" />
      </Flex>
    </Link>
  );
};

export default FeaturedPost;
