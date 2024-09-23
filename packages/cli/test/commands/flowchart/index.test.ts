import {runCommand} from '@oclif/test'
import {expect} from 'chai'

const EXPECTED_EXAMPLE_OUTPUT = `flowchart TD\n  \tRADIO[Christmas] --> |Get money| CUSTOMS(Go shopping)\n\tCUSTOMS(Go shopping) --> HEADING{Let me <br/>think}\n\tHEADING{Let me <br/>think} --> |One| HIGHER[Laptop]\n\tHEADING{Let me <br/>think} --> |Two| ARRANGEMENT[iPhone]\n\tHEADING{Let me <br/>think} --> |Three| IMPOSSIBLE[ Car]`;

describe('flowchart', () => {
  it('runs flowchart', async () => {
    const {stdout} = await runCommand('flowchart ./test/commands/flowchart/example.excalidraw -s -d TD');
    expect(stdout).to.contain(EXPECTED_EXAMPLE_OUTPUT);
  })
})
