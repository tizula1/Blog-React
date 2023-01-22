import { createGlobalStyle } from 'styled-components'
import bannerBg from './images/bannerBg.jpg'
// import sobreMim from '././images/sobreMim.jpg'

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: 	#F0F8FF;
  }
  * {
    font-family: sans-serif;
    color: #333;
    box-sizing: border-box;
  }

  html,
    body {
      background-image: url(${bannerBg.src});
      background-attachment: fixed;
      margin: 0;
      padding: 0;
      border-radius: 0px;
     }
      body{

      //padding-left: 16px;
      //padding-right: 16px;
      max-width: 1000px;
      margin: auto;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    a {
      color: var(--primary);
    }
    button,
    a {
      transition: opacity .3s;
      &:focus,
      &:hover {
        opacity: .5;
      }
    }
    .headerHome{
      display: flex;
      align-items: center;
      padding-top: 16px;
      padding-bottom: 16px;
      margin-top: 50px;
      border-radius: 20px;
      background-color: rgba(106, 90, 205,0.8);
      height: 280px;
      width: 1000px;
      img {
        padding-top: 40px;
        max-width: 200px;
        border-radius: 300px;
        margin-left: 250px;
      }
      h1 {
        margin: 0;
        padding-left:20px;
      }

    }
    .itensHome {
      align: center;
      padding-top: 23px;
      padding-bottom: 10px;
      padding-left: 32px;
      padding-right: 16px;
      background-color: rgba(106, 90, 205,0.8);
      border-radius: 20px;
      height: 350px;
      div{
        font-size: 0px;
        display: inline-block;
      }
      img {
        height: 300px;
        width: 300px
        //padding-left: 5px;
        padding-bottom: 25px;
        border-radius: 50%;
        margin-left: 10px;
        border-radius: 20px;
      }
    }

    .headerAboutMe{
      display: flex;
      align-items: center;
      padding-top: 16px;
      padding-bottom: 16px;
      margin-top: 50px;
      border-radius: 20px;
      //background-color: rgba(106, 90, 205,0.8);
      height: 300px;
      width: 1000px;
    }


    .postAboutMe{
      display: flex;
      align-items: top;
      padding-top: 32px;
      padding-bottom: 16px;
      margin-top: 20px;
      border-radius: 20px;
      background-color: rgba(106, 90, 205,0.8);
      

      div{
        font-size: 13px;
        display: inline-block;
      }

      img {
        
        //padding-top: 10px;
        //height: 400px;
        //width: 500px;
        padding-bottom: 10px;
        max-width: 200px;
        border-radius: 20px;
        margin-left: 10px;
      }
      h1 {
        margin: 0;
        padding-left:7px;
      }

    }

    .optionsContainer{
      align: center;
      padding-top: 23px;
      padding-bottom: 10px;
      padding-left: 32px;
      padding-right: 16px;
      margin-bottom: 50px;
      background-color: rgba(106, 90, 205,0.8);
      border-radius: 20px;
      width: 1000px;
      height: 250px;
      div{
        font-size: 0px;
        display: inline-block;
      }
      img {
        height: 200px;
        width: 200px
        //padding-left: 5px;
        padding-bottom: 25px;
        border-radius: 50%;
        margin-left: 80px;
        margin-right: 10px;
        border-radius: 20px;
      }
    }

    .headerProjects{
      display: flex;
      align-items: center;
      padding-top: 16px;
      padding-bottom: 16px;
      margin-top: 50px;
      border-radius: 20px;
      //background-color: rgba(106, 90, 205,0.8);
      height: 300px;
      width: 1000px;
      
   
      img {
        padding-top: 5px;
        max-width: 1000px;
        border-radius: 20px;
        
      }
      h1 {
        font-style: Georgia;
        margin: 0;
        padding-left:20px;
      }

    }

    .postsProjects{
      //display: flex;
      align-items: center;
      padding-top: 16px;
      padding-bottom: 16px;
      margin-top: 50px;
      border-radius: 20px;
      background-color: rgba(106, 90, 205,0.8);
      max-width: 1000px;
      img {
        padding-top: 0px;
        max-width: 200px;
        border-radius: 20px;
        margin-left: 16px;
      }
      h1 {
        margin: 0;
        padding-left:20px;
      }
    }



    .headerContactMe{
      display: flex;
      align-items: center;
      padding-top: 16px;
      padding-bottom: 16px;
      margin-top: 50px;
      border-radius: 20px;   
    } 
    .contactContainer{
      display: flex;
      background-color: rgba(106, 90, 205,0.8);
      align-items: center;
      border-radius: 20px;
      padding-top: 20px;
      padding-bottom: 25px;
      padding-left: 100px;
      padding-right: 20px;
      height: 220px;
      width: 1000px;

      div{
        font-size: 20px;
        display: inline-block;
      }

      img {
        line-height: 0;
        float: left;
        height: 200px;
        width: 200px
        //padding-left: 5px;
        padding-bottom: 25px;
        border-radius: 50%;
        margin-left: 40px;
        margin-right: 10px;
        border-radius: 20px;
      }
      h4{
        padding-left:20px;
        padding-bottom:10px;
      }
    }
  }  
`

export default GlobalStyle
