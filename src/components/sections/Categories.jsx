import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

const categories = [
    "Garuda Purana",
    "Ramayana",
    "Mahabharata",
    "Bhagavad Gita",
    "Shiv Purana",
    "Festivals",
];

const Categories = () => {
    return (
        <section className="bg-[#FFFBF5] py-24">

            <Container>

                <SectionHeader
                    badge="Categories"
                    title="Explore Spiritual Wisdom"
                    description="Choose a category and begin your journey through the timeless teachings of Sanatan Dharma."
                />

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {categories.map((category) => (

                        <div
                            key={category}
                            className="
                                rounded-2xl
                                border
                                border-gray-200
                                bg-white
                                p-8
                                text-center
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                hover:border-amber-200
                                hover:shadow-xl
                                cursor-pointer
                            "
                        >

                            <h3 className="text-xl font-semibold text-gray-900">
                                {category}
                            </h3>

                        </div>

                    ))}

                </div>

            </Container>

        </section>
    );
};

export default Categories;