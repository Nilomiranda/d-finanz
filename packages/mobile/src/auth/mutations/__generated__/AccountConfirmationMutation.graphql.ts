/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AccountConfirmationMutationVariables = {
    code: string;
    email: string;
};
export type AccountConfirmationMutationResponse = {
    readonly confirmAccount: {
        readonly name: string | null;
        readonly email: string | null;
    };
};
export type AccountConfirmationMutation = {
    readonly response: AccountConfirmationMutationResponse;
    readonly variables: AccountConfirmationMutationVariables;
};



/*
mutation AccountConfirmationMutation(
  $code: String!
  $email: String!
) {
  confirmAccount(input: {email: $email, code: $code}) {
    name
    email
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "code"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "code",
            "variableName": "code"
          },
          {
            "kind": "Variable",
            "name": "email",
            "variableName": "email"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "confirmAccount",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AccountConfirmationMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AccountConfirmationMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0d0fde01f1d115bbc2b0536dc4a2eee5",
    "id": null,
    "metadata": {},
    "name": "AccountConfirmationMutation",
    "operationKind": "mutation",
    "text": "mutation AccountConfirmationMutation(\n  $code: String!\n  $email: String!\n) {\n  confirmAccount(input: {email: $email, code: $code}) {\n    name\n    email\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a1ab9ecadf35f0aab2dfda2e941c23f8';
export default node;
