interface RowProps {
    children:JSX.Element | JSX.Element[]
}
export default function Row(props:RowProps){
    return <div className="row">{props.children}</div>
}