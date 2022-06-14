import { connect, useConnect } from 'frontity';
import CustomScroll from 'react-custom-scroll';

import Image from "@frontity/components/image";
import Link from '@frontity/components/link';
import Switch from '@frontity/components/switch';

import shopee from '../../assets/img/icon/shopee.png';
import tokped from '../../assets/img/icon/tokped.png';
import lazada from '../../assets/img/icon/lazada.png';
import zalora from '../../assets/img/icon/zalora.png';
import avoskin from '../../assets/img/icon/avoskin.png';

const WrapMp = (props) => {
        return <>{props.children}</>
}

const PopupShop = (props) => {
        const {state} = useConnect();
        const opt = state.theme.options.shopPopup;
        const shop = props.data;

	return (
                <div className="popup-layer">
                        <div id="popup-shop">
                                <button className="close-popup cvr-bg-af" onClick={() => {props.show(false)}}></button>
                                <div className="hentry">
                                        {opt.title != '' && <h2>{opt.title}</h2>}
                                        {opt.text != '' && <p>{opt.text}</p>}
                                </div>
                                <CustomScroll heightRelativeToParent="235px">
                                        <div className="rowflex">
                                                {opt.mp.map((value, key) => {
                                                        return (
                                                                <WrapMp key={key}>
                                                                        {shop.map((v, k) => 
                                                                                v.url != '' ? (
                                                                                        <Switch key={k}>
                                                                                                <Link link={v.url} when={v.market == 'shopee' && value == 'shopee'} target="_blank">
                                                                                                        <figure><Image src={shopee} width="38" /></figure>
                                                                                                        <span><em>Shop Now</em><b>Shopee</b></span>
                                                                                                </Link>
                                                                                                <Link link={v.url} when={v.market == 'tokped' && value == 'tokped'} target="_blank">                                                        
                                                                                                        <figure><Image src={tokped} width="82" /></figure>
                                                                                                        <span><em>Shop Now</em><b>Tokopedia</b></span>
                                                                                                </Link>
                                                                                                <Link link={v.url} when={v.market == 'lazada' && value == 'lazada'} target="_blank">
                                                                                                        <figure><Image src={lazada} width="48" /></figure>
                                                                                                        <span><em>Shop Now</em><b>Lazada</b></span>
                                                                                                </Link>
                                                                                                <Link link={v.url} when={v.market == 'zalora' && value == 'zalora'} target="_blank">
                                                                                                        <figure><Image src={zalora} width="72" /></figure>
                                                                                                        <span><em>Shop Now</em><b>Zalora</b></span>
                                                                                                </Link>
                                                                                                <Link link={v.url} when={v.market == 'avoskin' && value == 'avoskin'} target="_blank">
                                                                                                        <figure><Image src={avoskin} width="77" /></figure>
                                                                                                        <span><em>Shop Now</em><b>Avoskin Store</b></span>
                                                                                                </Link>
                                                                                        </Switch>
                                                                                ) : ('')
                                                                        )}
                                                                </WrapMp>
                                                        )
                                                })}
                                        </div>
                                </CustomScroll>
                                {(opt.gp != '' || opt.as != '') && 
                                        <div className="download clearfix">
                                                <div className="caption">
                                                        <small>Download</small>
                                                        <h3>Avoskin Apps</h3>
                                                </div>
                                                <div className="wrapm">
                                                        {opt.gp != '' && <Link link={opt.gp} className="cvr-bg gp"></Link>}
                                                        {opt.as != '' && <Link link={opt.as} className="cvr-bg as"></Link>}
                                                </div>
                                        </div>
                                }
                        </div>
                </div>
	);
};

export default connect(PopupShop);