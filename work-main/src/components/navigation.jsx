// import i18n from "../i18n";
import { useTranslation } from 'react-i18next'; //for lan added
import { LangButton } from './lanButton'

export const Navigation = (props) => {
  const [ t ] =useTranslation(); //for lan added

  return (

    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>

      <LangButton />

      <div className='navBarContainer'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>

          <div style={{ textAlign:"left",maxWidth:"300px" }}>
                <a href='#page-top' className='page-scroll'>
                          <img alt="logo" src={"./img/AspireFinalLOGO/png/AspireLogofinal619.svg"} width="28%" height="auto"/>
                          {/* <h4 style={{ fontSize:"1.5vw",fontWeight:"bold",position:"relative",top:"5px",left:"5px" }}>Aspire Technologies</h4> */}
                </a>
          </div>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
          <li>
              <a href='#page-top' className='page-scroll'>
               {t('menu.Home')} {/*lan tran */}
              </a>
            </li>  
            <li>
              <a href='#services' className='page-scroll'>
              {t('menu.Services')}
              </a>
            </li>
            <li>
              <a href='#industries' className='page-scroll'>
              {t('menu.Industries')}
              </a>
            </li>
            <li>
              <a href='#partners' className='page-scroll'>
              {t('menu.partners')}
              </a>
            </li>
            {/* <li>
              <a href='#features' className='page-scroll'>
                Features
              </a>
            </li> */}
            <li>
              <a href='#about' className='page-scroll'>
              {t('menu.About')}
              </a>
            </li>
          
            {/* <li>
              <a href='#portfolio' className='page-scroll'>
                Gallery
              </a>
            </li> */}
            {/* <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li> */}
            {/* <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li> */}
            <li>
              <a href='#contact' className='page-scroll'>
              {t('menu.Contact')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
