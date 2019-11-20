import React from 'react';
import HeaderImgBoxJpg from '../img/HeaderImgBox_3.jpg'

const HeaderImgBox = () => {
  return (
    <div className="header-img-box">
      <div className="header-img-box__fit">
        <img src={HeaderImgBoxJpg} alt="HeaderImg" />
      </div>
    </div>
  )
}

export default HeaderImgBox;