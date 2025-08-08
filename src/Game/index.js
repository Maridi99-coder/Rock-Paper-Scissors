import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import Buttons from '../Buttons'
import GameResultView from '../GameResultView'
import 'reactjs-popup/dist/index.css'
import {
  MainContainer,
  ScoreContainer,
  ItemContainer,
  Heading,
  ScoreCardContainer,
  ParagraphScore,
  ScoreSpan,
  ItemsImagesContainer,
  PlayAgainButton,
  PopUpContainer,
  PopUpButton,
  RulesImageContainer,
  RulesImage,
  CloseLineContainer,
  CLoseLineButton,
} from './styledComponents'

class Game extends Component {
  state = {
    showResult: false,
    myChoice: {},
    apponentChoice: {},
    score: 0,
    resultMessage: '',
  }

  onClickPlayAgain = () => this.setState({showResult: false})

  onGetResult = () => {
    const {myChoice, apponentChoice, resultMessage} = this.state

    return (
      <GameResultView
        myChoice={myChoice}
        apponentChoice={apponentChoice}
        resultMessage={resultMessage}
        playAgain={this.onClickPlayAgain}
      />
    )
  }

  onGetButtonId = (id, imageUrl) => {
    const {choicesList} = this.props
    const number = Math.floor(Math.random() * choicesList.length)
    if (choicesList[number].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        apponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        apponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        apponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        apponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        apponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        apponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else {
      this.setState({
        showResult: true,
        myChoice: [id, imageUrl],
        apponentChoice: choicesList[number],
        resultMessage: 'IT IS DRAW',
      })
    }
  }

  onGetImages = () => {
    const {choicesList} = this.props

    return (
      <ItemsImagesContainer>
        {choicesList.map(eachItem => (
          <Buttons
            key={eachItem.id}
            buttonDetails={eachItem}
            onGetId={this.onGetButtonId}
          />
        ))}
      </ItemsImagesContainer>
    )
  }

  render() {
    const {showResult, score} = this.state
    return (
      <MainContainer>
        <ScoreContainer>
          <ItemContainer>
            <Heading>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </Heading>
          </ItemContainer>
          <ScoreCardContainer>
            <ParagraphScore>Score</ParagraphScore>
            <ScoreSpan>{score}</ScoreSpan>
          </ScoreCardContainer>
        </ScoreContainer>
        {showResult ? this.onGetResult() : this.onGetImages()}
        <PopUpContainer>
          <Popup modal trigger={<PopUpButton type="button">Rules</PopUpButton>}>
            {close => (
              <RulesImageContainer>
                <CloseLineContainer>
                  <CLoseLineButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </CLoseLineButton>
                </CloseLineContainer>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="Rules"
                />
              </RulesImageContainer>
            )}
          </Popup>
        </PopUpContainer>
      </MainContainer>
    )
  }
}

export default Game
