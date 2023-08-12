import React from "react";
import { useFetchGithubUser } from "../../services";
import * as Styled from "./developer-view.styles";
import { format } from "date-fns";

import { MdLocationOn } from "react-icons/md";
import { FaLink, FaTwitter } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";

export function DeveloperView() {
  const [{ data, isLoading, error }] = useFetchGithubUser();
  console.log("ERROR IN -COMPONENT -->", { data, isLoading, error });
  if (error) {
    <div>This user does not exist</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data) {
    const {
      name,
      login,
      created_at,
      avatar_url,
      bio,
      public_repos,
      followers,
      following,
      company,
      location,
      twitter_username,
      blog,
    } = data;

    return (
      <Styled.Wrapper>
        <Styled.ImageWrapper>
          <Styled.Avatar src={avatar_url} alt={`Avatar for ${name}`} />
        </Styled.ImageWrapper>
        <Styled.UserContent>
          <Styled.UserInfo>
            <div>
              <h2>{name}</h2>
              <h3>@{login}</h3>
            </div>
            <span>Joined {format(new Date(created_at), "d LLL yyyy")}</span>
          </Styled.UserInfo>
          <Styled.Bio>{bio || "This profile has no bio"}</Styled.Bio>
          <Styled.Statistics>
            <Styled.StatItem>
              <Styled.StatName>Repos</Styled.StatName>
              <Styled.StatValue>{public_repos}</Styled.StatValue>
            </Styled.StatItem>
            <Styled.StatItem>
              <Styled.StatName>Followers</Styled.StatName>
              <Styled.StatValue>{followers}</Styled.StatValue>
            </Styled.StatItem>
            <Styled.StatItem>
              <Styled.StatName>Following</Styled.StatName>
              <Styled.StatValue>{following}</Styled.StatValue>
            </Styled.StatItem>
          </Styled.Statistics>
          <Styled.SocialInfo>
            <Styled.SocialItem>
              <MdLocationOn size="20px" />
              <Styled.SocialItemText>{location}</Styled.SocialItemText>
            </Styled.SocialItem>
            <Styled.SocialItem>
              <FaLink size="20px" />
              <Styled.SocialItemText as="a" href={blog}>
                {blog}
              </Styled.SocialItemText>
            </Styled.SocialItem>
            <Styled.SocialItem>
              <FaTwitter size="20px" />
              <Styled.SocialItemText> {twitter_username}</Styled.SocialItemText>
            </Styled.SocialItem>
            <Styled.SocialItem>
              <BsBuilding size="20px" />
              <Styled.SocialItemText>{company}</Styled.SocialItemText>
            </Styled.SocialItem>
          </Styled.SocialInfo>
        </Styled.UserContent>
      </Styled.Wrapper>
    );
  }
  return null;
}
