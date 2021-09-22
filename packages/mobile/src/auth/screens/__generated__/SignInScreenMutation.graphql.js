/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignInScreenMutationVariables = {|
  email: string,
  password: string,
|};
export type SignInScreenMutationResponse = {|
  +createSession: {|
    +user: {|
      +email: ?string,
      +name: ?string,
    |},
    +token: string,
  |}
|};
export type SignInScreenMutation = {|
  variables: SignInScreenMutationVariables,
  response: SignInScreenMutationResponse,
|};
*/


/*
mutation SignInScreenMutation(
  $email: String!
  $password: String!
) {
  createSession(input: {email: $email, password: $password}) {
    user {
      email
      name
    }
    token
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password"
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
            "name": "email",
            "variableName": "email"
          },
          {
            "kind": "Variable",
            "name": "password",
            "variableName": "password"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "Session",
    "kind": "LinkedField",
    "name": "createSession",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
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
    "name": "SignInScreenMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignInScreenMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c8c28f0382e69a2907e2c2f24246a29d",
    "id": null,
    "metadata": {},
    "name": "SignInScreenMutation",
    "operationKind": "mutation",
    "text": "mutation SignInScreenMutation(\n  $email: String!\n  $password: String!\n) {\n  createSession(input: {email: $email, password: $password}) {\n    user {\n      email\n      name\n    }\n    token\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '498743500bf76a977696b0437e23f9bf';

module.exports = node;
