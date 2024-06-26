/**
 * Représente les différentes tailles disponibles d'une photo.
 */
export interface PhotoSrc {
  original: string; // URL de l'image originale
  large2x: string; // URL de grande taille (2x)
  large: string; // URL de grande taille
  medium: string; // URL de taille moyenne
  small: string; // URL de petite taille
  portrait: string; // URL en format portrait
  landscape: string; // URL en format paysage
  tiny: string; // URL de très petite taille
}

/**
 * Représente une photo avec ses détails.
 */
export interface Photo {
  id: number; // Identifiant de la photo
  width: number; // Largeur de la photo en pixels
  height: number; // Hauteur de la photo en pixels
  url: string; // URL de la photo
  photographer: string; // Nom du photographe
  photographer_url: string; // URL du profil du photographe
  photographer_id: number; // Identifiant du photographe
  avg_color: string; // Couleur moyenne dominante de la photo (en hexadécimal)
  src: PhotoSrc; // Différentes sources de la photo (voir PhotoSrc)
  liked: boolean; // Indique si l'utilisateur a aimé cette photo
  alt: string; // Texte alternatif de la photo
}

/**
 * Représente la réponse à une requête de photos.
 */
export interface PhotoResponse {
  page: number; // Numéro de la page actuelle
  per_page: number; // Nombre de photos par page
  photos: Photo[]; // Liste des photos dans la réponse
  next_page: string | null | undefined;
}
// Interface représentant les informations d'un fichier vidéo
export interface VideoFile {
  id: number; // Identifiant unique du fichier vidéo
  quality: string; // Qualité de la vidéo (par exemple, "hd", "sd", "uhd")
  file_type: string; // Type de fichier de la vidéo (par exemple, "video/mp4")
  width: number; // Largeur de la vidéo en pixels
  height: number; // Hauteur de la vidéo en pixels
  fps: number; // Images par seconde de la vidéo
  link: string; // URL vers le fichier vidéo
  size: number; // Taille du fichier vidéo en octets
}

// Interface représentant les informations d'une vidéo
export interface Video {
  id: number; // Identifiant unique de la vidéo
  width: number; // Largeur de la vidéo en pixels
  height: number; // Hauteur de la vidéo en pixels
  duration: number; // Durée de la vidéo en secondes
  full_res: any; // Résolution complète de la vidéo (non utilisée dans cet exemple)
  tags: string[]; // Liste des balises associées à la vidéo
  url: string; // URL de la vidéo sur Pexels
  image: string; // URL de l'image miniature de la vidéo
  avg_color: any; // Couleur moyenne de la vidéo (non utilisée dans cet exemple)
  user: {
    id: number; // Identifiant de l'utilisateur ayant téléchargé la vidéo
    name: string; // Nom de l'utilisateur
    url: string; // URL du profil de l'utilisateur sur Pexels
  };
  video_files: VideoFile[]; // Liste des fichiers vidéo disponibles pour cette vidéo
  video_pictures: {
    id: number; // Identifiant de l'image miniature
    nr: number; // Numéro de l'image miniature
    picture: string; // URL de l'image miniature
  }[];
}

// Interface représentant la réponse complète de l'API Pexels pour une recherche de vidéos
export interface VideoResponse {
  page: number; // Page actuelle des résultats
  per_page: number; // Nombre d'éléments par page
  videos: Video[]; // Liste des vidéos
  total_results: number; // Nombre total de résultats
  next_page: string; // URL de la page suivante des résultats
  url: string; // URL de l'API Pexels utilisée pour la recherche
}
