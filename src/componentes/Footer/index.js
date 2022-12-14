import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='facebook.com' target="_blank">
                        <img src='/imagens/fb.png' alt='Facebook logo' />
                        </a>
                    </li>
                    <li>
                        <a href='twitter.com' target="_blank">
                            <img src='/imagens/tw.png' alt='Twitter logo' />
                        </a>
                    </li>
                    <li>
                        <a href='instagram.com' target="_blank">
                            <img src='/imagens/ig.png' alt='Instagram logo' />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='/imagens/logo.png' alt='Organo logo' />
            </section>
            <section>
                <p>
                    Desenvolvido por Leonardo Buck Alves
                </p>
            </section>
        </footer>
    )   
}

export default Footer;