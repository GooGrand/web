import { anchorWord, textLine, textWord } from 'crt-terminal';
import { network } from './config';
import classes from '../pages/./index.module.scss'

enum Commands 
{
    HELP = "help",
    JOIN = "join",
    STAKE = "stake",
    UNSTAKE = "unstake",
    SWITCH = "switch",
    BALANCE = "balance",
    ADD_TOKEN = "add token",
    FAUCET = "faucet"
}

enum OptionalActions {
  YES = 'yes',
  NO = 'no'
}

enum Prompt {
  PROMPT = '/gton/testing $ ',
}

enum Prefix {
  PREFIX = '>',
}

enum Links {
  ABOUT = 'https://medium.com/gearbox-protocol/credit-account-mining-guide-fueling-up-for-the-launch-abc17fbddbad',
  WALLETS_TO_PARTICIPATE = 'https://github.com/Gearbox-protocol/launch-snapshot#credit-account-mining-snapshot',
  CLAIM = 'https://medium.com/gearbox-protocol/credit-account-mining-guide-fueling-up-for-the-launch-abc17fbddbad',
}

const etherscanPrefix = network === '4002' ? 'kovan.' : '';

const messages = {
  banner: `
        ██████╗ ████████╗ ██████╗ ███╗   ██╗     ██████╗ █████╗ ██████╗ ██╗████████╗ █████╗ ██╗     
       ██╔════╝ ╚══██╔══╝██╔═══██╗████╗  ██║    ██╔════╝██╔══██╗██╔══██╗██║╚══██╔══╝██╔══██╗██║     
       ██║  ███╗   ██║   ██║   ██║██╔██╗ ██║    ██║     ███████║██████╔╝██║   ██║   ███████║██║     
       ██║   ██║   ██║   ██║   ██║██║╚██╗██║    ██║     ██╔══██║██╔═══╝ ██║   ██║   ██╔══██║██║     
       ╚██████╔╝   ██║   ╚██████╔╝██║ ╚████║    ╚██████╗██║  ██║██║     ██║   ██║   ██║  ██║███████╗
        ╚═════╝    ╚═╝    ╚═════╝ ╚═╝  ╚═══╝     ╚═════╝╚═╝  ╚═╝╚═╝     ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝
                                                            
                            Welcome to GTON CAPITAL testing platform!
                            Type ${Prefix.PREFIX}${Commands.HELP} to see list of available commands
  `,

  helpText: `
  Available commands:
  ${Prefix.PREFIX}${Commands.HELP} - this output
  ${Prefix.PREFIX}${Commands.JOIN} - connect wallet to the terminal
  ${Prefix.PREFIX}${Commands.STAKE} <amount> - stake funds
  ${Prefix.PREFIX}${Commands.UNSTAKE} <amount> - unstake funds
  ${Prefix.PREFIX}${Commands.SWITCH} - switch chain to test fantom
  ${Prefix.PREFIX}${Commands.BALANCE} gton | staking - get actual erc20 token balance
  ${Prefix.PREFIX}${Commands.ADD_TOKEN} gton | sgton - add tokens to metamask
  ${Prefix.PREFIX}${Commands.FAUCET} - receive gton airdrop
  `,
  links: `
  Empty command rn
  `,
  LINKS: 
  `
  TODO
  `,
  metamaskConnected: `
  Metamask is connected
  `,
  permissionCheckingStarted: `
  ...the machine is checking if you are in the snapshot...
  Learn more about which wallets are allowed to participate: ${Links.WALLETS_TO_PARTICIPATE}
  `,
  amountOfMineAccounts: `
  You have 1 credit accounts to mine
  `,
  almostDone: `
  We're almost done. Now wait till tx is confirmed.
  `,
  approve(h: string) {
    return `
      You have succesfully approved your funds!
      Transaction approve: https://testnet.ftmscan.com/tx/${h}
    `;
  },
  stake(type: string, amount: string, hash: string, eventQueue) {
    const text = [`
    You have succesfully ${type} your funds!
    Amount: ${amount},
    Transaction stake:`, `https://testnet.ftmscan.com/tx/${hash}`];

    const { lock, loading, clear, print, focus } = eventQueue.handlers;

    print([textLine({words:[textWord({ characters: text[0] })]})]);
    print([textLine({className: classes.customLine, words:[anchorWord({ characters: `https://testnet.ftmscan.com/tx/${hash}`, href: `https://testnet.ftmscan.com/tx/${hash}` })]})]);
  },
  accountsMined: (n: number) => `
  Accounts mined: ${n}
  `,
  balance: (n: string, eventQueue) => 
  {
    const balance = `
      Token balance: ${n}
    `
    const { lock, loading, clear, print, focus } = eventQueue.handlers;
    print([textLine({words:[textWord({ characters: balance })]})]);
  },

  chainSwitch: `
  Successfully switched to fantom testnet.
  `,
  faucetDeposit: `
  Succesfully airdropped GTON.
  `,
  addToken: `
  Successfully added token to the MetaMask.
  `,
};

export { Prefix, Links, Prompt, Commands, OptionalActions };
export default messages;