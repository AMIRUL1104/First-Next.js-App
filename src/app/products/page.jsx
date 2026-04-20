const getProducts = async () => {
  const res = await fetch("http://localhost:3004/products", {
    cache: "no-store",
  });
  return res.json();
};

async function ProductsPage() {
  const data = await getProducts();
  console.log(data);

  return (
    <div>
      <h1>Products Page</h1>
      <p>
        Explore our wide range of products and find the perfect fit for your
        needs. From electronics to fashion, we have something for everyone.
      </p>

      <div className=" grid-cols-2 md:grid-cols-3 grid gap-4 mx-auto max-w-7xl ">
        {data.map((item) => (
          <div
            key={item.id}
            className=" px-2.5 py-3 rounded-lg  bg-sky-800 text-white shadow-2xl"
          >
            <h3>{item.name}</h3>
            <p className=" font-medium text-lg ">{item.price}</p>
            <p className=" text-[14px] ">Category :{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
