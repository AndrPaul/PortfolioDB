import React from 'react'
import {AiOutlineFolderAdd as AddIcon} from "react-icons/ai";
import PortfolioItems from './portfolioItems/PortfolioItems'

const Dashboard = () => {

    const pItemData = [
        {name: 'Awesome Portfolio', category: 'tech'},
        {name: 'Amazing title', category: 'food'},
        {name: 'Photograph', category: 'photography'},
        {name: 'name', category: 'tech'},
        {name: 'name', category: 'tech'},
        {name: 'name', category: 'tech'},
        {name: 'name', category: 'tech'},
        
    ]

    return (
        <div className='container dashboard'>
            <header className='header dashboard'>
                <h1 className="title dashboard">Dashboard</h1>
            </header>
            <main>
                <div className="main-top">
                    <div className="add-btn">
                        <AddIcon className='add-icon' />
                        <p className='add-btn-info'>Create new portfolio</p>
                    </div>
                    <PortfolioItems portfolioItem={pItemData} />


                </div>

            </main>
            
        </div>
    )
}

export default Dashboard
