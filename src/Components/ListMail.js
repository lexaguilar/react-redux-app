import React from 'react';

const ListMail = ({correo, open}) => {
    return (
        <div >
            <div className= {correo.read ? "mail-item mail-read" : "mail-item"}
             onClick={() => open(correo)}>
                <p>{correo.from}</p>
                <p>{correo.subject}</p>        
                <p >{correo.read ? "Leido" : "Sin Leer"}</p>        
            </div>
        </div>
    );
}

export default ListMail;
