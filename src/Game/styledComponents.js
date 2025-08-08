import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  height: 100vh;
  background-color: #223a5f;
  color: #ffffff;
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid #ffffff;
  border-radius: 10px;
  padding: 20px;
`

export const ItemContainer = styled.div``

export const Heading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
`

export const ScoreCardContainer = styled.div`
  background-color: #ffffff;
  padding: 5px;
  border-radius: 10px;
  width: 100px;
  margin: 15px;
`

export const ParagraphScore = styled.p`
  font-size: 25px;
  color: #000;
  font-family: 'Roboto';
  font-weight: bold;
  text-align: center;
  margin: 0;
`

export const ScoreSpan = styled.p`
  font-size: 30px;
  color: #000;
  font-family: 'Roboto';
  font-weight: bold;
  text-align: center;
  margin: 0;
`

export const ItemsImagesContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0;
  width: 100%;
  height: 50%;
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  border: 0;
  font-family: 'Roboto';
  font-size: 15px;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #000;
`

export const PopUpContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const PopUpButton = styled(PlayAgainButton)`
  width: 100px;
`

export const RulesImageContainer = styled.div``

export const RulesImage = styled.img`
  width: 100%;
  height: 100%;
`

export const CloseLineContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const CLoseLineButton = styled.button`
  background: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 25px;
  color: #223a5f;
`
