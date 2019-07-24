 class App extends React.Component{
   constructor(props){
     super(props)
     this.state={
       quotes:[{text:'something stupid',author:'Archie',index:0},{text:'something stupid',author:'Daniel',index:1},{text:'something stupid',author:'Donovan',index:2}],
       currentQuote:{
         text:null,
         author:null,
         index:null
       }
     }
     this.handleClick=this.handleClick.bind(this);
   }
   //handleClick function to be called when the next button in the DOM is loaded
   handleClick=()=>{
     let random=Math.floor(Math.random()*3)+0;
     while(random===this.state.currentQuote.index){
       random=Math.floor(Math.random()*3)+0;
     }
     this.setState({
       currentQuote:this.state.quotes[random]
     });
     console.log(random)
   }
   //this method is automatically fired before react renders
   componentWillMount(){
     let random =Math.floor(Math.random()*2)+0;
     this.setState({
       currentQuote:this.state.quotes[random]
     })
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
