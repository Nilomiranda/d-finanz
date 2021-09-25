import {graphql} from "react-relay";

export default graphql`
  mutation CreateExpenseMutation ($amount: Float!, $name: String!, $tags: [String!]!, $type: FinancialRecordType!) {
    createNewFinancialRecord(input: {
      amount: $amount,
      name: $name,
      tags: $tags,
      type: $type
    }) {
      amount
      type
      id
      tags {
        name
      }
    }
  }
`
