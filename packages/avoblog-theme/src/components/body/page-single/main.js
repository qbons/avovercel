import Image from "@frontity/components/image";

import Content from './content';
const Main = (props) => {
        const main = props.data.main;
        return(
               <div id="main" className="main">
                       {main.feat != '' && 
                                <div className="featured">
                                        <Image src={main.feat} srcSet={`${main.mfeat} 500w, ${main.feat} 800w`} sizes="(min-width: 769px) 100vw, 30vw" />
                                </div>
                        }
                        <div className="wrapper rowflex">
                                <Content data={props.data.content} libraries={props.libraries}  />
                        </div>
               </div>
        )
}

export default Main;