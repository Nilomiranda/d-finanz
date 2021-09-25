/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ProfileNavigatorQueryVariables = {};
export type ProfileNavigatorQueryResponse = {
    readonly user: {
        readonly name: string | null;
        readonly email: string | null;
        readonly id: string | null;
    };
};
export type ProfileNavigatorQuery = {
    readonly response: ProfileNavigatorQueryResponse;
    readonly variables: ProfileNavigatorQueryVariables;
};



/*
query ProfileNavigatorQuery {
  user {
    name
    email
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
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
        "name": "name",
        "storageKey": null
      },
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
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProfileNavigatorQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ProfileNavigatorQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "430e72865cb4e48222165cc619f2df24",
    "id": null,
    "metadata": {},
    "name": "ProfileNavigatorQuery",
    "operationKind": "query",
    "text": "query ProfileNavigatorQuery {\n  user {\n    name\n    email\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c70140f710f885192134254f8fd4a1da';
export default node;
