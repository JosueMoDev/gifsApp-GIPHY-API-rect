import { fetchGetASingleGifForSubCategory } from "/src/api/giphyApi";

export const setSubcategories = async (resp) => {
  const categories = await Promise.all(
    resp.map(async ({ subcategories, name, gif }) => {
      const new_subcategories = [];
      let i = 0;
      for (const subcategory of subcategories) {
        i++;
        if (i < 26) {
          if (
            !new_subcategories.some((existets_subcategories) =>
              existets_subcategories.name === subcategory.name ? true : false
            )
          ) {
            const { data } = await fetchGetASingleGifForSubCategory(
              subcategory.name
            );
            const [url] = data.data.map((gif) => gif.images.original.url);
            new_subcategories.push({ name: subcategory.name, gif: url });
          }
        } else {
          i = 0;
          break;
        }
      }
      const category = { name, subcategories: new_subcategories, gif };
      return category;
    })
  );
  return categories;
};
