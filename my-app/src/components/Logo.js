import React from 'react';
import logo from '../images/logo.svg';
import companyName from '../images/BOOK4U.svg';
import './Logo.css';

class Logo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {srcImagem: logo, srcNome: companyName}
    }

    render() {
        return (
            <>

                <img className="logoImage" src={this.state.srcImagem} alt='Book4U'/>
                <img className="companyName" src={this.state.srcNome} alt='Logomarca de livro'/>
            </>
        )
    }
}

export default Logo;