import React, { Component } from 'react';
import axios from 'axios';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip'

class App extends Component {
  constructor() {
    super();
    this.state = {
      allData: [],
    };
}

clickPost(e){
  e.preventDefault();
  var url = 'http://localhost:3210/data';
  axios.post(url, {
    name: this.inputname.value,
    age: this.inputage.value
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  this.inputname.value = '';
  this.inputage.value = '';
};

clickGet(e){
  e.preventDefault();
  var url = 'http://localhost:3210/data';
  axios.get(url)
  .then((getData) => {
    console.log(getData.data);
    this.setState({
      allData: getData.data,
    }) 
  })
};

render() {
  const dataPostgre = this.state.allData.map((item, index)=>{
    var array = ['Name: ',item.name,', Age: ', item.age, ' th.'].join(' ');
    return <p key={index}>{array}</p>;
  })
  return (
   <div className="container">
   <Zoom>
     <center style={{margin:'25px'}}>
        <Flip><h3>Testing App</h3></Flip>
     
     <form>

  <div className="form-group" style={{margin:'15px'}}>
    <input className="form-control" type="text" id="name" 
    ref={ inname => this.inputname = inname }
    placeholder="Input name!"/>
  </div>

  <div className="form-group" style={{margin:'15px'}}>
    <input className="form-control" type="number" id="age" 
    ref={ inage => this.inputage = inage }
    placeholder="Input age"/>
  </div>
  
  <button className="btn btn-primary" style={{width:'100px'}}
  onClick={this.clickPost.bind(this)}>POST</button>
  
  <button className="btn btn-success" style={{margin:'15px',width:'100px'}}
  onClick={this.clickGet.bind(this)}>GET</button>

</form>

     <div>
       { dataPostgre }
     </div>
     </center>
     </Zoom>
   </div>
  );
 }
 }
 
export default App;