import React from 'react';
// import Modal from 'react-modal';
import { Formik, Field, Form } from "formik";
import {v4 as uuidv4} from 'uuid';



export const ModalCreate = () => {
    return (
        <div>
            <h1>Create your portfolio</h1>
                        <Formik 
                        initialValues={{portfolioName:'',category:'Development',profession:'web developer',about:'',projectsAmount:'3',scrollDirection:'horisontal'}} 
                        onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    fetch(`http://localhost:3004/examples/`,
                                    {"body": JSON.stringify(values, null, 2),
                                     "headers": {
                                         "Accept": "application/json",
                                         "Content-Type": "application/json"
                                     }, "method": "Post"})
                                     .then((response) => {
                                     if (!response.ok) {
                                        console.log("coudn't connect to database");
                                    } else {
                                        console.log("Your input is saved in DB. Continue editing")
                                    }
                                    return response.json();});
                                  setSubmitting(false);
                                }, 100);
                                setTimeout(()=>{setModalIsOpen(false)},200);
                                }}> 
                        {({values, isSubmitting}) => (
                            <Form>
                            <div className="fieldWrap">
                                <label htmlFor='portfolioName'>Portfolio name</label>
                                <Field value={values.portfolioName} 
                                // onChange={handleChange} 
                                className="field" type="text" name="portfolioName" placeholder="Paul is awesome"></Field>
                            </div>
                            <div className="fieldWrap">
                                <label htmlFor='category'>Choose category</label>
                                <Field value={values.category} className="field" as="select" name="category">
                                    <option value="Design">Design</option>
                                    <option value="Engineering">Engineering</option>
                                    <option value="Development">Development</option>
                                    <option value="Management">Management</option>   
                                    <option value="Other    ">Other</option>   
                                </Field>
                            </div>
                            <div className="fieldWrap">
                                <label htmlFor='profession'>Choose your profession</label>
                                <Field className="field" as="select" name="profession">
                                    <option value="Web developer">Web developer</option>
                                    <option value="Web designer">Web designer</option>
                                    <option value="Graphic designer">Graphic designer</option>
                                    <option value="UX/UI designer">UX/UI designer</option>
                                    <option value="Database developer">Database developer</option>
                                    <option value="Software engineer">Software engineer</option>
                                    <option value="DevOps engineer">DevOps engineer</option>
                                    <option value="Network administrator">Network administrator</option>
                                    <option value="Information security analyst">Information security analist</option>
                                    <option value="AI eengineer">AI engineer</option>
                                    <option value="Cloud architect">Cloud architect</option>
                                    <option value="IT manager">IT manager</option>
                                    <option value="Application developer">Application developer</option>
                                    <option value="Technical specialist">Technical specialist</option>
                                    <option value="Help desk worker">Help desk worker</option>
                                    <option value="Computer Scientist">Computer scientist</option>
                                    <option value="Senior programmer">Senior programmer</option>
                                    <option value="Chief technology officer">Chief technology officer</option>
                                    <option value="Chief information officer">Chief information officer</option>
                                    <option value="Other    ">Other</option> 
                                </Field>
                            </div>
                            <div className="fieldWrap">
                                <label htmlFor='about'>About (describe yourself)</label>
                                <Field  className="textarea" as="textarea" name="about" placeholder="Hello, my name is Paul. I'm a web developer based in Belgium."></Field>
                            </div>
                            <div className="fieldWrap" id='projectsAmount-radio-group'>
                                <label htmlFor='projectsAmount'>Choose how many projects you want to present</label>
                                <div name='projectsAmount' role='group'aria-labelledby="projectsAmount-radio-group">
                                <label >  <Field type="radio" name='projectsAmount' value="1"    /> One</label>
                                <label >  <Field type="radio" name='projectsAmount' value="2"    /> Two</label>
                                <label >  <Field type="radio" name='projectsAmount' value="3"  /> Three</label>
                                <label >  <Field type="radio" name='projectsAmount' value="4"   /> Four</label>
                                <label >  <Field type="radio" name='projectsAmount' value="5"   /> Five</label>
                                <label >  <Field type="radio" name='projectsAmount' value="6"    /> Six</label>
                                </div>
                            </div>
                            <div className="fieldWrap" id='scrollDirection-radio-group'>
                                <label htmlFor='scrollDirection'>Choose a direction of scrolling</label>
                                <div name='scrollDirection' role='group'aria-labelledby="scrollDirection-radio-group">
                                <label><Field type="radio"   name="scrollDirection" value="vertical"/> Vertical</label>   
                                <label><Field type="radio" name="scrollDirection" value="horisontal"/> Horisontal</label>   
                                </div>
                            </div>
                            
                            <button 
                            disabled={isSubmitting} //to disable a button while submitting not to send the data twice
                            className='btn primary' type='submit' >Add portfolio</button>
                            
                        </Form>

                        )}
                            
                        </Formik>             
        </div>
    )
}
export default ModalCreate
