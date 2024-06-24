import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import "./Home.css"

export default function (){
    const navigate = useNavigate();
    return(
        <div className='home-page'>
            <header>
                <p>Warehouse Layout Design Interpreter</p>
            </header>
            <div className="wrapper">
                <div className="inner-wrapper">

                

            
            <div className="container">
                <div className='section-1'>
                    <p>This project revolutionizes warehouse management and robotics simulation, providing advanced 3D visualization and dynamic robot movement analysis, setting new benchmarks in smart logistics.</p>
                </div>
                <div className="section-2">
                    {/* <div className="names-section">
                        <p>Internal Guide</p>
                        <p>Dr. D. Narashiman</p>
                        <p>IST Department</p>
                        <p>Anna University</p> */}
                    {/* </div> */}
                    {/* <div className="names-section">
                        <p>External Guide</p>
                        <p>Mr. Aravind Manimaran</p>
                        <p>Senior Software Engineer</p>
                        <p>Roboteon India Pvt. Ltd.</p>
                    </div> */}
                    {/* <div className="names-section">
                        <p>Presented by:</p>
                        <p>Manikandan M</p>
                        <p>2022178044</p>
                        <p>MCA (REGULAR)</p>
                    </div> */}
                </div>
            </div>
            
            <div className="section-3">
                <div>
                    <p> Warehouse Visualization</p>
                    <button id='warehouse' onClick={() => navigate("/test")}>Click here to visualize your warehouse</button>
                </div>
                
            </div>
            </div>
            </div>
        </div>
    )
}