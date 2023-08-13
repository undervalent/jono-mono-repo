import React from "react";
import { Link } from "react-router-dom";
import { IJob } from "../../../../lib/types";
import { Wrapper } from "./job-item.styles";
import { LogoItem } from "../../../../shared-components/logo-item";
interface IProps {
  jobData: IJob;
}

export const JobItem: React.FC<IProps> = ({ jobData }) => {
  const {
    company,
    location,
    postedAt,
    contract,
    position,
    logoBackground,
    logo,
    id,
  } = jobData;

  return (
    <Wrapper background={logoBackground}>
      <h2 className="position-text">
        <Link to={`/selected-job/${id}`}>{position}</Link>
      </h2>
      <div className="info-text">
        {postedAt} <span className="info-circle">•</span> {contract}
      </div>
      <div className="company-text">{company}</div>
      <div className="location-text">{location}</div>
      <div className="logo-wrapper">
        <LogoItem logo={logo} company={company} background={logoBackground} />
      </div>
    </Wrapper>
  );
};
