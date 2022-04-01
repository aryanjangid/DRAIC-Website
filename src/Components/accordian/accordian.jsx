import { React, useState } from "react";
import "./accordian.css";

const data = [
  // {
  //   question: "What is DRAIC-DYPCOE?",
  //   answer:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut soluta perferendis! Distinctio eaque voluptates saepe recusandae nisi, illum ullam? Ducimus maiores earum pariatur nesciunt quae, quaerat quidem, laborum minima corrupti, voluptate adipisci repellendus?",
  // },
  {
    question: "Who can join DRAIC?",
    answer:
      "Any student of DYPCOE college with an aptitude for learning and applying those skills in the field of robotics and AI can join us, irrespective of the branch or year they are studying in! ",
  },
  {
    question: "How to join DRAIC?",
    answer:
      "We as a club conduct recruitment for all the departments annually. By having basic knowledge and skills about the department you want to get in, you can clear the recruitment rounds and join us! Again, it’s not a compulsion to be in a particular branch to get into a department!!",
  },
  {
    question: "What can you expect from DRAIC?",
    answer:
      "You’ll learn technical and personal skills, get the experience of working as a team, get freedom and support to explore new projects, and much more!",
  },
  {
    question: "What are our working hours?",
    answer:
      "DRAIC has flexible working hours usually after college",
  },
  // {
  //   question: "Is there a fee requirement?",
  //   answer:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut soluta perferendis! Distinctio eaque voluptates saepe recusandae nisi, illum ullam? Ducimus maiores earum pariatur nesciunt quae, quaerat quidem, laborum minima corrupti, voluptate adipisci repellendus?",
  // },
];

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

export default Accordian;
