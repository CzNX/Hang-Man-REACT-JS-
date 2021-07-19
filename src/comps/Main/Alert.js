import React, { useEffect } from 'react'

const Alert = ({ setAlert, alert }) => {

    useEffect(() => {
        let alerttiming = setTimeout(() => {
            setAlert(false)
        }, 2000);
        return () => {
            clearTimeout(alerttiming);
        }

    }, [alert])


    return (
        <section className='alert' style={{ textAlign: 'center' }}>
            <div style={{ color: 'red', marginTop: '10px' }}>Letter Already Entered !
                <p>Try Another :D</p>
            </div>
        </section>
    )
}

export default Alert
