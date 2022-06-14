import Banner from "./banner";

const ProductPost = {
        name: "ProductPost",
        // We can add a priority so it executes before or after other processors.
        priority: 10,
        test: ({ node }) => node.component === "product",
        processor: ({ node }) => {
                node.props.data = JSON.parse(node.props.data);
                node.component = Banner;
                return node;
        },
}

export default ProductPost;