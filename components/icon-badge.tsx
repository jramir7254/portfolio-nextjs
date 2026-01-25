import React from 'react'
import { Badge } from './ui/badge'
import {
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiMysql,
    SiSocketdotio,
    SiOpenai,
    SiMaptiler,
    SiReactrouter,
    SiCpanel,
    SiSqlite,
    SiGooglemaps,
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
    reactRouter: {
        logo: <SiReactrouter />,
        name: "React Router"
    },
    cPanel: {
        logo: <SiCpanel />,
        name: "CPanel"
    },
    sqlite: {
        logo: <SiSqlite />,
        name: "SQLite"
    },
    googleMaps: {
        logo: <SiGooglemaps />,
        name: "Google Maps"
    },
}


export type LogoBadge = keyof typeof badgeConfigs


export function IconBadge({ variant }: { variant: LogoBadge }) {
    return (
        <Badge variant={'secondary'} className='gap-2 pr-2 font-nunit'>
            {badgeConfigs[variant].logo} {badgeConfigs[variant].name}
        </Badge>
    )
}
