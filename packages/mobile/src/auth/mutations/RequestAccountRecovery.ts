import {graphql} from "react-relay";

export default graphql`
    mutation RequestAccountRecoveryMutation ($email: String!) {
      requestRecoveryCode(email: $email)
    }
`
