/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type RequestAccountRecoveryMutationVariables = {
    email: string;
};
export type RequestAccountRecoveryMutationResponse = {
    readonly requestRecoveryCode: boolean;
};
export type RequestAccountRecoveryMutation = {
    readonly response: RequestAccountRecoveryMutationResponse;
    readonly variables: RequestAccountRecoveryMutationVariables;
};



/*
mutation RequestAccountRecoveryMutation(
  $email: String!
) {
  requestRecoveryCode(email: $email)
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
    "name": "requestRecoveryCode",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RequestAccountRecoveryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RequestAccountRecoveryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1d7d8a491d68f3ab969c8ef5f7b69420",
    "id": null,
    "metadata": {},
    "name": "RequestAccountRecoveryMutation",
    "operationKind": "mutation",
    "text": "mutation RequestAccountRecoveryMutation(\n  $email: String!\n) {\n  requestRecoveryCode(email: $email)\n}\n"
  }
};
})();
(node as any).hash = '46b4dec2143b5f942809886d1b623545';
export default node;
