
import { connect } from 'frontity';
import Switch from '@frontity/components/switch';

import HeadMeta from '../head-meta';
import Caro1 from './caro1';
import Tagging1 from './tagging1';
import Grid1 from './grid1';
import Caro2 from './caro2';
import Grid2 from './grid2';
import Blog from './blog';
import Tagging2 from './tagging2';
import Product from './product';
import Editor from './editor';
import Grid3 from './grid3';
import Caro3 from './caro3';
import Grid4 from './grid4';
import Grid5 from './grid5';

const Home = ({ state, libraries}) => {
        const req = state.source.get(state.router.link);
        const visibility = req.data.visibility;
        const order = req.data.order;
	return (
                <>
                        <HeadMeta />
                        <div className="inner-home">
                                {order.map((v, k) => {
                                        return(
                                                <Switch key={k}>
                                                        <Caro1 when={v == 'caro1' && visibility.includes(v)} data={req.data.caro1} />
                                                        <Tagging1 when={v == 'tagging1' && visibility.includes(v)} data={req.data.tagging1} />
                                                        <Grid1 when={v == 'grid1' && visibility.includes(v)} data={req.data.grid1} />
                                                        <Caro2 when={v == 'caro2' && visibility.includes(v)} data={req.data.caro2} />
                                                        <Grid2 when={v == 'grid2' && visibility.includes(v)} data={req.data.grid2} />
                                                        <Blog when={v == 'blog' && visibility.includes(v)} data={req.data.blog} libraries={libraries} />
                                                        <Tagging2 when={v == 'tagging2' && visibility.includes(v)} data={req.data.tagging2} />
                                                        <Product when={v == 'product' && visibility.includes(v)} data={req.data.product} libraries={libraries}  />
                                                        <Editor when={v == 'editor' && visibility.includes(v)} data={req.data.editor}  libraries={libraries}  />
                                                        <Grid3 when={v == 'grid3' && visibility.includes(v)} data={req.data.grid3} />
                                                        <Caro3 when={v == 'caro3' && visibility.includes(v)} data={req.data.caro3} />
                                                        <Grid4 when={v == 'grid4' && visibility.includes(v)} data={req.data.grid4} />
                                                        <Grid5 when={v == 'grid5' && visibility.includes(v)} data={req.data.grid5} />
                                                </Switch>
                                        )
                                })};
                        </div>
                </>
	);
};

export default connect(Home);