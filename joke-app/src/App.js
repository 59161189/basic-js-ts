import './assets/css/App.css';
import Joke from './components/joke'
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: "",
      name: "",
      lastName: "",
      jokeLists: []
    }
    this.onChangedHandler = this.onChangedHandler.bind(this);
    this.onSubmitHandler = this.onSubmittedHandler.bind(this);
  }

  onChangedHandler(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  onSubmittedHandler() {
    this.fetchJokes(this.state.amount, this.state.name, this.state.lastName);
  }

  fetchJokes(amount, name, lastname) {
    if (amount === "" && (name === "" && lastname === "")) { // ถ้าผู้ใช้ไม่ได้กรอกข้อมูลเพิ่ม
      fetch("http://api.icndb.com/jokes/random/")
        .then(response => response.json())
        .then(data => {
          this.setState({
            jokeLists: [data.value]
          })
        })
    }
    else
      if (amount !== "" && (name === "" && lastname === "")) { // ถ้าผู้ใช้กรอกแค่จำนวน
        fetch("http://api.icndb.com/jokes/random/" + amount)
          .then(response => response.json())
          .then(data => {
            this.setState({
              jokeLists: data.value
            })
          })
      }
      else if (amount === "" && (name !== "" && lastname !== "")) { // ถ้าผู้ใช้กรอกแค่ ชื่อ - นามสกุล
        fetch("http://api.icndb.com/jokes/random?firstName=" + name + "&lastName=" + lastname)
          .then(response => response.json())
          .then(data => {
            this.setState({
              jokeLists: data.value
            })
          })
      } else if (amount !== "" && (name !== "" && lastname !== "")) { // ถ้าผู้ใช้กรอกครบ
        fetch("http://api.icndb.com/jokes/random/" + amount + "?firstName=" + name + "&lastName=" + lastname)
          .then(response => response.json())
          .then(data => {
            this.setState({
              jokeLists: data.value
            })
          })
      }
  }

  render() {
    let jokeFetched = this.state.jokeLists.map(item => <Joke key={item.id} joke={item.joke} />);

    return (
      <div className="App">
        <h1>"MAKE SOME JOKE"</h1>
        <div className="joke-form" >
          <div className="form-group">
            <label htmlFor="amount-input">Amount</label>
            <input className="joke-input" type="number" name="amount" placeholder="1" onChange={this.onChangedHandler}></input>
          </div>
          <div className="form-group">
            <label htmlFor="name-input">Name</label>
            <input className="joke-input" type="text" name="name" placeholder="Chuck" onChange={this.onChangedHandler}></input>
          </div>
          <div className="form-group">
            <label htmlFor="lastname-input">Lastname</label>
            <input className="joke-input" type="text" name="lastName" placeholder="Norris" onChange={this.onChangedHandler}></input>
          </div>
          <div className="form-group">
            <button className="submit-btn" type="submit" onClick={this.onSubmitHandler}>OKAY</button>
          </div>
        </div>
        {jokeFetched}
      </div>
    );
  }
}

export default App;
