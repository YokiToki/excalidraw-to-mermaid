import {MermaidFlowChartDirection, excalidrawV2ToMermaidFlowChart} from "@excalidraw-to-mermaid/core";
import {Args, Command, Flags} from '@oclif/core'
import * as fs from "node:fs/promises";
import * as path from "node:path";

export default class Flowchart extends Command {
  static args = {
    input: Args.file({description: 'Input .excalidraw file', exists: true, required: true})
  }

  static description = 'Converts .excalidraw file to .mermaid file'

  static examples = [
    `<%= config.bin %> <%= command.id %> input.excalidraw -o output.mermaid`,
  ]

  static flags = {
    direction: Flags.string({
      char: 'd',
      default: 'TD',
      description: 'Direction of mermaid flowchart',
      options: ['TD', 'TB', 'BT', 'RL', 'LR'],
      required: false
    }),
    output: Flags.string({char: 'o', description: 'Output .mermaid file name', required: false}),
    stdout: Flags.boolean({char: 's', default: false, description: 'Write output to stdout', required: false}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Flowchart);

    if (flags.output && !/[*.].(mermaid|mmd)/.test(flags.output))
      this.error('Output file should have .mermaid or .mmd extension');

    const filename = flags.output ?? path.parse(args.input).name;

    const data = await fs.readFile(args.input, 'utf8')
      .catch((error) => this.error(error));

    const content = excalidrawV2ToMermaidFlowChart(flags.direction as MermaidFlowChartDirection, JSON.parse(data));

    if (flags.stdout) {
      this.log(content);
      return;
    }

    await fs.writeFile(`${filename}.mermaid`, content)
      .catch((error) => this.error(error));

  }
}
