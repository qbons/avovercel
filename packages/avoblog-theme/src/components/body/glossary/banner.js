import Image from "@frontity/components/image";

const Banner = (props) => {
        const data = props.data;
        return(
                <>
                        {data.img != '' &&
                                <div className="banner">
                                        <Image src={data.img} srcSet={`${data.mimg} 500w, ${data.img} 800w`} sizes="(min-width: 769px) 100vw, 30vw" />
                                </div>
                        }
                </>
        )
}

export default Banner;