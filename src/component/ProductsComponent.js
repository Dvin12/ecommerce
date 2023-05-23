import ProductsCard from "./ProductsCard";

function ProductsComponent({ products }) {
  return (
    <section className="p-12 ">
      <div className="mx-auto xl:mx-28">
        <section className="flex flex-col justify-center gap-10  xl:my-28 xl:grid xl:grid-cols-3">
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
