import Image from "@frontity/components/image";

import Info from './info';
import Content from './content';;
import Related from './related';
const Main = (props) => {
        const main = props.data.main;
        return(
               <div id="main" className="main">
                       {main.feat != '' && 
                                <div className="featured">
                                        <div className="wrapper">
                                                <Image src={main.feat} srcSet={`${main.mfeat} 500w, ${main.feat} 800w`} sizes="(min-width: 769px) 100vw, 30vw" alt={main.alt} width={main.dimension.width} height={main.dimension.height} />
                                        </div>
                                </div>
                        }
                        <div className="wrapper rowflex">
                                <Info propsLike={props.propsLike} data={ props.data.info} libraries={props.libraries}  />
                                <Content data={props.data.content} libraries={props.libraries}  />
                                <Related  data={props.data.related} libraries={props.libraries}  />
                        </div>
               </div>
        )
}

export default Main;