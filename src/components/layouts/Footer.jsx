import Container from "../ui/Container";

const Footer = () => {
    return (
        <footer className="mt-20 border-t border-gray-200 bg-white">
            <Container className="py-12">

                <div className="grid gap-10 md:grid-cols-3">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-orange-600">
                            Adhyatmik Kathayein
                        </h2>

                        <p className="mt-4 text-gray-600 leading-7">
                            Explore the timeless wisdom of Sanatan Dharma
                            through stories, videos, and spiritual knowledge.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">
                            Quick Links
                        </h3>

                        <ul className="space-y-2 text-gray-600">
                            <li>Home</li>
                            <li>Stories</li>
                            <li>Videos</li>
                            <li>Categories</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">
                            Connect
                        </h3>

                        <p className="text-gray-600">
                            YouTube
                        </p>

                        <p className="text-gray-600">
                            Instagram
                        </p>

                        <p className="text-gray-600">
                            Facebook
                        </p>
                    </div>

                </div>

                <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
                    © 2026 Adhyatmik Kathayein. All Rights Reserved.
                </div>

            </Container>
        </footer>
    );
};

export default Footer;