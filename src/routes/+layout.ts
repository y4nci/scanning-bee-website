import type { LayoutLoad } from "./$types";
import { waitLocale } from "svelte-i18n";
import i18n from "$i18n";

export const load: LayoutLoad = () => {
	i18n();
	waitLocale();

	return {
		docs: null,
		docsPages: null,
	};
};

export const prerender = true;
