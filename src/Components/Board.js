import React from 'react';
import Level from '../Level.js'
import '../board.css';

export default class Board extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      board: this.createBoard(),
      levelData: null,
      camOrigin: (0,0),
      viewPort: (25,25)
    };

  
  }

  createBoard() {
    let board = [];
    let x = this.state.viewPort[0];


    for(let i=0; i<this.state.viewPort[0]; i++){
      var row = [];

      for(let j=0; j<this.state.viewPort[1]; j++){
        row.push(<Cell />);
      }

      board.push(<div className="board-row">{row}</div>);
    }

    return board;
  }


  render(){
    this.createBoard();
    return this.state.board;
  }
}



 class Cell extends React.Component{
  constructor(props){
    super(props);
    this.state = {
       color: "rgba(0, 138, 41, 0.75)",
       contents: ""
    }
  }

  render(){
    console.log("making a cell :)");
    return(
          <div className="Cell" style={{color:this.state.color}}>
            {this.state.contents}
          </div>)
  }

}
