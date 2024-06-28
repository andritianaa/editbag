import { getPost, mostDownloadedPost } from "../../actions/getters/post.get";
import { LayoutContent } from "../layout/Layout";
import { Product } from "../products/Product";
import { Label } from "../ui/label";

export type ProductsProps = {};

export const Products = async (props: ProductsProps) => {
  const products = await getPost();
  const mostDownloaded = await mostDownloadedPost("templates");
  return (
    <LayoutContent className="space-y-8 pb-20 lg:pb-[120px]">
      <div className="flex flex-col justify-center gap-4 pb-8 pt-20 lg:pb-[70px] lg:pt-[120px]">
        <div className="w-full px-4">
          <div className="mx-auto mb-6 max-w-[485px] text-center">
            <span className="mb-2 block text-lg font-semibold text-[#ffffff]">
              Products
            </span>
            <h2 className="text-dark mb-3 text-3xl font-bold dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
              Recently added product
            </h2>
            <p className="text-body-color dark:text-dark-6 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              suscipit amet omnis.
            </p>
          </div>
        </div>
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
        <div className="w-full px-4">
          <div className="mx-auto mb-6 max-w-[485px] text-center">
            <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
              Most downloaded
            </h2>
          </div>
        </div>
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
