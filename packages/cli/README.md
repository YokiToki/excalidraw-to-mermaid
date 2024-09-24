@excalidraw-to-mermaid/cli
=================

CLI utility to convert .excalidraw JSON to .mermaid


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@excalidraw-to-mermaid/cli.svg)](https://npmjs.org/package/@excalidraw-to-mermaid/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@excalidraw-to-mermaid/cli.svg)](https://npmjs.org/package/@excalidraw-to-mermaid/cli)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @excalidraw-to-mermaid/cli
$ excalidraw-to-mermaid COMMAND
running command...
$ excalidraw-to-mermaid (--version)
@excalidraw-to-mermaid/cli/0.1.0 darwin-arm64 node-v20.11.0
$ excalidraw-to-mermaid --help [COMMAND]
USAGE
  $ excalidraw-to-mermaid COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`excalidraw-to-mermaid flowchart INPUT`](#excalidraw-to-mermaid-flowchart-input)
* [`excalidraw-to-mermaid help [COMMAND]`](#excalidraw-to-mermaid-help-command)

## `excalidraw-to-mermaid flowchart INPUT`

Converts .excalidraw file to .mermaid file

```
USAGE
  $ excalidraw-to-mermaid flowchart INPUT [-d TD|TB|BT|RL|LR] [-o <value>] [-s]

ARGUMENTS
  INPUT  Input .excalidraw file

FLAGS
  -d, --direction=<option>  [default: TD] Direction of mermaid flowchart
                            <options: TD|TB|BT|RL|LR>
  -o, --output=<value>      Output .mermaid file name
  -s, --stdout              Write output to stdout

DESCRIPTION
  Converts .excalidraw file to .mermaid file

EXAMPLES
  $ excalidraw-to-mermaid flowchart input.excalidraw -o output.mermaid
```

_See code: [src/commands/flowchart/index.ts](https://github.com/YokiToki/excalidraw-to-mermaid/blob/v0.1.0/src/commands/flowchart/index.ts)_

## `excalidraw-to-mermaid help [COMMAND]`

Display help for excalidraw-to-mermaid.

```
USAGE
  $ excalidraw-to-mermaid help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for excalidraw-to-mermaid.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.12/src/commands/help.ts)_
<!-- commandsstop -->
