import React from 'react';
import Board from './Components/Board.js';
import {Level, WorldGenerator} from './Level.js';


export default class Main extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      board: <Board width={25} height={25}/>,
      level: null
    };

  }

  generate_new(){
    let lvl = new Level(60, 60);
  }

  render(){
    return(
      <div>
        <div>
         {this.state.board}
        </div>
      </div>



    );
  }


}
