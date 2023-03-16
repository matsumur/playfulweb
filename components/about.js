export default function About(props) {
  return (
    <div className="border rounded-xl bg-gray-50">
      <div className="text-left w-full p-8">
        <h1 className="pb-10 sm:text-2xl lg:text-3xl font-bold">
          {props.name}
        </h1>
        <div className="pb-16">{props.children}</div>
      </div>
    </div>
  )
}
