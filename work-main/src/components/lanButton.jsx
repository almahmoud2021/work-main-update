import React from "react";
import { useTranslation } from 'react-i18next'; //for lan added



export const LangButton = () => {

    const [ t, i18n ] =useTranslation(); //for lan added

    
  return (
    <div className="lan-botton">
        <div class="col-md-12 text-center">
      {/* { i18n.language == 'en' &&  */}
            <button 
                onClick={() => {  // lan change method
                    i18n.changeLanguage('en');
                }}
                type="button" 
                class="btn btn-primary"
             >
                    English
                    {t(' ')}
            </button>
      {/* } */}
      {/* { i18n.language == 'ar' &&  */}
            <button 
                onClick={() => {
                    i18n.changeLanguage('ar');
                }}
                type="button" 
                class="btn "
            >
                     عربي
            </button>
      {/* } */}
      </div>
     </div>
  )
};