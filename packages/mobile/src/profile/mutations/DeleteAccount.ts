import { graphql } from "react-relay";

export default graphql`
  mutation DeleteAccountMutation ($id: String!) {
    deleteAccount(id: $id) {
      name
      email
    }
  }
`
