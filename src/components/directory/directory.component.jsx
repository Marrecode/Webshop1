import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./diectory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://az1.hatstoremedia.com/hatstore/images/5704637692427_1/652/522/0/felix-55044-toyo-71-natural-straw-hat-mjm-hats.jpg",
          id: 1,
        },
        {
          title: "jackets",
          imageUrl:
            "https://www.bolf.eu/eng_il_Mens-Leather-Bomber-Jacket-Navy-Blue-Bolf-1147-79965.jpg",
          id: 2,
        },
        {
          title: "sneakers",
          imageUrl:
            "https://www.sneaker.no/wp-hidden/wp-content/uploads/2021/03/DSC06155.jpg",
          id: 3,
        },
        {
          title: "womens",
          imageUrl:
            "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/7/_109204727.jpg?h=365&w=240&dpr=2",
          size: "large",
          id: 4,
        },
        {
          title: "mens",
          imageUrl:
            "https://i.pinimg.com/originals/86/3e/4c/863e4c28ade87c4324648555edce94e1.jpg",
          size: "large",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
