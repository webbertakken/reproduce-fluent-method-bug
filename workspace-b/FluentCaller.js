import { DataBuilder } from "workspace-a/databuilder";

class FluentCaller extends DataBuilder {
  constructor() {
    super();
    this.data = {};
  }

  addFoo(foo) {
    return this.withNestedData("foo", foo);
  }

  addBar(bar) {
    return this.withNestedData("bar", bar);
  }

  addBaz(baz) {
    return this.withNestedData("baz", baz);
  }
}

export { FluentCaller };
