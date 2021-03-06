export declare function compileTypeof(type: string): (data: any) => boolean;
export declare function compileJoinedStringOf(
  strings: string[]
): (data: string) => boolean;
export declare function traverseObject(
  data: any,
  schema: any,
  parent?: any,
  parentKey?: any
): void;
export default function validateSchema(
  schema: {
    title?: string;
    [key: string]: any;
  },
  inputItem: any
): any;
