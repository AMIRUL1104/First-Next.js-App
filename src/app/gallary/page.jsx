import Image from "next/image";
import globe from "../../../public/globe.svg";
async function Gallary() {
  // const data = await fetch(
  //   "https://unsplash.com/photos/a-butterfly-on-a-flower-4UeoE3Wn-oE",
  // );
  // const photos = await data.json();
  // console.log(photos);

  const photos = await fetch(
    "https://jsonplaceholder.typicode.com/albums/1/photos",
  ).then((res) => res.json());
  console.log(photos);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center">Gallary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {photos.map((photo) => (
          <div key={photo.id} className="card bg-base-100 shadow-xl">
            <figure>
              <Image
                src={photo.url}
                alt={photo.title}
                width={500}
                height={300}
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{photo.title}</h3>
            </div>
          </div>
        ))}

        {/* https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI */}
        <Image src={globe} alt="globe" width={300} height={300} />
        {/* <Image src={globe} alt="globe" width={300} height={300} /> */}
      </div>
    </div>
  );
}

export default Gallary;
