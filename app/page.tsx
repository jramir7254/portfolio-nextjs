'use client'


import { useIsMobile } from "@/hooks/use-mobile";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMysql } from 'react-icons/si';
import { IconCard } from "@/components/cards/icon-card";
import { ProjectCard } from "@/components/cards/project-card";
import { IconBadge } from "@/components/icon-badge";
import { projects } from "@/lib/data";


export default function Home() {
    const isMobile = useIsMobile()


    return (
        <div className=" bg-zinc-50 font-sans dark:bg-black relative">
            {/* <LightPillar pillarRotation={35} pillarWidth={1} className="pointer-events-none " intensity={isMobile ? 0.5 : .6} /> */}

            <div className="flex flex-col items-center justify-end lg:justify-center fixed w-1/2 h-full">
                <div>
                    <h1 className="font-bebas text-8xl lg:text-9xl text-neutral-200 text-shadow-lg text-shadow-gray-600 animate-fade-in">
                        Jesus
                        <br />
                        Ramirez
                    </h1>
                    <p className="font-nunit text-muted-foreground border-l-5 border-neutral-200 pl-2">
                        Full Stack Software Developer
                    </p>
                </div>
            </div>


            {/* <section className="ml-[50vw] min-h-screen grid place-items-center ">
                <div className="flex items-start  justify-center lg:items-center gap-5">
                    <IconCard>
                        <SiReact color="#61DBFB" size={35} className="hover:animate-spin hover:duration-100" />
                    </IconCard>
                    <IconCard>
                        <SiNodedotjs color="#215732" size={35} />
                    </IconCard>
                    <IconCard>
                        <SiMysql size={35} />
                    </IconCard>
                </div>
            </section> */}


            <section className="ml-[50vw] min-h-screen pt-[50vh] ">
                <h2 className="font-nunit font-bold text-2xl mb-3">About Me</h2>
                <div className="flex flex-col items-center justify-center">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione recusandae consectetur vero repudiandae nesciunt deserunt eius vel autem commodi pariatur ab, distinctio ea, illo et perspiciatis deleniti? Fuga, cupiditate qui.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione recusandae consectetur vero repudiandae nesciunt deserunt eius vel autem commodi pariatur ab, distinctio ea, illo et perspiciatis deleniti? Fuga, cupiditate qui.</p>
                </div>
            </section>
            <section className="ml-[50vw] min-h-screen  ">
                <h2 className="font-nunit font-bold text-2xl mb-10">Projects</h2>

                <div className="space-y-10">
                    {projects.map(p => <ProjectCard key={p.title + " card"} {...p} />)}

                </div>

            </section>

        </div>
    );
}
