export interface Giphy {
  type: Type;
  id: string;
  url?: string;
  slug?: string;
  username?: string;
  source?: string;
  title: string;
  images: Images;
  user?: User;
}

interface Images {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size?: string;
  mp4?: string;
  webp_size: string;
  webp: string;
  frames?: string;
  hash?: string;
}

export enum Type {
  GIF = "gif",
  STICKERS = "stickers",
}

interface User {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  instagram_url: string;
  website_url: string;
  is_verified: boolean;
}
