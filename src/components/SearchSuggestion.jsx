import React, { useState } from "react";

const SearchSuggestion = ({ users, loading, query }) => {
  const names = [];
  users?.map((user) => names.push(user.name));
  return (
    <>
      {query.length > 0 &&
        !loading &&
        names.sort().map((name, id) => {
          return (
            <div key={id} className="flex justify-center rounded">
              <div className="w-80 ml-16 bg-slate-200">
                <h1 className="px-2 py-1 hover:bg-blue-300 hover:cursor-pointer">
                  {name}
                </h1>
              </div>
            </div>
          );
        })}

      {query.length > 0 && loading && (
        <div className="flex justify-center">
          <div className="ml-16 mt-2 w-80 rounded shadow-4xl flex justify-center">
            <h1 className="shadow px-2 py-1"><img src="loading.gif" alt="" /></h1>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchSuggestion;
