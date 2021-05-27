import Navbar from './navbar'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Page({ children }) {
  return(
    <div>
      <Navbar />
      {children}
    </div>
  )
}