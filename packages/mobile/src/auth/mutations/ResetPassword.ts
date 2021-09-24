import {graphql} from "react-relay";

export default graphql`
    mutation ResetPasswordMutation ($email: String!, $code: String!, $newPassword: String!) {
      recoverAccount(input: {email: $email, code: $code, newPassword: $newPassword}) {
        email
      }
    }
`
