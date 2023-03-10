import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "hm42f1li",
  dataset: "production",
  apiVersion: "2023-10-03",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
