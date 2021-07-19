import { checkWin } from '../Main/Checker'
const Popup = ({ random_GameWord, wrongLetters, correctLetters, setPlay, handleRestart, setPopup, popup }) => {


    // reset game function 
    const resetPlay = () => {
        setPopup(true)
        setPlay(false)

    }


    // applying checker function 
    let finalMessage = ''
    let finalMessageRevealWord = ''

    if (checkWin(correctLetters, wrongLetters, random_GameWord) === 'win') {
        finalMessage = 'Congratulations! You won! 😃';
        resetPlay();

    } else if (checkWin(correctLetters, wrongLetters, random_GameWord) === 'lose') {
        finalMessage = 'Unfortunately you lost. 😕';
        finalMessageRevealWord = `...the word was:  ${random_GameWord}`;
        resetPlay();

    }









    return (
        <section className={`${popup ? 'popup show' : 'popup'}`}>
            <h1>{finalMessage}</h1>
            <p style={{ color: 'green' }}>{finalMessageRevealWord}</p>
            <button onClick={handleRestart}>Play Again</button>
        </section>
    )
}

export default Popup
