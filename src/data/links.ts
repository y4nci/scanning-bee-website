import type { SvelteComponent } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

export type NavbarItem = {
	name: string;
	section: string;
	external?: boolean;
	icon: typeof SvelteComponent<SvelteHTMLElements["svg"]>;
	type?: string;
};

export type NavbarButton = {
	name: string;
	href: string;
	external?: boolean;
	imageSrc: string;
};
