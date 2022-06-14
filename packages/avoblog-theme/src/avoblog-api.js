const AvoblogAPI = (props) => {
        return [
                {
                        // THEME OPTION
                        pattern: "option",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/avoblog/v1/option`
                                });
                                state.theme.options = await response.json();
                        }
                },
                {
                        // THEME NAVGATION
                        pattern: "navigation",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/avoblog/v1/navigation`
                                });
                                state.theme.navigation = await response.json();
                        }
                }, 
                {
                        // THEME WIDGET
                        pattern: "widget",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/avoblog/v1/widget`
                                });
                                state.theme.widget = await response.json();
                        }
                }, 
                {
                        // HOMEPAGE
                        pattern: "/",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/avoblog/v1/homepage`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isHomepage: true });
                        }
                }, 
                {
                        //BLOG
                        pattern: "/blog",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/avoblog/v1/blog`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isBlogPage: true });
                        }
                }, 
                {
                        // BLOG CATEGORY
                        pattern: "/category/:slug",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/avoblog/v1/blog/category/${params.slug}`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isBlogCat: true });
                        }
                }, 
                {
                        // BLOG TAG
                        pattern: "/tag/:slug",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/avoblog/v1/blog/tag/${params.slug}`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isBlogTag: true });
                        }
                }, 
                {
                        //PRODUCT
                        pattern: "/product",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/avoblog/v1/product`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isProductPage: true });
                        }
                }, 
                {
                        //PRODUCT CATEGORY
                        pattern: "/product/:slug",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/avoblog/v1/product/${params.slug}`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isProductPage: true });
                        }
                }, 
                {
                        //GLOSSARY
                        pattern: "/glossary",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/avoblog/v1/glossary`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isGlossaryPage: true });
                        }
                }, 
                {
                        //GLOSSARY ALPHA
                        pattern: "/glossary/:alpha",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/avoblog/v1/glossary/alpha/${params.alpha}`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isGlossaryPage: true });
                        }
                }, 
                {
                        //GLOSSARY SINGLE
                        pattern: "/glossary/:alpha/:slug",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/avoblog/v1/glossary/alpha/${params.alpha}/slug/${params.slug}`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isSingleGlossary: true });
                        }
                }, 
                {
                        //KAMUS
                        pattern: "/kamus",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/avoblog/v1/kamus`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isKamusPage: true });
                        }
                }, 
                {
                        //AUTHOR
                        pattern: "/author",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/avoblog/v1/author`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isAuthorPage: true });
                        }
                }, 
                {
                        //AUTHOR DETAIL
                        pattern: "/author/:slug",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/avoblog/v1/author/${params.slug}`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isSingleAuthor: true });
                        }
                }, 
                {
                        //SEARCH
                        pattern: "/search",
                        func: async ({ route, params, state, libraries, force }) => {
                                const option = {};
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isSearchPage: true });
                        }
                }, 
                {
                        //SINGULAR
                        pattern: "/:slug",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/avoblog/v1/singular/${params.slug}`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option,[option.data.marker]: true });
                        }
                },
        ];
}

export default AvoblogAPI;