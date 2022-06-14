
import { connect } from 'frontity';
import Switch from '@frontity/components/switch';

import HeadMeta from '../head-meta';
import Banner from './banner';
import List from './list';
import Copy from './copy';

const Product = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
        const visibility = req.data.visibility;
        const order = req.data.order;
	return (
                <>
                        <HeadMeta />
                        <div className="inner-product">        
                                {order.map((v, k) => {
                                        return(
                                                <Switch key={k}>
                                                        <Banner when={v == 'banner' && visibility.includes(v)} data={req.data.banner} />
                                                        <List when={v == 'product' && visibility.includes(v)} data={req.data.product} />
                                                        <Copy when={v == 'copy' && visibility.includes(v)} data={req.data.copy} libraries={libraries} />
                                                </Switch>
                                        )
                                })}
                        </div>
                </>
	);
};

export default connect(Product);