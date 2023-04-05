import { useEffect } from "react"

export const Message = () => {
    useEffect(() => {
        console.log("Message mounted")

        return () => {
            console.log("Message unmounted")
        }
    },[])
  return (
    <p className="text-danger">El usuario ya existe</p>
  )
}
