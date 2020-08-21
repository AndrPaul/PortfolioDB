import React from 'react'


const Create = () => {



    return (
        <div className='container create'>
            <header className='header create'>
                <h1 className="title create">Create a portfolio.</h1>
            </header>
            <main>
                <div className="form-wrapper">
                    <form action="">
                    <div className="form categories">
                        <label htmlFor="name">Portfolio name</label>
                     
                        <input className="search" name="name" type="text" placeholder="Portfolio name"/>
                  
                        </div>
                        
                        <div className="form categories">
                        <label htmlFor="option">Category</label>
                     
                     <select  className="search" id="option">
                     <option value="web development">web development</option>
                     <option value="web design">web design</option>
                     <option value="photography">photography</option>
                     <option value="other">Other</option>
                     </select>
                        </div>
                        
                        

                    </form>
                </div>
              

            </main>
            
        </div>
    )
}

export default Create
