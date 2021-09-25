/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ResetPasswordMutationVariables = {
    email: string;
    code: string;
    newPassword: string;
};
export type ResetPasswordMutationResponse = {
    readonly recoverAccount: {
        readonly email: string | null;
    };
};
export type ResetPasswordMutation = {
    readonly response: ResetPasswordMutationResponse;
    readonly variables: ResetPasswordMutationVariables;
};



/*
mutation ResetPasswordMutation(
  $email: String!
  $code: String!
  $newPassword: String!
) {
  recoverAccount(input: {email: $email, code: $code, newPassword: $newPassword}) {
    email
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "code"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "newPassword"
},
v3 = [
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
          },
          {
            "kind": "Variable",
            "name": "newPassword",
            "variableName": "newPassword"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "recoverAccount",
    "plural": false,
    "selections": [
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ResetPasswordMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "ResetPasswordMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "20c88b5a3674bcd43c8e290f66143e31",
    "id": null,
    "metadata": {},
    "name": "ResetPasswordMutation",
    "operationKind": "mutation",
    "text": "mutation ResetPasswordMutation(\n  $email: String!\n  $code: String!\n  $newPassword: String!\n) {\n  recoverAccount(input: {email: $email, code: $code, newPassword: $newPassword}) {\n    email\n  }\n}\n"
  }
};
})();
(node as any).hash = '07d2bdafd9bd78ab5bbf12756a945163';
export default node;
