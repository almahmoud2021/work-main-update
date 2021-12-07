import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import { useTranslation } from 'react-i18next';     // lan switching package
// import popup from '../../src/popup.jpg'; // gives image path
// import { motion } from 'framer-motion';
// import { useState, useEffect } from 'react';
// import translationEN from "../locale/en.json"  ///
// import translationAR from "../locale/ar.json" ///





const useStyles = makeStyles((theme) => ({
    root:{
      padding:"2px 0px 0px 24px",
      "& h2":{
        fontSize:"21px",
        textTransform:"none"
      },
      "& p":{
        fontSize:"21px",
      }
  }
}));







export default function ؤ(props) {



  const [open, setOpen] = React.useState(false);

  const classes = useStyles();


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [ t ] = useTranslation();     // lan switching const

  
  // const [dataImg, setDataImg] = useState({}) ///
  // useEffect(() => {
  //   if(i18n.language === 'en')
  //     return;
  //       setDataImg(translationAR) 
  // }, [i18n.language])
  // useEffect(() => {
  //   if(i18n.language === 'ar') 
  //     return;
  //       setDataImg(translationEN) 
  // }, [i18n.language])




  return (
    <div>
      <Button variant="contained" style={{ background:"white",color:"black",fontSize:"1.3vw",fontWeight:500,textTransform:"none" }}
       onClick={handleClickOpen}>
        {t('popup.title')}    
      </Button>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" size="large">
          
        <DialogTitle id="form-dialog-title" className={classes.root}>{t('popup.send_request')}</DialogTitle>
        
        <DialogContent>
        <form > 
                  <DialogContentText style={{ fontSize:"15px",fontWeight:500 , color:'black'}}>
                    {/* To  */} <span style={{ fontWeight:"bold",color:"#8ca945" }}>{t('popup.paragraph')}</span>
                    </DialogContentText>
             
                          <Grid container spacing={1}>
                            <div>

                                   {/* <div>
                                    <img src={popup} alt="Loading..." />
                                    </div>  */}
                                             {/* <div>
                                                 <div className='row'>
                                                        {props.data ///
                                                            ? props.dataImg.Service.map((d, i) => ( ///

                                                                <div  key={`${d.id}-${i}`} className='col-md-4'>
                                                                    {' '}
                                                                     <i className={d.name}></i> 
                                                                        <h3>{d.img}</h3> 
                                                                </div>
                                                            ))
                                                            : 'loading Image...'}
                                                </div> 
                                            </div>   */}
                            </div>
                         </Grid>
   
        {/* <DialogActions> */}
          {/* <Button onClick={handleClose} style={{ fontWeight:"bold",fontSize:"13px",textTransform:"none" }}>
            Cancel
          </Button> */}
         <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
          <Button type='submit' style={{ fontWeight:"bold",color:"#8ca945",fontSize:"13px",textTransform:"none" }}>
            {t('popup.close')}
          </Button>
          </Grid>
          </form>
          </DialogContent>
        {/* </DialogActions> */}
      </Dialog>
    </div>
    
  );
}
