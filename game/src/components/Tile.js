import "../App.css"
export default function Tile(props) {
    return (
        <div className={props.color}>
            <img src={props.piece.image} />
        </div>
    )
}