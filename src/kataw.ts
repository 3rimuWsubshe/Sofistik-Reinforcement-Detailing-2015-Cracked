export { createTypeLiteral, updateTypeLiteral } from './ast/types/type-literal';
export { createParameterDeclaration, updateParameterDeclaration } from './ast/types/parameter-declaration';
export { createUnionType, updateUnionType } from './ast/types/union-type';
export { createEnumDeclaration, updateEnumDeclaration } from './ast/types/enum-declaration';
export { createEnumMembersList, updateEnumMembersList } from './ast/types/enum-members-list';
export { createEnumMember, updateEnumMember } from './ast/types/enum-member';
export { createQualifiedName, updateQualifiedName } from './ast/types/qualified-name';
export { createInterfaceDeclaration, updateInterfaceDeclaration } from './ast/types/interface-declaration';
export { createSingleNameBinding, updateSingleNameBinding } from './ast/expressions/singleNameBinding';
export { createHeritageClauses, updateHeritageClauses } from './ast/types/heritage-clauses';
export { createHeritageClause, updateHeritageClause } from './ast/types/heritage-clause';
export { createClassHeritage, updateClassHeritage } from './ast/expressions/class-heritage';
export { createThisType } from './ast/types/this-type';
export { createPropertySignature, updatePropertySignature } from './ast/types/property-signature';
export { createMethodSignature, updateMethodSignature } from './ast/types/method-signature';
export { createMappedType, updateMappedType } from './ast/types/mapped-type';
export { createObjectTypeMembers, updateObjectTypeMembers } from './ast/types/object-type-members';
export { createTypeParameters, updateTypeParameters } from './ast/types/type-parameter-list';
export { createTypeParameter, updateTypeParameter } from './ast/types/type-parameter';
export { createOptionalType, updateOptionalType } from './ast/types/optional-type';
export { createNamedTupleMember, updateNamedTupleMember } from './ast/types/named-tuple-member';
export { createRestType, updateRestType } from './ast/types/rest-type';
export { createInferType, updateInferType } from './ast/types/infer-type';
export { createConditionalType, updateConditionalType } from './ast/types/conditional-type';
export { createTypeAssertion, updateTypeAssertion } from './ast/types/type-assertion';
export { createCallSignature, updateCallSignature } from './ast/types/call-signature';
export { createIndexSignature, updateIndexSignature } from './ast/types/index-signature';
export { createFunctionType, updateFunctionType } from './ast/types/function-type';
export { createConstructorType, updateConstructorType } from './ast/types/constructor-type';
export { createTypeAliasDeclaration, updateTypeAliasDeclaration } from './ast/types/type-alias-declaration';
export { createImportType, updateImportType } from './ast/types/import-type';
export { createParameters, updateParameters } from './ast/types/parameters';
export { createTypePredicate, updateTypePredicate } from './ast/types/type-predicate';
export { createTypeQuery, updateTypeQuery } from './ast/types/type-query';
export { createTupleType, updateTupleType } from './ast/types/tuple-type';
export { createParenthesizedType, updateParenthesizedType } from './ast/types/parenthesized-type';
export { createStringType } from './ast/types/string-type';
export { createNumberType } from './ast/types/number-type';
export { createBigIntType } from './ast/types/bigint-type';
export { createTrueType } from './ast/types/true-type';
export { createFalseType } from './ast/types/false-type';
export { createTypeArguments, updateTypeArguments } from './ast/types/type-arguments';
export { createTypeReference, updateTypeReference } from './ast/types/type-reference';
export { createKeywordTypeNode } from './ast/types/keyword-type-node';
export { createIntersectionType, updateIntersectionType } from './ast/types/intersection-type';
export { createTypeOperator, updateTypeOperator } from './ast/types/type-operator';
export { createIndexedAccessType, updateIndexedAccessType } from './ast/types/indexed-access-type';
export { createArrayType, updateArrayType } from './ast/types/array-type';
export { createAsExpression, updateAsExpression } from './ast/expressions/as-expr';
export { createFormalParameter, updateFormalParameter } from './ast/expressions/formal-parameter';
export { createNonNullExpression, updateNonNullExpression } from './ast/expressions/non-null-expr';
export { createPrivateIdentifier } from './ast/expressions/private-identifier';
export { createClassDeclaration, updateClassDeclaration } from './ast/statements/class-declaration';
export { createClassExpression, updateClassExpression } from './ast/expressions/class-expr';
export { createClassElementList, updateClassElementList } from './ast/expressions/class-element-list';
export { createClassElement, updateClassElement } from './ast/expressions/class-element';
export { createSemicolon } from './ast/expressions/semicolon';
export { createFieldDefinition, updateFieldDefinition } from './ast/expressions/field-definition';
export { createNamedExports, updateNamedExports } from './ast/module/named-exports';
export { createExternalModuleReference, updateExternalModuleReference } from './ast/module/external-module-reference';
export { createExportAssignment, updateExportAssignment } from './ast/module/export-assignment';
export { createImportEqualsDeclaration, updateImportEqualsDeclaration } from './ast/module/import-equals-declaration';
export { createImportsList, updateImportsList } from './ast/module/imports-list';
export { createExportDeclaration, updateExportDeclaration } from './ast/module/export-declaration';
export { createExportDefault, updateExportDefault } from './ast/module/export-default';
export { createExportFromClause, updateExportFromClause } from './ast/module/export-from-clause';
export { createExportSpecifier, updateExportSpecifier } from './ast/module/export-specifier';
export { createImportClause, updateImportClause } from './ast/module/import-clause';
export { createImportDeclaration, updateImportDeclaration } from './ast/module/import-declaration';
export { createImportSpecifier, updateImportSpecifier } from './ast/module/import-specifier';
export { createNamedImports, updateNamedImports } from './ast/module/named-imports';
export { createExportsList, updateExportsList } from './ast/module/exports-list';
export { createJsxIdentifier } from './ast/jsx/jsx-identifier';
export { createJsxNamespacedName } from './ast/jsx/jsx-namespaced-name';
export { createJsxSelfClosingElement, updateJsxSelfClosingElement } from './ast/jsx/jsx-self-closing-element';
export { createJsxOpeningElement, updateJsxOpeningElement } from './ast/jsx/jsx-opening-element';
export { createJsxTagNamePropertyAccess } from './ast/jsx/jsx-tag-name-property-access';
export { createJsxMemberExpression } from './ast/jsx/jsx-member-expression';
export { createJsxSpreadAttribute } from './ast/jsx/jsx-spread-attribute';
export { createJsxAttribute } from './ast/jsx/jsx-attribute';
export { createJsxAttributesList } from './ast/jsx/jsx-attribute-list';
export { createJsxText } from './ast/jsx/jsx-text';
export { createJsxChildrenList } from './ast/jsx/jsx-children-list';
export { createJsxOpeningFragment } from './ast/jsx/jsx-opening-fragment';
export { createJsxClosingElement } from './ast/jsx/jsx-closing-element';
export { createJsxElement } from './ast/jsx/jsx-element';
export { createJsxFragment } from './ast/jsx/jsx-fragment';
export { createJsxClosingFragment } from './ast/jsx/jsx-closing-fragment';
export { createImportCall, updateImportCall } from './ast/expressions/import-call';
export { createImportMeta } from './ast/expressions/import-meta';
export { createSuper } from './ast/expressions/super';
export { createArrayLiteral, updateArrayLiteral } from './ast/expressions/array-literal';
export { createBooleanLiteral } from './ast/expressions/boolean-literal';
export { createThisExpression } from './ast/expressions/this-expr';
export { createNullLiteral } from './ast/expressions/null-literal';
export { createMethodDefinition, updateMethodDefinition } from './ast/expressions/method-definition';
export { createForBinding, updateForBinding } from './ast/statements/forBinding';
export { createParenthesizedExpression, updateParenthesizedExpression } from './ast/expressions/parenthesized-expr';
export { createFunctionBody, updateFunctionBody } from './ast/expressions/function-body';
export { createFunctionStatementList, updateFunctionStatementList } from './ast/expressions/function-stmt-list';
export { createTaggedTemplate, updateTaggedTemplaten } from './ast/expressions/tagged-template';
export { createOptionalChain, updateOptionalChain } from './ast/expressions/optional-chain';
export { createElementAccessChain, updateElementAccessChain } from './ast/expressions/element-access-chain';
export { createPropertyAccessChain, updatePropertyAccessChain } from './ast/expressions/property-access-chain';
export { createCallChain, updateCallChain } from './ast/expressions/call-chain';
export { createOptionalExpression, updateOptionalExpression } from './ast/expressions/optional-expr';
export { createNewExpression, updateNewExpression } from './ast/expressions/new-expr';
export { createNewTarget } from './ast/expressions/new-target';
export { createArrowParameters, updateArrowParameters } from './ast/expressions/arrow-parameters';
export { createArrowFunction, updateArrowFunction } from './ast/expressions/arrow-function';
export { createAwaitExpression, updateAwaitExpression } from './ast/expressions/await-expr';
export { createYieldExpression, updateYieldExpression } from './ast/expressions/yield-expr';
export { createFormalParameterList, updateFormalParameterList } from './ast/expressions/formal-parameter-list';
export { createArrayBindingPattern, updateArrayBindingPattern } from './ast/expressions/array-binding-pattern';
export { createBindingElementList, updateBindingElementList } from './ast/expressions/binding-element-list';
export { createBindingProperty, updateBindingProperty } from './ast/expressions/binding-property';
export { createObjectBindingPattern, updateObjectBindingPattern } from './ast/expressions/object-binding-pattern';
export { createBindingPropertyList, updateBindingPropertyList } from './ast/expressions/binding-property-list';
export { createBindingElement, updateBindingElement } from './ast/expressions/binding-element';
export { createFunctionExpression, updateFunctionExpression } from './ast/expressions/function-expr';
export { createFunctionDeclaration, updateFunctionDeclaration } from './ast/statements/function-declaration';
export { createComputedPropertyName, updateComputedPropertyName } from './ast/expressions/computed-property-name';
export { createPropertyDefinition, updatePropertyDefinition } from './ast/expressions/property-definition';
export { createElementList, updateElementList } from './ast/expressions/element-list';
export { createNumericLiteral } from './ast/expressions/numeric-literal';
export { createObjectLiteral, updateObjectLiteral } from './ast/expressions/object-literal';
export { createPropertyDefinitionList, updatePropertyDefinitionList } from './ast/expressions/property-definition-list';
export { createSpreadProperty, updateSpreadProperty } from './ast/expressions/spread-property';
export { createCoverInitializedName, updateCoverInitializedName } from './ast/expressions/cover-initialized-name';
export { createIdentifierReference } from './ast/expressions/identifier-reference';
export { createIdentifierName } from './ast/expressions/identifier-name';
export { createBindingIdentifier } from './ast/expressions/binding-identifier';
export { createStringLiteral } from './ast/expressions/string-literal';
export { createRegularExpressionLiteral } from './ast/expressions/regular-expr';
export { createBigIntLiteral } from './ast/expressions/bigint-literal';
export { createExpressionStatement, updateExpressionStatement } from './ast/statements/expr-stmt';
export { createCommaOperator, updateCommaOperator } from './ast/expressions/commaOperator';
export { createConditionalExpression, updateConditionalExpression } from './ast/expressions/conditional-expr';
export { createBinaryExpression, updateBinaryExpression } from './ast/expressions/binary-expr';
export { createPropertyAccessExpression, updatePropertyAccessExpression } from './ast/expressions/property-access-expr';
export { createElementAccessExpression, updateElementAccessExpression } from './ast/expressions/element-access-expr';
export { createCallExpression, updateCallExpression } from './ast/expressions/call-expr';
export { createForOfStatement, updateForOfStatement } from './ast/statements/for-of-stmt';
export { createForInStatement, updateForInStatement } from './ast/statements/for-in-stmt';
export { createForStatement, updateForStatement } from './ast/statements/for-stmt';
export { createThrowStatement, updateThrowStatement } from './ast/statements/throw-stmt';
export { createWithStatement, updateWithStatement } from './ast/statements/with-stmt';
export { createCaseBlock, updateCaseBlock } from './ast/statements/case-block';
export { createCaseClause, updateCaseClause } from './ast/statements/case-clause';
export { createDefaultClause, updateDefaultClause } from './ast/statements/default-clause';
export { createSwitchStatement, updateSwitchStatement } from './ast/statements/switch-stmt';
export { createReturnStatement, updateReturnStatement } from './ast/statements/return-stmt';
export { createEmptyStatement } from './ast/statements/empty-stmt';
export { createContinueStatement, updateContinueStatement } from './ast/statements/continue-stmt';
export { createBreakStatement, updateBreakStatement } from './ast/statements/break-stmt';
export { createDebuggerStatement } from './ast/statements/debugger-stmt';
export { createBlockStatement, updateBlockStatement } from './ast/statements/block-stmt';
export { createBlock, updateBlock } from './ast/statements/block';
export { createDoWhileStatement, updateDoWhileStatement } from './ast/statements/do-stmt';
export { createWhileStatement, updateWhileStatement } from './ast/statements/while-stmt';
export { createIfStatement, updateIfStatement } from './ast/statements/if-stmt';
export { createCatch, updateCatch } from './ast/statements/catch-stmt';
export { createCatchParameter, updateCatchParameter } from './ast/statements/catch-parameter';
export { createTryStatement, updateTryStatement } from './ast/statements/try-stmt';
export { createLexicalBinding, updateLexicalBinding } from './ast/statements/lexical-binding';
export { createLexicalDeclaration, updateLexicalDeclaration } from './ast/statements/lexical-declaration';
export { createVariableDeclaration, updateVariableDeclaration } from './ast/statements/variable-declaration';
export {
  createVariableDeclarationList,
  updateVariableDeclarationList
} from './ast/statements/variable-declarationList';
export { createLabelledStatement, updateLabelledStatement } from './ast/statements/labelled-stmt';
export { createBindingList, updateBindingList } from './ast/statements/binding-list';
export { createUnaryExpression, updateUnaryExpression } from './ast/expressions/unary-expr';
export { createSpreadElement, updatSpreadElement } from './ast/expressions/spread-element';
export { createArgumentList, updateArgumentList } from './ast/expressions/argument-list';
export { createPrefixUpdateExpression, updatePrefixUpdateExpression } from './ast/expressions/prefix-update-expr';
export { createPostfixUpdateExpression, updatePostfixUpdateExpression } from './ast/expressions/postfix-update-expr';
export { createTemplateSpan, updateTemplateSpan } from './ast/expressions/template-span';
export { createTemplateTail } from './ast/expressions/template-tail';
export { createTemplateExpression, updateTemplateExpression } from './ast/expressions/template-expression';
export { createVariableStatement, updateVariableStatement } from './ast/statements/variable-stmt';
export { createMinusType, updateMinusType } from './ast/types/minus-type';
export { createConstructSignature, updateConstructSignature } from './ast/types/construct-signature';
export { visitNode, visitNodes, visitEachChild } from './visitor';
export { createContext } from './transform/context';
import { RootNode } from './ast/rootNode';
import { parseRoot } from './parser';

export function parseScript(source: string, options?: any): RootNode {
  return parseRoot(source, false, options);
}

export function parseModule(source: string, options?: any): RootNode {
  return parseRoot(source, false, options);
}
