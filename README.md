# :hourglass_flowing_sand: Search List Text
Filter a list for the given text and provide the formatted results with list items labels to be boldable

[![typescript](https://img.shields.io/npm/types/search-list-text?style=plastic)](https://www.typescriptlang.org/)

## 🚀 Demo
![search-list-text demo](https://raw.githubusercontent.com/farsabbutt/search-list-text/main/demo.gif)

## 📜 Usage
1) Install package by running ``npm install search-list-text`` or ``yarn add search-list-text``
2) Import the method to your project ``import { searchList } from 'search-list-text';``
3) Use the method for example: 
``searchList(list, {searchText: searchText, boldClassName: 'bold', labelKey: 'label'})``

### Full example: 
``` js
import React, { useState } from "react";
import "./styles.css";
import { searchList } from "search-list-text";
function App() {
  const [searchText, setSearchText] = useState("");
  const list = [
    {
      label: "Nike Nike",
      value: "nike"
    },
    {
      label: "Addidas",
      value: "addidas"
    },
    {
      label: "Puma",
      value: "puma"
    },
    {
      label: "Niomi",
      value: "niomi"
    }
  ];

  const changeList = (event) => {
    setSearchText(event.currentTarget.value);
  };

  const filteredList = searchList(list, {
    searchText: searchText,
    boldClassName: "bold",
    labelKey: "label"
  });

  return (
    <div>
      <input type="text" onChange={changeList} />

      <ul className="list">
        {filteredList.map((item) => {
          return <li dangerouslySetInnerHTML={{ __html: item.label }} />;
        })}
      </ul>
    </div>
  );
}

export default App;

```

### View full example on code sandbox: 
[![Edit friendly-sky-uq8mql](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/friendly-sky-uq8mql?fontsize=14&hidenavigation=1&theme=dark)
