import { FC } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { Navbar, SideMenu } from '../ui';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}

export const ShopLayout:FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
  return (
    <>
        <Head>
            <title>{ title }</title>

            <meta name="description" content={ pageDescription } />
            
            
            <meta name="og:title" content={ title } />
            <meta name="og:description" content={ pageDescription } />

            {
                imageFullUrl && (
                    <meta name="og:image" content={ imageFullUrl } />
                )
            }

        </Head> 

        <nav style={{ backgroundColor: '#c8c8c8'}}>
            <Navbar />
        </nav>

        <SideMenu />
            
        <main style={{
            margin: '80px auto',
            maxWidth: '1440px',
            padding: '0px 30px',
           
        }}>
            { children }
        </main>

        {/* Footer */}
       

        <footer className="footer">
  <div className="footer__addr">
    <h1 className="footer__logo">García | Cardenas</h1>
        
    <h2 className='subtitle'>Contacto</h2>
    
    <address>
      Vía maturín, a 50 metros del Terminal de Pasajeros. Punta de Mata, Estado Monagas.
          
      <a className="footer__btn" href="mailto:example@gmail.com">Email Us</a>
    </address>
  </div>
  
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">Redes</h2>

      <ul className="nav__ul">
        <li>
          <a href="#">Twitter</a>
        </li>

        <li>
          <a href="#">Facebook</a>
        </li>
            
        <li>
          <a href="#">Instagram</a>
        </li>
      </ul>
    </li>
    
    <li className="nav__item nav__item--extra">
      <h2 className="nav__title">Categorías</h2>
      
      <ul className="nav__ul nav__ul--extra">
        <li>
          <a href="#">Papeleria</a>
        </li>
        
        <li>
          <a href="#">Mobiliario</a>
        </li>
        
        <li>
          <a href="#">Electronica</a>
        </li>
        
        <li>
          <a href="#">Historial</a>
        </li>
        
       
      </ul>
    </li>
    
    <li className="nav__item">
      <h2 className="nav__title">Legal</h2>
      
      <ul className="nav__ul">
        <li>
          <a href="#">Políticas de privacidad</a>
        </li>
        
        <li>
          <a href="#">Terminos y Condiciones</a>
        </li>
        
        <li>
          <a href="#">Cookies</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div className="legal">
    <p>&copy; 2023 García-Cardenas C.A. Todos los derechos reservados.</p>
    
    <div className="legal__links">
      <span>Build with <span className="heart">Next.js</span></span>
    </div>
  </div>
</footer>


        
       

    </>
  )
}


