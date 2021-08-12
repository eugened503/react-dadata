import React, { FC } from "react";
import "./AddressInfo.css";
import AddressItem from "../../models/addressItem";

const AddressInfo: FC<AddressItem> = ({ title }) => {
  return (
    <div className="company-info">
      <a
        href={`mailto:${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="company-info__title-company"
      >
        {title}
      </a>
    </div>
  );
};

export default AddressInfo;
