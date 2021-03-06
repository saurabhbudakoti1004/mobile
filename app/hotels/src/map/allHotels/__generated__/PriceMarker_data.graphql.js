/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PriceMarker_data$ref: FragmentReference;
declare export opaque type PriceMarker_data$fragmentType: PriceMarker_data$ref;
export type PriceMarker_data = {|
  +amount: ?string,
  +currencyId: ?string,
  +$refType: PriceMarker_data$ref,
|};
export type PriceMarker_data$data = PriceMarker_data;
export type PriceMarker_data$key = {
  +$data?: PriceMarker_data$data,
  +$fragmentRefs: PriceMarker_data$ref,
  ...
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "PriceMarker_data",
  "type": "Money",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "amount",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "currencyId",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node: any).hash = '3da7f796338b140f19a8887526b85e55';
export default node;
