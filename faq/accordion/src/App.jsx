import { useState } from "react";
import "./App.css";
// import Question from './components/Question'

const questions = [
  {
    id: 1,
    title: "Is this a good product?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
  {
    id: 2,
    title: "How much does it cost?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
  {
    id: 3,
    title: "When can I get it?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
];

function App() {
  const [selected, setSelected] = useState(null);

  const toggler = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <>
      <div>
        <h2>FAQ</h2>
        <div className="accordion">
          {questions.map((question, index) => (
            <div className="item" key={index}>
              <div className="title" onClick={() => toggler(index)}>
                {question.title}
                <span>{selected === index ? "-" : "+"}</span>
              </div>
              <div className={selected === index ? "content show" : "content"}>
                {question.info}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
