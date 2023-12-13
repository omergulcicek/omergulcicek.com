import Balancer from "react-wrap-balancer"

export default function Title({ children }) {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-semibold">
        <Balancer>{children}</Balancer>
      </h1>
    </>
  )
}
