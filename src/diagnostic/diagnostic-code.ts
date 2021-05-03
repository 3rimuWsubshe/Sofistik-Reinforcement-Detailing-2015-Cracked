// code below is auto-generated from diagnosticsMessages.json by scripts/build-diagnostics

/* @internal */
export const enum DiagnosticCode {
  Unexpected_token = 1,
  _let_is_a_restricted_production_at_the_start_of_a_statement = 2,
  Identifier_expected = 3,
  _expected = 4,
  Declaration_or_statement_expected = 5,
  Private_identifiers_cannot_be_used_as_parameters = 6,
  Catch_clause_variable_cannot_have_an_initializer = 7,
  Declaration_or_statement_expected_This_follows_a_block_of_statements_so_if_you_intended_to_write_a_destructuring_assignment_you_might_need_to_wrap_the_whole_assignment_in_parentheses = 8,
  Expression_exprected_A_compound_assignment_or_an_logical_assignment_cannot_follow_an_array_literal = 9,
  Linebreak_ermitted_after_throw = 10,
  Identifier_expected_let_is_a_reserved_word_in_strict_mode = 11,
  Missing_initializer_in_destructuring_declaration = 12,
  Missing_initializer_in_const_declaration = 13,
  Unary_expressions_as_the_left_operand_of_an_exponentation_expression_must_be_disambiguated_with_parentheses = 14,
  Expression_expected = 15,
  Invalid_optional_chain_from_new_expression = 16,
  The_binding_pattern_is_not_destructible = 17,
  A_rest_element_cannot_have_an_initializer = 18,
  A_rest_parameter_must_be_last_in_a_parameter_list = 19,
  Generators_can_only_be_declared_at_the_top_level_or_inside_a_block = 20,
  Function_declarations_are_not_allowed_in_an_arbitrary_statement_position = 21,
  Class_declarations_are_not_allowed_in_an_arbitrary_statement_position = 22,
  Expression_exprected_A_compound_assignment_or_an_logical_assignment_cannot_follow_an_object_literal = 23,
  The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access = 24,
  The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_or_a_property_access = 25,
  Block_body_arrows_can_not_be_immediately_accessed_without_a_group = 27,
  An_arrow_function_can_not_be_part_of_an_operator_to_the_right = 28,
  Block_body_arrows_can_not_be_immediately_invoked_without_a_group = 29,
  Block_body_arrows_can_not_be_immediately_tagged_without_a_group = 30,
  The_left_hand_side_of_the_arrow_is_not_destructible = 31,
  Trailing_comma_not_allowed = 32,
  A_return_statement_can_only_be_used_within_a_function_body = 33,
  An_element_access_expression_should_take_an_argument = 34,
  A_rest_parameter_or_binding_pattern_may_not_have_a_trailing_comma = 35,
  Parameter_cannot_have_question_mark_and_initializer = 36,
  An_index_signature_cannot_have_a_rest_parameter = 37,
  A_set_accessor_must_have_exactly_one_parameter = 38,
  A_set_accessor_cannot_have_an_optional_parameter = 39,
  A_set_accessor_parameter_cannot_have_an_initializer = 40,
  A_set_accessor_cannot_have_rest_parameter = 41,
  A_get_accessor_cannot_have_parameters = 42,
  _delete_cannot_be_called_on_an_identifier_in_strict_mode = 43,
  A_for_await_of_statement_is_only_allowed_within_an_async_function_or_async_generator = 44,
  A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement = 45,
  A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement = 46,
  A_default_clause_cannot_appear_more_than_once_in_a_switch_statement = 47,
  A_yield_expression_is_only_allowed_in_a_generator_body = 48,
  Only_a_single_variable_declaration_is_allowed_in_a_for_of_statement = 49,
  Invalid_left_hand_side_Must_have_a_single_binding_in_a_for_of_statement = 50,
  The_variable_declaration_of_a_for_in_or_of_statement_cannot_have_an_initializer = 51,
  The_lexical_declaration_of_a_for_in_or_of_statement_cannot_have_an_initializer = 52,
  The_body_of_an_if_statement_cannot_be_the_empty_statement = 53,
  Dynamic_import_must_have_one_specifier_as_an_argument = 54,
  Specifier_of_dynamic_import_cannot_be_spread_element = 55,
  Dynamic_import_cannot_have_type_arguments = 56,
  _Yield_expression_cannot_be_used_in_function_parameters = 57,
  _Await_expression_cannot_be_used_in_function_parameters = 58,
  The_import_keyword_can_only_be_used_with_the_module_goal = 59,
  The_export_keyword_can_only_be_used_with_the_module_goal = 60,
  _can_only_be_used_in_an_object_literal_property_inside_a_destructuring = 61,
  The_left_hand_side_of_a_for_in_statement_must_be_a_variable_or_a_property_access = 62,
  The_left_hand_side_of_a_for_of_statement_must_be_a_variable_or_a_property_access = 63,
  Method_definition_expected = 64,
  Classes_may_not_have_a_static_property_named_prototype = 65,
  Multiple_constructor_implementations_are_not_allowed = 66,
  Class_constructor_may_not_be_a_accessor = 67,
  Dot_property_must_be_an_identifier = 68,
  Private_identifiers_are_not_allowed_outside_class_bodies = 69,
  Tagged_template_expressions_are_not_permitted_in_an_optional_chain = 70,
  An_optional_chain_cannot_contain_private_identifiers = 71,
  Import_Call_should_take_at_least_one_argument = 72,
  _super_can_only_be_referenced_in_members_of_derived_classes_or_object_literal_expressions = 73,
  _super_must_be_followed_by_an_argument_list_or_member_access = 74,
  _with_statements_are_not_allowed_in_strict_mode = 75,
  Identifier_expected_yield_is_a_reserved_word_in_strict_mode = 76,
  Identifier_expected_await_is_a_reserved_word_in_strict_mode_and_module_goal = 77,
  The_operand_of_a_delete_operator_must_be_a_property_reference = 79,
  _new_target_only_allowed_within_functions = 80,
  A_lexical_declaration_can_t_define_a_let_binding = 81,
  Variable_declaration_expected = 82,
  _await_expressions_cannot_be_used_in_a_parameter_initializer = 83,
  Line_terminator_not_permitted_before_arrow = 84,
  _use_strict_directive_cannot_be_used_with_non_simple_parameter_list = 85,
  Escapes_8_or_9_are_not_syntactically_valid_escapes = 86,
  Octal_escape_sequences_are_not_allowed_in_strict_mode = 87,
  Octal_literals_are_not_allowed_in_strict_mode = 88,
  Invalid_hexadecimal_escape_sequence = 89,
  Invalid_Unicode_escape_sequence = 90,
  Coalescing_and_logical_operators_used_together_in_the_same_expression_must_be_disambiguated_with_parentheses = 91,
  Unicode_codepoint_must_not_be_greater_than_0x10FFFF = 92,
  Invalid_astral_character = 93,
  Type_parameter_declaration_needs_a_default_since_a_preceding_type_parameter_declaration_has_a_default = 94,
  Explicit_inexact_syntax_cannot_appear_in_class_or_interface_definitions = 95,
  _declare_module_cannot_be_used_inside_another_declare_module = 96,
  A_binding_pattern_parameter_cannot_be_optional_in_an_implementation_signature = 97,
  A_setter_cannot_have_a_this_parameter = 98,
  Spread_properties_cannot_have_variance = 99,
  A_type_annotation_is_required_for_the_this_parameter = 100,
  The_this_parameter_must_be_the_first_function_parameter = 101,
  ___is_only_allowed_as_a_type_argument_to_call_or_new = 102,
  Type_parameters_must_come_after_the_async_keyword_e_g_instead_of_T_async_use_async_T = 103,
  Only_declares_and_type_imports_are_allowed_inside_declare_module = 104,
  The_declare_modifier_can_only_appear_on_class_fields = 105,
  Initializers_are_not_allowed_in_fields_with_the_declare_modifier = 106,
  Explicit_inexact_syntax_cannot_appear_inside_an_explicit_exact_object_type = 107,
  The_this_parameter_cannot_be_optional = 108,
  Prohibit_delete_of_private_class_elements = 109,
  Cannot_use_new_with_import = 110,
  Cannot_use_import_meta_outside_a_module = 111,
  for_await_of_is_only_valid_in_async_functions_and_async_generators = 112,
  Unterminated_string_literal = 113,
  Unterminated_template_literal = 114,
  Binding_identifier_expected = 115,
  Identifier_expected_Reserved_word_in_strict_mode = 116,
  A_class_declaration_without_the_default_modifier_must_have_a_name = 117,
  Invalid_character = 118,
  _constructor_is_a_reserved_word = 119,
  _and_operations_cannot_be_mixed_without_parentheses = 120,
  _import_meta_must_not_contain_escaped_characters = 121,
  Escape_sequence_in_keyword_import = 122,
  The_only_valid_meta_property_for_new_is_new_target = 123,
  Keywords_cannot_contain_escape_characters = 124,
  _let_is_not_allowed_to_be_used_as_a_name_in_let_or_const_declarations = 125,
  Duplicate_regular_expression_flag = 126,
  Unterminated_regular_expression = 127,
  Unknown_regular_expression_flag = 128,
  An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal = 129,
  Binary_integer_literal_like_sequence_containing_an_invalid_digit = 130,
  Octal_integer_literal_like_sequence_containing_an_invalid_digit = 131,
  Multiple_consecutive_numeric_separators_are_not_permitted = 132,
  Binary_integer_literal_like_sequence_without_any_digits = 133,
  Octal_integer_literal_like_sequence_without_any_digits = 134,
  Hex_integer_literal_like_sequence_without_any_digits = 135,
  Numeric_separators_are_not_allowed_at_the_end_of_numeric_literals = 136,
  Numeric_separator_can_not_be_used_after_leading_0 = 137,
  Invalid_BigInt_syntax = 138,
  Non_number_after_exponent_indicator = 139,
  Numeric_separators_not_allowed_here = 140,
  In_strict_mode_code_or_without_web_compability_enabled_functions_can_only_be_declared_at_top_level_or_inside_a_block = 141,
  Without_web_compability_enabled_functions_can_not_be_declared_at_top_level_inside_a_block_or_as_the_body_of_an_if_statement = 142,
  _try_expected = 143,
  Expected_a = 144,
  Did_you_mean_to_use_a_An_can_only_follow_a_property_name_when_the_containing_object_literal_is_part_of_a_destructuring = 145,
  Unicode_escapes_at_the_start_of_labels_should_not_allow_keywords = 146,
  Identifier_expected_await_is_a_reserved_word_in_module_goal = 147,
  Duplicate_label = 148,
  Missing_label = 149,
  Lexical_declaration_expected = 151,
  An_async_arrow_without_the_default_modifier_can_not_be_exported = 152,
  Async_arrow_can_not_be_followed_by_new_expression = 153,
  _await_keyword_must_not_contain_escaped_characters = 154,
  _yield_keyword_must_not_contain_escaped_characters = 155,
  Property_assignment_expected = 156,
  A_get_accessor_cannot_be_a_generator = 157,
  A_set_accessor_cannot_be_a_generator = 158,
  The_parser_expected_to_find_a_to_match_the_token_here = 159,
  Did_you_forgot_a_to_match_the_token = 160,
  The_left_hand_side_must_be_a_variable_or_a_property_access = 161,
  The_left_hand_side_of_an_assignment_expression_may_not_be_an_optional_property_access = 162,
  _arguments_can_only_be_used_in_functions_and_class_methods = 163,
  Constructor_implementation_is_missing = 164,
  Expected_a_to_match_the_token_here = 165
}

export const diagnosticMap: { [key: number]: string } = {
  [1]: 'Unexpected token.',
  [2]: '`let \n [` is a restricted production at the start of a statement',
  [3]: 'Identifier expected',
  [4]: "',' expected",
  [5]: 'Declaration or statement expected',
  [6]: 'Private identifiers cannot be used as parameters',
  [7]: 'Catch clause variable cannot have an initializer',
  [8]: 'Declaration or statement expected. This follows a block of statements so if you intended to write a destructuring assignment you might need to wrap the whole assignment in parentheses',
  [9]: 'Expression exprected. A compound assignment or an logical assignment cannot follow an array literal',
  [10]: 'Linebreak ermitted after throw',
  [11]: "Identifier expected. 'let' is a reserved word in strict mode",
  [12]: 'Missing initializer in destructuring declaration',
  [13]: 'Missing initializer in const declaration',
  [14]: 'Unary expressions as the left operand of an exponentation expression must be disambiguated with parentheses',
  [15]: 'Expression expected',
  [16]: 'Invalid optional chain from new expression',
  [17]: 'The binding pattern is not destructible',
  [18]: 'A rest element cannot have an initializer',
  [19]: 'A rest parameter must be last in a parameter list',
  [20]: 'Generators can only be declared at the top level or inside a block',
  [21]: 'Function declarations are not allowed in an arbitrary statement position.',
  [22]: 'Class declarations are not allowed in an arbitrary statement position.',
  [23]: 'Expression exprected. A compound assignment or an logical assignment cannot follow an object literal',
  [24]: 'The left-hand side of an assignment expression must be a variable or a property access',
  [25]: 'The operand of an increment or decrement operator must be a variable or a property access',
  [27]: 'Block body arrows can not be immediately accessed without a group',
  [28]: 'An arrow function can not be part of an operator to the right',
  [29]: 'Block body arrows can not be immediately invoked without a group',
  [30]: 'Block body arrows can not be immediately tagged without a group',
  [31]: 'The left hand side of the arrow is not destructible ',
  [32]: 'Trailing comma not allowed.',
  [33]: 'A return statement can only be used within a function_body',
  [34]: 'An element access expression should take an argument.',
  [35]: 'A rest parameter or binding pattern may not have a trailing comma.',
  [36]: 'Parameter cannot have question mark and initializer.',
  [37]: 'An index signature cannot have a rest parameter.',
  [38]: "A 'set' accessor must have exactly one parameter.",
  [39]: "A 'set' accessor cannot have an optional parameter.",
  [40]: "A 'set' accessor parameter cannot have an initializer.",
  [41]: "A 'set' accessor cannot have rest parameter.",
  [42]: "A 'get' accessor cannot have parameters.",
  [43]: "'delete' cannot be called on an identifier in strict mode.",
  [44]: "A 'for-await-of' statement is only allowed within an async function or async generator.",
  [45]: "A 'continue' statement can only be used within an enclosing iteration statement.",
  [46]: "A 'break' statement can only be used within an enclosing iteration or switch statement.",
  [47]: "A 'default' clause cannot appear more than once in a 'switch' statement.",
  [48]: "A 'yield' expression is only allowed in a generator body.",
  [49]: "Only a single variable declaration is allowed in a 'for...of' statement.",
  [50]: "Invalid left-hand side: Must have a single binding in a 'for...of' statement.",
  [51]: "The variable declaration of a 'for...in or of' statement cannot have an initializer.",
  [52]: "The lexical declaration of a 'for...in or of' statement cannot have an initializer.",
  [53]: "The body of an 'if' statement cannot be the empty statement.",
  [54]: 'Dynamic import must have one specifier as an argument.',
  [55]: 'Specifier of dynamic import cannot be spread element.',
  [56]: 'Dynamic import cannot have type arguments.',
  [57]: '`Yield` expression cannot be used in function parameters',
  [58]: '`Await` expression cannot be used in function parameters',
  [59]: 'The `import` keyword can only be used with the module goal',
  [60]: 'The `export` keyword can only be used with the module goal',
  [61]: '`=` can only be used in an object literal property inside a destructuring',
  [62]: "The left-hand side of a 'for...in' statement must be a variable or a property access.",
  [63]: "The left-hand side of a 'for...of' statement must be a variable or a property access.",
  [64]: 'Method definition expected',
  [65]: "Classes may not have a static property named 'prototype'",
  [66]: 'Multiple constructor implementations are not allowed',
  [67]: 'Class constructor may not be a accessor',
  [68]: 'Dot property must be an identifier',
  [69]: 'Private identifiers are not allowed outside class_bodies',
  [70]: 'Tagged template expressions are not permitted in an optional chain.',
  [71]: 'An optional chain cannot contain private identifiers.',
  [72]: 'Import Call should take at least one argument',
  [73]: "'super' can only be referenced in members of derived classes or object literal expressions",
  [74]: "'super' must be followed by an argument list or member access.",
  [75]: "'with' statements are not allowed in strict mode.",
  [76]: "Identifier expected. 'yield' is a reserved word in strict mode",
  [77]: "Identifier expected. 'await' is a reserved word in strict mode and module goal",
  [79]: "The operand of a 'delete' operator must be a property reference.",
  [80]: "'new.target' only allowed within functions",
  [81]: "A lexical declaration can't define a 'let' binding",
  [82]: 'Variable declaration expected.',
  [83]: "'await' expressions cannot be used in a parameter initializer",
  [84]: 'Line terminator not permitted before arrow',
  [85]: "'use strict' directive cannot be used with non-simple parameter list.",
  [86]: 'Escapes \\8 or \\9 are not syntactically valid escapes',
  [87]: 'Octal escape sequences are not allowed in strict mode',
  [88]: 'Octal literals are not allowed in strict mode',
  [89]: 'Invalid hexadecimal escape sequence',
  [90]: 'Invalid Unicode escape sequence',
  [91]: 'Coalescing and logical operators used together in the same expression must be disambiguated with parentheses',
  [92]: 'Unicode codepoint must not be greater than 0x10FFFF',
  [93]: 'Invalid astral character',
  [94]: 'Type parameter declaration needs a default, since a preceding type parameter declaration has a default',
  [95]: 'Explicit inexact syntax cannot appear in class or interface definitions',
  [96]: '`declare module` cannot be used inside another `declare module`',
  [97]: 'A binding pattern parameter cannot be optional in an implementation signature.',
  [98]: 'A setter cannot have a `this` parameter.',
  [99]: 'Spread properties cannot have variance',
  [100]: 'A type annotation is required for the `this` parameter.',
  [101]: 'The `this` parameter must be the first function parameter.',
  [102]: '`_` is only allowed as a type argument to call or new',
  [103]: 'Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`',
  [104]: 'Only declares and type imports are allowed inside declare module',
  [105]: 'The `declare` modifier can only appear on class fields.',
  [106]: 'Initializers are not allowed in fields with the `declare` modifier.',
  [107]: 'Explicit inexact syntax cannot appear inside an explicit exact object type',
  [108]: 'The this parameter cannot be optional',
  [109]: 'Prohibit delete of private class elements',
  [110]: 'Cannot use new with import(...)',
  [111]: "Cannot use 'import.meta' outside a module",
  [112]: 'for await (... of ...) is only valid in async functions and async generators',
  [113]: 'Unterminated string literal',
  [114]: 'Unterminated template literal',
  [115]: 'Binding identifier expected',
  [116]: 'Identifier expected. Reserved word in strict mode',
  [117]: "A class declaration without the 'default' modifier must have a name.",
  [118]: 'Invalid character',
  [119]: "'#constructor' is a reserved word.",
  [120]: "'&&' and '??' operations cannot be mixed without parentheses",
  [121]: "'import.meta' must not contain escaped characters",
  [122]: 'Escape sequence in keyword import',
  [123]: "The only valid meta property for new is 'new.target",
  [124]: 'Keywords cannot contain escape characters',
  [125]: "'let' is not allowed to be used as a name in 'let' or 'const' declarations.",
  [126]: 'Duplicate regular expression flag',
  [127]: 'Unterminated regular expression',
  [128]: 'Unknown regular expression flag',
  [129]: 'An identifier or keyword cannot immediately follow a numeric literal',
  [130]: 'Binary integer literal like sequence containing an invalid digit',
  [131]: 'Octal integer literal like sequence containing an invalid digit',
  [132]: 'Multiple consecutive numeric separators are not permitted',
  [133]: 'Binary integer literal like sequence without any digits',
  [134]: 'Octal integer literal like sequence without any digits',
  [135]: 'Hex integer literal like sequence without any digits',
  [136]: 'Numeric separators are not allowed at the end of numeric literals',
  [137]: 'Numeric separator can not be used after leading_0',
  [138]: 'Invalid BigInt syntax',
  [139]: 'Non number after exponent indicator',
  [140]: 'Numeric separators not allowed here',
  [141]: 'In strict mode code or without web compability enabled, functions can only be declared at top level or inside a block',
  [142]: 'Without web compability enabled functions can not be declared at top level, inside a block, or as the body of an if statement',
  [143]: "'try' expected",
  [144]: 'Expected a `;`',
  [145]: "Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring",
  [146]: 'Unicode escapes at the start of labels should not allow keywords',
  [147]: "Identifier expected.  'await' is a reserved word in module goal",
  [148]: 'Duplicate label',
  [149]: 'Missing label',
  [151]: 'Lexical declaration expected',
  [152]: "An async arrow without the 'default' modifier can not be exported",
  [153]: 'Async arrow can not be followed by new expression',
  [154]: "'await' keyword must not contain escaped characters",
  [155]: "'yield' keyword must not contain escaped characters",
  [156]: 'Property assignment expected',
  [157]: 'A get accessor cannot be a generator',
  [158]: 'A set accessor cannot be a generator',
  [159]: "The parser expected to find a '}' to match the '{' token here",
  [160]: "Did you forgot a ']' to match the `[` token?",
  [161]: 'The left-hand side must be a variable or a property access.',
  [162]: 'The left-hand side of an assignment expression may not be an optional property access',
  [163]: "'arguments' can only be used in functions and class methods",
  [164]: 'Constructor implementation is missing',
  [165]: "Expected a ')' to match the '(' token here"
};
