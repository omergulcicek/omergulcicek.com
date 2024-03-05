import Balancer from "react-wrap-balancer"

const Title = ({ children }) => {
  return (
    <>
      <h1 className="text-3xl font-semibold">
        <Balancer>{children}</Balancer>
      </h1>
    </>
  )
}

export { Title }
