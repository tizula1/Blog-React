import Link from 'next/link'
import Head from 'next/head'

function Title(props){
    return
}

export default function Home(props) {
    return (
        <div>
            <Head>
                <title>Guilherme-About-Me</title>
                <link rel="shortcut icon" href="/gIcon.ico" />
            </Head>
            <header className="headerAboutMe">
                    <img src="/images/bannerHeroAboutMe.jpg"/>
            </header>
            <h2></h2>
            <section className='postAboutMe'>
                <div>
                    <img src="/images/aboutMeHeader.jpg"/>
                </div>
                <div>
                <h1>Olá, me chamo Guilherme de Souza,<br/> tenho 20 anos, sou formado em Análise e Desenvolvimento de Sistemas e atualmente 
                    sou um apaixonado estudante de programação. Tenho hoje uma<br/> carreira no ramo da tecnologia de aproximadamente 3 anos, já tendo atuado desde Startups até
                    grandes empresas como Stefanini Rafael e Cottonbaby.<br/> Minhas atuações tem sido mais focadas em suporte e infraestrutura de rede porém seguindo o sonho de me tornar
                    um desenvolvedor completo.<br/><br/> Se tiver interesse em entrar em contato comigo para trocarmos conhecimentos estou totalmente aberto,
                    clicando na imagem "contact me" estão meu Linkedin, GitHub e Email.
                    </h1>
                </div>
            </section>
            <h2></h2>
            <section className="optionsContainer">
                <div>
                    <Link href="/">
                        <img src="/images/backHome.jpg"/>
                    </Link>
                </div>
                <div>
                    <Link href="/projects">
                        <img src ="/images/projectsPh.jpg" />
                    </Link>
                </div>
                <div>
                    <Link href="/contactMe">
                        <img src ="/images/contactMe.jpg"/>
                    </Link>
                </div>
            </section>

      </div>
    )
  }
