import { getPost } from "../../actions/getters/post.get";
import { Product } from "../products/Product";

export type ProductsProps = {};

export const Products = async (props: ProductsProps) => {
  const products = await getPost();
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 bg-background">
      {products
        .filter((product) => product.status === "online")
        .map((product) => (
          <Product
            key={product.id}
            subImage={product.subImage ?? null}
            id={parseInt(product.id)}
            imageUrl={product.image}
            category={product.type}
            title={product.title}
            type={product.type}
            subTitle={product.subtitle}
            isFavorite={product.isFavorite}
          />
        ))}
    </div>
  );
};
