import Img1 from "./assets/img2.jpg";
import Img2 from "./assets/img2.jpg";
import Img3 from "./assets/img3.jpg";
import Img4 from "./assets/img4.jpg";
import Img5 from "./assets/img5.jpg";
import Img6 from "./assets/img6.jpg";
import { faFileCode ,  faFileUpload, faUser , faCog , faCalendar ,  faEnvelope  } from '@fortawesome/free-solid-svg-icons';


const data = {
   cardData: [
      {
         id: 1,
         icon: faFileCode , 
         imgSrc: Img1,
         title: "Application Development",
        desc1: "Design.",
         desc2: "Coding & Architecture .",
         desc3:"Business & GAP Analysis . " ,
        
      },

      {
         id: 2,
         icon: faFileUpload, 
         imgSrc: Img2,
         title: "Customization & Implementation" ,
         desc1: "Banking Applications Implementation .",
         desc2: "Data Migration using tools and best practices.",
        
      },

      {
         id: 3,
         icon: faEnvelope ,
         imgSrc: Img3,
         title: "Support & Maintenance ",
         desc1: "Support for Applications .",
         desc2: "Re-architecting of legacy apps ",
         desc3:"Offshore / Onsite Support ." ,
      },
    

      {
         id: 4,
         icon: faCog,
         imgSrc: Img4,
         title: "Middleware Services",
         desc1: "EAI Development Integration to Enable STP  .",
         desc2: "EAI through Web-Services .",

      },

      {
         id: 5,
         icon: faUser,
         imgSrc: Img5,
         title: "Quality Engineering & Assurance",
         desc1: "Functional Testing QC to ALM Testing Test Data Management .",
         desc2: "Performance Testing  .",
         desc3:"Agile Testing ." ,
      },

      {
         id: 6,
         icon: faCalendar,
         imgSrc: Img6,
         title: "Project & Product Management ",
         desc1: "project management methodologies without compromising time and budget.",
         desc2: "finding the best way in representing the smallest of the smallest information for our product. ",
       
      },
   ],
};

export default data;
