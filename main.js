//REACT CODE
 class App extends React.Component{
   constructor(props){
     super(props)
     this.state={
       quotes:[{text:"Don't cry because it's over, smile because it happened",author:"Dr. Seuss",index:0},{text:"Everything you can imagine is real.",author:"Pablo Picasso",index:1},{text:"You only live once, but if you do it right, once is enough.",author:"Mae West",index:2},{text:"In three words I can sum up everything I've learned about life: it goes on.",author:"Robert Frost",index:3},{text:"It is better to be hated for what you are than to be loved for what you are not.",author:"Andre Gide",index:4},{text:"Good friends, good books, and a sleepy conscience: this is the ideal life.",author:"Mark Twain",index:5},{text:"The brain is wider than the sky.",author:"Emily Dickinson",index:6},{text:"One good thing about music, when it hits you, you feel no pain.",author:"Bob Marley",index:7},{text:"I'm not a great programmer; I'm just a good programmer with great habits.",author:"Kent Beck",index:8},{text:"A conscious human is driven by their conscience, not popular opinion",author:"Suzy Kassem",index:9},{text:"None but ourselves can free our minds",author:"Bob Marley",index:10},{text:"Talk is cheap. Show me the code",author:"Linus Torvalds",index:11}],
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
     let random=Math.floor(Math.random()*12)+0;
     let array=this.state.displayed;
     while(array.includes(random)){
       random=Math.floor(Math.random()*12)+0;
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
     let random =Math.floor(Math.random()*12)+0;
     let newArr=this.state.displayed.concat([random]);
     this.setState({
       currentQuote:this.state.quotes[random],
       displayed:newArr
     })
     console.log(this.state.displayed)
   }
   render(){
     return (<div id="quote-box" className="bg-light">
                  <div className="row"><div id="text" className="col-12"><span>"</span>{this.state.currentQuote.text}<span>"</span></div></div>
                  <div className="row"><div id="author" className="font-italic col-5 offset-7">{this.state.currentQuote.author}</div></div>
                  <div className="row mt-3">
                    <a href="twitter.com/intent/tweet" id="tweet-quote"><i className='fab fa-twitter'></i></a>
                    <button id="new-quote" className="btn btn-primary" onClick={this.handleClick}>next</button>
                  </div>
                </div>
              )
            }
          }
ReactDOM.render(<App/>,document.querySelector('#root'))
//Redux code
