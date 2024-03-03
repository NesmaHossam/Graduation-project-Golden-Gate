import React, { useState } from "react";
import "./ProfilePicture.css";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import profile_pic from "../Assests/profile_pic.png";
import Avatar from "react-avatar-edit";
import { Button } from "primereact/button";

const ProfilePicture = () => {
  const [imagecrop, setimagecrop] = useState(false);
  const [image, setimage] = useState("");
  const [src, setsrc] = useState(false);
  const [profile, setprofile] = useState([]);
  const [pview, setpview] = useState(false);

  const profileFinal = profile.map((item) => item.pview);

  const onClose = () => {
    setpview(null);
  };

  const onCrop = (view) => {
    setpview(view);
  };

  const saveCropImage = () => {
    setprofile([...profile, { pview }]);
    setimagecrop(false);
  };

  return (
    <div className="profile-pic">
      <div className="profile_img  ">
        <div>
          <img
            // onClick={() => setimagecrop(true)}
            src={profileFinal.length ? profileFinal : profile_pic}
            alt=""
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-plus-circle-fill"
            viewBox="0 0 16 16"
            onClick={() => setimagecrop(true)}
            // src={profileFinal.length ? profileFinal : profile_pic}
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
          </svg>

          {/* put here user name and email of the user */}

          <div>
            <h3>Username</h3>
            <p>email of the user</p>
          </div>

          <Dialog
            visible={imagecrop}
            header={() => (
              <p htmlFor="" className="text-2xl textColor">
                update profile picture
              </p>
            )}
            onHide={() => setimagecrop(false)}
          >
            <div className="confirmation-content ">
              <Avatar
                width={500}
                height={400}
                onCrop={onCrop}
                onClose={onClose}
                src={src}
                shadingColor={"#474649"}
                backgroundColor={"#474649"}
              />

              <div>
                <div>
                  <Button
                    onClick={saveCropImage}
                    label="Save"
                    icon="pi pi check"
                  />
                </div>
              </div>
            </div>
          </Dialog>

          <InputText
            type="file"
            accept="/image/*"
            style={{ display: "none" }}
            onChange={(event) => {
              const file = event.target.files[0];
              if (file && file.type.substring(0, 5) === "image") {
                setimage(file);
              } else {
                setimage(null);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
