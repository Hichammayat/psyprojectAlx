import "./setting.css";
import { useState } from "react";
import PsyApplyModal from "../../../../Modals/PsyApplyModals";

import { useDispatch } from "react-redux";
import { updateProfilePsy,uploadImage } from "../../../../redux/psy-reducer";

export default function Setting() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [newinfo, setNewinfo] = useState({...new PsyApplyModal()});
  const getPsychiatreId = JSON.parse(localStorage.getItem('user'))
  console.log(getPsychiatreId)
  let imageUpload;

  const fileUpload = () => {
    const file = new FormData()
    file.append("image", imageUpload)
    dispatch(uploadImage({id: getPsychiatreId._id, image:file}))
  }
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">modifier vos informations</span>
          <span className="settingsTitleDelete">Supprimer votre compte</span>
        </div>
        {status && <div className="status">{status}</div>}
        <div className="settingsForm">
        <div className="settingsPP">
           <label for="fileInput">
               <img src={`http://localhost:9000/avatars/${getPsychiatreId._id}/${getPsychiatreId.picturePath}`}  alt="" />
            </label>
            <input
            onChange={(e) =>{ imageUpload = e.target.files[0]}}
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
            <button type="submit" onClick={fileUpload} >Upload</button>
          </div>
          <div className="divInput">
          <div className="div1">
          <label>Prenom</label>
          <input 
          onChange={(e) => {setNewinfo({ ...newinfo, Firstname: e.target.value });}}
          type="text" placeholder="Hicham" name="Firstname" />
          <label>Nom</label>
          <input
          onChange={(e) => {setNewinfo({ ...newinfo, Lastname: e.target.value });}}
           type="text" placeholder="Mayat" name="Lastname" />
          <label>Email</label>
          <input
          onChange={(e) => {setNewinfo({ ...newinfo, Email: e.target.value });}}
          type="email" placeholder="hicham@gmail.com" name="email" />
          </div>
          <div className="div2">
          <label>Mot de pass</label>
          <input
          onChange={(e) => {setNewinfo({ ...newinfo, Password: e.target.value });}}
          type="password" placeholder="Password" name="password" />
          <label>occupation</label>
          <input
          onChange={(e) => {setNewinfo({ ...newinfo, Occupation: e.target.value });}}
          type="text" placeholder="psychologue" name="occupation" />
          <label>Location</label>
          <input
          onChange={(e) => {setNewinfo({ ...newinfo, Location: e.target.value });}}
          type="text" placeholder="" name="location" />
          </div>
          </div>
          <button
            onClick={() => {
            setLoading(true);
            dispatch(updateProfilePsy({ id: getPsychiatreId._id, userUpdates: newinfo }))
           .finally(() => setLoading(false))
           .then((result) => {
            if (result.payload && result.payload.message) {
              setStatus(result.payload.message);
            }
          })
          .catch((error) => {
            setStatus(error.message);
          });;
           }}
           className="settingsSubmitButton"
           type="submit"
           >
          {loading ? 'Modification...' : 'Modifier'}
         </button>
        </div>
      </div>
      
    </div>
  );
}
