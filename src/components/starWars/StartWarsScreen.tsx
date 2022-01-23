import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { Loading } from "../loading/Loading";
import { GET_PERSON } from "../../graphql/getStarWars";
import { Col, Row } from "react-bootstrap";
import { StarWarsCard } from "./StarWarsCard";
import { Variables, Query, people } from "./definitions";

export const StartWarsScreen = ({ history }: any) => {
  const { starwarsID }: any = useParams();

  const { loading, error, data } = useQuery<Query, Variables>(GET_PERSON, {
    variables: { ID: starwarsID },
  });
  if (loading) return <Loading />;
  if (error) return <p>`Error... ${error.message}`</p>;

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  return (
    <Row style={{ marginTop: "5rem" }}>
      <Col lg={4} className="animate__animated animate__fadeIn">
        <StarWarsCard data={data?.person} />
        <br />
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Return
        </button>
      </Col>
      <Col
        lg={8}
        className="animate__animated animate__fadeIn"
        style={{ color: "white" }}
      >
        <>
          <h3 style={{ color: "purple", fontWeight: "bold", fontSize: "3rem" }}>
            {data?.person.name}
          </h3>
          <br />
          <Row>
            <Col>
              <h5 style={{ color: "red" }}> Edad </h5>
              <p>{data?.person.birthYear}</p>
            </Col>
            <Col>
              <h5 style={{ color: "blue" }}> Color de ojos </h5>
              <p>{data?.person.eyeColor}</p>
            </Col>
            <Col>
              <h5 style={{ color: "green" }}> Color de piel </h5>
              <p>{data?.person.skinColor}</p>
            </Col>
            <Col>
              <h5 style={{ color: "brown" }}> Color de pelo </h5>
              <p>{data?.person.hairColor}</p>
            </Col>
            <Col>
              <h5 style={{ color: "pink" }}> Masa </h5>
              <p>{data?.person.mass} kg</p>
            </Col>
          </Row>
          <h5 style={{ color: "yellow" }}> Peliculas </h5>
          <Row>
            {data?.person.filmConnection.films.map((item, i) => (
              <Col key={i} style={{ height: "15%", width: "15%" }}>
                <div>
                  <p>{item.title}</p>
                  <h5 style={{ color: "orange" }}>Planetas</h5>
                  {item.planetConnection.planets.map((item, i) => (
                    <p key={i}>{item.name}</p>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </>
      </Col>
    </Row>
  );
};
