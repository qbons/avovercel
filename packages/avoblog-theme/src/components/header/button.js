import { connect } from "frontity";

import Link from '@frontity/components/link';

import Search from '../partial/search';

const Button = ({state}) => {
        return(
                <div className="action">
                        <Search/>
                        <Link link="/product" className="shop-btn">Shop Now</Link>
                </div>
        )
}

export default connect(Button);