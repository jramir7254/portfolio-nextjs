import React from 'react'
import { motion } from "motion/react"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

export function IconCard({ children }: { children: React.ReactNode }) {
    return (

        <HoverCard>
            <HoverCardTrigger asChild>
                <motion.div
                    whileHover={{
                        y: -15,
                        scale: 1.2
                    }}
                    className='
                    aspect-square w-20 rounded border grid place-items-center isolate bg-accent/50 shadow-lg ring-1 ring-black/5
                    cursor-pointer 
                '>
                    {children}
                </motion.div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between gap-4">

                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@nextjs</h4>
                        <p className="text-sm">
                            The React Framework – created and maintained by @vercel.
                        </p>
                        <div className="text-muted-foreground text-xs">
                            Joined December 2021
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>

    )
}


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