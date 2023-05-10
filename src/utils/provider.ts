import {
  JsonRpcBatchProvider,
  StaticJsonRpcProvider
} from '@ethersproject/providers';

import networks from '../networks.json';

const providers = {};
const batchedProviders = {};


export default function getProvider(network) {
  let url = `https://rpc.snapshot.org/${network}`;
  if(networks[network].rpc.length == 1){
    url = networks[network].rpc[0];
  }
  if (!providers[network])
    providers[network] = new StaticJsonRpcProvider(
      {
        url,
        timeout: 25000,
        allowGzip: true
      },
      Number(network)
    );
  return providers[network];
}

export function getBatchedProvider(network) {
  let url = `https://rpc.snapshot.org/${network}`;
  if(networks[network].rpc.length == 1){
    url = networks[network].rpc[0];
  }
  if (!batchedProviders[network])
    batchedProviders[network] = new JsonRpcBatchProvider({
      url,
      timeout: 25000,
      allowGzip: true
    });
  return batchedProviders[network];
}
