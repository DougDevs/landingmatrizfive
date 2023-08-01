import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header.js';
import Service from './components/Services-/Service';
import dados from './services.json';
import lavagemTecnicaImg from './img/lavagem-tecnica-img.jpg';
import lavagemBancosImg from './img/img-limpeza-bancos-.jpg';
import higienzacaoImg from './img/img-higienizacao-auto.jpeg';
import limpezaMotor from './img/img-limpezaMotor.jpg';
import Title from './components/Title/Title';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/BtnScroll/BtnScroll';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About/>
      <div id="service" className='serivce-title'>
        <Title title="Nossos Serviços"/>
      </div>
      <Service
        subTitle="Lavagem Técnica"
        describe={dados.services[0].lavagemTecnica}
        img={lavagemTecnicaImg}
        desc01="Lavagem externa do veículo"
        desc02="Aspiração interna"
        desc03="Secagem com toalha de microfibra"
        desc04="Limpeza dos vidros"
        desc05="Lavagem do sistema de caixas de rodas"
        desc06="Limpeza e proteção dos pneus"
        desc07="Proteção plásticos internos"
      />
      <Service
        subTitle="Limpeza de Bancos Automotivos"
        describe={dados.services[1].limpezaBancos}
        img={lavagemBancosImg}
        desc01="Higienização de todos os Bancos"
        desc02="Higienização dos Cintos de Segurança"
        desc03="Aspiração e Higienização do Carpete"
        desc04="Remoção de Manchas dos Bancos"
        desc05="Hidratação do Banco de Couro"
        desc06="Impermeabilização dos Bancos"
        desc07="Proteção dos Bancos"
      />
      <Service
        subTitle="Higienização Automotiva"
        describe={dados.services[2].higienizaçãoAutomotiva}
        img={higienzacaoImg}
        desc01="Higienização dos Bancos, Cintos e Teto"
        desc02="Aspiração e Higienização do Carpete"
        desc03="Hidratação do Volante e Painel"
        desc04="Higienização de assoalho"
        desc05="Limpeza dos Vidros"
        desc06="Desodorização interna"
        desc07="Aspiração e Higienização da Mala"
      />
      <Service
        subTitle="Limpeza do Motor"
        describe={dados.services[3].limpezaMotor}
        img={limpezaMotor}
        desc01="Inspeção inicial"
        desc02="Proteção dos componentes sensíveis"
        desc03="Remoção de sujeira solta"
        desc04="Limpeza profunda"
        desc05="Enxágue cuidadoso"
        desc06="Secagem e acabamento"
        desc07="Proteção e preservação"
      />
      <ContactUs/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  );
}

export default App;
