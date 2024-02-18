import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function Update() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3030/users/` + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3030/users/` + id, data).then((res) => {
      alert("data update successfully");
      navigate("/");
    });
  };
  return (
    <div className="flex w-[200px] h-[200px]">
      <form onSubmit={handlesubmit}>
        <label className="ml-7 text-l font-semibold">id:</label>
        <input
          value={data.id}
          disabled
          type="text"
          className="w-[450px] h-[50px] ml-7 mr-10 bg-white border border-slate-300 p-4"
        />
        <label className="ml-7 text-l font-semibold">First name:</label>
        <input
          value={data.name}
          type="text"
          className="w-[450px] h-[50px] ml-7 mr-10 bg-white border border-slate-300 p-4"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <label className="ml-7 text-l font-semibold">Email</label>
        <input
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          type="text"
          className="w-[450px] h-[50px] ml-7 mr-10 bg-white border border-slate-300 p-4"
        />

        <button className="bg-[#00AB7F] text-white font-semibold w-[100px] h-[40px] ml-7 mt-5">
          submit
        </button>
      </form>
    </div>
  );
}

export default Update;
