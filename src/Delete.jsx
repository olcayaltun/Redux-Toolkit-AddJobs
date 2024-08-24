import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Api from "./utils/Api";
import { useDispatch } from "react-redux";
import { deleteJob } from "./Redux/Slice/JobSlice"; // Import the renamed action

const Delete = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (!confirm("Silinecek emin misiniz?")) return;
    Api.delete(`/jobs/${id}`)
      .then((res) => {
        dispatch(deleteJob(id)); // Use the renamed action here
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div onClick={handleDelete}>
      <FaTrashAlt color="white" />
    </div>
  );
};

export default Delete;
