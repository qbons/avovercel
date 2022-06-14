import { connect } from 'frontity';
import Switch from '@frontity/components/switch';

import HeadMeta from '../head-meta';
import Banner from './banner';
import Intro from './intro';
import Block from './block';
import Pamflet from './pamflet';


const Kamus = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
        const visibility = req.data.visibility;
        const order = req.data.order;
	return (
                <>
                        <HeadMeta />
                        <div className="inner-welkam">
                                {order.map((v, k) => {
                                        return(
                                                <Switch key={k}>
                                                        <Banner when={v == 'banner' && visibility.includes(v)} data={req.data.banner} />
                                                        <Intro when={v == 'intro' && visibility.includes(v)} data={req.data.intro} libraries={libraries} />
                                                        <Block when={v == 'block' && visibility.includes(v) && req.data.block.length > 0 } data={req.data.block} libraries={libraries} />
                                                        <Pamflet when={v == 'pamflet' && visibility.includes(v)} data={req.data.pamflet} />
                                                </Switch>
                                        )
                                })};
                        </div>
                </>
	);
};

export default connect(Kamus);