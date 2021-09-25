/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ResendAccountConfirmationMutationVariables = {
    email: string;
};
export type ResendAccountConfirmationMutationResponse = {
    readonly resendConfirmationCode: boolean;
};
export type ResendAccountConfirmationMutation = {
    readonly response: ResendAccountConfirmationMutationResponse;
    readonly variables: ResendAccountConfirmationMutationVariables;
};



/*
mutation ResendAccountConfirmationMutation(
  $email: String!
) {
  resendConfirmationCode(email: $email)
}
*/

const node: ConcreteRequest = (function(){
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
(node as any).hash = '113b7bfb23f3600e914e938aeedabbbb';
export default node;
