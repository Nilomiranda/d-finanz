/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ResendAccountConfirmationMutationVariables = {|
  email: string
|};
export type ResendAccountConfirmationMutationResponse = {|
  +resendConfirmationCode: boolean
|};
export type ResendAccountConfirmationMutation = {|
  variables: ResendAccountConfirmationMutationVariables,
  response: ResendAccountConfirmationMutationResponse,
|};
*/


/*
mutation ResendAccountConfirmationMutation(
  $email: String!
) {
  resendConfirmationCode(email: $email)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      }
    ],
    "kind": "ScalarField",
    "name": "resendConfirmationCode",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ResendAccountConfirmationMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ResendAccountConfirmationMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7d230cd8e338d97633f3c4759afa5532",
    "id": null,
    "metadata": {},
    "name": "ResendAccountConfirmationMutation",
    "operationKind": "mutation",
    "text": "mutation ResendAccountConfirmationMutation(\n  $email: String!\n) {\n  resendConfirmationCode(email: $email)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '113b7bfb23f3600e914e938aeedabbbb';

module.exports = node;
