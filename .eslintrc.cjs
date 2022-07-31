module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      "jsx": true
    },
    ecmaVersion: 12,
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: [
      "./tsconfig.json"
    ],
  },
  plugins: [
    "import",
    "react",
    "react-hooks",
    "jsx-a11y",
    "@typescript-eslint/eslint-plugin",
    "no-loops",
    "no-use-extend-native",
    "promise",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:no-use-extend-native/recommended",
    "plugin:promise/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:react/jsx-runtime",
  ],
  root: true,
  env: {
    "browser": true,
    "node": true,
    "jest": true,
    "es2021": true
  },
  ignorePatterns: [
    "test",
    "dist",
    "build",
    "public",
    "/**/node_modules/*",
    ".eslintrc.cjs",
    "vite.config.ts",
  ],
  rules: {
    "@typescript-eslint/indent": ["error", 2, {
      "ignoredNodes": [
        "PropertyDefinition[decorators]",
        "TSUnionType"
      ]
    }],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ["error", "always"],
    "semi": "off",
    "@typescript-eslint/semi": ["error"],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "no-loops/no-loops": "error",
    "no-async-promise-executor": "error",
    "no-await-in-loop": "error",
    "no-promise-executor-return": "error",
    "require-atomic-updates": "error",
    "max-nested-callbacks": ["error", 3],
    "no-return-await": "error",
    "prefer-promise-reject-errors": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-misused-promises": ["error", {
      "checksVoidReturn": false
    }],
    "@typescript-eslint/promise-function-async": "error",

    "arrow-body-style": ["error", "as-needed"],
    "capitalized-comments": [
      "error",
      "never",
      {
        "ignorePattern": "pragma|ignored",
        "ignoreInlineComments": true
      }
    ],
    "curly": ["error", "all"],
    "dot-notation": "error",
    "eqeqeq": ["error", "always"],
    "multiline-comment-style": ["error", "starred-block"],
    "no-confusing-arrow": "error",
    "no-div-regex": "error",
    "no-else-return": ["error", { "allowElseIf": false }],
    "no-extra-bind": "error",
    "no-extra-boolean-cast": ["error", { "enforceForLogicalOperands": true }],
    "no-extra-label": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": ["error", { "allow": ["!!"] }],
    "no-lonely-if": "error",
    "no-undef-init": "error",
    "no-unneeded-ternary": "error",
    "no-useless-computed-key": ["error", {"enforceForClassMembers": true}],
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "object-shorthand": ["error"],
    "one-var": ["error", "never"],
    "one-var-declaration-per-line": ["error", "always"],
    "operator-assignment": ["error", "always"],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": ["error", {
      "VariableDeclarator": {
        "array": false,
        "object": true
      },
      "AssignmentExpression": {
        "array": true,
        "object": true
      }
    }, {
      "enforceForRenamedProperties": false
    }],
    "prefer-exponentiation-operator": "error",
    "prefer-object-has-own": "error",
    "prefer-object-spread": "error",
    "prefer-template": "error",
    "quote-props": ["error", "as-needed"],
  },
  settings: {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ],
        "paths": [
          "src"
        ]
      }
    },
    "import/extensions": [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
    ],
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".js",
        ".jsx",
        ".ts",
        ".tsx",
      ]
    }
  },
};
