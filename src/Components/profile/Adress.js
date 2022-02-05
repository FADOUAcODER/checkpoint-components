import React from 'react' ;
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';


const Adress = () => {
    return (
        <>
            <div>
            <h1> Adress</h1>
                <div>
                    <FaHome /> :  Sousse hammem sousse route la plage/menchia 
                </div>
                <div>
                    <FaLinkedin /> :   https://www.linkedin.com/https://in/fadoua-zouaoui-73b50360
                </div>
                <div>
                    <FaMailBulk />  :  fadwouta@gmail.com
                </div>
                <div>
                    <FaPhoneSquareAlt /> :  29 61 01 28
                </div>
                <div>
                    <FaWhatsappSquare /> :  28 88 88 24
                </div>
                               
            </div>
        </>
    )
}
export default Adress ;