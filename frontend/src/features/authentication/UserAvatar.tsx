
export default function UserAvatar({username}: {username: string}) {

  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
     <img src="/user.jpg" alt={`${username} profile`}  className="size-7 rounded-full object-cover object-center"/>
     <span>{username}</span>
    </div>
  )
}
