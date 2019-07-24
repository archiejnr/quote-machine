//REACT CODE
 class App extends React.Component{
   constructor(props){
     super(props)
     this.state={
       quotes:[{text:"Don't cry because it's over, smile because it happened",author:"Dr. Seuss",index:0},{text:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",author:"Marilyn Monroe",index:1},{text:"You only live once, but if you do it right, once is enough.",author:"Mae West",index:2},{text:"In three words I can sum up everything I've learned about life: it goes on.",author:"Robert Frost",index:3},{text:"It is better to be hated for what you are than to be loved for what you are not.",author:"Andre Gide",index:4},{text:"Good friends, good books, and a sleepy conscience: this is the ideal life.",author:"Mark Twain",index:5}],
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
     let random=Math.floor(Math.random()*6)+0;
     let array=this.state.displayed;
     while(array.includes(random)){
       random=Math.floor(Math.random()*6)+0;
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
     let random =Math.floor(Math.random()*6)+0;
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
