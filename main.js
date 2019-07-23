 class App extends React.Component{
   constructor(props){
     super(props)
     this.state={
       quotes:[{text:'something stupid',author:'Someone said'},{text:'something stupid',author:'Someone'},{text:'something stupid',author:'Someone'}],
       currentQuote:{
         text:'work harder paly hard',
         author:'Wiz Khalifa'
       }
     }
     this.handleClick=this.handleClick.bind(this);
   }
   handleClick=()=>{
    let random=Math.floor(Math.random() * 2) + 0
     console.log(this.state.quotes[random].text)
   }
   render(){
     return (<div id="quote-box" className="bg-light row">
                  <div id="text" className="col-12">{this.state.currentQuote.text}</div>
                  <div id="author" className="col-4 offset-8">{this.state.currentQuote.author}</div>
                  <button id="new-quote" className="btn btn-primary" onClick={this.handleClick}>next</button>
                  <i id="tweet-quote"></i>
                </div>
              )
   }
 }

ReactDOM.render(<App/>,document.querySelector('#root'))
