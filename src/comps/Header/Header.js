import React from 'react'
import logo from '../../../src/hm.gif'


const Header = () => {
    return (
        <div className='header' style={{ textAlign: 'center', maxWidth: '80%', margin: '30px auto' }}>
            <h1>Hang Man</h1> <p> <img src={logo} alt="err" style={{ width: '50px' }} /> </p>

            <p>Find the Hidden Word -  press a letter to start !</p>
        </div>
    )
}

export default Header
