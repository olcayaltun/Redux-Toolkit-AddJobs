const Select = ({ label, options, name, fn }) => {
  return (
    <div className=" flex flex-col">
      <label htmlFor={name}>{label}</label>
      <select
        onChange={fn}
        defaultValue={""}
        id={name}
        name={name}
        required
        className="p-2 rounded-md"
      >
        <option hidden value={""}>
          Seçiniz
        </option>

        {options.map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
