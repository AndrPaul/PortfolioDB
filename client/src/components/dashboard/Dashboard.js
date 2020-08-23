import React, {useState} from 'react'
import {AiOutlineFolderAdd as AddIcon} from "react-icons/ai";
import PortfolioItems from './portfolioItems/PortfolioItems'
import Modal from 'react-modal'
import { Formik, Field, Form } from "formik";
const Dashboard = () => {
    
    const [modalIsOpen, setModalIsOpen] = useState(false)
    Modal.setAppElement('#root')

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
                    <div onClick={() => setModalIsOpen(true)} className="add-btn">
                        <AddIcon className='add-icon' />
                        <p className='add-btn-info'>Create new portfolio</p>
                    </div>
                    <Modal className="Modal" overlayClassName="Overlay" isOpen={modalIsOpen}>
                        <h1>Create portfolio.</h1>
                        <Formik>
                            <Form>
                                <div className="fieldWrap">
                                    <label for='portfolioName'>Portfolio name:</label>
                                    <Field  className="field" type="text" name="portfolioName"></Field>
                                </div>
                                <div className="fieldWrap">
                                    <label for='category'>Choose catergory</label>
                                    <Field className="field" as="select" name="category">
                                        <option value="Web development">Web development</option>
                                        <option value="Web design">Web design</option>
                                        <option value="Graphic design">Graphic design</option>
                                    </Field>
                                </div>
                                <button className='btn primary'>Add portfolio</button>
                            </Form>
                        </Formik>
                        <button className='close-btn' onClick={() => setModalIsOpen(false)}>X</button>
                    </Modal>
                    <PortfolioItems portfolioItem={pItemData} />


                </div>

            </main>
            
        </div>
    )
}

export default Dashboard
