const Tile = ({value,changeBoard,index}) => {
    return (
        <div className="ButtonPlace" id = {`theBu${index}`}>
        <h1><button className = "AlonButton" onClick = {changeBoard}>{value}</button></h1>
        </div>
      );
}
 
export default Tile;