import { gql } from "@apollo/client";

export default gql`
  mutation MyMutation($id: String!) {
    removeSub(id: $id)
  }
`;
