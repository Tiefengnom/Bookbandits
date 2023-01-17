import React, { useState } from 'react';
import Select from 'react-select';

export default function Checklist({options, placeholder, setSelectedOption}) {
  // LIFTED THE STATE TO CATALOGUE const [selectedOption, setSelectedOption] = useState(null);

//   const fetchBooksByLanguage = async () => {
//     const response = await fetch(`http://localhost:4000/bookbandits/collection/language/${selectedOption}`);
//     const json = await response.json();

//     if (response.ok) {
//       setSelectedOption(json);
//     }
// };

  return (
    <div className="App text-black w-[288px]">
      <Select
        onChange={(selection)=>setSelectedOption(selection.value)}
        options={options}
        placeholder={placeholder}
        isSearchable
        theme={(theme) => ({
            ...theme,
            borderRadius:5,
            colors: {
            ...theme.colors,
              text: 'grey',
              primary25: 'orange',
              primary: 'hotpink',
              borderColor: 'white',
            },
          })}
        

      />
    </div>
  );
}