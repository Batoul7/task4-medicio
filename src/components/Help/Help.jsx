import React from 'react'
import MyButton from '../MyButton/MyButton'

export default function Help() {
  return (
    <section className='help bg-my-primary p-5'>
        <div className="container">
            <div className="row ">
                <div className="col-10 w-100 text-white">
                    <div className="text text-center">
                        <h3>In an emergency? Need help now?</h3>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <MyButton border={true} text={"Make an Appointment"}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
