import krishna from "../../../assets/images/hero/hero-krishna.png";
import shiva from "../../../assets/images/hero/hero-krishna.png";
import ramayana from "../../../assets/images/hero/hero-krishna.png";
import mahabharata from "../../../assets/images/hero/hero-krishna.png";
import garuda from "../../../assets/images/hero/hero-krishna.png";

const heroSlides = [
    {
        id: 1,
        title: "श्री कृष्ण की दिव्य लीलाएँ",
        badge: "Featured Collection",
        description:
            "Explore timeless stories of Lord Krishna from the Mahabharata, Bhagavad Gita and Srimad Bhagavatam.",

        image: krishna,

        primaryButton: {
            text: "Read Stories",
            url: "/stories",
        },

        secondaryButton: {
            text: "Watch Videos",
            url: "/videos",
        },
    },

    {
        id: 2,
        title: "शिव महापुराण",
        badge: "Featured Collection",
        description:
            "Discover the divine stories and teachings of Lord Shiva.",

        image: shiva,

        primaryButton: {
            text: "Explore Stories",
            url: "/stories",
        },

        secondaryButton: {
            text: "Watch Videos",
            url: "/videos",
        },
    },

    {
        id: 3,
        title: "रामायण की अमर गाथा",
        badge: "Featured Collection",
        description:
            "Journey through the life of Lord Rama and the timeless lessons of Ramayana.",

        image: ramayana,

        primaryButton: {
            text: "Read Ramayana",
            url: "/stories",
        },

        secondaryButton: {
            text: "Watch Videos",
            url: "/videos",
        },
    },

    {
        id: 4,
        title: "महाभारत के रहस्य",
        badge: "Featured Collection",
        description:
            "Explore epic battles, wisdom and untold stories from Mahabharata.",

        image: mahabharata,

        primaryButton: {
            text: "Explore",
            url: "/stories",
        },

        secondaryButton: {
            text: "Watch",
            url: "/videos",
        },
    },

    {
        id: 5,
        title: "गरुड़ पुराण",
        badge: "Featured Collection",
        description:
            "Discover the spiritual truths, karma and afterlife described in Garuda Purana.",

        image: garuda,

        primaryButton: {
            text: "Start Reading",
            url: "/stories",
        },

        secondaryButton: {
            text: "Watch Series",
            url: "/videos",
        },
    },
];

export default heroSlides;