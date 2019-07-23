class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (<div>Hello world we have officialy setup the environment</div>)
  }
}

ReactDOM.render(<App/>,document.querySelector('#root'))
