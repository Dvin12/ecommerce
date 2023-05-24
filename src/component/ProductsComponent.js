import ProductsCard from "./ProductsCard";

function ProductsComponent({ products }) {
  return (
    <section>
      <div className="mx-auto xl:mx-60">
        <section className="item-center flex flex-col justify-center xl:my-20  xl:grid xl:grid-cols-3 xl:gap-10">
          {products.map((item) => (
            <ProductsCard
              key={item.id}
              product={item}
              page="products"
            ></ProductsCard>
          ))}
        </section>
      </div>
    </section>
  );
}

export default ProductsComponent;
