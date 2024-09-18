import { useEffect, useState } from "react";
import { getCurrentUser } from "../../actions/auth.action";
import { Typography } from "@mui/material";
import Parse from "parse";
import { getCurrentFullName } from "../../utils/utils";




const Profile = () => {
  const [currentUser, setCurrentUser] = useState<Parse.User | undefined>(undefined)

  useEffect(() => {
    const init = async () => {
      try {
        const user = await getCurrentUser();
        setCurrentUser(user)
      } catch (error) {
        console.log('error: ', error);

      }
    }

    init();
  }, [])

  if (!currentUser) return null;
  
  return (
    <div css={{ minHeight: "100vh", position: "relative"}} className="flexColumn">
      <Typography>Name: {getCurrentFullName(currentUser)}</Typography>
      <Typography>Email: {currentUser.get('email')}</Typography>
    </div>
  )
}

export default Profile