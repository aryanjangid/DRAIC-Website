import React, { Component } from "react";
import Card from "./card";
import "./deck.css";
import Prathis from "../../Assets/Core Team/Prahis.jpeg";
import Axa from "../../Assets/Core Team/Axa.jpeg";
import darshan from "../../Assets/Core Team/darshan.jpeg";
import sumedh from "../../Assets/Core Team/Sumedh.jpeg";
import sagar from "../../Assets/Core Team/Sagar.jpeg";
// import arrow from "../../Assets/arrow.png";

// import ourteaminfo from '../../Data/home-our-team';
class Deck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
    this.animation_in_progress = false;
  }

  componentDidMount() {
    let new_cards = [];
    let center = {
      x: parseFloat(this.deck.style.width) / 2,
      y: parseFloat(this.deck.style.width) / 2,
    };
    let total_number_of_cards = 5;
    let middle_card_index = Math.floor(total_number_of_cards / 2);
    let new_x = 0;
    let new_y = 0;
    let new_zindex = 0;
    let new_scale = 0;
    let new_borderRadius = 30;

    for (let i = 0; i < 5; i++) {
      if (i < middle_card_index) {
        new_x = center.x - 350 * (middle_card_index - i);
        new_y = center.y;
        if (i === 0) {
          new_x = new_x + 0.333 * 180 * (middle_card_index - i + 0.5);
        }
        // else if(i===1){
        //   new_x = new_x + ((0.333 * 250) * (middle_card_index - i));
        // }
        else {
          new_x = new_x + 0.333 * 150 * (middle_card_index - i);
        }

        new_zindex = i;
        new_scale = Math.pow(0.8, middle_card_index - i);
      } else {
        new_x = center.x + 390 * (i - middle_card_index);
        new_y = center.y;

        if (i === 4) {
          new_x = new_x - 0.333 * 280 * (i + 0.5 - middle_card_index);
        }
        // else if(i===5){
        //   new_x = new_x - ((0.333 * 360) * (i - middle_card_index));
        // }
        else {
          new_x = new_x - 0.333 * 260 * (i - middle_card_index);
        }

        new_zindex = i * -1.0;
        new_scale = Math.pow(0.8, i - middle_card_index);
      }
      new_cards.push(
        <Card
          x={new_x}
          y={new_y}
          z_index={i === middle_card_index ? 100 : new_zindex}
          opacity={i === middle_card_index ? 1 : 1}
          scale={new_scale}
          display={middle_card_index ? "show" : "not-show"}
          picsum_img={imgarray[i]}
          name={name[i]}
          surname={surname[i]}
          dep={dep[i]}
          borderRadius={new_borderRadius}
          linkedin={link[i]}
        />
      );
    }

    this.setState({ cards: new_cards });
  }

  handle_next = () => {
    if (!this.animation_in_progress) {
      this.animation_in_progress = true;
      let last_card_left =
        this.deck.children[this.deck.children.length - 1].style.left;
      let last_card_zIndex =
        this.deck.children[this.deck.children.length - 1].style.zIndex;
      let last_card_transform =
        this.deck.children[this.deck.children.length - 1].style.transform;
      // let last_mid_logo = this.deck.children[this.deck.children.length - 1].style.display;

      for (let i = this.deck.children.length - 1; i > 0; i--) {
        this.deck.children[i].style.transitionDuration = "1.0s";
        this.deck.children[i].style.left = this.deck.children[i - 1].style.left;
        this.deck.children[i].style.transform =
          this.deck.children[i - 1].style.transform;
        this.deck.children[i].style.zIndex =
          this.deck.children[i - 1].style.zIndex;
        // this.deck.children[i].style.display = this.deck.children[i - 1].style.display;
      }

      this.deck.children[0].style.transitionDuration = "0.2s";
      this.deck.children[0].style.transform = "translate(-50%,-50%) scale(0)";

      setTimeout(() => {
        this.deck.children[0].style.transitionDuration = "0.0s";
        this.deck.children[0].style.left = last_card_left;
        this.deck.children[0].style.zIndex = last_card_zIndex;
        // this.deck.children[0].style.display=last_mid_logo;

        this.deck.appendChild(this.deck.children[0]);

        setTimeout(() => {
          this.deck.children[
            this.deck.children.length - 1
          ].style.transitionDuration = "0.2s";
          this.deck.children[this.deck.children.length - 1].style.transform =
            last_card_transform;

          this.animation_in_progress = false;
        }, 100);
      }, 700);
    } else {
      return;
    }
  };

  handle_previous = () => {
    if (!this.animation_in_progress) {
      this.animation_in_progress = true;
      let first_card_left = this.deck.children[0].style.left;
      let first_card_zIndex = this.deck.children[0].style.zIndex;
      let first_card_transform = this.deck.children[0].style.transform;

      for (let i = 0; i < this.deck.children.length - 1; i++) {
        this.deck.children[i].style.transitionDuration = "1.0s";
        this.deck.children[i].style.left = this.deck.children[i + 1].style.left;
        this.deck.children[i].style.transform =
          this.deck.children[i + 1].style.transform;
        this.deck.children[i].style.zIndex =
          this.deck.children[i + 1].style.zIndex;
      }

      this.deck.children[
        this.deck.children.length - 1
      ].style.transitionDuration = "0.2s";
      this.deck.children[this.deck.children.length - 1].style.transform =
        "translate(-50%,-50%) scale(0)";

      setTimeout(() => {
        this.deck.children[
          this.deck.children.length - 1
        ].style.transitionDuration = "0.0s";
        this.deck.children[this.deck.children.length - 1].style.left =
          first_card_left;
        this.deck.children[this.deck.children.length - 1].style.zIndex =
          first_card_zIndex;

        this.deck.insertBefore(
          this.deck.children[this.deck.children.length - 1],
          this.deck.children[0]
        );

        setTimeout(() => {
          this.deck.children[0].style.transitionDuration = "0.2s";
          this.deck.children[0].style.transform = first_card_transform;

          this.animation_in_progress = false;
        }, 100);
      }, 700);
    } else {
      return;
    }
  };

  render() {
    return (
      <div>
        <div className="space"></div>
        <div className="core-firstrow">
          <h1 data-aos={"zoom-out"} className="core-subheading">
            FINDING INSPIRATION IN EVERY TURN
          </h1>
          <div className="seperator">
            <div
              data-aos={"fade-right"}
              data-aos-delay={"700"}
              className="core-line1"
            ></div>
            <div>
              <h1
                data-aos={"zoom-out"}
                data-aos-delay={"1000"}
                className="core-heading"
              >
                OUR TEAM
              </h1>
            </div>
            <div
              data-aos={"fade-left"}
              data-aos-delay={"700"}
              className="core-line2"
            ></div>
          </div>
        </div>

        <div ref={(ref_id) => (this.deck = ref_id)} style={styles.deck}>
          {this.state.cards}
        </div>
        <div className="deck-button">
          <button
            data-aos={"zoom-out"}
            className="button2"
            onClick={this.handle_previous}
          >
            {/* &#9001;&nbsp;&nbsp; */}
            {/* <img style={{ transform: "rotate(180deg)" }} src={arrow} alt="" /> */}
            &larr;
          </button>
          <button
            data-aos={"zoom-out"}
            className="button1"
            onClick={this.handle_next}
          >
            {/* &nbsp;&nbsp;&nbsp;&#9002; */}
            {/* <img src={arrow} alt="" /> */}
            &rarr;
          </button>
        </div>
      </div>
    );
  }
}

const imgarray = [Prathis, Axa, sumedh, sagar, darshan];

const name = ["PRATHIS","AXASUSAN", "SUMEDH", "SAGAR", "DARSHAN"];

const surname = ["UPADHYAY", "MATHEW","SALVEKAR", "WARUNGASE","KADAM" ];


const dep = [
  "PROGRAMING HEAD",
  "TEAM MANAGER",

  "TEAM CAPTAIN",
  "VICE CAPTAIN",
  "R & D HEAD",
];

const link=[
  "https://www.linkedin.com/in/prathisupadhyay/",
  "http://www.linkedin.com/in/axasusan-mathew-08067b1b0",
  "https://www.linkedin.com/in/sumedhsalvekar",
  "https://www.linkedin.com/in/sagar-warungase-58321b183/",
  "https://www.linkedin.com/in/darshankadam15/"
]

// const img=[
//   ''
// ]

const styles = {
  deck: {
    textAlign: "center",
    position: "relative",
    // top:'100%',
    left: "50%",
    transform: "translate(-50%,20%)",
    height: "300px",
    width: "300px",
  },
};

export default Deck;
