
export const GenerateButtons = ({ handleGuess }) => {
    return "QWERTYUIOPASDFGHJKLZXCVBNM".split("").map(letter => (

        <button
            className='btn-input'
            key={letter}
            value={letter}
            onClick={() => handleGuess(letter)}
        // disabled={this.state.guessed.has(letter)}
        >
            {letter}
        </button>

    ));
}