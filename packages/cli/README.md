excalidraw-to-mermaid
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/excalidraw-to-mermaid.svg)](https://npmjs.org/package/excalidraw-to-mermaid)
[![Downloads/week](https://img.shields.io/npm/dw/excalidraw-to-mermaid.svg)](https://npmjs.org/package/excalidraw-to-mermaid)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g excalidraw-to-mermaid
$ excalidraw-to-mermaid COMMAND
running command...
$ excalidraw-to-mermaid (--version)
excalidraw-to-mermaid/0.0.0 darwin-arm64 node-v18.20.0
$ excalidraw-to-mermaid --help [COMMAND]
USAGE
  $ excalidraw-to-mermaid COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`excalidraw-to-mermaid hello PERSON`](#excalidraw-to-mermaid-hello-person)
* [`excalidraw-to-mermaid hello world`](#excalidraw-to-mermaid-hello-world)
* [`excalidraw-to-mermaid help [COMMAND]`](#excalidraw-to-mermaid-help-command)
* [`excalidraw-to-mermaid plugins`](#excalidraw-to-mermaid-plugins)
* [`excalidraw-to-mermaid plugins add PLUGIN`](#excalidraw-to-mermaid-plugins-add-plugin)
* [`excalidraw-to-mermaid plugins:inspect PLUGIN...`](#excalidraw-to-mermaid-pluginsinspect-plugin)
* [`excalidraw-to-mermaid plugins install PLUGIN`](#excalidraw-to-mermaid-plugins-install-plugin)
* [`excalidraw-to-mermaid plugins link PATH`](#excalidraw-to-mermaid-plugins-link-path)
* [`excalidraw-to-mermaid plugins remove [PLUGIN]`](#excalidraw-to-mermaid-plugins-remove-plugin)
* [`excalidraw-to-mermaid plugins reset`](#excalidraw-to-mermaid-plugins-reset)
* [`excalidraw-to-mermaid plugins uninstall [PLUGIN]`](#excalidraw-to-mermaid-plugins-uninstall-plugin)
* [`excalidraw-to-mermaid plugins unlink [PLUGIN]`](#excalidraw-to-mermaid-plugins-unlink-plugin)
* [`excalidraw-to-mermaid plugins update`](#excalidraw-to-mermaid-plugins-update)

## `excalidraw-to-mermaid hello PERSON`

Say hello

```
USAGE
  $ excalidraw-to-mermaid hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ excalidraw-to-mermaid hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/YokiToki/excalidraw-to-mermaid/blob/v0.0.0/src/commands/hello/index.ts)_

## `excalidraw-to-mermaid hello world`

Say hello world

```
USAGE
  $ excalidraw-to-mermaid hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ excalidraw-to-mermaid hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/YokiToki/excalidraw-to-mermaid/blob/v0.0.0/src/commands/hello/world.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.11/src/commands/help.ts)_

## `excalidraw-to-mermaid plugins`

List installed plugins.

```
USAGE
  $ excalidraw-to-mermaid plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ excalidraw-to-mermaid plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.8/src/commands/plugins/index.ts)_

## `excalidraw-to-mermaid plugins add PLUGIN`

Installs a plugin into excalidraw-to-mermaid.

```
USAGE
  $ excalidraw-to-mermaid plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into excalidraw-to-mermaid.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the EXCALIDRAW_TO_MERMAID_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the EXCALIDRAW_TO_MERMAID_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ excalidraw-to-mermaid plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ excalidraw-to-mermaid plugins add myplugin

  Install a plugin from a github url.

    $ excalidraw-to-mermaid plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ excalidraw-to-mermaid plugins add someuser/someplugin
```

## `excalidraw-to-mermaid plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ excalidraw-to-mermaid plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ excalidraw-to-mermaid plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.8/src/commands/plugins/inspect.ts)_

## `excalidraw-to-mermaid plugins install PLUGIN`

Installs a plugin into excalidraw-to-mermaid.

```
USAGE
  $ excalidraw-to-mermaid plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into excalidraw-to-mermaid.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the EXCALIDRAW_TO_MERMAID_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the EXCALIDRAW_TO_MERMAID_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ excalidraw-to-mermaid plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ excalidraw-to-mermaid plugins install myplugin

  Install a plugin from a github url.

    $ excalidraw-to-mermaid plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ excalidraw-to-mermaid plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.8/src/commands/plugins/install.ts)_

## `excalidraw-to-mermaid plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ excalidraw-to-mermaid plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ excalidraw-to-mermaid plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.8/src/commands/plugins/link.ts)_

## `excalidraw-to-mermaid plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ excalidraw-to-mermaid plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ excalidraw-to-mermaid plugins unlink
  $ excalidraw-to-mermaid plugins remove

EXAMPLES
  $ excalidraw-to-mermaid plugins remove myplugin
```

## `excalidraw-to-mermaid plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ excalidraw-to-mermaid plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.8/src/commands/plugins/reset.ts)_

## `excalidraw-to-mermaid plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ excalidraw-to-mermaid plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ excalidraw-to-mermaid plugins unlink
  $ excalidraw-to-mermaid plugins remove

EXAMPLES
  $ excalidraw-to-mermaid plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.8/src/commands/plugins/uninstall.ts)_

## `excalidraw-to-mermaid plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ excalidraw-to-mermaid plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ excalidraw-to-mermaid plugins unlink
  $ excalidraw-to-mermaid plugins remove

EXAMPLES
  $ excalidraw-to-mermaid plugins unlink myplugin
```

## `excalidraw-to-mermaid plugins update`

Update installed plugins.

```
USAGE
  $ excalidraw-to-mermaid plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.8/src/commands/plugins/update.ts)_
<!-- commandsstop -->
