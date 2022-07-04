import React from "react";
import ItemProject from "../item-project/ItemProject";
import "../project.scss";
import ImgProject1 from "../../../assets/img/project1.png";
// const PROJECTS = [{
//     id: '01',
//     name:
// }]
const ListProject = (props) => {
  return (
    <div className="list-project">
      <ItemProject
        id="1"
        src={ImgProject1}
        name="Don Peppe"
        desc="This online pizza ordering website helps users freely choose their favorite dishes. It also has a filter feature to help them find food more easily and conveniently. Moreover, every dish is updated with the shopping cart"
      />

      <ItemProject
        id="2"
        src={ImgProject1}
        name="Don Peppe"
        desc="This online pizza ordering website helps users freely choose their favorite dishes. It also has a filter feature to help them find food more easily and conveniently. Moreover, every dish is updated with the shopping cart"
      />

      <ItemProject
        id="3"
        src={ImgProject1}
        name="Don Peppe"
        desc="This online pizza ordering website helps users freely choose their favorite dishes. It also has a filter feature to help them find food more easily and conveniently. Moreover, every dish is updated with the shopping cart"
      />

      <ItemProject
        id="4"
        src={ImgProject1}
        name="Don Peppe"
        desc="This online pizza ordering website helps users freely choose their favorite dishes. It also has a filter feature to help them find food more easily and conveniently. Moreover, every dish is updated with the shopping cart"
      />
    </div>
  );
};

export default ListProject;
