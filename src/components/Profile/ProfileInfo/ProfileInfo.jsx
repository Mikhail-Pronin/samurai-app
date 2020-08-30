import React from 'react';
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.img} src="https://www.treehugger.com/thmb/J8LNt43_b6eoLmxzI2vxmb2n_H4=/1000x701/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__12__PurpleSkyPalmTrees1000px-c4950ffafcf942e2961bcd0b7bd1853b.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;