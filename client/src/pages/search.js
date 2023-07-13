import React, { useState } from "react";
import Axios from "axios";
import SearchIcon from '@mui/icons-material/Search';

export const Search = ({isDark}) => {
  const [plant, setPlant] = useState("");
  const [dplant, setDplant] = useState("");

  const findPlant = () => {
    Axios.get(`http://localhost:5000/plant/${plant}`)
      .then((response) => {
        setDplant(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{minHeight:'100vh'}}
    className={`ml-[4%] w-[96%] h-[auto]  py-6 ${isDark ? 'bg-[#080d14]':'bg-[#d4d9d6]'  } '  }`}>
      <div
        className={`flex flex-col justify-center items-center  mx-[4vmax] p-16`}>
       <p className="font-bold text-[3vmin] text-gray-500">What are you looking for?</p>
       <br/>
       <div className="flex">
        <input
          className=" border-[1px] px-4 h-8 bg-transparent text-gray-500  border-t-[transparent] border-r-[transparent] border-b-[#03a678] border-l-[transparent] border-2 "
          type="text"
          placeholder="Plant..."
          onChange={(event) => {
            setPlant(event.target.value);
          }}
        />
        <br />
        <br />
        <button
          className="h-8  w-[35px] h-[35px] bg-transparent text-[#03a678] rounded-[50%]
        "
          onClick={findPlant}
        ><SearchIcon
        style={{fontSize:'1.7rem'}}
        />
        </button>
        </div>
      </div>

      <br />
      <br />

      <div className="flex flex-wrap justify-center ">
        {dplant.length > 0 ? (
          dplant.map((plant) => (
            <div
              className={`info-card border-1 mx-2 py-2 px-2 flex flex-row flex-wrap rounded-[2px] w-[25vmin] h-[28vmin] mb-10 hover:scale-110 hover:bg-[#2d3c54] ${isDark ?  'bg-[#171e29]':'bg-[#aaadab]'}  `}
              key={plant.id}
            >
              <img
                className=" w-[20vmin] h-[20vmin] mx-auto mt-[-20px] hover:scale-110 rounded-[50%]"
                src={plant.image_url}
                alt="Plant"
              />

              <p className="text-center font-bold text-[2vmin] text-[#d8e8e3]">{plant.common_name}</p>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>

    </div>
  );
};

export default Search;
