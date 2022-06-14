import { Global, css } from 'frontity';

import Reset from '../assets/css/reset';
import Fonts from '../assets/css/fonts';
import Fancy from '../assets/css/fancy.css';
import Generic from '../assets/css/generic';
import Style from '../assets/css/style';
import Mobile from '../assets/css/mobile';


const Styling = () => {
        return(
                <>
                        <Global styles = { css `
                                ${Reset}
                                ${Fonts}
                                ${Fancy}
                                ${Generic}
                                ${Style}
                                ${Mobile}
                        `} />
                </>
        )
}

export default Styling;