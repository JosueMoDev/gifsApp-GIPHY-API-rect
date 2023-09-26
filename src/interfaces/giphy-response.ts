export interface GiphyResponse {
  data: Giphy[];
  pagination: Pagination;
}

export interface Giphy{
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

export interface Images {
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
  STICKERS = "stickers"
}

export interface User {
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

export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}
