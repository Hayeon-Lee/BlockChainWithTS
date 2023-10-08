declare module "lodash" {
  function head(arr: any[]): any | undefined;
  function hasIn(object: Object, key: string): boolean;
  function isBoolean(value: any): boolean;
  function toString(value: any): string;
  function split(
    string: string,
    separator: string | RegExp,
    limit: number
  ): string[];
  function hasPath(object: Object, path: string[]): boolean;
  function filter(
    array: any[],
    predicate: (value: any, index: number, array: any[]) => boolean
  ): any[];
  function every(
    array: any[],
    predicate: (value: any, index: number, array: any[]) => boolean
  ): boolean;
  function map(
    array: any[],
    iteratee: (value: any, index: number, array: any[]) => any
  ): any[];
}
