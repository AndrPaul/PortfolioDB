import React, {useState} from 'react'
import {AiOutlineFolderAdd as AddIcon} from "react-icons/ai";
import PortfolioItems from './portfolioItems/PortfolioItems'
import Modal from 'react-modal'
import { Formik, Field, Form } from "formik";
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
                        <h1>Create portfolio.</h1>
                        <Formik>
                            <Form>
                                <div className="fieldWrap">
                                    <label for='portfolioName'>Portfolio name:</label>
                                    <Field  className="field" type="text" name="portfolioName" placeholder="Paul is awesome"></Field>
                                </div>
                                <div className="fieldWrap">
                                    <label for='category'>Choose category</label>
                                    <Field className="field" as="select" name="category">
                                        <option value="Web development">Web development</option>
                                        <option value="Web design">Web design</option>
                                        <option value="Graphic design">Graphic design</option>
                                        <option value="UX designer">UX designer</option>
                                        <option value="UI developer">UI developer</option>
                                        <option value="SQL developer">SQL developer</option>
                                        <option value="Software engineer">Software engineer</option>
                                        <option value="DevOps engineer">DevOps engineer</option>
                                        <option value="Data entry">Data entry</option>
                                        <option value="Network administrator">Network administrator</option>
                                        <option value="Information security analyst">Information security analist</option>
                                        <option value="AI eengineer">AI engineer</option>
                                        <option value="Cloud architect">Cloud architect</option>
                                        <option value="IT manager">IT manager</option>
                                        <option value="Application developer">Application developer</option>
                                        <option value="Technical specialist">Technical specialist</option>
                                        <option value="Help desk worker">Help desk worker</option>
                                        <option value="Computer Scientist">Computer scientist</option>
                                        <option value="IT Professional">It professional</option>
                                        <option value="Senior programmer">Senior programmer</option>
                                        <option value="Chief technology officer">Chief technology officer</option>
                                        <option value="Chief information officer">Chief information officer</option>

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
