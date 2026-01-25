import Image from 'next/image'
import React from 'react'
import { Separator } from '../ui/separator'
import { IconBadge, type LogoBadge } from '../icon-badge'


export type ProjectCardProps = {
    title: string
    description: string
    imageUrl: string
    projectUrl: string
    logos: LogoBadge[]
}

export function ProjectCard({
    title,
    description,
    imageUrl,
    logos,
    projectUrl

}: ProjectCardProps) {
    return (
        <div
            onClick={() => window.open(`https://${projectUrl}`, '_blank')}
            className='
                flex gap-5 cursor-pointer w-[95%] rounded-lg
                flex-col-reverse p-0
                lg:flex-row  lg:p-5  lg:h-65
              hover:bg-white/5 hover:backdrop-blur-md backdrop-brightness-50 
            '>
            <div className='lg:w-2/3 '>
                <h3 className='font-nunit font-bold mb-3'>{title}</h3>
                <p className='w-80 lg:w-full font-nunit text-xs 2xl:text-sm text-muted-foreground'>{description}</p>
                <div className='flex gap-2 flex-wrap mt-5'>
                    {logos && logos.map(l => <IconBadge key={l} variant={l} />)}
                </div>
            </div>
            {/* <Separator orientation='vertical' /> */}
            <div className='lg:w-1/3'>
                <Image width={16 * 10} height={9 * 10} src={imageUrl} className='brightness-100 border-2  overflow-hidden w-full' alt="" />
            </div>
        </div>
    )
}
