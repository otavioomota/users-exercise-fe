import React from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { UserContainer } from "./styles";

export default function User({ id, name, handleDelete }) {
  return (
    <>
      <UserContainer>
        <span>id: {id}</span>
        <Link
          to={{
            pathname: "/details",
            state: {
              id
            }
          }}
        >
          {name}
        </Link>
        <MdDelete color="red" size={16} onClick={() => handleDelete(id)} />
      </UserContainer>
    </>
  );
}
