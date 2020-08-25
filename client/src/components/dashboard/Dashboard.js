import React, {useState} from 'react'
import {AiOutlineFolderAdd as AddIcon} from "react-icons/ai";
import PortfolioItems from './portfolioItems/PortfolioItems'
import Modal from 'react-modal'
import { Formik, Field, Form } from "formik";
import ModalCreate from './modal_create_portfolio/ModalCreate';
const Dashboard = () => {
    
    const [modalIsOpen, setModalIsOpen] = useState(false)
    Modal.setAppElement('#root')

    const pItemData = [
        {name: 'Film director', category: 'film production'},
        {name: 'Web designer', category: 'design'},
        {name: 'Restaurant chef', category: 'food'},
        {name: 'Portrait photographer', category: 'photography'},
        {name: 'Back-end developer', category: 'programming'},
        {name: 'Front-end developer', category: 'programming'},
        // {name: 'Tech lead', category: 'technology'},
        {name: 'Nude model', category: 'photography'}, /* why not? ))) */
        
    ]

    return (
        <div className='container dashboard'>
            <header className='header dashboard'>
                <h1 className="title dashboard">Dashboard</h1>
            </header>
            <main>
                <div className="main-top">
                    <div onClick={() => setModalIsOpen(true)} className="add-btn">
                        <AddIcon className='add-icon' />
                        <p className='add-btn-info'>Create new portfolio</p>
                    </div>
                    <Modal className="Modal" overlayClassName="Overlay" isOpen={modalIsOpen}>
                        <ModalCreate />
                        <button className='close-btn' onClick={() => setModalIsOpen(false)}>X</button>
                    </Modal>
                    <PortfolioItems portfolioItem={pItemData} />


                </div>

            </main>
            
        </div>
    )
}

export default Dashboard
