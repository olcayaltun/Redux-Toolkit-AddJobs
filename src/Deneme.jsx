import React from "react";

import { MdLocationPin } from "react-icons/md";
import { BsAndroid } from "react-icons/bs";
import Delete from "./Delete";
const Deneme = ({ data, index }) => {
  if (!data) {
    return null; // Eğer 'data' undefined veya null ise bileşeni render etme
  }

  // Şirketin adının ilk harfini büyük harf olarak al
  let harf = data.company ? data.company[0].toLocaleUpperCase() : "";

  // Date formatını kontrol edip geçerli bir tarih oluşturulmasını sağlama
  let dates = new Date(data.date);
  if (isNaN(dates.getTime())) {
    // Eğer tarih geçersizse, bir uyarı veya varsayılan değer döndürebilirsiniz
    dates = "Geçersiz tarih";
  } else {
    // Tarihi daha okunabilir bir formata çevirme
    dates = dates.toLocaleDateString(); // Bu, tarihi "GG/AA/YYYY" formatında döndürecektir
  }

  const Renk = () => {
    if (data.status === "Mülakat") {
      return "bg-yellow-500";
    } else if (data.status === "Devam Ediyor") {
      return "bg-green-500";
    } else {
      return "bg-red-500";
    }
  };

  return (
    <div
      className={`bg-black m-5 w-[330px] max-h-[210px] rounded-md p-3 shadow shadow-violet-500`}
    >
      <div className="flex justify-between items-center">
        <span className="bg-[#a88bfa] p-2 w-12 rounded-xl text-white grid place-items-center text-2xl ms-center">
          {harf} {/* Şirket isminin ilk harfi burada gösteriliyor */}
        </span>
        <div>
          <p>{data.position}</p>
          <p className="text-2xl font-bold">{data.company}</p>
        </div>
        <div className="hover:bg-[#a88bfa] p-2 rounded-full">
          <Delete id={data.id} />
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 mb-4">
        <p className="flex justify-center items-center">
          <span className="text-white">
            <MdLocationPin />
          </span>
          {data.location}
        </p>
        <p className="flex justify-center items-center gap-2">
          <span className="font-bold text-white">
            <BsAndroid />
          </span>
          {data.type}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <p>{dates}</p>
        <p className={`p-1 text-white rounded-md ${Renk()}`}>{data.status}</p>
      </div>
    </div>
  );
};

export default Deneme;
