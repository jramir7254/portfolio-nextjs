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
        <div className='flex gap-5 border p-5 rounded-l-lg w-fit h-50 '>

            <div>
                <h3 className='font-nunit font-bold mb-5'>{title}</h3>
                <p className='w-[600px] text-sm text-muted-foreground'>{description}</p>
                <div className='flex gap-2 flex-wrap'>
                    {logos && logos.map(l => <IconBadge key={l} variant={l} />)}

                </div>
            </div>
            <Separator orientation='vertical' />
            <div>
                <Image width={16 * 10} height={9 * 10} src={imageUrl} className='brightness-100 border-2  overflow-hidden' alt="" />
            </div>
        </div>
    )
}
