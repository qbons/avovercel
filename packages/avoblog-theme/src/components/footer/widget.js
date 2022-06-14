
import { connect } from 'frontity';
import Image from "@frontity/components/image";
import Link from '@frontity/components/link';

const Widget = ({ state, libraries }) => {
        const Html2React = libraries.html2react.Component;
        const widget = state.theme.widget;
	return (
		<div className="footer-widget">
                        <div className="wrapper">
                                <div className="rowflex">
                                        <div className="widget widget_text">
                                                <div className="textwidget">
                                                        {widget.about.logo != '' &&  <Link link="/"><Image src={widget.about.logo} width="185" height="26" /></Link> }
                                                        {widget.about.text != '' && <Html2React html={widget.about.text} /> }
                                                </div>
                                        </div>
                                        <div className="widget">
                                                {widget.menu.title != '' && <h3 className="widget-title">{widget.menu.title}</h3> }
                                                {widget.menu.item.length > 0 &&
                                                        <ul>
                                                                {widget.menu.item.map((v, k) => {
                                                                        return (
                                                                                <li key={k}><Link link={v.slug}>{v.title}</Link></li>
                                                                        )        
                                                                })}
                                                        </ul>
                                                }
                                        </div>
                                        <div className="widget widget_social">
                                                {widget.social.title != '' && <h3 className="widget-title">{widget.social.title}</h3>}
                                                <div className="wrap">
                                                        {widget.social.ig != '' && <Link link={widget.social.ig} className="cvr-bg ig"></Link> }
                                                        {widget.social.ml != '' && <Link link={widget.social.ml} className="cvr-bg ml"></Link> }
                                                        {widget.social.fb != '' && <Link link={widget.social.fb} className="cvr-bg fb"></Link> }
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
	);
};

export default connect(Widget);