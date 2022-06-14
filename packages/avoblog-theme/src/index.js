import Root from "./components";
import link from "@frontity/html2react/processors/link";
import ProductPost from "./processor/product-post/";

import AvoblogAPI from './avoblog-api';

const avoblogTheme = {
	name: "avoblog-theme",
	roots: {
		theme: Root,
	},
	state: {
		theme: {
			isMobileMenuOpen: false,
			isSearchOpen: false,
			autoPrefetch: 'in-view',
			//autoPrefetch: 'no',
			options: [],
			navigation: [],
			widget: [],
			api: 'https://blog3.avoskinbeauty.com/wp-json/avoblog/v1/',
			//api: 'http://avoblog.test/wp-json/avoblog/v1/',
		},
	},
	actions: {
		theme: {
			beforeSSR: async ({ state, actions }) => {
				await Promise.all([
					actions.source.fetch("option", {force: false}),
					actions.source.fetch("navigation", {force: false}),
					actions.source.fetch("widget", {force: false})
				]);
			},
			toggleMobileMenu: ({state}) => {
				state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
				state.theme.isMobileMenuOpen ? document.body.classList.add('open-menu') : document.body.classList.remove('open-menu');
			},
			toggleSearchPopup: ({state}) => {
				state.theme.isSearchOpen = !state.theme.isSearchOpen;
			},
			hideSearchPopup: ({state}) => {
				state.theme.isSearchOpen = false;
			},
		},
	},
	libraries: {
		source:{ 
			handlers: AvoblogAPI()
		},
		html2react: {
			processors: [link, ProductPost] 
		}
	},
}
export default avoblogTheme;