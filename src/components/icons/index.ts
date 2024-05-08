import type { HTMLAttributes } from "astro/types";

export interface Props extends HTMLAttributes<"svg"> {}
export interface ImageProps {
    class?: string;
}
export type IconType = (_props: Props) => any;
export type IconImageType = (_props: ImageProps) => any;

export { default as Arrow } from "./arrow.astro";
export { default as Desktop } from "./desktop.astro";
export { default as Menu } from "./menu.astro";
export { default as Server } from "./server.astro";
export { default as Terminal } from "./terminal.astro";
