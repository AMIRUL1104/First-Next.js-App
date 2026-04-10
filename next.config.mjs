/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
// https://jsonplaceholder.typicode.com/albums/1/photos
// https://via.placeholder.com/150/56a8c2
// https://unsplash.com/photos/a-butterfly-on-a-flower-4UeoE3Wn-oE
// https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI
// https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4
