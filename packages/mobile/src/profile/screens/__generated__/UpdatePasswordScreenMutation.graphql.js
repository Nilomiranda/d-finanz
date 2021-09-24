/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdatePasswordScreenMutationVariables = {|
  currentPassword: string,
  newPassword: string,
|};
export type UpdatePasswordScreenMutationResponse = {|
  +updatePassword: {|
    +email: ?string
  |}
|};
export type UpdatePasswordScreenMutation = {|
  variables: UpdatePasswordScreenMutationVariables,
  response: UpdatePasswordScreenMutationResponse,
|};
*/


/*
mutation UpdatePasswordScreenMutation(
  $currentPassword: String!
  $newPassword: String!
) {
  updatePassword(input: {currentPassword: $currentPassword, newPassword: $newPassword}) {
    email
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "currentPassword"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "newPassword"
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
            "name": "currentPassword",
            "variableName": "currentPassword"
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
    "name": "updatePassword",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdatePasswordScreenMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdatePasswordScreenMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "940a8e883c01af7050f4bd33c0c76063",
    "id": null,
    "metadata": {},
    "name": "UpdatePasswordScreenMutation",
    "operationKind": "mutation",
    "text": "mutation UpdatePasswordScreenMutation(\n  $currentPassword: String!\n  $newPassword: String!\n) {\n  updatePassword(input: {currentPassword: $currentPassword, newPassword: $newPassword}) {\n    email\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '85053dd2f1490fd18eed45595561556b';

module.exports = node;
