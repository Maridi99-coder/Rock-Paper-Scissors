import styled from 'styled-components'

export const ShowResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ResultImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 24px;
`

export const ResultTextImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ResultText = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
`

export const ResultImageItem = styled.img`
  width: 120px;
  height: 120px;
`

export const ResultButtonContainer = styled.div`
  margin-top: 20px;
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-family: 'Roboto';
  cursor: pointer;
  font-weight: bold;
  color: #223a5f;
`
