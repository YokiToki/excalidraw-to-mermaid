import {Args, Command, Flags} from '@oclif/core'
import * as fs from "node:fs";
import * as path from "node:path";
import {excalidrawV2ToMermaidFlowChart} from "@excalidraw-to-mermaid/core";

export default class Flowchart extends Command {
  static args = {
    input: Args.file({description: 'Input .excalidraw file', exists: true, required: true})
  }

  static flags = {
    output: Flags.string({char: 'o', description: 'Output .mermaid file name', required: false}),
    stdout: Flags.boolean({char: 's', description: 'Write output to stdout', required: false, default: false}),
  }

  static description = 'Converts .excalidraw file to .mermaid file'

  static examples = [
    `<%= config.bin %> <%= command.id %> input.excalidraw -o output.mermaid`,
  ]

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Flowchart);

    if (flags.output && !/[.*].(mermaid|mmd)/.test(flags.output))
      this.error('Output file should have .mermaid or .mmd extension');

    const filename = flags.output
      ? flags.output
      : path.parse(args.input).name;

    fs.readFile(args.input, 'utf8', (err, data) => {
      if (err) {
        this.error(err);
      }

      const content = excalidrawV2ToMermaidFlowChart('TD', JSON.parse(data));

      if (flags.stdout) {
        this.log(content);
        return;
      }

      fs.writeFile(`${filename}.mermaid`, content, err => {
        if (err) {
          this.error(err);
        }
      });
    });
  }
}
