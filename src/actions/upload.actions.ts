"use server";
import { put } from "@vercel/blob";

export const uploadFile = async (formData: FormData) => {
  const file = formData.get("file") as File;
  const filename = file.name;
  const blob = await put(filename, file, {
    access: "public",
  });
  return blob.url;
};

//to teratany server
export const uploadMultipleFile = async (
  formData: FormData
): Promise<string[]> => {
  // Envoyer directement le formData contenant les fichiers

  const uploadResponse = await fetch(`${process.env.FILE_SERVER}/`, {
    method: "POST",
    body: formData,
    headers: {},
  });
  console.log(uploadResponse);

  if (!uploadResponse.ok) {
    throw new Error(`Upload failed: ${uploadResponse.statusText}`);
  }

  const responseData = await uploadResponse.json();
  // Mapper les URLs retournées pour inclure le chemin complet
  const urls = responseData.map((filename: string) => {
    return `${process.env.FILE_SERVER}/public/${filename}`;
  });
  return urls;
};

export const uploadOneFile = async (formData: FormData): Promise<string> => {
  // Envoyer directement le formData contenant les fichiers
  const uploadResponse = await fetch(`${process.env.FILE_SERVER}/`, {
    method: "POST",
    body: formData,
    headers: {},
  });

  if (!uploadResponse.ok) {
    throw new Error(`Upload failed: ${uploadResponse.statusText}`);
  }

  const responseData = await uploadResponse.json();
  // Mapper les URLs retournées pour inclure le chemin complet
  const urls = responseData.map((filename: string) => {
    return `${process.env.FILE_SERVER}/public/${filename}`;
  });
  return urls[0];
};
