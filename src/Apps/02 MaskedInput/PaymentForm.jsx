import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
 
export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div id="PaymentForm">
          <legend className="col-span-4 w-full text-center text-2xl mb-8">Introduzca su información de Pago</legend>
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <div className='space-x-2 mt-8 grid grid-cols-4'>
        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
        	<input
            type="text"
            name="name"
            placeholder="Nombre del Tarjetahabiente"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
        	<input
            type="tel"
            name="expiry"
            placeholder="Expiration date"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="tel"
            name="cvc"
            placeholder="cvc"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
        
        </div>
      </div>
    );
  }
}