import type { HTMLAttributes } from "astro/types";

export interface Props extends HTMLAttributes<"svg"> {}
export type IconType = (_props: Props) => any;

export { default as Github } from "./github.astro";
export { default as Linkedin } from "./linkedin.astro";
export { default as Twitter } from "./twitter.astro";
