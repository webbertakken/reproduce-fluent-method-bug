import { FluentCaller } from "./FluentCaller";

const test = () => {
  return new FluentCaller().addFoo(1).addBar(2).addBaz(2);
};
