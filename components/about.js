export default function About(props) {
return(
    <div className="p-8 mt-8 text-left border w-full rounded-xl">
    <h3 className="text-2xl font-bold">{props.name} &rarr;</h3>
    { props.children }
    </div>
)
}