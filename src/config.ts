import * as SocialIcons from "@/components/icons/socials";

export const siteConfig = {
    author: "Agustín Arnoldi",
    email: "agusjkdev7@gmail.com",
    description:
        "I'm a 19 years old software developer from Córdoba, Argentina 🇦🇷 I started coding back in March 2021, and since then, I've been on an exciting journey of learning and experimenting in the world of software development.",
    keywords: [
        "Agustín Arnoldi",
        "Argentina",
        "Articles",
        "Blog",
        "Coding",
        "Córdoba",
        "Portfolio",
        "Posts",
        "Programming",
        "Software",
        "Tech",
        "Tutorials",
        "Writings",
    ],
    locale: "en_US",
    navigation: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Blog",
            href: "/blog",
        },
        {
            label: "About",
            href: "/about",
        },
    ],
    socials: [
        {
            icon: SocialIcons.Twitter,
            label: "Twitter",
            username: "agusjkdev",
            href: "https://twitter.com/agusjkdev",
        },
        {
            icon: SocialIcons.GitHub,
            label: "GitHub",
            username: "agusjkdev",
            href: "https://github.com/agusjkdev",
        },
        {
            icon: SocialIcons.LinkedIn,
            label: "LinkedIn",
            username: "agusjkdev",
            href: "https://www.linkedin.com/in/agusjkdev",
        },
    ],
    repository: {
        href: "https://github.com/AgusjkDev/personal-website",
        getUrls() {
            return [
                {
                    label: "Repository",
                    href: this.href,
                },
                {
                    label: "Report an issue",
                    href: `${this.href}/issues/new`,
                },
                {
                    label: "Stargazers",
                    href: `${this.href}/stargazers`,
                },
            ];
        },
    },
};
