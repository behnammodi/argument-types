import is from "is";

Function.prototype.callSafe = function(context, args) {
  const argumentTypes = this.argumentTypes;
  if (is.object(argumentTypes)) {
    Object.keys(argumentTypes).forEach(key => {
      if (argumentTypes[key](args[key]) === false)
        throw new Error(
          `${key} argument type is wrong, ${key} value is ${args[key]}`
        );
    });
  }
  return this.call(context, args);
};

const ArgumentTypes = {
  array: is.array,
  bool: is.bool,
  func: is.fn,
  number: is.number,
  object: is.object,
  string: is.string,
  symbol: is.symbol,
  instanceOf: is.instanceOf,
  // node:
  // element:
  // elementType:
  // oneOf:
  // oneOfType:
  // arrayOf:
  // objectOf:
  // shape:
  // exact:
  any: () => true
};

export default ArgumentTypes;
