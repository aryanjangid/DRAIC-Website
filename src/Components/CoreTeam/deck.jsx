import React, { Component } from 'react';
import Card from './card';
import './deck.css';
class Deck extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cards: []
    }
    this.animation_in_progress = false;
  }

  componentDidMount() {
    let new_cards = [];
    let center = {
      x: parseFloat(this.deck.style.width) / 2,
      y: parseFloat(this.deck.style.width) / 2,
    }
    let total_number_of_cards = 5;
    let middle_card_index = Math.floor(total_number_of_cards / 2)
    let new_x = 0;
    let new_y = 0;
    let new_zindex = 0;
    let new_scale = 0;
    let new_borderRadius = 30;

    for (let i = 0; i < 5; i++) {
      if (i < middle_card_index) {
        new_x = center.x - (390 * (middle_card_index - i));
        new_y = center.y;
        if (i === 0) {
          new_x = new_x + ((0.333 * 280) * (middle_card_index - i + 0.5));
        }
        else {
          new_x = new_x + ((0.333 * 280) * (middle_card_index - i));
        }

        new_zindex = i;
        new_scale = Math.pow(0.80, (middle_card_index - i));
      }
      else {
        new_x = center.x + (390 * (i - middle_card_index));
        new_y = center.y;

        if (i === 4) {
          new_x = new_x - ((0.333 * 280) * (i + 0.5 - middle_card_index));
        }
        else {
          new_x = new_x - ((0.333 * 280) * (i - middle_card_index));
        }


        new_zindex = i * (-1.0);
        new_scale = Math.pow(0.80, (i - middle_card_index));

      }
      new_cards.push(
        <Card
          x={new_x}
          y={new_y}
          z_index={i === middle_card_index ? 100 : new_zindex}
          opacity={i === middle_card_index ? 1 : 1}
          scale={new_scale}
          //picsum_img={imgarray[i]}
          name={name[i]}
          surname={surname[i]}
          dep={dep[i]}
          borderRadius={new_borderRadius}
        />
      )
    }
    this.setState({ cards: new_cards })

  }

  handle_next = () => {
    if (!this.animation_in_progress) {
      this.animation_in_progress = true;
      let last_card_left = this.deck.children[this.deck.children.length - 1].style.left;
      let last_card_zIndex = this.deck.children[this.deck.children.length - 1].style.zIndex;
      let last_card_transform = this.deck.children[this.deck.children.length - 1].style.transform;

      for (let i = this.deck.children.length - 1; i > 0; i--) {
        this.deck.children[i].style.transitionDuration = '1.0s';
        this.deck.children[i].style.left = this.deck.children[i - 1].style.left;
        this.deck.children[i].style.transform = this.deck.children[i - 1].style.transform;
        this.deck.children[i].style.zIndex = this.deck.children[i - 1].style.zIndex;
      }

      this.deck.children[0].style.transitionDuration = '0.2s';
      this.deck.children[0].style.transform = 'translate(-50%,-50%) scale(0)';

      setTimeout(() => {
        this.deck.children[0].style.transitionDuration = '0.0s';
        this.deck.children[0].style.left = last_card_left;
        this.deck.children[0].style.zIndex = last_card_zIndex;

        this.deck.appendChild(this.deck.children[0]);

        setTimeout(() => {
          this.deck.children[this.deck.children.length - 1].style.transitionDuration = '0.2s';
          this.deck.children[this.deck.children.length - 1].style.transform = last_card_transform;

          this.animation_in_progress = false;
        }, 100)
      }, 700)

    }
    else {
      return;
    }


  }

  handle_previous = () => {

    if (!this.animation_in_progress) {
      this.animation_in_progress = true;
      let first_card_left = this.deck.children[0].style.left;
      let first_card_zIndex = this.deck.children[0].style.zIndex;
      let first_card_transform = this.deck.children[0].style.transform;

      for (let i = 0; i < this.deck.children.length - 1; i++) {
        this.deck.children[i].style.transitionDuration = '1.0s';
        this.deck.children[i].style.left = this.deck.children[i + 1].style.left;
        this.deck.children[i].style.transform = this.deck.children[i + 1].style.transform;
        this.deck.children[i].style.zIndex = this.deck.children[i + 1].style.zIndex;
      }

      this.deck.children[this.deck.children.length - 1].style.transitionDuration = '0.2s';
      this.deck.children[this.deck.children.length - 1].style.transform = 'translate(-50%,-50%) scale(0)';

      setTimeout(() => {
        this.deck.children[this.deck.children.length - 1].style.transitionDuration = '0.0s';
        this.deck.children[this.deck.children.length - 1].style.left = first_card_left;
        this.deck.children[this.deck.children.length - 1].style.zIndex = first_card_zIndex;

        this.deck.insertBefore(this.deck.children[this.deck.children.length - 1], this.deck.children[0])

        setTimeout(() => {
          this.deck.children[0].style.transitionDuration = '0.2s';
          this.deck.children[0].style.transform = first_card_transform;

          this.animation_in_progress = false;
        }, 100)
      }, 700)

    }
    else {
      return;
    }


  }
  render() {
    return (<div>
      <div className='space'></div>
      <div className="firstrow">
        <h1 className="wheredowe">FINDING INSPIRATION IN EVERY TURN</h1>
        <div className="seperator">
          <div className="lineaboutus1"></div>
          <div>
            <h1 className="aboutusheading">OUR TEAM</h1>
          </div>
          <div className="lineaboutus2"></div>
        </div>

      </div>

      <div ref={ref_id => this.deck = ref_id} style={styles.deck}>
        {this.state.cards}
      </div>
      <div className='deck-button' >
        <button className='button2' onClick={this.handle_previous}></button>
        <button className='button1' onClick={this.handle_next}></button>
      </div>
    </div>
    )
  }
}





// const imgarray = [
//   'https://picsum.photos/200/300',
//   'https://picsum.photos/200/300',
//   'https://picsum.photos/200/300',
//   'https://picsum.photos/200/300',
//   'https://picsum.photos/200/300',
// ]


const name = [
  'PRATHIS',
  'SUMEDH',
  'SAGAR',
  'AXASUSAN',
  'ABHISHEK',
]

const surname = [
  'UPADHYAY',
  'SALVEKAR',
  'WARUNGASE',
  'MATHEW',
  'BORSE',
]

const dep = [
  'PROGRAMING HEAD',
  'CAPTAIN',
  'MECHANICAL HEAD',
  'ELECTRICAL HEAD',
  'VICE_CAPTAIN',
]

const styles = {
  deck: {
    textAlign: 'center',
    position: 'relative',
    // top:'100%',
    left: '50%',
    transform: 'translate(-50%,20%)',
    height: '300px',
    width: '300px',
  }


}

export default Deck;
