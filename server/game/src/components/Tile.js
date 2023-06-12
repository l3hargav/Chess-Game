import "../App.css"
export default function Tile(props) {
    return (
        <div className={props.color}  onClick={props.onClick} >
            <img id="pieces" src={props.src} alt=""/>
        </div>
    )
}