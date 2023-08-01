import '../../css/about-style.css'
import Title from '../Title/Title';
import imgAbout from '../../img/about-img.jpg'

function About(){
    let about = "Sobre Nós"

    return(
        <div id="about" className="about-container">
             <Title title={about.toUpperCase()}/>
             <div className='about-box'>
             <div className='about-describe-box'>
                    <div className='about-describe'>
                        <p>
                            A Garagem224 é um centro de estética automotiva de alto padrão, especializado em cuidados minuciosos para o seu veículo.<br></br>
                            Nossa equipe de profissionais altamente qualificados possui expertise em detalhamento automotivo para carros e motos.<br></br>
                            Nosso foco está em cada detalhe, desde a limpeza e higienização até a revitalização e recuperação da pintura do seu veículo. Com uma abordagem meticulosa, buscamos a perfeição em cada serviço prestado.<br></br>
                            Na Garagem224, a satisfação do cliente é fundamental. Trabalhamos arduamente para garantir que seu veículo seja tratado com o máximo cuidado e atenção, mantendo-o com aparência de novo.<br></br>
                            Confie na Garagem224 para cuidar do seu veículo e desfrute de um serviço de estética automotiva de primeira classe.
                        </p>
                    </div>
                 </div>
                 <div className='img-about-box'>
                    <img className='img-about' src={imgAbout} alt="" />
                 </div>
             </div>
        </div>
    )
}

export default About;

