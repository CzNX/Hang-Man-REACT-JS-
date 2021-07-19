import React from 'react'

const Figure = ({ random_GameWord, correctLetters, wrongLetters }) => {

    const error = wrongLetters.length;
    const random_Gift1 = random_GameWord.split('')[0].toUpperCase()
    const random_Gift2 = random_GameWord.split('')[Math.floor(random_GameWord.length / 2)].toUpperCase();
    const random_Gift3 = random_GameWord.split('')[Math.floor(random_GameWord.length - 1)].toUpperCase();




    const renderSwitch = (param) => {
        switch (param) {
            case 3:
                return <p style={{ paddingTop: '10px' }}>Try : <br /> <br /> {random_Gift1} </p>

            case 4:
                return <p style={{ paddingTop: '10px' }}>Try : <br /> <br /> {random_Gift1} &nbsp; {random_Gift2}</p>;

            case 5:
                return <p style={{ paddingTop: '10px' }}>Try : <br /> <br /> {random_Gift1} &nbsp; {random_Gift2} &nbsp; {random_Gift3} </p>;
            default:
                return '';
        }
    }



    return (
        <>
            <div className="mid" >
                <div className="figure">

                    <svg height="250" width="200" className="figure-container">
                        {/* <!-- Rod --> */}
                        <line x1="60" y1="20" x2="140" y2="20" />
                        <line x1="140" y1="20" x2="140" y2="50" />
                        <line x1="60" y1="20" x2="60" y2="230" />
                        <line x1="20" y1="230" x2="100" y2="230" />

                        {/* head */}

                        {error >= 1 && <circle cx="140" cy="70" r="20" />}

                        {/* <!-- Body --> */}

                        {error >= 2 && <line x1="140" y1="90" x2="140" y2="150" />}

                        {/* <!-- Arms --> */}

                        {error >= 3 && <line x1="140" y1="120" x2="120" y2="100" />}


                        {error >= 4 && <line x1="140" y1="120" x2="160" y2="100" />}

                        {/* <!-- Legs --> */}

                        {error >= 5 && <line x1="140" y1="150" x2="120" y2="180" />}


                        {error >= 6 && <line x1="140" y1="150" x2="160" y2="180" />}

                    </svg>
                </div>
                <div className="wronglist" style={{ textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '20px' }}>Wrong Letters :</h3>
                    {wrongLetters.map((letter, index) => {
                        return (

                            <span key={index} style={{ letterSpacing: '10px', color: 'red' }} >
                                {letter}
                            </span>
                        )
                    })}
                    <div className="help" style={{ textAlign: 'center' }}>


                        {/* {wrongLetters.length === 3 ? <p>Try These xD : <br /><br />{random_Gift1}  </p> : ''}
                        {wrongLetters.length === 4 ? <p>Try These xD : <br /><br />{random_Gift1}  {random_Gift2}</p> : ''}
                        {wrongLetters.length === 5 ? <p>Try These xD : <br /><br />{random_Gift1}  {random_Gift2}  {random_Gift3}</p> : ''} */}

                        {renderSwitch(wrongLetters.length)}


                    </div>
                </div>



            </div>
            <div className="bot" style={{ letterSpacing: '10px', color: 'yellow' }}>
                {/* display word typed */}
                {random_GameWord.split('').map((letter, index) => {
                    return (
                        <span key={index} >
                            {correctLetters.includes(letter) ? letter.toUpperCase() : '-'}
                        </span>
                    )
                })}
            </div>
        </>
    )
}

export default Figure
