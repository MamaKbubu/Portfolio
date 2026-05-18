import { Briefcase, Code, User } from "lucide-react";
import { LifePathCalculator } from "./LifeCalculator";
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
                            Passionate Numerology Mentor
                        </h3>

                        <p className="text-muted-foreground">
                            Numerology has always been a fascinating subject for me, and I find it intriguing how numbers can hold such significance in our lives. It is truly beautiful how numerology is applied to create a unique and meaningful digital experiences with tech added into the equation.
                            I am passionate about using my skills to bring the magic of numerology to life in the digital world.
                            That's when I dived in without knowing as a child and my gift just grew bigger and better. For the past 2 years, I have concentrating on honing my skills to give more accurate readings to my clients and aligning them with their most abundant timeline.
                            This is because I firmly know we are all given the gift  of ABUNDANCE... The world silences that gift slowly and surely, but team up with me so we can unlick it together.
                            So I hope this website serves a purpose to you as it will allow you to get introduced to your personal number system and to me, as your new spiritual Teacher.


                        </p>

                        <p className="text-muted-foreground">
                            Hello my name is Mtho, and a warm welcome to you and your guides. Lets begin...

                        </p>

                        <div>
                            <LifePathCalculator />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};