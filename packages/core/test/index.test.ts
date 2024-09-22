import {expect} from 'chai'
import {excalidrawV2ToMermaidFlowChart, ExcalidrawJson} from "../src";
import example from "./example.json"

const EXPECTED_EXAMPLE_OUTPUT = `flowchart TD\n  \tRADIO[Christmas] --> |Get money| CUSTOMS(Go shopping)\n\tCUSTOMS(Go shopping) --> HEADING{Let me <br/>think}\n\tHEADING{Let me <br/>think} --> |One| HIGHER[Laptop]\n\tHEADING{Let me <br/>think} --> |Two| ARRANGEMENT[iPhone]\n\tHEADING{Let me <br/>think} --> |Three| IMPOSSIBLE[ Car]`;

describe('flowchart', () => {
  it('should be correct example output', async () => {
    const output = excalidrawV2ToMermaidFlowChart('TD', example as ExcalidrawJson);
    expect(output).to.equal(EXPECTED_EXAMPLE_OUTPUT);
  })
})
