import {graphql} from "react-relay";

export default graphql`
  mutation ResendAccountConfirmationMutation ($email: String!) {
    resendConfirmationCode(email: $email)
  }
`
