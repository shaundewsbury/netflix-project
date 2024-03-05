import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full object-cover h-[400px]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/7deca749-ba2f-4acb-a801-c20b258629ad/GB-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]" />
        <div className="absolute top-[20%] p-4 md:p-8">
          <h3 className="text-3xl md:text-5xl font-bold">My Shows</h3>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
