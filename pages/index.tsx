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

import Parse from './Parser/GTONCapitalProjects/GTONCapitalRouter'
import messages from './Messages/Messages';

export default function Web() {

  const eventQueue = useEventQueue();
  const { lock, loading, clear, print, focus } = eventQueue.handlers;

  return (
    <Layout>
      <main className={classes.mainContainer}>
        <Terminal
          queue={eventQueue}
          onCommand={(command) =>
          {
            Parse(eventQueue, command);
          }
        }
          banner={[
            textLine({ words: [textWord({ characters: messages.banner })] }),
          ]}
        />
      </main>
    </Layout>
  );
}
