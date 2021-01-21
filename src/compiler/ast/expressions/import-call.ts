import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';
import { Expression } from '.';
import { TypeArguments } from '../types/type-arguments';

/**
 * Import call
 */
export interface ImportCall extends Node {
  readonly typeArguments: TypeArguments;
  readonly expression: Expression;
}

export function createImportCall(
  typeArguments: TypeArguments,
  expression: Expression,
  flags: NodeFlags,
  start: number,
  end: number
): ImportCall {
  return {
    kind: NodeKind.ImportCall,
    typeArguments,
    expression,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2018 | TransformFlags.DynamicImport,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
export function updateImportCall(node: ImportCall, expression: Expression, typeArguments: TypeArguments): ImportCall {
  return node.expression !== expression || node.typeArguments !== typeArguments
    ? updateNode(createImportCall(typeArguments, expression, node.flags, node.start, node.end), node)
    : node;
}
