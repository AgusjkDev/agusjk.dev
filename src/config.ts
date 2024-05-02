import * as SocialIcons from "@/components/icons/socials";

export const siteConfig = {
    title: "Personal Website",
    email: "agusjkdev7@gmail.com",
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
            href: "https://twitter.com/agusjkdev",
        },
        {
            icon: SocialIcons.GitHub,
            label: "GitHub",
            href: "https://github.com/agusjkdev",
        },
        {
            icon: SocialIcons.LinkedIn,
            label: "LinkedIn",
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
