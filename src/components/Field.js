import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component{
    static contextType = LanguageContext;
    render(){

        // now is a object
        const text = this.context.language === 'english' ? 'Name' : 'Naam';

        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        )
    }
}

export default Field;