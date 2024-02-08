// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  LockImage,
  Paragraph,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [isClicked, setButtonClicking] = useState(false)
  const onClickButton = () => {
    setButtonClicking(prevState => !prevState)
  }

  const lockImage = isClicked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const altText = isClicked ? 'unlock' : 'lock'
  const paragraph = isClicked
    ? 'Your Device is Unlocked'
    : 'Your Device is Locked'
  const buttonText = isClicked ? 'Lock' : 'Unlock'

  return (
    <MainContainer>
      <LockImage src={lockImage} alt={altText} />
      <Paragraph> {paragraph} </Paragraph>
      <LockButton type="button" onClick={onClickButton}>
        {buttonText}
      </LockButton>
    </MainContainer>
  )
}

export default Unlock
