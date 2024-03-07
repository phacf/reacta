{
  "root": true,
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks"
  ],
  "rules": {
    "@typescript-eslint/no-namespace": "off",
    "jsx-a11y/aria-role": [
      2,
      {
        "ignoreNonDOM": true
      }
    ],
    "no-extra-boolean-cast": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "react/jsx-key": "off",
    "import/order": [
      2,
      {
        "groups": [
          "external",
          "builtin",
          "internal",
          "parent",
          "sibling",
          "index"
        ]
      }
    ]
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/core-modules": [
      "miragejs/-types"
    ],
    "import/ignore": [
      "react-apexcharts"
    ],
    "import/resolver": {
      "typescript": true,
      "node": {
        "paths": [
          "src",
        ],
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  }
}
