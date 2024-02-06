import FeaturedPost from "@/components/FeaturedPost";
import Navbar from "@/components/Navbar";
import NewPosts from "@/components/NewPosts";
import { Container, Flex, Title } from "@mantine/core";

const Home = () => {
  return (
    <Container size="lg">
      <Navbar />
      <Flex mt="3rem" gap="xl">
        <FeaturedPost />
        <NewPosts />
      </Flex>
    </Container>
  );
};

export default Home;
