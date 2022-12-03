import React from "react";

export const Table = ({
  Released,
  Genre,
  Director,
  Writer,
  Actors,
  Language,
}) => {
  return (
    <>
      <tr>
        <th scope="row">Year Released:</th>
        <td>{Released}</td>
      </tr>
      <tr className="tableRow">
        <th scope="row">Genre:</th>
        <td>{Genre}</td>
      </tr>
      <tr className="tableRow">
        <th scope="row">Director:</th>
        <td>{Director}</td>
      </tr>
      <tr className="tableRow">
        <th scope="row">Writer:</th>
        <td>{Writer}</td>
      </tr>
      <tr className="tableRow">
        <th scope="row">Actors:</th>
        <td>{Actors}</td>
      </tr>
      <tr className="tableRow">
        <th scope="row">Language:</th>
        <td>{Language}</td>
      </tr>
    </>
  );
};
