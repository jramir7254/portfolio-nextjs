import Image from 'next/image'
import React from 'react'
import { Separator } from '../ui/separator'
import { IconBadge, type LogoBadge } from '../icon-badge'


export type ProjectCardProps = {
    title: string
    description: string
    imageUrl: string
    logos: LogoBadge[]
}

export function ProjectCard({
    title,
    description,
    imageUrl,
    logos,
    children

}: {
    title: string
    description: string
    imageUrl: string
    logos?: LogoBadge[]
    children?: React.ReactNode
}) {
    return (
        <div className='
        flex flex-col-reverse lg:flex-row gap-5 p-5 rounded-lg w-[95%] lg:h-50 hover:bg-accent/80 cursor-pointer
        '>
            <div className='lg:w-2/3'>
                <h3 className='font-nunit font-bold mb-3'>{title}</h3>
                <p className='w-100 2xl:w-150 text-sm text-muted-foreground'>{description}</p>
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
