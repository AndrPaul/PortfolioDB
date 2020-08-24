import React from 'react';
import Modal from 'react-modal';
import { Formik, Field, Form } from "formik";

export const Modal_create = () => {
    return (
        <div>
            <h1>Create your portfolio</h1>
                        <Formik>
                            <Form>
                                <div className="fieldWrap">
                                    <label for='portfolioName'>Portfolio name</label>
                                    <Field  className="field" type="text" name="portfolioName" placeholder="Paul is awesome"></Field>
                                </div>
                                <div className="fieldWrap">
                                    <label for='category'>Choose category</label>
                                    <Field className="field" as="select" name="category">
                                        <option value="Design">Design</option>
                                        <option value="Engineering">Engineering</option>
                                        <option value="Development" selected>Development</option>
                                        <option value="Management">Management</option>   
                                        <option value="Other    ">Other</option>   
                                    </Field>
                                </div>
                                <div className="fieldWrap">
                                    <label for='profession'>Choose your profession</label>
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
                                    <label for='about'>About (describe yourself)</label>
                                    <Field  className="textarea" as="textarea" name="about" placeholder="Hello, my name is Paul. I'm a web developer based in Belgium."></Field>
                                </div>
                                <div className="fieldWrap">
                                    <label for='amount'>Choose how many projects you want to present</label>
                                    <div name='amount'>
                                    <label for="One"> < Field type="radio" name='One'  value="One"    /> One</label>
                                    <label for="Two">  <Field type="radio" name='Two'  value="Two"    /> Two</label>
                                    <label for="Three"><Field type="radio" name='Three'value="Three" checked  /> Three</label>
                                    <label for="Four"> <Field type="radio" name='Four' value="Four"   /> Four</label>
                                    <label for="Five"> <Field type="radio" name='Five' value="Five"   /> Five</label>
                                    <label for="Six">  <Field type="radio" name='Six'  value="Six"    /> Six</label>
                                    </div>
                                </div>
                                <div className="fieldWrap">
                                    <label for='direction'>Choose a direction of scrolling</label>
                                    <div name='direction'>
                                    <label for='vertical'><Field type="radio" name="vertical" value="vertical"/> Vertical</label>   
                                    <label for='horisontal'><Field type="radio" name="horisontal" value="horisontal" checked/> Horisontal</label>   
                                    </div>
                                </div>
                                
                                <button className='btn primary'>Add portfolio</button>
                            </Form>
                        </Formik>             
        </div>
    )
}
export default Modal_create
