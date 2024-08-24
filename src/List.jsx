import { useSelector } from "react-redux";
import Deneme from "./deneme";
import Filter from "./Filter";
const List = () => {
  // Redux store'dan state'i çekiyoruz
  const { error, isLoading, jobs } = useSelector((state) => state.jobReducer);
  if (isLoading) {
    return <p>Loading...</p>; // Yükleniyor mesajı
  }

  if (error) {
    return <p>Error: {error}</p>; // Hata mesajı
  }
  console.log(jobs);
  return (
    <div>
      <div>
        <Filter />
      </div>
      <ul className=" flex flex-wrap">
        {jobs.map((data, index) => (
          <li key={index}>
            <Deneme data={data} key={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
