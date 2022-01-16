declare var window: any;
import { TerminalError } from '../../../Errors/ErrorCodes';
import {
  stakingAddress,
  network,
} from './config';
import { ethers } from 'ethers';
import STAKING_ABI from './abi/staking.json';
import { EventQueue } from 'crt-terminal';
import { fromWei, toWei } from './API/balance';
import BigNumber from 'bignumber.js';

export const stake = async (amount: string): Promise<string> => {
  if (!window.ethereum || !window.ethereum!.isMetaMask) {
    throw new TerminalError({ code: 'NO_METAMASK' });
  }
  if (!window.ethereum.request) {
    throw new TerminalError({ code: 'METAMASK_WRONG_NETWORK' });
  }
  const chainId: string = await window.ethereum.request({ method: 'net_version' });
  if (chainId !== network) {
    throw new TerminalError({ code: 'METAMASK_WRONG_NETWORK' });
  }

  const Amount = toWei(new BigNumber(amount));

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(stakingAddress, STAKING_ABI, signer);
  const tx = await contract.mint(toWei(Amount), await signer.getAddress());
  const receipt = await tx.wait();
  return receipt.transactionHash;
};

export const unstake = async (amount: string): Promise<string> => {
  if (!window.ethereum || !window.ethereum!.isMetaMask) {
    throw new TerminalError({ code: 'NO_METAMASK' });
  }
  if (!window.ethereum.request) {
    throw new TerminalError({ code: 'METAMASK_WRONG_NETWORK' });
  }
  const chainId: string = await window.ethereum.request({ method: 'net_version' });
  if (chainId !== network) {
    throw new TerminalError({ code: 'METAMASK_WRONG_NETWORK' });
  }
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(stakingAddress, STAKING_ABI, signer);
  const share = await contract.balanceToShare(amount);
  const tx = await contract.burn(await signer.getAddress(), share);
  const receipt = await tx.wait();
  return receipt.transactionHash;
};