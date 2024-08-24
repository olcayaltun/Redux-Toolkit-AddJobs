import React, { useEffect, useState } from "react";
import { statusOpt, typeOpt, sortOpt } from "./utils/costanst";
import Select from "./Ekle/Select";
import Button from "./Ekle/Button";
import Api from "./utils/Api";
import { setError, setLoading, setJobs } from "./Redux/Slice/JobSlice";
import { useDispatch } from "react-redux";
const Filter = () => {
  const [text, setText] = useState();
  const [debauns, setDebauns] = useState();
  const [sort, setSort] = useState();
  const [status, setStatus] = useState();
  const [type, setType] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    if (text === undefined) return;
    const timer = setTimeout(
      () => setDebauns(text),

      5000
    );
    return () => clearTimeout(timer);
  }, [text]);
  useEffect(() => {
    const sortP =
      sort === "a-z" || sort === "z-a"
        ? "company"
        : sort === "En Yeni" || sort === "En Eski"
        ? "date"
        : undefined;

    const orderP =
      sort === "a-z" || sort === "En Eski"
        ? "asc"
        : sort === "z-a" || sort === "En Yeni"
        ? "desc"
        : undefined;
    const params = {
      q: debauns,
      status: status || undefined,
      type: type || undefined,
      _sort: sortP,
      _order: orderP,
    };
    dispatch(setLoading);

    Api.get("/jobs", { params })
      .then((res) => dispatch(setJobs(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  }, [debauns, status, sort, type]);
  console.log(debauns);
  return (
    <div className="grid place-items-center ">
      <h2>Filter FORMU</h2>
      <form action="">
        <div className="grid">
          <label htmlFor="">Ara</label>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            className=" p-2 rounded-md w-[300px]"
          />
        </div>
        <Select
          label="Durum"
          options={statusOpt}
          fn={(e) => setStatus(e.target.value)}
        />
        <Select
          label="Tür"
          options={typeOpt}
          fn={(e) => setType(e.target.value)}
        />

        <Select
          label="Sirala"
          options={sortOpt}
          fn={(e) => setSort(e.target.value)}
        />
        <Button text="Temizle" />
      </form>
    </div>
  );
};

export default Filter;
