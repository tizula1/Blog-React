import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from '../components/sharedstyles'
import Cards from '../components/cards'
import JSXStyle from 'styled-jsx/style'

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Guilherme-Dev-Souza</title>
        <link rel="shortcut icon" href="/gIcon.ico" />
      </Head>
      <header className="headerHome">
        <img src={props.avatar_url}/>
        <h1>Hello, my name is:<br/> 
            Guilherme de Souza
        </h1>
      </header>
      <h2></h2>
      <section className="itensHome">
        <div>
          <Link href="/aboutMe">
            <img src="/images/aboutMe.jpg"/>
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


export async function getStaticProps(){
  
  const githubResponse = await fetch("https://api.github.com/users/tizula1")
    .then(res => res.json() )
  
  return{
    props: {
      avatar_url: githubResponse.avatar_url
    }
  }
}
