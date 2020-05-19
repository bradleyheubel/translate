import React from 'react'

//Needs to have first letter capitalised as its a React component, not a HTML component
const Context =  React.createContext('english')

export class LanguageStore extends React.Component {
    state = { language: 'english' }

    onLanguageChange = (language) => {
        this.setState({ language })
    }

    render() {
        return (
            <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context