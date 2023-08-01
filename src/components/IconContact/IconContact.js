import '../../css/iconContact-style.css'


function IconContact({link, icon, subtitle}){
    return(
        <div className="icon-contact-container">
            <a className='contact-link' href={link} target='_blank'>
                <img className='contact-icon' src={icon} alt="icon-whatsapp"  />
                <p className='title-icon'>{subtitle}</p>
            </a>
        </div>
    )
}

export default IconContact