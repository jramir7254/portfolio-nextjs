import { type ProjectCardProps } from "@/components/cards/project-card"

export const projects: ProjectCardProps[] = [
    {
        title: "ACM Club Website",
        description: "Designed and developed a full-stack event and member management platform for the college ACM chapter with more than 80 members Implemented role-based access control (RBAC) supporting administrators, organizers, and members",
        imageUrl: "/acm-site.png",
        logos: ['typescript', 'react', 'nodejs', 'tailwind', 'mysql']
    },
    {
        title: "Nifty Assignment Generator",
        description: "Designed and developed a full-stack platform that dynamically generates computer science assignments using the OpenAI (ChatGPT) API",
        imageUrl: "/nifty-site.png",
        logos: ['react', 'nodejs', 'tailwind', 'openAi', 'maptiler']
    },
    {
        title: "Secure Coding Game",
        description: "Designed and developed a competitive secure coding platform featuring team-based challenges and scoring",
        imageUrl: "/sc-site.png",
        logos: ['react', 'nodejs', 'tailwind', 'openAi', 'maptiler']
    },
    {
        title: "Phishing Awareness Station",
        description: "Developed an interactive phishing awareness platform to educate users on identifying social engineering attacks",
        imageUrl: "/phish-site.png",
        logos: ['react', 'nodejs', 'tailwind', 'openAi', 'maptiler']
    }
]