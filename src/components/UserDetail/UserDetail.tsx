import { useParams } from "react-router-dom"

const UserDetail = () => {
  const { name } = useParams()
  return (
    <div>{name} Info::::</div>
  )
}

export default UserDetail
