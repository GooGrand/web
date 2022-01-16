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

import GTONParser from './Parser/GTONCapitalProjects/GTONCapitalRouter';
import messages from './Messages/Messages';

const Projects =
{
  "gton": "gton", 
  "candyshop": "candyshop", 
  "ogswap": "ogswap"
}

var CurrentDirectory = Projects.gton;

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
            if(command.split(' ')[0] == "cd")
            {
              switch(command.split(' ')[1])
              {
                case "gton":
                  CurrentDirectory = Projects.gton;
                  print([textLine({words:[textWord({ characters: "Succefully switched to " + Projects.gton })]})]);
                  break;
                case "candyshop":
                  CurrentDirectory = Projects.candyshop;
                  print([textLine({words:[textWord({ characters: "Succefully switched to " + Projects.candyshop })]})]);
                  break;
                case "ogswap":
                  CurrentDirectory = Projects.ogswap;
                  print([textLine({words:[textWord({ characters: "Succefully switched to " + Projects.ogswap })]})]);
                  break;
              }
              return;
            }

            switch(CurrentDirectory)
            {
              case Projects.gton:
                GTONParser(eventQueue, command);
                break;
              case Projects.candyshop:
                // import CandyParser from './Parser/CandyShop/CandyShopParser'
                break;
              case Projects.ogswap:
                // import OGSwapParser from './Parser/OGSwap/OGSwapParser'
                break;
              default:
                print([textLine({words:[textWord({ characters: "Error: please refresh page" })]})]);
                break;
            }

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
