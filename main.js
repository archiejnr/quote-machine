//REACT CODE
 class App extends React.Component{
   constructor(props){
     super(props)
     this.state={
       quotes:[{text:'something stupid',author:'Archie',index:0},{text:'something stupidly different',author:'Daniel',index:1},{text:'something stupid',author:'Donovan',index:2}],
       currentQuote:{
         text:null,
         author:null,
         index:null
       },
       displayed:[]
     }
     this.handleClick=this.handleClick.bind(this);
   }
   //handleClick function to be called when the next button in the DOM is loaded
   handleClick=()=>{
     let random=Math.floor(Math.random()*3)+0;
     while(random===this.state.currentQuote.index){
       random=Math.floor(Math.random()*3)+0;
     }
     let newArr=this.state.displayed.concat([random]);
     this.setState({
       currentQuote:this.state.quotes[random],
       displayed:newArr
     });
     console.log(random)
   }
   //this method is automatically fired before react renders
   componentWillMount(){
     let random =Math.floor(Math.random()*2)+0;
     let newArr=this.state.displayed.concat([random]);
     this.setState({
       currentQuote:this.state.quotes[random],
       displayed:newArr
     })
     console.log(this.state.displayed)
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
