interface SquareProps{
    value:number;
    onClick:()=>void;
}
export default function Square({value,onClick}:SquareProps){
    return (<button className="square" onClick={onClick}>
    {value}
  </button>)
}