import Container from "../ui/Container";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

const LatestVideo = () => {
    return (
        <section className="py-24 bg-white">
            <Container>

                <SectionHeader
                    badge="Latest Video"
                    title="Watch Our Latest Upload"
                    description="Stay connected with our newest spiritual stories, mythology videos and timeless wisdom from Sanatan Dharma."
                />

                <div className="mt-14 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">

                    <div className="grid lg:grid-cols-2">

                        <img
                            src="https://img.youtube.com/vi/aqz-KE-bpKQ/maxresdefault.jpg"
                            alt="Latest Video"
                            className="h-full w-full object-cover"
                        />

                        <div className="flex flex-col justify-center p-10">

                            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                                Latest Upload
                            </span>

                            <h3 className="mt-4 text-3xl font-bold">
                                Garud Puran: Narak Ka Sach
                            </h3>

                            <p className="mt-5 leading-8 text-gray-600">
                                Discover the mysteries of Garud Puran,
                                Karma, Narak and the spiritual lessons
                                hidden within ancient scriptures.
                            </p>

                            <Button className="mt-8 w-fit">
                                Watch on YouTube
                            </Button>

                        </div>

                    </div>

                </div>

            </Container>
        </section>
    );
};

export default LatestVideo;