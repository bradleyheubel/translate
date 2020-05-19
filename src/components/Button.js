import React from 'react'

import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class Button extends React.Component {
    //must be called contextType (otherwise it wont work)
    //static adds this property to the class
    //same as: Button.contextType = LanguageContext
    //static contextType = LanguageContext

    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Voorleggen'
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({ language }) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {
        //const text = this.context === 'english' ? 'Submit' : 'Voorleggen'
        //return(
        //    <button className="ui button primary">{text}</button>
        //)

        return (
            <ColorContext.Consumer>
                {(color) =>
                    this.renderButton(color)
                }
            </ColorContext.Consumer>
        )
    }
}

export default Button