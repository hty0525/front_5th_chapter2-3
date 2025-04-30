import { User } from "../../entities/user/model/apis"

type Props = User & {
  onClick: () => void
}

const UserAvatar = ({ image, username, onClick }: Props) => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer" onClick={onClick}>
      <img src={image} alt={username} className="w-8 h-8 rounded-full" />
      <span>{username}</span>
    </div>
  )
}

export default UserAvatar
