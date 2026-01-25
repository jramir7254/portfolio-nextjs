import React from 'react'
import { Badge } from './ui/badge'
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiMysql,
    SiSocketdotio,
    SiOpenai,
    SiMaptiler
} from 'react-icons/si';

export const badgeConfigs = {
    react: {
        logo: <SiReact color="#61DBFB" />,
        name: "React"
    },
    nodejs: {
        logo: <SiNodedotjs color='#89F336' />,
        name: "NodeJS"
    },
    typescript: {
        logo: <SiTypescript color='sky-500' className='text-sky-500' />,
        name: "Typescript"
    },
    tailwind: {
        logo: <SiTailwindcss color='sky-500' className='text-sky-500' />,
        name: "Tailwind CSS"
    },
    mysql: {
        logo: <SiMysql />,
        name: "MySQL"
    },
    socketIo: {
        logo: <SiSocketdotio />,
        name: "Socket.IO"
    },
    openAi: {
        logo: <SiOpenai />,
        name: "Open AI"
    },
    maptiler: {
        logo: <SiMaptiler />,
        name: "Maptiler"
    },
}


export type LogoBadge = keyof typeof badgeConfigs


export function IconBadge({ variant }: { variant: LogoBadge }) {
    return (
        <Badge variant={'secondary'} className='gap-2 pr-2'>
            {badgeConfigs[variant].logo} {badgeConfigs[variant].name}
        </Badge>
    )
}
