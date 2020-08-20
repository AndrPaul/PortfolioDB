import React from 'react'
import { Link } from 'react-router-dom';
import PreviewPortfolios from './previewPortfolios/PreviewPortfolios'

const Home = () => {

//Just dummy data for now
    const prevData = [
        { title: 'title1' },
        { title: 'title1' },
        { title: 'title1' },
        { title: 'title1' },
        { title: 'title1' },
        { title: 'title1' },
        { title: 'title1' },
        { title: 'title1' },
        { title: 'title1' },
        { title: 'title1' },
        { title: 'title1' },
        { title: 'title1' },

    ]

    return (
        <div className="container">
            <header className="header home">
                <h1><span>Kickstart your career.</span>Create a beautiful portfolio.</h1>
                <p>A fully responsive, single-page website to showcase your work.</p>
                <Link className='btn primary' to='/login'>Get started ⟶</Link>
            </header>
            <main>
                <h1>Get inspired, see what others have created.</h1>
                <PreviewPortfolios previewBox={prevData} />
            </main>

        </div>
    )
}

export default Home
