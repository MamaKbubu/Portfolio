import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Web Developer & Aspiring Tech Teacher
                        </h3>

                        <p className="text-muted-foreground">
                            I'm a self-taught web developer with a passion for creating
                            beautiful and functional websites. With a background in design and
                            a keen eye for detail, I strive to build interfaces that are not
                            only visually appealing but also intuitive and user-friendly.
                        </p>

                        <p className="text-muted-foreground">
                            In addition to my development skills, I'm also an aspiring tech
                            teacher. I believe in the power of education and am committed to
                            sharing my knowledge with others. Whether it's through online
                            tutorials, workshops, or one-on-one mentoring, I'm dedicated to
                            helping others learn and grow in the tech industry. I am a product of
                            the INTERNET and I want to give back to the community by helping others achieve their goals in tech.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>

                            <a
                                href="https://docs.google.com/document/d/1OMdzfyMQnHVM4NUoixA8GI3dSFh7FS6uJxuwMf5WRYQ/edit?tab=t.0#heading=h.xxfmfyg5e76p"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Responsive Web Design ⭐</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and web applications with
                                        modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Frontend Development</h4>
                                    <p className="text-muted-foreground">
                                        Building interactive and engaging user interfaces with modern
                                        JavaScript frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating beautiful and functional user interfaces with a focus on
                                        usability and accessibility.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};