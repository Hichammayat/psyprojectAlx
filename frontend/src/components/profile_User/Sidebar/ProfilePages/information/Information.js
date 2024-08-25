import React from 'react'
import "./Information.css";


export default function Information() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
      <div className="settingsTitle">
          <span className="settingsTitleUpdate">modifier vos informations</span>
          <span className="settingsTitleDelete">Supprimer votre compte</span>
        </div>
        <form className="settingsForm">
        <div className="settingsPP">
          
          
            <img
              src="avatarprofile.webp"
              alt=""
            />
            <label htmlFor="fileInput">
              modifier votre photo du profile
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <div className="divInput">
          <div className="div1">
          <label>Prenom</label>
          <input type="text" placeholder="Hicham" name="Firstname" />
          <label>Nom</label>
          <input type="text" placeholder="Mayat" name="Lstname" />
          <label>Email</label>
          <input type="email" placeholder="hicham@gmail.com" name="email" />
          </div>
          <div className="div2">
          <label>Mot de pass</label>
          <input type="password" placeholder="Password" name="password" />
          <label>occupation</label>
          <input type="text" placeholder="psychologue" name="occupation" />
          <label>description</label>
          <input type="text" placeholder="" name="description" />
          </div>
          </div>
          <button className="settingsSubmitButton" type="submit">
            Enregistrer
          </button>
        </form>
      </div>
      
    </div>
  );
}
