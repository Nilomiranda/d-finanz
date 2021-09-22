/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignUpScreenMutationVariables = {|
  name: string,
  email: string,
  password: string,
|};
export type SignUpScreenMutationResponse = {|
  +createUser: {|
    +name: ?string,
    +email: ?string,
  |}
|};
export type SignUpScreenMutation = {|
  variables: SignUpScreenMutationVariables,
  response: SignUpScreenMutationResponse,
|};
*/


/*
mutation SignUpScreenMutation(
  $name: String!
  $email: String!
  $password: String!
) {
  createUser(input: {name: $name, email: $email, password: $password}) {
    name
    email
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v3 = [
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
            "name": "name",
            "variableName": "name"
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
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "createUser",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SignUpScreenMutation",
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
    "name": "SignUpScreenMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "250b913c76a9cd0877ece571c2f2aec4",
    "id": null,
    "metadata": {},
    "name": "SignUpScreenMutation",
    "operationKind": "mutation",
    "text": "mutation SignUpScreenMutation(\n  $name: String!\n  $email: String!\n  $password: String!\n) {\n  createUser(input: {name: $name, email: $email, password: $password}) {\n    name\n    email\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4ba6c389248f56defe3322b2f094edd1';

module.exports = node;
