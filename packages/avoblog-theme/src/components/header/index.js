import {useState, useEffect} from 'react';
import { connect } from "frontity";

import Logo from './logo';
import Menu from "./menu";
import Button from './button';

const Header = ({state}) => {
        const [scroll, setScroll] = useState(false);
        useEffect(() => {
                window.addEventListener("scroll", () => {
                        setScroll(window.scrollY > 80);
                });
        }, []);

        return(
                <header id="top" className={scroll ? "is-sticky" : ""}>
                        <div className="wrapper">
                                <div className="rowflex">
                                        <Logo />
                                        <Menu />
                                        <Button/>
                                </div>
                        </div>
                </header>
        )
}

export default connect(Header);