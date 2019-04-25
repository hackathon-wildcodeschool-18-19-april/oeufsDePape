import React, { Component } from "react";
import axios from "axios";
import recto from './carte_recto.jpg'
import win from './win.jpg'

let __INDEX = 0;
function getIndex() {
  return __INDEX++;
}

function flip(card) {
  return {
    ...card,
    isFlipped: true
  };
}

function unflip(card) {
  return {
    ...card,
    isFlipped: false
  };
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      firstSelectedCard: null,
      secondSelectedCard: null,
      isLoading: false
    };
  }
  componentDidMount() {
    const eggRequests = [
      axios.get("http://easteregg.wildcodeschool.fr/api/eggs/random"),
      axios.get("http://easteregg.wildcodeschool.fr/api/eggs/random"),
      axios.get("http://easteregg.wildcodeschool.fr/api/eggs/random"),
      axios.get("http://easteregg.wildcodeschool.fr/api/eggs/random"),
      axios.get("http://easteregg.wildcodeschool.fr/api/eggs/random"),
   
    ];
    Promise.all(eggRequests).then(responses => {
      this.setState({
        cards: responses
          .map(res => {
            return {
              image: res.data.image,
              isFlipped: false,
              id: getIndex()
            };
          })
          .concat(
            responses.map(res => {
              return {
                image: res.data.image,
                isFlipped: false,
                id: getIndex()
              };
            })
          )
      });
    });
  }

  handleCardClick(clickedCard) {
    const {
      cards,
      firstSelectedCard,
      secondSelectedCard,
      isLoading
    } = this.state;
    if (isLoading) {
      return;
    }
    if (clickedCard.isFlipped) {
      return;
    } else {
      if (!firstSelectedCard) {
        const flippedCard = flip(clickedCard);
        this.setState({
          firstSelectedCard: flippedCard,
          cards: cards.map(card =>
            card.id === clickedCard.id ? flippedCard : card
          )
        });
        return;
      } else if (!secondSelectedCard) {
        const flippedCard = flip(clickedCard);
        this.setState(
          {
            secondSelectedCard: flippedCard,
            cards: cards.map(card =>
              card.id === clickedCard.id ? flippedCard : card
            )
          },
          () => {
            this.setState({
              isLoading: true
            });
            setTimeout(() => {
              const {
                cards,
                firstSelectedCard,
                secondSelectedCard
              } = this.state;
              if (firstSelectedCard.image !== secondSelectedCard.image) {
                const unflippedFirstCard = unflip(firstSelectedCard);
                const unflippedSecondCard = unflip(secondSelectedCard);
                this.setState({
                  isLoading: false,
                  firstSelectedCard: null,
                  secondSelectedCard: null,
                  cards: cards.map(card => {
                    if (card.id === firstSelectedCard.id) {
                      return unflippedFirstCard;
                    } else if (card.id === secondSelectedCard.id) {
                      return unflippedSecondCard;
                    } else {
                      return card;
                    }
                  })
                });
              } else {
                this.setState({
                  isLoading: false,
                  firstSelectedCard: null,
                  secondSelectedCard: null
                });
              }
            }, 1500);
          }
        );
      }
    }
  }

  render() {
    const { cards } = this.state;
    if (cards.length > 0 && !cards.some(card => !card.isFlipped)) {
      return <img src={win} style={{padding:'250px'}}/>

    }
    return (
      <div className="row">
      
      {cards.map(card => (
          <div className="col-lg-2" style={{marginTop:20}}>
          <Card
          key={card.id}
          image={card.image}
          isFlipped={card.isFlipped}
          onClick={() => this.handleCardClick(card)}
          />
          </div>
          ))}
          
      </div>
    );
  }
}

function Card({ image, onClick, isFlipped }) {
  return (
    <div class="memory-card">
        <img style={{opacity: isFlipped ? 1:0}}
          class="front-face"
          src={image}
          
          height="250px"
          width="250px"
        />
     <img
     style={{opacity: isFlipped ? 0:1, position: "absolute", top:0}}
     class="back-face"
     src={recto}
     onClick={onClick}
     height="250px"
     width="250px"
     />
     
      
    </div>
  );
}

export default Game;
