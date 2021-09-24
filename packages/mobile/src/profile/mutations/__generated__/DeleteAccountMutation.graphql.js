/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteAccountMutationVariables = {|
  id: string
|};
export type DeleteAccountMutationResponse = {|
  +deleteAccount: {|
    +name: ?string,
    +email: ?string,
  |}
|};
export type DeleteAccountMutation = {|
  variables: DeleteAccountMutationVariables,
  response: DeleteAccountMutationResponse,
|};
*/


/*
mutation DeleteAccountMutation(
  $id: String!
) {
  deleteAccount(id: $id) {
    name
    email
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "deleteAccount",
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
    "name": "DeleteAccountMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteAccountMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c033cf7950b235dcd390fe0b3c12c53b",
    "id": null,
    "metadata": {},
    "name": "DeleteAccountMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteAccountMutation(\n  $id: String!\n) {\n  deleteAccount(id: $id) {\n    name\n    email\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1a94d9c24b83deb863470f42890863f9';

module.exports = node;
