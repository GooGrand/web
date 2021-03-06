import { BigNumber, ethers } from 'ethers';
import { claimMaxCount } from './config';
import { IClaimObject } from './make-claim';
import { TerminalError } from '../errors/TerminalError/TerminalError';
import countClaims from '../mined/mined';

interface MerkleDistributorInfo {
  contract: string;
}

interface User {
  index: number;
  proof: string[];
}

type ClaimsInfo = Record<string, User>;

const keyFromAddress = (address: string) => address.slice(2, 4);
const getFilename = (key: string) => `${key}.json`;

const isClaimed = async ({ miningAccount }: IClaimObject, { index }: User) => {
  const claimed = await miningAccount.isClaimed(index);
  if (claimed) {
    throw new TerminalError({ code: 'ALREADY_CLAIMED' });
  }
};

const claim = async (claimObj: IClaimObject, { index, proof }: User) => {
  const { miningAccount } = claimObj;
  try {
    const salt = BigNumber.from(
      ethers.utils.keccak256(
        BigNumber.from(await miningAccount.signer.getAddress())
          .mul(121)
          .add(123)
          .toHexString(),
      ),
    );

    const res = await miningAccount.claim(index, salt, proof);
    return [res, res.hash];
  } catch (e) {
    const totalClaimed = await countClaims(claimObj);
    if (totalClaimed >= claimMaxCount) throw new TerminalError({ code: 'NO_MORE_CLAIMS' });
    throw e;
  }
};

const waitTransactionEnd = async (transaction: ethers.ContractTransaction) => {
  await transaction.wait();
};

export type {
  IClaimObject, User, MerkleDistributorInfo, ClaimsInfo,
};
export {
  isClaimed, claim, waitTransactionEnd, keyFromAddress, getFilename,
};