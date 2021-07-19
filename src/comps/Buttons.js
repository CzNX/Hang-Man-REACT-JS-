export const generateButtons = ({ handleInput }) => {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
        <button
            class='btn btn-lg btn-primary m-2'
            key={letter}
            value={letter}
            onClick={handleInput}
        >
            {letter}
        </button>
    ));
}