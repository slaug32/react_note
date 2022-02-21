type OptionsType = {
  value: string;
  name: string;
};
type PropsType = {
  options: Array<OptionsType>;
  defValue: string;
  value: string;
  onChange: (event: string) => void;
};

const Selector: React.FC<PropsType> = ({
  options,
  defValue,
  value,
  onChange,
}) => {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option disabled value=''>
        {defValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Selector;
