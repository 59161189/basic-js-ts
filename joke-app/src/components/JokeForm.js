import React from 'react'

class Jokeform extends React.Component {
    
    onChangedHandler(event) {
        this.props.onChanged(event);
    }

    render() {
        return (
            <div className="joke-form" >
                <div className="form-group">
                    <label htmlFor="amount-input">Amount</label>
                    <input className="joke-input" type="number" name="amount" onChange={this.onChangedHandler}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="name-input">Name</label>
                    <input className="joke-input" type="text" name="name" onChange={this.onChangedHandler}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="lastname-input">Lastname</label>
                    <input className="joke-input" type="text" name="lastName" onChange={this.onChangedHandler}></input>
                </div>
                <div className="form-group">
                    <button className="submit-btn" type="submit" onClick={this.onSubmitHandler}>OKAY</button>
                </div>
            </div>
            // <div className="joke-form">
            //     <label htmlFor="amount-input">Amount</label>
            //     <input type="text" name="amount-input"></input>

            //     <label htmlFor="name-input">Name</label>
            //     <input type="text" name="name-input"></input>

            //     <label htmlFor="lastname-input">Lastname</label>
            //     <input type="text" name="lastname-input"></input>

            //     <button type="submit" >OKAY</button>
            // </div>
        );
    }

}

export default Jokeform