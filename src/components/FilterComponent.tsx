import MyInput from "./UI/MyInput/MyInput";
import Selector from "./UI/Selector/Selector";

type PropsType = {
  sort: string;
  search: string;
};

const FilterComponent: React.FC<PropsType> = (filter, setFilter) => {
  return (
    <div>
      <MyInput
        // @ts-ignore
        value={filter.search}
        onChange={(event: any) =>
          setFilter({ ...filter, search: event.target.value })
        }
        placeholder='Поиск...'
      />
      <Selector
        value={filter.sort}
        onChange={(selectorSort) =>
          setFilter({ ...filter, sort: selectorSort })
        }
        defValue='сортировака по'
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
    </div>
  );
};

export default FilterComponent;
