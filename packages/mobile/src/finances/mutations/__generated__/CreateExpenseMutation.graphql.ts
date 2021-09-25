/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type FinancialRecordType = "EXPENSE" | "INCOME" | "%future added value";
export type CreateExpenseMutationVariables = {
    amount: number;
    name: string;
    tags: Array<string>;
    type: FinancialRecordType;
};
export type CreateExpenseMutationResponse = {
    readonly createNewFinancialRecord: {
        readonly amount: number;
        readonly type: FinancialRecordType;
        readonly id: string;
        readonly tags: ReadonlyArray<{
            readonly name: string;
        }>;
    };
};
export type CreateExpenseMutation = {
    readonly response: CreateExpenseMutationResponse;
    readonly variables: CreateExpenseMutationVariables;
};



/*
mutation CreateExpenseMutation(
  $amount: Float!
  $name: String!
  $tags: [String!]!
  $type: FinancialRecordType!
) {
  createNewFinancialRecord(input: {amount: $amount, name: $name, tags: $tags, type: $type}) {
    amount
    type
    id
    tags {
      name
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "amount"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "tags"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "type"
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
            "name": "amount",
            "variableName": "amount"
          },
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
          },
          {
            "kind": "Variable",
            "name": "tags",
            "variableName": "tags"
          },
          {
            "kind": "Variable",
            "name": "type",
            "variableName": "type"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "financialRecordType",
    "kind": "LinkedField",
    "name": "createNewFinancialRecord",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "amount",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "type",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Tag",
        "kind": "LinkedField",
        "name": "tags",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
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
    "name": "CreateExpenseMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateExpenseMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "177ba2e80409450dba0851004a8dc027",
    "id": null,
    "metadata": {},
    "name": "CreateExpenseMutation",
    "operationKind": "mutation",
    "text": "mutation CreateExpenseMutation(\n  $amount: Float!\n  $name: String!\n  $tags: [String!]!\n  $type: FinancialRecordType!\n) {\n  createNewFinancialRecord(input: {amount: $amount, name: $name, tags: $tags, type: $type}) {\n    amount\n    type\n    id\n    tags {\n      name\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ffeb63446145aa4666ed63d3235186a1';
export default node;
