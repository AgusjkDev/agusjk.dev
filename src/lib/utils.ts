import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function isHrefActive(pathname: string, href: string) {
    return href === pathname || href === "/" + pathname.match(/[^\/]+/g)?.[0];
}
