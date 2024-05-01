import type { HTMLAttributes } from "astro/types";

export interface Props extends HTMLAttributes<"svg"> {}
export type IconType = (_props: Props) => any;

export { default as AstroIcon } from "./astro-icon.astro";
export { default as Backend } from "./backend.astro";
export { default as Css } from "./css.astro";
export { default as Express } from "./express.astro";
export { default as Frontend } from "./frontend.astro";
export { default as Git } from "./git.astro";
export { default as Github } from "./github.astro";
export { default as Html } from "./html.astro";
export { default as Javascript } from "./javascript.astro";
export { default as Linkedin } from "./linkedin.astro";
export { default as Mongodb } from "./mongodb.astro";
export { default as Nextjs } from "./nextjs.astro";
export { default as Nodejs } from "./nodejs.astro";
export { default as Other } from "./other.astro";
export { default as Postgresql } from "./postgresql.astro";
export { default as Python } from "./python.astro";
export { default as React } from "./react.astro";
export { default as Selenium } from "./selenium.astro";
export { default as Socketio } from "./socketio.astro";
export { default as Swagger } from "./swagger.astro";
export { default as Tailwindcss } from "./tailwindcss.astro";
export { default as Telerikfiddler } from "./telerikfiddler.astro";
export { default as Twitter } from "./twitter.astro";
export { default as Typescript } from "./typescript.astro";
