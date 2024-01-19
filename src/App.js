// App.js

import React from "react";
import Book from "./Book";
import mock from "./mockData.json";
import { log } from "util";

const App = () => {
  const bookContent = {
    left: <div>Your JSX content for the left page</div>,
    right: <div>Your JSX content for the right page</div>,
  };
  console.log(mock, "mc");

  return (
    <div>
      <Book chapters={mock} />
    </div>
  );
};

export default App;
