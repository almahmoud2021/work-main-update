import React  from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; //for lan added
import { useState } from 'react';
// import data from "./data";
import Model from "./Model";
// import './Home.css';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';






export const Services = (props) => {
  const [changeStatus] = React.useState(false);
  
  const [ t ] =useTranslation(); //for lan added
  
    const [model, setModel] = useState(false);
    const [tempdata, setTempdata] = useState([]);
  
    const getData = (img, title, desc1 , desc2 , desc3) => {
      let tempData = [img, title, desc1, desc2 , desc3];
      setTempdata((item) => [1, ...tempData]);
  
      return setModel(true);
    };
  




  return (
    <div id='services' className='text-center'  style={{ borderRadius:"5px",marginBottom:"5px" }}>
      <div className='container'>
        <div className='section-title'>
          <h2>{t('titles.services')}</h2>
        </div>

        <div className='row'>
          {props.data ///
            ? props.data.map((d, i) => ( ///
                <motion.div  key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <motion.p hidden={changeStatus}>{d.text}</motion.p>

                              <div className="popup">

                                             <FontAwesomeIcon icon={d.icon} className="icon   justify-content-center"  style={{marginLeft:"191px" , marginTop:"30px" , color:"white" }}/> 
                                               <button
                                                 className="btn btn-light" 
                                                 onClick={() =>
                                                  getData(d.imgSrc)
                                                }
                                              >
                                                {" "}
                                                Click me{" "}
                                              </button>
                              </div>
                  </div>
                </motion.div>
              ))
            : 'loading'}
        </div>
      </div>
      {model === true ? (
				<Model
					img={tempdata[1]}
					title={tempdata[2]}
					desc1={tempdata[3]}
                    desc2={tempdata[4]}
                    desc3={tempdata[5]}
					hide={() => setModel(false)}
				/>
			) : (
				" "
			)}
    </div>
  )

}
