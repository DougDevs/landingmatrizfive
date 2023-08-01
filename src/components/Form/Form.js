import '../../css/form-style.css'

function Form(){
    return(
        <div className='form-container'>
            <h2>Faça uma Cotação</h2>
            <form action="https://formsubmit.co/henrique.corsi11@gmail.com" method='POST'>
                <input type="text" placeholder="Nome Completo" required/>
                <input type="email" name="emailUser" id="emailInput" placeholder='Email' required/>
                <input type="tel" name="telUser" id="telInput" placeholder="Telefone" required/>
                <input type="text" placeholder="Veículo" required/>
                <textarea name="msg" id="msg-text" cols="30" rows="5" placeholder='Mensagem'></textarea>
                <input type="hidden" name="_captcha" value="false"></input>
                <button className='submit-btn'>Enviar</button>
            </form>
        </div>
    )
}

export default Form;