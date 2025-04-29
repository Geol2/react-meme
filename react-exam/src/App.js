import { useState } from "react";

import Section from "./Section";

function App() {
  const onHoverFirstSectionHandler = () => {
    console.log("Hover");
  };

  const onHoverLastSectionHandler = () => {
    alert("Hover!");
  };

  const [title, setTitle] = useState("Untitle");

  const onKeyUpHandler = (event) => {
    const value = event.currentTarget.value;

    // title state의 값을 변경
    setTitle(value);
  };

  return (
    <div>
      <input type="text" onKeyUp={onKeyUpHandler} />
      <Section
        onMouseEnter={onHoverFirstSectionHandler}
        title={title}
        color="#00F"
        bgColor="#FF0"
      />
      <Section title={title} color="#333" bgColor="#F00" />
      <Section color="#0F0" bgColor="#0FF" />
      <Section onMouseEnter={onHoverLastSectionHandler}>
        <h1>Ths is Children Element</h1>
      </Section>
    </div>
  );
}

export default App;
