import { API_KEY } from "../constants";

type GnosisConfig = {
  allowanceModule: string;
};

type Network = {
  name: string;
  guildFactory: string;
  daiToken: string;
  subgraphUrl: string;
  rpc_url: string;
  gnosisConfig: GnosisConfig;
};

type Networks = {
  [key: number]: Network;
};

const Default = {
  name: "Rinkeby",
  guildFactory: "0x2E2A1262A489790Fdd260c060D0734C573cE6D1e",
  daiToken: "0x15f0ca26781c3852f8166ed2ebce5d18265cceb7",
  subgraphUrl:
    "https://api.thegraph.com/subgraphs/name/santteegt/gnosis-guild-app-rinkeby",
  rpc_url: `https://rinkeby.infura.io/v3/${API_KEY}`,
  gnosisConfig: {
    allowanceModule: "0xCFbFaC74C26F8647cBDb8c5caf80BB5b32E43134",
  },
};

const networks: Networks = {
  0x1: {
    name: "Mainnet",
    guildFactory: "",
    daiToken: "",
    subgraphUrl: "",
    rpc_url: `https://mainnet.infura.io/v3/${API_KEY}`,
    gnosisConfig: {
      allowanceModule: "0xCFbFaC74C26F8647cBDb8c5caf80BB5b32E43134",
    },
  },
  0x4: {
    name: "Rinkeby",
    guildFactory: "0x2E2A1262A489790Fdd260c060D0734C573cE6D1e",
    daiToken: "0x15f0ca26781c3852f8166ed2ebce5d18265cceb7",
    subgraphUrl:
      "https://api.thegraph.com/subgraphs/name/santteegt/gnosis-guild-app-rinkeby",
    rpc_url: `https://rinkeby.infura.io/v3/${API_KEY}`,
    gnosisConfig: {
      allowanceModule: "0xCFbFaC74C26F8647cBDb8c5caf80BB5b32E43134",
    },
  },
};

export const getNetworkByChainId = (chainId: number): Network => {
  const network = networks[parseInt(chainId.toString(), 16)];
  return network || Default;
};

export const getIsValidChain = (chainId: number): Network => {
  const network = networks[chainId];
  return network;
};
