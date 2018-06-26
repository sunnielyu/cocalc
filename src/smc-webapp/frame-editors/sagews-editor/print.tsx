/*

*/

import { Map } from "immutable";
import { React, Component, Rendered, rtypes, rclass } from "../generic/react";

import { InputCell } from "./input-cell";
import { OutputCell } from "./output-cell";

interface Props {
  actions : any;
  // reduxProps:
  cells: Map<string, Map<string, any>>;
}

class Print extends Component<Props, {}> {
  static reduxProps({ name }) {
    return {
      [name]: {
        cells: rtypes.immutable.Map
      }
    };
  }

  render_cells(): Rendered[] {
    const v: Rendered[] = [];
    // TODO: sort by position.
    this.props.cells.forEach((cell, id) => {
      v.push(
        <div key={id}>
          <div>
            <InputCell input={cell.get("input")} id={id} actions={this.props.actions} />
          </div>
          <div>
            <OutputCell output={cell.get("output", Map())} id={id} actions={this.props.actions} />
          </div>
        </div>
      );
    });
    return v;
  }

  render(): Rendered {
    return <div>{this.render_cells()}</div>;
  }
}

const tmp0 = rclass(Print);
//export { tmp0 as Print };
