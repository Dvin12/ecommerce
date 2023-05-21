import ProductsCard from "./ProductsCard";

function ProductsComponent({ products }) {
  return (
    <section className="h-full  p-12 ">
      <div className="mx-28">
        <section className="my-28 grid grid-cols-3 justify-center gap-20 p-12">
          {products.map((item) => (
            <ProductsCard key={item.id} product={item}></ProductsCard>
          ))}
        </section>
      </div>
    </section>
  );
}

export default ProductsComponent;
