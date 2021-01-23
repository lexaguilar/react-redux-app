import React from 'react';
import { useSelector } from "react-redux";
const ReadMail = () => {

    const { mail } = useSelector(store => store);

    return (
        <div>
            <p><strong>De:</strong>{mail.from}</p>
            <p><strong>Asunto:</strong>:{mail.subject}</p>  
            <p>{mail.body}</p>  
        </div>
    );
}

export default ReadMail;
