// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';


const definitions: OverrideBundleDefinition = {
    types: [
      {
        // on all versions
        minmax: [0, undefined],
        types: {
          
          NeuronMetadataOf: {
            version: 'u32',
            ip: "u128", 
            port: "u16", 
            ip_type: "u8", 
            uid: "u32", 
            modality: "u8", 
            hotkey: "AccountId", 
            coldkey: "AccountId", 
            active: "u32",
            last_update: "u64",
            priority: "u64",
            stake: "u64",
            rank: "u64",
            trust: "u64",
            consensus: "u64",
            incentive: "u64",
            dividends: "u64",
            emission: "u64",
            bonds: "Vec<(u32, u64)>",
            weights: "Vec<(u32, u32)>"
         },
          Balance: 'u64',
        }
      }
    ]
  };
  
export default definitions;
