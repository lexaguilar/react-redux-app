import React, { useState } from 'react'
import Card from './Card';
import {emails} from '../data/email';
import { useSelector, useDispatch } from 'react-redux';
import { verCorreo } from '../store/reducers/mail/mailActions';
import ListMail from './ListMail';
import ReadMail from './ReadMail';
const Emails = () => {

    const [correos, setitems] = useState(emails);

    console.log(emails);
    console.log(correos);

    const dispatch = useDispatch();    

    const open = (mail) => {
        dispatch(verCorreo(mail));
    }   

    return (
        <div>
            <h2>Correos</h2>
            <div className="mails">
                <div className="mails-3 mail-item-container">
                    {
                        correos
                        .map(correo => <ListMail correo={correo} open={open} />)
                    }
                </div>
                <div className="mails-7">
                    <ReadMail />
                </div>
               
            </div>
        </div>
    )
}

export default Emails;


