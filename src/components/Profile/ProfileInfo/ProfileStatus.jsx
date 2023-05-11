import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProfileStatus = ({ getUserStatus, status, updateStatus, ...props }) => {
  const params = useParams();
  let userId = params.userId;

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    getUserStatus(userId);
  }, [getUserStatus, userId, status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(status);
  };

  const onStatusChange = (e) => {
    // setStatus(e.currentTarget.value);
    console.log(e.currentTarget.value);
    updateStatus(e.currentTarget.value);
  };

  return (
    <>
      {!editMode && (
        <div>
          <b>User Status:</b>{" type status "}
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
