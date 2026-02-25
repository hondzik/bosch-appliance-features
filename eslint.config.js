import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";

export default [
  {
    files: ["*.ts", "*.tsx", "src/**/*.ts", "src/**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "import": importPlugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/consistent-type-imports": ["error", {
        "prefer": "type-imports",
        "fixStyle": "separate-type-imports"
      }],
      "semi": ["error", "always"],
      // Import sorting rules
      "import/order": ["error", {
        "groups": [
          "builtin",   // Node.js built-in modules
          "external",  // External packages
          "internal",  // Internal/aliased modules
          "parent",    // Parent imports
          "sibling",   // Sibling imports
          "index",     // Index imports
          "type"       // Type imports
        ],
        "newlines-between": "never",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }],
      "import/newline-after-import": ["error", { "count": 1 }],
    },
  },
];
