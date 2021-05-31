export default function About(props) {
  return(
    <div className="p-2 lg:p-8 xl:p-8 mt-8 text-left border w-auto rounded-xl">
      <h3 className="text-2xl font-bold">{props.name} &rarr;</h3>
      { props.children }
    </div>
  )
}
