type ArrayListType = {
  items: Array<ItemType>;
};


type ItemType = {
  id?: number;
  name?: string;
  age?: number;
  manufacturer?: string;
  model?: string;
  banknote?: string;
  nominal?: number;
  number?: string;
};

export const ArrayList = (props: ArrayListType) => {
  return (
    <ul>
      {props.items.map((item, index) => {
        return (
          <li key={item.id ? item.id : index}>
            <span>
              {item.name && `name: ${item.name} `}
              {item.age && `age: ${item.age} `}
              {item.manufacturer && `manufacturer: ${item.manufacturer} `}
              {item.model && `model: ${item.model} `}
              {item.banknote && `banknote: ${item.banknote} `}
              {item.nominal && `nominal: ${item.nominal} `}
              {item.number && `number: ${item.number} `}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
