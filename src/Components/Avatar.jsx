import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Stack from "@mui/material/Stack";
import image1 from "../Static/Images/1.png"
import image2 from "../Static/Images/2.png"
import image3 from "../Static/Images/3.png"
import image4 from "../Static/Images/4.png"
import image5 from "../Static/Images/5.png"

export default function ImageAvatars() {
  return (
    <div className="App bg2">
      <h1>ImageAvatars</h1>
      <div className="bg3">
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src={image1} />
          <Avatar alt="Travis Howard" src={image2} />
          <Avatar alt="Cindy Baker" src={image3} />
        </Stack>
      </div>
      <div className="bg3">
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Remy Sharp"
            src={image1}
            sx={{ width: 24, height: 24 }}
          />
          <Avatar alt="Remy Sharp" src={image1} />
          <Avatar
            alt="Remy Sharp"
            src={image1}
            sx={{ width: 56, height: 56 }}
          />
        </Stack>
      </div>
      <div className="bg3">
        <Stack direction="row" spacing={2}>
          <AvatarGroup total={24}>
            <Avatar alt="Remy Sharp" src={image1} />
            <Avatar alt="Travis Howard" src={image2} />
            <Avatar alt="Agnes Walker" src={image4} />
            <Avatar alt="Trevor Henderson" src={image5} />
          </AvatarGroup>
        </Stack>
      </div>
    </div>
  );
}
