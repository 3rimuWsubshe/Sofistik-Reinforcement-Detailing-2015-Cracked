import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeParameter } from './type-parameter';

export interface TypeParameterDeclaration extends SyntaxNode {
  readonly typeParameters: readonly TypeParameter[];
}

export function createTypeParameterDeclaration(
  typeParameters: readonly TypeParameter[],
  start: number,
  end: number
): TypeParameterDeclaration {
  return {
    kind: SyntaxKind.TypeParameterDeclaration,
    typeParameters,
    flags: NodeFlags.None,
    start,
    end
  };
}