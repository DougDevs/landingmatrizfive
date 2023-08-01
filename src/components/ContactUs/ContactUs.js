import '../../css/contact-style.css'
import IconContact from '../IconContact/IconContact'
import Title from '../Title/Title'
import iconWhatsApp from '../../img/icons-whatsapp.png'
import iconInstagram from '../../img/icon-instagram.png'
import iconAddress from '../../img/icon-address.png'
import Form from '../Form/Form'

function ContactUs(){
    return(
        <div id='contact' className="contact-container">
            <Title title="Fale Conosco"/>
            <div className='contact-subcontainer'>
                <div className='contact-box01'>
                    <IconContact
                        link="https://wa.me/"
                        icon={iconWhatsApp}
                        subtitle="WhatsApp"
                    />
                    <IconContact
                        link="https://www.instagram.com/"
                        icon={iconInstagram}
                        subtitle="Instagram"
                    />
                    <IconContact
                        link=""
                        icon={iconAddress}
                        subtitle="Nossa Localização"
                    />
                </div>
                <div className='contact-box02'>
                    <Form/>
                </div>
            </div>
        </div>
    )
}

export default ContactUs