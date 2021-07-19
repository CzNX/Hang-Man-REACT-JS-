import React, { useState, useEffect } from 'react'
import { GenerateButtons } from '../Button';

import Alert from './Alert';
import { gameWords } from './data';
import Figure from './Figure'
import './Main.css'
import Popup from './Popup';



// const gameWords = ['python', 'java', 'javascript', 'ruby', 'dart', 'golang', 'php', 'react', 'android', 'html', 'css', 'xtha'];
let random_GameWord = gameWords[Math.floor(Math.random() * gameWords.length)];


const Main = () => {

    const [correctLetters, setCorrectLetters] = useState([])
    const [wrongLetters, setWrongLetters] = useState([])
    const [alert, setAlert] = useState(false)
    const [play, setPlay] = useState(true)
    const [popup, setPopup] = useState(false)





    // function for physical keyboard
    useEffect(() => {
        function handleInput(e) {
            const { key, keyCode } = e;
            if (play && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toUpperCase();
                main_input_function(letter);
            }

        }

        window.addEventListener('keydown', handleInput)
        return () => {
            window.removeEventListener('keydown', handleInput)
        }
    }, [correctLetters, wrongLetters, play, alert])


    // APP main function 

    const main_input_function = (letter) => {
        if (random_GameWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                setCorrectLetters(currentLetters => [...currentLetters, letter]);
            } else {
                //   show(setShowNotification);
                setAlert(true)
            }
        }
        else {
            if (!wrongLetters.includes(letter)) {
                setWrongLetters(currentLetters => [...currentLetters, letter]);
            } else {
                //   show(setShowNotification);
                setAlert(true)
            }
        }



    }

    // function for onscreen keyboard
    const handleGuess = (letter) => {
        if (play) {
            main_input_function(letter);

        }
        else {
            setPlay(false)

        }

    }

    // button action
    var handleRestart = () => {

        setPlay(true);
        setPopup(false);
        setWrongLetters([]);
        setCorrectLetters([]);

        const random = Math.floor(Math.random() * gameWords.length);
        random_GameWord = gameWords[random];

    }



    return (
        <section className='main'>
            <div style={{ height: '50px' }}>{alert && <Alert setAlert={setAlert} alert={alert} />}</div>

            <Figure random_GameWord={random_GameWord} correctLetters={correctLetters} wrongLetters={wrongLetters} />

            <Popup
                setPopup={setPopup}
                popup={popup}
                handleRestart={handleRestart}
                gameWords={gameWords}
                random_GameWord={random_GameWord} correctLetters={correctLetters} wrongLetters={wrongLetters} setPlay={setPlay} />

            <div className="btn-section">
                <GenerateButtons handleGuess={handleGuess} />
            </div>


        </section>
    )
}

export default Main



