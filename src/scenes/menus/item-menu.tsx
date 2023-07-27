import { useState } from "react";
import React from "react";

function itemSquare(value : any, onSquareClick : any){
    return(
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

function itemGrid(x : any,y : any){
    
    
    var rows: any = [];

    for (let i =0; i<x; i++){
        var squares: any = [];
        for(let j=0; j<y; j++)
            squares.push(itemSquare(0,null));

        rows.push(<div className="row" key={i}>{squares}</div>);
    }
    
    let grid = <div className="grid">{rows}</div>;

    return grid;
}


export default function ItemMenu({x ,y }: any) : React.JSX.Element {
    return <div className="item-menu">
            
            {itemGrid(x,y)}
        </div>
}