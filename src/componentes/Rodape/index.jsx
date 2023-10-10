import './rodape.css'
import githubIcon from './github.svg'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/imagens/linkedin.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src={githubIcon} alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/binary_jouney/?utm_source=qr" target="_blank" rel='noreferrer'>
                        <img src="/imagens/instagram.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Ian Almeida.
            </p>
        </section>
    </footer>)
}

export default Rodape