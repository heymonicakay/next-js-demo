import Image from "next/image"
import utilStyles from "../styles/utils.module.css"

const ProfilePic = ({name}) => (
  <Image
    priority
    src="/images/profile-pic.jpeg"
    className={utilStyles.borderCircle}
    height={144}
    width={144}
    alt={name}
  />
)

export default ProfilePic
