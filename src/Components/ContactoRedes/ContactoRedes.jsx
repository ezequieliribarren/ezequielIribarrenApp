import React from 'react'

const ContactoRedes = () => {
    return (
        <div className='container-fluid' >
            <a href="mailto:info@ezequieliribarren.com">
                <div>
                    <img src="images/mail.png" alt="Mail" />
                </div>
                <div>
                    <h3>info@ezequieliribarren.com</h3>
                </div>
                </a>
            <a href=""><img src="images/instagram.png" alt="Instagram" /> <h3>@borrendev</h3></a>
            <a href="https://wa.me/+541136331300?text=Hola,%20estoy%20en%20la%20página%20de%20Ezequiel%20Iribarren%20y%20quiero%20pedir%20más%20información"><img src="images/whatsapp.png" alt="Whatsapp" /> <h3>+54 9 11 3633-1300</h3></a>
            <a href=""><img src="images/linkedin.png" alt="Linkedin" /> <h3>@ezequieliribarren</h3></a>
        </div>
    )
}

export default ContactoRedes