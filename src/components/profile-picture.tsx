import Image from 'next/image'
import profilePictureImg from '@/assets/profile-picture.jpg'

export function ProfilePicture() {
  return (
    <Image
      src={profilePictureImg}
      width={36}
      height={36}
      alt=""
      className="rounded-full w-9 h-9 object-cover"
    />
  )
}
