import React, { Fragment } from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <Fragment> 
            <footer className='text-center text-capitalize'>
                copyright react bootstrap starter &copy; {year}
            </footer> 
        </Fragment>
    )
}

export default Footer
