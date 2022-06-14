
import { connect } from 'frontity';
import Switch from '@frontity/components/switch';

import Loading from './loading';
import Home from './home/'
import Blog from './blog/';
import BlogSingle from './blog-single/';
import PageSingle from './page-single/';
import Product from './product/';
import Glossary from './glossary/';
import GlossarySingle from './glossary-single/';
import Kamus from './kamus/';
import Author from './author/';
import AuthorSingle from './author-single/';
import Error404 from './error-404/';
import Search from './search/';

const Body = ({ state }) => {
        const req = state.source.get(state.router.link);
	return (
                <div id="body">
                        <Switch >
                                <Loading when={req.isFetching} />
                                <Home when={req.isHomepage} />
                                <Blog when={req.isBlogCat || req.isBlogPage || req.isBlogTag} />
                                <Error404 when={req.is404} />
                                <Search when={req.isSearchPage} />
                                <BlogSingle when={req.isSingleBlog} />
                                <PageSingle when={req.isSinglePage} />
                                <Product when={req.isProductPage} />
                                <Glossary when={req.isGlossaryPage} />
                                <GlossarySingle when={req.isSingleGlossary} />
                                <Kamus when={req.isKamusPage} />
                                <Author when={req.isAuthorPage} />
                                <AuthorSingle when={req.isSingleAuthor} />
                        </Switch>
                </div>
	);
};

export default connect(Body);