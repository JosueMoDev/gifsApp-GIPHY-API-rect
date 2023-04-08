import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useGetResposeBySearchTerm, useSetUi } from "../hooks";
import { useState, useEffect } from "react";
import { fetchGetSearchTags } from "../api";

export const InputSeachComponent = () => {
  const { startSearching, searchTerm, isSearching } =
    useGetResposeBySearchTerm();
  const { startOpenAutoComplete, startCloseAutoComplete, isAutoCompleteOpen } =
    useSetUi();

  const [inputValue, setInputValue] = useState(searchTerm);
  const [searchTags, setSearchTags] = useState([]);

  const onButtonClick = (tag) => startSearching(tag);

  useEffect(() => {
    setInputValue(searchTerm);
    if (searchTerm !== "" && !isSearching) {
      startSearching(searchTerm);
    }
  }, [searchTerm]);

  const getSearchTags = async () => {
    const termsRelated = await fetchGetSearchTags(inputValue);
    const tags = termsRelated.data.data.map((tag) => tag.name);
    setSearchTags(tags);
  };

  const onInputChange = ({ target }) => {
    const input = target.value;
    setInputValue(input);

    const input_value = input.trim().toLowerCase();

    if (isAutoCompleteOpen && input_value.length < 1) startCloseAutoComplete();

    if (!isAutoCompleteOpen && input_value !== "" && input_value.length > 0)
      startOpenAutoComplete();

    if (input_value.length >= 1) {
      getSearchTags();
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const input = inputValue.trim().toLowerCase();
    if (input.length <= 1) return;
    if (searchTerm === inputValue.toLowerCase()) return;
    startSearching(input);
  };

  return (
    <>
      <div className="flex">
        <form className="w-full" onSubmit={onSubmit}>
          <div className="relative w-auto">
            <div
              className="absolute inset-y-0 right-0 outline-none rounded-md bg-gradient-to-l from-pink-500
                         via-red-400 to-red-500 flex  justify-center items-center w-12 md:w-14  pointer-events-none"
            >
              <FontAwesomeIcon
                className="text-gray-50 text-lg md:text-xl lg:text-2xl "
                icon={faSearch}
              />
            </div>
            <input
              type="text"
              className="
                            rounded-md border bg-gray-100
                            placeholder-gray-500 placeholder
                            border-gray-400 px-3 py-3 text-gray-900
                            focus:z-10 focus:outline-none text-xs md:text-xl 
                                block w-full md:pl-5 p-2.5 
                            "
              placeholder="Search all the GIFs and Stickers"
              value={inputValue}
              onChange={onInputChange}
            />
          </div>
          {isAutoCompleteOpen && searchTags.length > 0 && (
            <div className=" bg-gray-100 w-full h-auto rounded-md mt-0.5">
              <ol className=" w-full h-auto py-2 grid divide-y divide-dashed divide-slate-300 px-3">
                {searchTags.map((tag) => (
                  <a
                    onClick={() => {
                      onButtonClick(tag);
                      startCloseAutoComplete();
                    }}
                    key={tag}
                    className=" py-1 cursor-pointer text-sm sm:text-base"
                  >
                    {tag}
                  </a>
                ))}
              </ol>
            </div>
          )}
        </form>
      </div>
    </>
  );
};
