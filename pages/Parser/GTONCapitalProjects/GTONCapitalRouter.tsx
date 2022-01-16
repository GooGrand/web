import React from 'react';
import {
  Terminal,
  useEventQueue,
  textLine,
  commandLine,
  textWord,
  anchorWord,
  buttonWord,
  commandWord,
} from 'crt-terminal';
import messages from '../../Messages/Messages';
import notFoundStrings from '../../Errors/notfound-strings';
import classes from '../../index.module.scss'

import { stake, unstake } from './WEB3/Stake';
import connectMetamask from './WEB3/ConnectMetamask';
import switchChain from './WEB3/Switch';
import balance from './WEB3/Balance';
import fromWei from './WEB3/Balance'
import { tokenAddress } from './WEB3/config';
import { stakingAddress } from '../../Messages/config';
import { Value } from 'sass';
import addToken from './WEB3/addTokenToMM';
import tokenMap from './WEB3/API/addToken';
import faucet from './WEB3/Faucet';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Func Router 

const HelpSlave = (eventQueue) =>
{
  const { lock, loading, clear, print, focus } = eventQueue.handlers;
  print([textLine({words:[textWord({ characters: messages.helpText })]})]);
}

const StakeSlave = async (eventQueue, Amount) => 
{
  const { lock, loading, clear, print, focus } = eventQueue.handlers;
  try
      {
        lock(true);
        loading(true);
        const TxnHash = await stake(Amount);

        const result = messages.stake("staked", Amount, TxnHash, eventQueue);

        loading(false);
        lock(false);
      }
      catch(err)
      {
        print([textLine({words:[textWord({ characters: err.message })]})]);
        loading(false);
        lock(false);
      }
}

const UnStakeSlave = async (eventQueue, Amount) => 
{
  const { lock, loading, clear, print, focus } = eventQueue.handlers;
  try
      {
        lock(true);
        loading(true);
        const TxnHash = await unstake(Amount);

        const result = messages.stake("unstaked", Amount, TxnHash, eventQueue);

        loading(false);
        lock(false);
      }
      catch(err)
      {
        print([textLine({words:[textWord({ characters: err.message })]})]);
        loading(false);
        lock(false);
      }
}

const ConnectMetamaskSlave = async (eventQueue) =>
{
  const { lock, loading, clear, print, focus } = eventQueue.handlers;
  try
  {
    lock(true);
    loading(true);

    const address = await connectMetamask();
    print([textLine({words:[textWord({ characters: "Connected succefuly: " + address })]})]);

    loading(false);
    lock(false);
  }
  catch(err)
  {
    print([textLine({words:[textWord({ characters: err.message })]})]);
    loading(false);
    lock(false);
  }
}

const SwitchSlave = async (eventQueue) =>
{
  const { lock, loading, clear, print, focus } = eventQueue.handlers;
  try
  {
    lock(true);
    loading(true);

    const address = await switchChain();
    print([textLine({words:[textWord({ characters: messages.chainSwitch })]})]);

    loading(false);
    lock(false);
  }
  catch(err)
  {
    print([textLine({words:[textWord({ characters: err.message })]})]);
    loading(false);
    lock(false);
  }
}

const BalanceSlave = async (eventQueue, TokenName) => 
{
  const { lock, loading, clear, print, focus } = eventQueue.handlers;

  const token = 
    TokenName == "gton"
    ? tokenMap['gton']
    : tokenMap['sgton'];

  try
  {
    lock(true);
    loading(true);

    const Balance = (await balance(token.address));
    const CoinBalance = (Balance.dividedBy(1000000000000000000));
    messages.balance(CoinBalance.toString(), eventQueue);

    loading(false);
    lock(false);
  }
  catch(err)
  {
    print([textLine({words:[textWord({ characters: err.message })]})]);
    loading(false);
    lock(false);
  }
}

const AddTokenSlave = async (eventQueue, TokenName) =>
{
  const { lock, loading, clear, print, focus } = eventQueue.handlers;

  const token = 
    TokenName == "gton"
    ? tokenMap['gton']
    : tokenMap['sgton'];

  try
  {
    lock(true);
    loading(true);

    await addToken(token);
    print([textLine({words:[textWord({ characters: messages.addToken })]})]);

    loading(false);
    lock(false);
  }
  catch(err)
  {
    print([textLine({words:[textWord({ characters: err.message })]})]);
    loading(false);
    lock(false);
  }
}

const FaucetSlave = async (eventQueue) => 
{
  const { lock, loading, clear, print, focus } = eventQueue.handlers;
  try
  {
    lock(true);
    loading(true);

    faucet();
    print([textLine({words:[textWord({ characters: messages.faucetDeposit })]})]);

    loading(false);
    lock(false);
  }
  catch(err)
  {
    print([textLine({words:[textWord({ characters: err.message })]})]);
    loading(false);
    lock(false);
  }
}

const GTONRouterMap =
{
  "help": HelpSlave,
  "join": ConnectMetamaskSlave,
  "stake": StakeSlave,
  "unstake": UnStakeSlave,
  "switch": SwitchSlave,
  "balance": BalanceSlave,
  "add": AddTokenSlave,
  "faucet": FaucetSlave
}

async function Parse(eventQueue, command)
{
  const { lock, loading, clear, print, focus } = eventQueue.handlers;
  const Command = command.split(' ')[0];
  const Arg = command.split(' ')[1];

  try
  {
    GTONRouterMap[Command](eventQueue, Arg);
  }
  catch(err)
  {
    print([textLine({words:[textWord({ characters: err.message })]})]);
  }
}

export default Parse;