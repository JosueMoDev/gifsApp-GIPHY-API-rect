import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { useGetTrendingResponse } from "../hooks";
import { ListItemContainer } from "../components";

export const HomePage = () => {
  const { gifs } = useGetTrendingResponse();

  return (
    <Fragment>
      {
        <div className="bg-transparent capitalize ">
          <div className="mx-5 mt-10">
            <div className="flex items-center content-center pt-5">
              <FontAwesomeIcon
                className="text-blue-600  text-2xl pr-2"
                icon={faArrowTrendUp}
              />
              <span className="text-gray-200 font-bold text-2xl">Trending</span>
            </div>
            <ListItemContainer itemList={gifs} />
          </div>
        </div>
      }
    </Fragment>
  );
};
