import { React, useState } from "react";
import "./accordian.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="outerfaq">
      <div className="firstrow">
        <h1 data-aos={"zoom-out"} className="wheredowe">
          DO YOU HAVE SOME QUESTIONS
        </h1>
        <div className="seperator">
          <div
            data-aos={"fade-right"}
            data-aos-delay={"700"}
            className="lineaboutus1"
          ></div>
          <div>
            <h1
              data-aos={"zoom-out"}
              data-aos-delay={"700"}
              className="aboutusheading"
            >
              FAQ
            </h1>
          </div>
          <div
            data-aos={"fade-left"}
            data-aos-delay={"700"}
            className="lineaboutus2"
          ></div>
        </div>
        <div className="wrapper">
          <div className="accordion">
            {data.map((item, i) => (
              <div className="item">
                <div className="ac_title" onClick={() => toggle(i)}>
                  <h2 className="faq_question">{item.question}</h2>
                  <span>{selected === i ? "-" : "+"}</span>
                </div>
                <div className={selected === i ? "content show" : "content"}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    question: "Question 1",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut soluta perferendis! Distinctio eaque voluptates saepe recusandae nisi, illum ullam? Ducimus maiores earum pariatur nesciunt quae, quaerat quidem, laborum minima corrupti, voluptate adipisci repellendus?",
  },
  {
    question: "Question 2",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut soluta perferendis! Distinctio eaque voluptates saepe recusandae nisi, illum ullam? Ducimus maiores earum pariatur nesciunt quae, quaerat quidem, laborum minima corrupti, voluptate adipisci repellendus?",
  },
  {
    question: "Question 3",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut soluta perferendis! Distinctio eaque voluptates saepe recusandae nisi, illum ullam? Ducimus maiores earum pariatur nesciunt quae, quaerat quidem, laborum minima corrupti, voluptate adipisci repellendus?",
  },
  {
    question: "Question 4",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut soluta perferendis! Distinctio eaque voluptates saepe recusandae nisi, illum ullam? Ducimus maiores earum pariatur nesciunt quae, quaerat quidem, laborum minima corrupti, voluptate adipisci repellendus?",
  },
  {
    question: "Question 5",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut soluta perferendis! Distinctio eaque voluptates saepe recusandae nisi, illum ullam? Ducimus maiores earum pariatur nesciunt quae, quaerat quidem, laborum minima corrupti, voluptate adipisci repellendus?",
  },
  {
    question: "Question 6",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut soluta perferendis! Distinctio eaque voluptates saepe recusandae nisi, illum ullam? Ducimus maiores earum pariatur nesciunt quae, quaerat quidem, laborum minima corrupti, voluptate adipisci repellendus?",
  },
];

export default Accordian;
