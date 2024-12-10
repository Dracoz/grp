export default function Button({ ...others}){
    return (
        <li className="flex items-center gap-3">
            <button {...others}></button>
        </li>
    )
}