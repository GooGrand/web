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

const banner = `
Long multiline:

The quick brown fox jumps over the lazy dog

Very long word:
foooooooooooooooooooooooooooooooooooooooooo
`;

function Test(eventQueue, command)
{
  const { lock, loading, clear, print, focus } = eventQueue.handlers;
  print([
    textLine({
      className: classes.customLine,
      words: [
        anchorWord({
          characters: command,
          href: 'https://github.com/essserrr/crt-terminal/',
        }),
      ],
    }),
  ])
}

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
            Test(eventQueue, command);
          }
        }
          banner={[
            textLine({ words: [textWord({ characters: banner })] }),
            commandLine({
              words: [
                commandWord({ characters: 'command word', prompt: '>' }),
                textWord({ characters: ' - command line with command' }),
              ],
            }),
            textLine({
              className: classes.customLine,
              words: [textWord({ characters: 'custom text lines:' })],
            }),
            textLine({
              className: classes.customWord,
              words: [textWord({ className: classes.customWord, characters: 'custom text word' })],
            }),
            textLine({
              className: classes.customLine,
              words: [
                anchorWord({
                  characters: 'anchor word',
                  href: 'https://github.com/essserrr/crt-terminal/',
                }),
              ],
            }),
            textLine({
              className: classes.customLine,
              words: [
                buttonWord({
                  characters: 'button word',
                  onClick: () => alert('You clicked a button'),
                }),
              ],
            }),
            textLine({
              className: classes.customLine,
              words: [commandWord({ characters: 'command word', prompt: '>' })],
            }),
          ]}
        />
      </main>
    </Layout>
  );
}
