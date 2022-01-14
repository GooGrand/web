To add new command in parser:
1) Add into 'web\pages\Commands\Store.js' object like
```
    Help: // Name for calling in other modules
    [
        'help', // What should user send into terminal
        'You asked for help, but no one care.' // What he will get in response
    ],
```
2) Go to web\pages\Commands\parser.ts
3) Select where you want to add new command: gton/candy/ogswap (or install it globally, outside of all if 's)
3) Paste func like that:
```
    if(Command == "help")
    {
        return 'You asked for help, but no one care.'
    }
```

OR

```
    if(Command == Messages.Help[0])
    {
        return Messages.Help[1];
    }
```