import {graphql} from "react-relay";

export default graphql`
  mutation AccountConfirmationMutation ($code: String!, $email: String!) {
    confirmAccount(input: {email: $email, code: $code}) {
      name
      email
    }
  }
`
