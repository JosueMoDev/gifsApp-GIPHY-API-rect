import { Giphy } from "./gyphy";

export interface GiphyResponse {
  data: Giphy[];
  pagination: Pagination;
}



export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}
