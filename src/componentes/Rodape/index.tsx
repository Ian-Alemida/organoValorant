import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="www.linkedin.com/in/ian-almeida-3a707a240" target="_blank" rel='noreferrer'>
                        <img src={'./linkedin.svg'} alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Ian-Alemida" target="_blank" rel='noreferrer'>
                        <img src={'./github.svg'} alt="" />
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