export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center" cy-data="avatar-block">
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} cy-data="avatar-image" />
      <div className="text-xl font-bold" cy-data="avatar-name">{name}</div>
    </div>
  )
}
