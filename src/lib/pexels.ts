import { PhotoResponse, VideoResponse } from "@/types/pexels";
import axios from "axios";

const buildUrlWithParams = (
  baseUrl: string,
  params: Record<string, string>
) => {
  // Filtrer les clés avec des valeurs non vides
  params.per_page = "20";
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(([key, value]) => value !== "")
  );

  // Vérifier si params filtré est vide
  if (Object.keys(filteredParams).length === 0) {
    return baseUrl; // Retourner seulement l'URL de base si params est vide
  }

  // Construire l'URL avec les paramètres de requête
  const query = new URLSearchParams(filteredParams).toString();
  return `${baseUrl}?${query}`;
};

export const fetchPhotos = async (params): Promise<PhotoResponse> => {
  let baseUrl = "https://api.pexels.com/v1/";
  const token =
    process.env.PEXELS_API_KEY ||
    "3Vbz0uXvmwCTR6gTTsuGSBmfsg9fPPbloUat9PG0H88OqSvJmxr5ArIg";
  if (params.query || params.query != "") {
    baseUrl += "search";
  } else {
    if (
      params.color.length ||
      params.size.length ||
      params.orientation.length
    ) {
      params.query = "nature";
      baseUrl += "search";
    } else {
      baseUrl += "curated";
    }
  }
  const url = buildUrlWithParams(baseUrl, params);

  console.log(url);
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: token,
      },
    });
    console.log(response.data);

    return response.data as PhotoResponse;
  } catch (error) {
    console.error("There was an error making the request:", error);
    throw error; // re-throw the error after logging it
  }
};

export const fetchPhotosFromAll = async (params): Promise<PhotoResponse> => {
  let baseUrl = "https://api.pexels.com/v1/";
  const token =
    process.env.PEXELS_API_KEY ||
    "3Vbz0uXvmwCTR6gTTsuGSBmfsg9fPPbloUat9PG0H88OqSvJmxr5ArIg";
  if (params.query || params.query != "") {
    baseUrl += "search";
  } else {
    baseUrl += "curated";
  }
  const url = buildUrlWithParams(baseUrl, params);

  console.log(url);
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: token,
      },
    });
    console.log(response.data);

    return response.data as PhotoResponse;
  } catch (error) {
    console.error("There was an error making the request:", error);
    throw error; // re-throw the error after logging it
  }
};

export const fetchPhotoNextPage = async (
  url: string
): Promise<PhotoResponse> => {
  const token =
    process.env.PEXELS_API_KEY ||
    "3Vbz0uXvmwCTR6gTTsuGSBmfsg9fPPbloUat9PG0H88OqSvJmxr5ArIg";

  console.log(url);
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: token,
      },
    });
    console.log(response.data);

    return response.data as PhotoResponse;
  } catch (error) {
    console.error("There was an error making the request:", error);
    throw error; // re-throw the error after logging it
  }
};

export const fetchVideos = async (params): Promise<VideoResponse> => {
  let baseUrl = "https://api.pexels.com/videos/";
  const token =
    process.env.PEXELS_API_KEY ||
    "3Vbz0uXvmwCTR6gTTsuGSBmfsg9fPPbloUat9PG0H88OqSvJmxr5ArIg";

  if (params.query && params.query.length) {
    baseUrl += "search";
  } else {
    if (params.color || params.size || params.orientation) {
      params.query = "nature";
      baseUrl += "search";
    } else {
      baseUrl += "popular";
    }
  }
  params.min_duration = 50;

  const url = buildUrlWithParams(baseUrl, params);

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: token,
      },
    });
    return response.data as VideoResponse;
  } catch (error) {
    console.error("There was an error making the request:", error);
    throw error; // re-throw the error after logging it
  }
};

export const fetchVideoNextPage = async (
  url: string
): Promise<VideoResponse> => {
  const token =
    process.env.PEXELS_API_KEY ||
    "3Vbz0uXvmwCTR6gTTsuGSBmfsg9fPPbloUat9PG0H88OqSvJmxr5ArIg";

  console.log(url);
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: token,
      },
    });
    console.log(response.data);

    return response.data as VideoResponse;
  } catch (error) {
    console.error("There was an error making the request:", error);
    throw error; // re-throw the error after logging it
  }
};
