import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { FunctionTypeParameter } from './function-type-parameter';

export interface FunctionTypeParameterList extends SyntaxNode {
  readonly parameters: readonly FunctionTypeParameter[];
  readonly trailingComma: boolean;
}

export function createFunctionTypeParameterList(
  parameters: readonly FunctionTypeParameter[],
  trailingComma: boolean,
  start: number,
  end: number
): FunctionTypeParameterList {
  return {
    kind: SyntaxKind.FunctionTypeParameterList,
    parameters,
    trailingComma,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
