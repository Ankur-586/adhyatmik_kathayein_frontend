import HeroCarousel from "../../components/sections/HeroCarousel";
import LatestVideo from "../../components/sections/LatestVideo";
import Categories from "../../components/sections/Categories";
import Container from "../../components/ui/Container";

const Home = () => {
    return (
        <>
            <HeroCarousel />
            <Container>
                <LatestVideo />
                <Categories />
            </Container>
        </>
    );
};

export default Home;