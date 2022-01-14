import Messages from './Store'
import connectMetamask from '../utils/API/web3/connect-metamask';
import { stake, unstake } from '../utils/API/web3/stake'
import switchChain from '../utils/API/web3/switch-chain'
import balance from '../utils/API/web3/balance'
import addToken from '../utils/API/web3/addTokenToMM'
import tokenMap from '../utils/API/addToken/addToken';
import faucet from '../utils/API/web3/faucet'
import { tokenAddress } from '../utils/API/web3/config';

var CurrentPath = 'gton';

export async function Parse(Command)
{
    if(CurrentPath == 'gton')
    {
        if(Command == Messages.Help[0])
        {
            return Messages.Help[1];
        }
        else if(Command == Messages.Join[0])
        {
            try 
            {
                var address = await connectMetamask();
            }
            catch(err)
            {
                return err.message;
            }
            
            return address;
        }
        else if(Command.split(' ')[0] == Messages.Stake[0])
        {
            try
            {
                var tx = await stake(Command.split(' ')[1]);
            }
            catch(err)
            {
                return err.message;
            }

            return tx;
        }
        else if(Command.split(' ')[0] == Messages.Unstake[0])
        {
            try
            {
                var tx = await unstake(Command.split(' ')[1]);
            }
            catch(err)
            {
                return err.message;
            }

            return tx;
        }
        else if(Command == Messages.Switch[0])
        {
            try
            {
                await switchChain();
            }
            catch(err)
            {
                return err.message;
            }

            return '';
        }
        else if(Command.split(' ')[0] == Messages.Balance[0])
        {
            if(Command.split(' ')[1] == 'gton')
            {
                try
                {
                    var int = await balance(tokenAddress);
                }
                catch(err)
                {
                    return err.message;
                }

                return String(int);
            }
            else
            {
                //idk
            }        
        }
        else if(Command.split(' ')[0] == Messages.Add_GTON[0]) // if got 'add'
        {
            if(Command.split(' ')[1] == 'gton')
            {
                try
                {
                    await addToken(tokenMap.gton);
                    return Messages.Add_GTON[1];
                }
                catch(err)
                {
                    return err.message;
                }
            }
            else if(Command.split(' ')[1] == 'sgton')
            {
                try
                {
                    await addToken(tokenMap.sgton);
                    return Messages.Add_GTON[1];
                }
                catch(err)
                {
                    return err.message;
                }
            }
        }
        else if(Command == Messages.Faucet[0])
        {
            try
            {
                await faucet();
                return Messages.Faucet[1]
            }
            catch(err)
            {
                return err.message;
            }
        }

        if(Command.split(' ')[0] == 'cd')
        {
            if(Command.split(' ')[1] == 'candy') CurrentPath = 'candy';
            if(Command.split(' ')[1] == 'ogswap') CurrentPath = 'ogswap';
        }
    }
    else if(CurrentPath == 'candy') // logic for candy cmd 
    {
        if(Command.split(' ')[0] == 'cd')
        {
            if(Command.split(' ')[1] == 'gton') CurrentPath = 'gton';
            if(Command.split(' ')[1] == 'ogswap') CurrentPath = 'ogswap';
        }
    }
    else if(CurrentPath == 'ogswap') // logic for ogswap 
    {
        if(Command.split(' ')[0] == 'cd')
        {
            if(Command.split(' ')[1] == 'gton') CurrentPath = 'gton';
            if(Command.split(' ')[1] == 'candy') CurrentPath = 'candy';
        }
    }
}