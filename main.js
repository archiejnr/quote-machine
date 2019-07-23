 class App extends React.Component{
   constructor(props){
     super(props)
     this.state={
       quotes:[{text:'something stupid',author:'Archie',index:0},{text:'something stupid',author:'Daniel',index:1},{text:'something stupid',author:'Donovan',index:2}],
       currentQuote:{
         text:'',
         author:'',
         index:1
       }
     }
     this.handleClick=this.handleClick.bind(this);
   }
   handleClick=()=>{
    let random=Math.floor(Math.random() * 2) + 0;
    let  currentQuoteIndex=this.state.currentQuote.index
    if(random===currentQuoteIndex){
      random=random+1;
      this.setState({
        currentQuote:{
          text:this.state.quotes[random].text,
          author:this.state.quotes[random].author,
          index:random
        }
      });
    }
    else
    this.setState({
      currentQuote:{
        text:this.state.quotes[random].text,
        author:this.state.quotes[random].author
      }
    });
     console.log(random)
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
