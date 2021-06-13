import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { TypeNode } from '.';

export interface TypeofType extends SyntaxNode {
  readonly typeOfKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly type: TypeNode;
}

export function createTypeofType(
  typeOfKeyword: SyntaxToken<TokenSyntaxKind> | null,
  type: TypeNode,
  start: number,
  end: number
): TypeofType {
  return {
    kind: SyntaxKind.TypeofType,
    typeOfKeyword,
    type,
    flags: NodeFlags.ExpressionNode | NodeFlags.ChildLess,
    start,
    end
  };
}
