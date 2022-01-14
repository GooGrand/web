const Prefix = '>';
const Messages = 
{
    banner: `
        ██████╗ ████████╗ ██████╗ ███╗   ██╗     ██████╗ █████╗ ██████╗ ██╗████████╗ █████╗ ██╗     
        ██╔════╝ ╚══██╔══╝██╔═══██╗████╗  ██║    ██╔════╝██╔══██╗██╔══██╗██║╚══██╔══╝██╔══██╗██║     
        ██║  ███╗   ██║   ██║   ██║██╔██╗ ██║    ██║     ███████║██████╔╝██║   ██║   ███████║██║     
        ██║   ██║   ██║   ██║   ██║██║╚██╗██║    ██║     ██╔══██║██╔═══╝ ██║   ██║   ██╔══██║██║     
        ╚██████╔╝   ██║   ╚██████╔╝██║ ╚████║    ╚██████╗██║  ██║██║     ██║   ██║   ██║  ██║███████╗
        ╚═════╝    ╚═╝    ╚═════╝ ╚═╝  ╚═══╝     ╚═════╝╚═╝  ╚═╝╚═╝     ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝
                                                            
                            Welcome to GTON CAPITAL testing platform!
                            Type >help to see list of available commands
        `,
    Help:
    [
        'help',
        `Available commands:

        >help - this output
        >join - connect wallet to the terminal
        >stake <amount> - stake funds
        >unstake <amount> - unstake funds
        >switch - switch chain to test fantom
        >balance gton | staking - get actual erc20 token balance
        >add gton | sgton - add tokens to metamask
        >faucet - receive gton airdrop
        >ls - get all paths
        `
    ],

    Join:
    [
        'join',
        ``
    ],

    Stake:
    [
        'stake',
        ''
    ],

    Unstake:
    [
        'unstake',
        ''
    ],

    Switch:
    [
        'switch',
        'Successfully switched to fantom testnet.'
    ],

    Balance:
    [
        'balance',
        'Token balance:'       
    ],

    Add_GTON:
    [
        'add',
        'Added succefully'
    ],

    Faucet:
    [
        'faucet',
        'Succesfully airdropped GTON.'
    ],
    ls: 
    [
        'ls',
        `
        \gton
        \candy
        \ogswap
        `
    ],
    Links:
    [
        'links',
        ''
    ]
}
export default Messages;