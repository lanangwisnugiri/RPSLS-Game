import React, {Component} from 'react';
import './App.css';

const PlayerCard = ({color, symbol}) => {
    const style = {
        backgroundColor: color,
        backgroundImage: "url(./img/" + symbol + ".svg)"
    }
    return (
        <div style={style} className="player-card">
        </div>
    )
}

class App extends Component {
    constructor(props) {
        super(props)
        this.symbols = ["Rock", "Paper", "Scissors", "Spock", "Lizards"]
        this.state = {}
    }

    decideWiner = () => {
        const {playerBlack, playerGrey} = this.state
        if (playerBlack === playerGrey) {
            return "Draw!"
        }
        if ((playerBlack === "Rock" && playerGrey === "Scissors") ||
            (playerBlack === "Scissors" && playerGrey === "Paper") ||
            (playerBlack === "Paper" && playerGrey === "Rock") ||
            (playerBlack === "Scissors" && playerGrey === "Lizards") ||
            (playerBlack === "Lizards" && playerGrey === "Spock") ||
            (playerBlack === "Spock" && playerGrey === "Scissors") ||
            (playerBlack === "Lizards" && playerGrey === "Paper") ||
            (playerBlack === "Paper" && playerGrey === "Spock") ||
            (playerBlack === "Rock" && playerGrey === "Lizards") ||
            (playerBlack === "Spock" && playerGrey === "Rock")) {
            return "Player Black Win!"
        }
        return "Player Grey Win!"
    }

    startGame = () => {
        let counter = 0
        let myInterval =
            setInterval(() => {
                counter++
                this.setState({
                    playerBlack: this.symbols[Math.floor(Math.random() * 5)],
                    playerGrey: this.symbols[Math.floor(Math.random() * 5)],
                    winner: ""
                })
                if (counter > 40) {
                    clearInterval(myInterval)
                    this.setState({winner: this.decideWiner()})
                }
            }, 100)
    }

    render() {
        return (
            <div className="App">
                <PlayerCard
                    color="black"
                    symbol={this.state.playerBlack}/>
                <PlayerCard
                    color="grey"
                    symbol={this.state.playerGrey}/>
                <p>{this.state.winner}</p>
                <button onClick={this.startGame}>Start</button>
            </div>
        );
    }
}

export default App;
