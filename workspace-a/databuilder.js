import { cloneDeep, set } from "lodash";

class DataBuilder {
  constructor() {
    this.data = {};

    return this;
  }

  withNestedData(nestedDataPath, nestedDataValue) {
    const clone = cloneDeep(nestedDataValue);
    set(this.data, nestedDataPath, clone);
    return this;
  }
}

export { DataBuilder };
