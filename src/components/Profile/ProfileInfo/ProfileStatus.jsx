import React, { useState } from "react";

const ProfileStatus = ({ status, updateStatus, ...props }) => {
  const [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(status);
  };

  const onStatusChange = (e) => {
    // setStatus(e.currentTarget.value);
    // console.log(e.currentTarget.value);
    updateStatus(e.currentTarget.value);
  };

  return (
    <>
      {!editMode && (
        <div>
          <b>User Status:</b>{" "}
          <span onDoubleClick={activateEditMode}>
            {!props.profile ? "" : !status ? "Change your status..." : status}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <b>User Status:</b>{" "}
          <input
            type="text"
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </>
  );
};

export default ProfileStatus;
