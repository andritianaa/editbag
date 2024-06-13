/* eslint-disable @next/next/no-img-element */
import type { PageParams } from "@/types/next";
import { createClient, PhotosWithTotalResults } from "pexels";

export default async function RoutePage(props: PageParams<{}>) {
  // const client = createClient(process.env.PEXELS_API_KEY!);
  // let photos: PhotosWithTotalResults = {
  //   photos: [],
  //   total_results: 0,
  //   page: 1,
  //   per_page: 10,
  //   next_page: 0,
  // }; // Initialisation avec une structure vide

  // await client.photos
  //   .search({
  //     query: "Ocean",
  //     orientation: "landscape",
  //   })
  //   .then((photosRes) => {
  //     photos = photosRes as PhotosWithTotalResults;
  //     console.log(photos.photos[0]?.src);
  //   });

  // if (photos.total_results === 0) return <p>Aucune photo trouvée.</p>; // Gestion du cas où aucune photo n'est trouvée

  return (
    <>
      {/* {photos.photos.map((photo) => (
        <img src={photo.src.medium} alt={photo.url} key={photo.id} />
      ))} */}
    </>
  );
}
