import { useSelector } from "react-redux";

const AutoInput = ({ label, name }) => {
  const { jobs } = useSelector((store) => store.jobReducer);

  //  1) sadece istediğimiz değerlerden oluşan bir dizi tanımla
  const arr = jobs.map((job) => job[name]);

  // 2) dizideki tekrar eden elemanları kaldır
  const set = new Set(arr);

  // 3) set'in döndürdğü nesneyi diziye çevir
  const options = Array.from(set);

  return (
    <div className=" flex  flex-col ">
      <label htmlFor={label}>{label}</label>

      <input
        list={name}
        name={name}
        id={label}
        type="text"
        required
        className=" p-1 rounded-md w-[300px] "
      />

      <datalist id={name}>
        {options.map((item) => (
          <option value={item} />
        ))}
      </datalist>
    </div>
  );
};

export default AutoInput;
