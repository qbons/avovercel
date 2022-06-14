
import { connect } from 'frontity';
import Switch from '@frontity/components/switch';

import HeadMeta from '../head-meta';
import Banner from './banner';
import List from './list';
import Article from './article';
import Grid from './grid';

const Author = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
        const visibility = req.data.visibility;
        const order = req.data.order;
	return (
                <>
                        <HeadMeta/>
                        <div className="inner-author">
                                {order.map((v, k) => {
                                        return(
                                                <Switch key={k}>
                                                        <Banner when={v == 'banner' && visibility.includes(v)} data={req.data.banner} />
                                                        <List when={v == 'author' && visibility.includes(v)} />
                                                        <Article when={v == 'popular' && visibility.includes(v) } data={req.data.article} libraries={libraries} />
                                                        <Grid when={v == 'article' && visibility.includes(v)} data={req.data.grid}  libraries={libraries} />
                                                </Switch>
                                        )
                                })}
                        </div>
                </>
	);
};

export default connect(Author);