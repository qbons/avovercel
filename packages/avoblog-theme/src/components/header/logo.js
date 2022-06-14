import { connect } from "frontity";

import Image from "@frontity/components/image";
import Link from '@frontity/components/link';

const Logo = ({state, actions}) => {
        return(
                <div className="logo">
                        <a href="#" className="mobile-trigger cvr-bg" onClick={(e) =>{e.preventDefault(); actions.theme.toggleMobileMenu(); }}></a>
                        <Link link="/">
                                <Image src={state.theme.options.logoHead} width="185" height="26" />
                        </Link>
                </div>
        )
}

export default connect(Logo);