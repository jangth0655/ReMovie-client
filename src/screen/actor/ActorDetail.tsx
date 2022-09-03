import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../components/layout";
import { ImageUrl } from "../../components/Shared";
import { Actor } from "../../interface/actor_interface";

const ACTOR_DETAIL = gql`
  query actorDetail($id: Int!) {
    actorDetail(id: $id) {
      birthday
      known_for_department
      deathday
      id
      name
      biography
      profile_path
      place_of_birth
    }
  }
`;

interface ActorQuery {
  actorDetail: Actor;
}

const Container = styled.div<{ post?: string }>`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ActorImageBox = styled.div`
  width: 17rem;
  height: 17rem;
  border-radius: 50%;
  margin-bottom: ${(props) => props.theme.gap.superBig};
  border: 2px solid ${(props) => props.theme.color.active.strong};
`;

const ActorImage = styled.div<{ post?: string }>`
  border-radius: 50%;
  background-image: url(${(props) => props.post});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
`;

const InfoBox = styled.div`
  width: 100%;
  color: ${(props) => props.theme.color.text.dark};
  padding-right: ${(props) => props.theme.gap.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Name = styled.div`
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSize.superBig};
  margin-bottom: ${(props) => props.theme.gap.small};
  color: ${(props) => props.theme.color.text.main};
`;

const Extra = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoSpan = styled.span`
  margin-bottom: ${(props) => props.theme.gap.small};
  span {
    font-weight: ${(props) => props.theme.fontWeight.medium};
    color: ${(props) => props.theme.color.text.main};
  }
`;

const Department = styled(InfoSpan)``;

const Birthday = styled(InfoSpan)``;

const Place = styled(InfoSpan)``;

const DeathDay = styled(InfoSpan)``;

const Bio = styled.span`
  margin-top: ${(props) => props.theme.gap.medium};
`;

const ActorDetail: React.FC = () => {
  const { id } = useParams();
  const { data } = useQuery<ActorQuery>(ACTOR_DETAIL, {
    variables: {
      id: id && +id,
    },
  });

  return (
    <Layout title="Actor">
      <Container>
        <ActorImageBox>
          <ActorImage post={ImageUrl(data?.actorDetail?.profile_path)} />
        </ActorImageBox>
        <InfoBox>
          <Name>
            Name : <span>{data?.actorDetail.name}</span>
          </Name>
          <Extra>
            <Department>{data?.actorDetail.known_for_department}</Department>
            <Birthday>
              Birthday : <span>{data?.actorDetail.birthday}</span>
            </Birthday>
            <Place>
              Place of birth : <span>{data?.actorDetail.place_of_birth}</span>
            </Place>
            {data?.actorDetail.deathday ? (
              <DeathDay>
                Deathday : <span>{data?.actorDetail?.deathday}</span>
              </DeathDay>
            ) : null}
          </Extra>
          {data?.actorDetail.biography ? (
            <Bio>{data?.actorDetail.biography}</Bio>
          ) : null}
        </InfoBox>
      </Container>
    </Layout>
  );
};

export default ActorDetail;
