import Link from 'next/link'
import Head from 'next/head'

function Title(props){
    return
}

export default function Home(props) {
    return (
        <div>
            <Head>
                <title>Guilherme-Contact-Me</title>
                <link rel="shortcut icon" href="/gIcon.ico" />
            </Head>
            <header className="headerContactMe">

                    <img src="/images/bannerHeroContactMe.jpg"/>

            </header>
            
            <h2></h2>
            <section className='contactContainer'>

                <div>
                    <Link href='https://www.linkedin.com/in/gui-dev-souza'>
                        <img src="/images/linkedinIcon.jpg"/>      
                    </Link>
                </div>

                <div>
                    <Link href='https://github.com/tizula1'>
                        <img src="/images/githubIcon.jpg"/>      
                    </Link>
                </div>

                <div>
                    <img src="/images/gmailIcon.jpg"/>      
                    <h4>souza.gui2002@gmail.com</h4>
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
                    <Link href="/projects">
                        <img src ="/images/backProjects.jpg"/>
                    </Link>
                </div>
            </section>



      </div>

       

    )
  }