import Link from 'next/link'
import Head from 'next/head'

function Title(props){
    return
}

export default function Home(props) {
    return (
        <div>
            <Head>
                <title>Guilherme-Projects</title>
                <link rel="shortcut icon" href="/gIcon.ico" />
            </Head>
      <header className="headerProjects">
        <img src="/images/bannerHeroProjects.jpg"/>
      </header>
  
      <h2></h2>

      <section className="postsProjects">
        <div>
          <table>
            <tbody>
            <tr>
              <td>
                <img src="/images/meuIP.jpg"/>
              </td>
              <td>
                <h1>Meu IP:<br/> Aplicação desenvolvida em python utilizando a biblioteca "Tkinter" (Frontend) e "Socket" (Backend), o intuito dessa aplicação é otimizar
                    o atendimento do suporte a distância, facilitando a vizualização do usuário ao IP, hostname e MacAdress.
                   </h1>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <h2></h2>
        <div>
          <table>
            <tbody>
            <tr>
              <td>
                <img src="/images/webSite.jpg"/>
              </td>
              <td>
                <h1>Guilherme Dev Souza Site: <br/>Este site foi desenvolvido em JavaScript, usando a FrameWork Next.Js, o intuito dessa aplicação é muito simples, 
                mostrar um pouco da minha caminhada. </h1>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <h2></h2>
        <div>
          <table>
            <tbody>
            <tr>
              <td>
                <img src="/images/scriptPh.jpg"/>
              </td>
              <td>
                <h1>Scripts:<br/> Deixei aqui uma menção honrosa aos diversos scripts que venho desenvolvendo nas empresas que eu passo.
                  Scripts, criados em Python, Bath e PowerShell, na sua grande parte voltada para infraestrutura, como Active Directory e configurações de softwares 
                  automatizadas.</h1>
              </td>
            </tr>
            </tbody>
          </table>
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
                <Link href="/aboutMe">
                  <img src="/images/backAboutMe.jpg"/>
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
  
