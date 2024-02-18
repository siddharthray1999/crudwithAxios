import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function App() {
  const [column, setColumn] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3030/users").then((res) => {
      setColumn(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  }, []);
  function handledelete(id) {
    const confirm = window.confirm("do you want to delete ?");
    if (confirm) {
      axios
        .delete(`http://localhost:3030/users/${id}`)
        .then((res) => {
          alert("record had deleted");
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      navigate("/");
    }
  }
  return (
    <>
      <div className="flex justify-center mt-20">
        <Link to="/create">
          <button className="bg-[#00AB7F] text-white font-semibold w-[100px] h-[40px]">
            Add data
          </button>
        </Link>
      </div>

      <div className="flex justify-center items-center">
        <table>
          <thead>
            <tr className="flex gap-5">
              {column.map((c, i) => (
                <th key={i}>{c}</th>
              ))}
            </tr>
            <th>action</th>
          </thead>
          <tbody>
            {records.map((d, i) => (
              <tr key={i} className="flex gap-5">
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>
                  <Link to={`/update/${d.id}`}>
                    <button className="bg-[#00AB7F] text-white font-semibold w-[100px] h-[40px] ml-7 mt-5">
                      update
                    </button>
                  </Link>

                  <button
                    className="bg-red-500 text-white font-semibold w-[100px] h-[40px] ml-7 mt-5"
                    onClick={(e) => handledelete(d.id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
