import { GiphyResponse, Pagination } from '../interfaces/giphy-response';
import { Giphy } from '../interfaces/gyphy';

export const GyphyMapper = (response: GiphyResponse)  => {
    const data: Giphy[] = response.data.map((gyphy) => {
       const giphy : Giphy= {
            type: gyphy.type,
            id: gyphy.id,
            url: gyphy.url,
            slug: gyphy.slug,
            username: gyphy.username,
            source: gyphy.source,
            title: gyphy.title,
            images: gyphy.images,
            user: gyphy.user,
        }
        return giphy;
    });

    const pagination: Pagination = {
        offset: response.pagination.offset,
        count: response.pagination.offset,
        total_count: response.pagination.total_count,
    }

    return { data, pagination}
}