import { getPost, mostDownloadedPost } from "../../actions/getters/post.get";
import { LayoutContent } from "../layout/Layout";
import { Product } from "../products/Product";
import { Label } from "../ui/label";

export type ProductsProps = {};

export const Products = async (props: ProductsProps) => {
  const products = await getPost();
  const mostDownloaded = await mostDownloadedPost();
  return (
    <LayoutContent className="space-y-8">
      <div className="flex flex-col justify-center gap-4">
        <Label className="text-center text-2xl font-bold">Recently added</Label>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {products
            .filter((product) => product.status === "online")
            .map((product) => (
              <Product
                key={product.id}
                subImage={product.subImage ?? null}
                id={parseInt(product.id)}
                imageUrl={product.image}
                category={product.category}
                title={product.title}
                subTitle={product.subtitle}
                isFavorite={product.isFavorite}
              />
            ))}
        </div>
      </div>
      <div className="flex flex-col justify-center gap-4">
        <Label className="text-center text-2xl font-bold">
          Most downloaded
        </Label>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {mostDownloaded
            .filter((product) => product.status === "online")
            .map((product) => (
              <Product
                key={product.id}
                subImage={product.subImage ?? null}
                id={parseInt(product.id)}
                imageUrl={product.image}
                category={product.category}
                title={product.title}
                subTitle={product.subtitle}
                isFavorite={product.isFavorite}
              />
            ))}
        </div>
      </div>
    </LayoutContent>
  );
};
