import React from 'react'
import './ProfileUpdate.css'
import assets from '../../assets/assets'

const ProfileUpdate = () => {
  return (
    <div className='profile'>
      <div className="profile-container">

        <form >
          <h3>Profile Detials</h3>
          <label htmlFor="avatar">
            <input hidden type="file" accept='.png, .jpg, .jpeg' id="avatar" />
            <img src={assets.avatar_icon} alt="" />
            Upload the Profile image
          </label>

          <input type="text" placeholder='Your Name' required/>
          <textarea placeholder='Profile Bio' required ></textarea>
          <button type='submit'>Save</button>

        </form>

        <img src={assets.logo_icon} alt="" />
      </div>
      
    </div>
  )
}

export default ProfileUpdate
