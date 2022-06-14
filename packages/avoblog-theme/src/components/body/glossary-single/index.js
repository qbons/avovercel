
import { connect } from 'frontity';

import HeadMeta from '../head-meta';
import Crumb from './crumb';
import Detail from './detail';
import List from './list';
import Pamflet from './pamflet';
import Grid from './grid';
import Product from './product';

const GlossarySingle = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
	return (
                <>
                        <HeadMeta/>
                        <div className="inner-kamus">
                                <Crumb data={req.data.crumb} />
                                <Detail />
                                <List data={req.data.list} libraries={libraries} />
                                <Pamflet data={req.data.pamflet} />
                                <Grid data={req.data.grid} libraries={libraries} />
                                <Product  data={req.data.product} libraries={libraries} />
                        </div>
                </>
	);
};

export default connect(GlossarySingle);