import React, { useState } from 'react';
import Select from 'react-select';



export default function Checklist({options, placeholder}) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="App text-black w-[288px]">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isMulti
        placeholder={placeholder}
        isSearchable
        theme={(theme) => ({
            ...theme,
            borderRadius:5,
            colors: {
            ...theme.colors,
              text: 'orangered',
              primary25: 'orange',
              primary: 'hotpink',
              borderColor: 'white',
            },
          })}
        

      />
    </div>
  );
}