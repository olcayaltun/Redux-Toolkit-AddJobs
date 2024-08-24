import React, { useEffect } from "react";
import { statusOpt, typeOpt } from "./utils/costanst";
import Api from "./utils/Api";
import Button from "./Ekle/Button";
import InputR from "./Ekle/InputR";
import Select from "./Ekle/Select";
import { setLoading, setError, setJobs, addJob } from "./Redux/Slice/JobSlice";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setLoading());
    Api.get("/jobs")
      .then((res) => {
        dispatch(setJobs(res.data)); // Veriyi state'e kaydet
      })
      .catch((err) => dispatch(setError(err.message)));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const dataA = Object.fromEntries(data.entries());
    dataA.id = v4();
    dataA.date = Date.now();
    Api.post("/jobs", dataA).then(() =>
      dispatch(addJob(dataA)).catch((err = console.log(err.message)))
    );
    navigate("/list");

    console.log(dataA);
  };
  return (
    <div className=" grid place-items-center bg-black h-[450px] w-[350px] rounded-md shadow shadow-violet-600 px-3">
      <h1 className=" font-extrabold text-2xl  ">Yeni Is Ekle</h1>
      <form action="" className="  gap-5" onSubmit={handleSubmit}>
        <InputR label="Pozisyon" name="position" />
        <InputR label="Sirket" name="company" />
        <InputR label="Lokasion" name="location" />
        <Select label="Durum" name="status" options={statusOpt} />
        <Select label="Tür" name="type" options={typeOpt} />
        <Button text="Olustur" />
      </form>
    </div>
  );
};

export default App;
