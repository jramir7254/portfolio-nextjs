'use client'

import { useIsMobile } from "@/hooks/use-mobile";
import { ProjectCard } from "@/components/cards/project-card";
import { projects } from "@/lib/data";

export default function Home() {
    const isMobile = useIsMobile()


    return (
        <div className=" bg-transparent relative w-full">

            <div className="flex flex-col items-center justify-center lg:fixed w-screen lg:w-1/2 h-screen pointer-events-none ">
                <div className="z-99">
                    <h1 className="font-bebas text-8xl lg:text-9xl text-neutral-200  animate-fade-in">
                        Jesus <br />Ramirez
                    </h1>
                    <p className="font-nunit text-muted-foreground border-l-5 border-neutral-200 pl-2">
                        Full Stack Software Developer
                    </p>
                </div>
            </div>


            <section className="lg:ml-[50vw] min-h-screen  lg:pt-[50vh] px-10 lg:px-0">
                <h2 className="font-nunit font-bold text-2xl mb-3 text-emerald-300">About Me</h2>
                <div className="flex flex-col items-center justify-center text-muted-foreground w-[90%]">
                    <p className="mb-5">
                        I am deeply passionate about software engineering and continuously invest time in self-directed
                        learning to apply new concepts in real-world projects. Over the past year, I independently taught
                        myself a full-stack development framework and successfully designed, built, and deployed
                        production-ready web applications.
                    </p>
                    <p>
                        As President of my college’s ACM chapter, I have led initiatives to strengthen my peers’ coding skills
                        and foster a collaborative technical community. I actively develop programs that provide practical
                        experience through external projects, workshops, and hands-on events, and I have played a key role
                        in organizing computer science events such as hackathons and datathons, contributing to both technical
                        development and logistical coordination.
                    </p>
                </div>
            </section>

            <section className="lg:ml-[50vw] min-h-screen  ">
                <h2 className="font-nunit font-bold text-2xl mb-3 text-emerald-300">Job Experience</h2>
                <h3 className="font-nunit font-bold mb-3 ">Project Assistant - <span className="italic font-normal">El Paso Community College</span></h3>
                <p>Janurary 2025 - Present</p>
                <div className="flex flex-col items-center justify-center text-muted-foreground w-[90%]">
                    <p>
                        Developed and maintained software for faculty-led computer science research projects
                        Supervised student-led software development teams, providing technical guidance and code reviews
                        Coordinated cross-functional teams to plan and support Datathon and Hackathon events
                    </p>
                </div>
            </section>


            <section className="lg:ml-[50vw] min-h-screen  pb-50">
                <h2 className="font-nunit font-bold text-2xl mb-10 text-emerald-300">Software Experience/Projects</h2>
                <div className="space-y-10">
                    {projects.map(p => <ProjectCard key={p.title + " card"} {...p} />)}
                </div>
            </section>

        </div>
    );
}
