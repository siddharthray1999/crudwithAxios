import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [inputdata, setInputdata] = useState({ name: "", email: "" ,id:""});

  const navigate = useNavigate();
  function handlesubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3030/users", inputdata)
      .then((res) => {
        alert("data added successfully");
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <div className="flex w-[200px] h-[200px]">
      <form onSubmit={handlesubmit}>
      <label className="ml-7 text-l font-semibold">id:</label>
        <input
          type="text"
          className="w-[450px] h-[50px] ml-7 mr-10 bg-white border border-slate-300 p-4"
          onChange={(e) => setInputdata({ ...inputdata, id: e.target.value })}
        />
        <label className="ml-7 text-l font-semibold">First name:</label>
        <input
          type="text"
          className="w-[450px] h-[50px] ml-7 mr-10 bg-white border border-slate-300 p-4"
          onChange={(e) => setInputdata({ ...inputdata, name: e.target.value })}
        />
        <label className="ml-7 text-l font-semibold">Email</label>
        <input
          type="text"
          className="w-[450px] h-[50px] ml-7 mr-10 bg-white border border-slate-300 p-4"
          onChange={(e) =>
            setInputdata({ ...inputdata, email: e.target.value })
          }
        />

        <button className="bg-[#00AB7F] text-white font-semibold w-[100px] h-[40px] ml-7 mt-5">
          submit
        </button>
      </form>
    </div>
  );
}

export default Create;
