import React, { useLayoutEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // lan switching package 


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export const About = (props) => {
  const classes = useStyles();
  const [width] = useWindowSize();

  const [ t, i18n ] =useTranslation(); // lan switching const


  return (
    <div id='about' style={{ marginBottom:"5px",borderRadius:"5px", textAlign: i18n.language === "ar" ? "right" : "left" }} >   {/* */}
      <div className='container' >
        <div className='row'>
          <Grid
            container
            justifyContent="center"
          >
              <Grid item xs={12} sm={12} md={6}>  
              

        <Card className={classes.root} variant="outlined" style={{ background:"#133d47",borderRadius:"8px" }}>
              <CardContent>
                      <div>                                                                                                   

                        <ReactPlayer width="100%" style={{ borderRadius:"10px",overflow:"hidden" }} className={['img-responsive',"react-player"]}  controls url='https://www.youtube.com/embed/7gjgUEc4V48?showinfo=0&enablejsapi=1&origin=http://localhost:3000' />
                      </div>                                                                                                                                    
              </CardContent>
        </Card>
              </Grid>
          
          <Grid item xs={12} sm={12} md={6}>
                {width > 1600 ? (
                  <motion.div whileHover={{ scale:1.2 }} className='col-xs-12 col-md-12'>
                  <div className='about-text' >
                      <Grid>
                            <h2>{t('titles.About_Us')}</h2>
                            <p>{props.data ? props.data.paragraph : 'loading...'}</p>
                            <h3>{t('titles.why_choose_us')}</h3>
                          <div className='list-style'>
                                  <div className='col-lg-12 col-sm-12 col-xs-10'>
                                    <ul className="aboutUs">
                                          {props.data
                                              ? props.data.Why.map((d, i) => (
                                                  <li key={`${d}-${i}`}>{d}</li>
                                                  )): 'loading'}
                                    </ul>
                                  </div>
                           </div>
                    </Grid>
                </div> 
              </motion.div>
                ) : (
                  <motion.div className='col-xs-12 col-md-12'>
                      <div className='about-text'>
                          <Grid>
{/* ----------------------------------------------------------------------------------------------------------------------- */}
                                 <h2>{t('titles.About_Us')}</h2>     {/* /ar-en/ */}
                                <p style={{ color:"#000", textAlign: i18n.language === "ar" ? "right" : "left" }}> {t('About.paragraph') ? t('About.paragraph') : 'loading...'}</p>     {/* /ar-en/ */}
                                <h3>{t('titles.why_choose_us')}</h3>      {/* /ar-en/ */}
                              <div className='list-style'>
                                      <div className='col-lg-12 col-sm-12 col-xs-10'>
                                        <ul className="aboutUs">
                                        {props.data   
                                                  ? props.data.Why.map((d, i) => (  
                                                      <li style={{ color:"#000", textAlign: i18n.language === "ar" ? "right" : "left" }} key={`${d}-${i}`}>{d}</li> ///
                                                      )): 'loading'}
                                        </ul>
                                      </div>
                               </div>
                        </Grid>
                    </div> 
                  </motion.div>
                )}
                  
            </Grid>    
          </Grid>
        </div>
      </div>
    </div>
  )
}



