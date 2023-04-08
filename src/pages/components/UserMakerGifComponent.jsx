export const UserMakerGifComponent = ({ item }) => {
  return (
    <div className="w-12/12 sm:w-5/12">
      {item.user && (
        <div className="flex items-center  py-6">
          <img
            className="mr-2 w-8 h-8 sm:w-12 sm:h-12  object-cover "
            src={item?.user.avatar_url}
            alt="avatar"
          />
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-xs sm:text-md font-bold text-white ">
                {item?.user.display_name}
              </h2>
            </div>
            <p className="text-gray-100 text-xs">@{item?.user.username}</p>
          </div>
        </div>
      )}

      <div className="hidden md:block items-center  py-6">
        <p className="text-white text-sm font-semibold">Source </p>
        <a
          href={item?.user?.website_url}
          target="_blank"
          className="text-sm text-white lowercase cursor-pointer hover:underline"
        >
          {item?.user?.website_url}
        </a>
      </div>
    </div>
  );
};
