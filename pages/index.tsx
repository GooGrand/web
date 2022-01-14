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
import Layout from '../components/Layout/Layout';
import classes from './index.module.scss';
import { Parse } from './Commands/parser'
import Messages from './Commands/Store'

export default function Web() 
{
    const eventQueue = useEventQueue();
    const { print } = eventQueue.handlers;



    return (
      <Layout>
        <main className={classes.mainContainer}>
          <Terminal
            queue={eventQueue}
            onCommand={ async (command) =>
              print([
                textLine({
                  words: [
                    textWord({ characters: await Parse(command) }),
                  ],
                }),
              ])
            }
    
            banner={[
              textLine({ words: [textWord({ characters: Messages.banner })] }),
            ]}
          />
        </main>
      </Layout>
    );
}
