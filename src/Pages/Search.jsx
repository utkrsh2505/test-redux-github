import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserRequest } from "../Redux/action";
import { getUserFailure } from "../Redux/action";

const Search = () => {
  const [name, setName] = useState();
  const [val, setVal] = useState([]);
  const handleChange = (e) => setName(e.target.value);
  const dispatch = useDispatch();
  //console.log(name);
  const handleSearch = (data) => {
    console.log(data);
    var s = data;
    dispatch(getUserRequest());
    return fetch(`https://api.github.com/search/repositories?q=${s}&per_page=4`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.items);
        setVal(res.items);
      })
      .catch((res) => {
        dispatch(getUserFailure());
      });
  };
  return (
    <>
      <h1>search</h1>
      <div>
        <input
          type="text"
          placeholder="Type Something"
          value={name}
          onChange={handleChange}
        />
        <button onClick={() => handleSearch(name)}>Search</button>
      </div>

      <div>
        {val.map((i) => (
          <div key={i.id}>
            <div>{i.owner.login}</div>
            <div>
              <img
                style={{ width: "150px", height: "150px" }}
                src={i.owner.avatar_url}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export { Search };
