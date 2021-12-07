// import React  from 'react';
// import { motion } from 'framer-motion';
// import { useTranslation } from 'react-i18next'; //for lan added



// export const Services = (props) => {
//   const [changeStatus] = React.useState(false);
  
//   const [ t ] =useTranslation(); //for lan added

//   return (
//     <div id='services' className='text-center'  style={{ borderRadius:"5px",marginBottom:"5px" }}>
//       <div className='container'>
//         <div className='section-title'>
//           <h2>{t('menu.Services')}</h2>
        
//         </div>
//         <div className='row'>
//           {props.data ///
//             ? props.data.map((d, i) => ( ///
//                 <motion.div  key={`${d.name}-${i}`} className='col-md-4'>
//                   {' '}
//                   <i className={d.icon}></i>
//                   <div className='service-desc'>
//                     <h3>{d.name}</h3>
//                     <motion.p hidden={changeStatus}>{d.text}</motion.p>
//                   </div>
//                 </motion.div>
//               ))
//             : 'loading'}
//         </div>
//       </div>
//     </div>
//   )

// }
