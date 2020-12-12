import React from './ra';
import ReactDOM from './ra-dom.js'; 

function FunComp(props){
  return (
    <header className="func">func {props.name}</header>
  )
}

class ClassComp{
  constructor(props){
    this.props=props;
  }
  render = () => (
    <footer className="class-it">
      class componet {this.props.name}
      {this.props.children}
    </footer>
  )
}
// React.createElement(tag, props, ...children) => { $$typeof: Symbol(react.element), type: tag }
const jsx = ( 
  <div id='L1'> 
    <h3 name="jsx">JSX</h3>
    <p name="jsx2">JSX</p>
    <FunComp name="f-c"/>
    <ClassComp name="class-c">
        some warp 
        <h1>h1 wrap</h1>
        <FunComp name="f-c2"/>
      </ClassComp>
    <br/>
  </div>
)
console.log('react','jsx',jsx);
ReactDOM.render(
  jsx,
  document.getElementById('root')
);

