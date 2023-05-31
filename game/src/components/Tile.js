import "../App.css"
export default function Tile(props) {
    return (
        <div className={props.color}>
            <img id="pieces" src={props.src} />
        </div>
    )
}