module.exports = {
  input: ["src/**/*.{astro,jsx,js}", "!**/node_modules/**", "!public/**"],
  output: "src/locales/$LOCALE/index.json",
  defaultNamespace: "translation",
  keySeparator: false,
  namespaceSeparator: false,
  locales: ["en", "es", "fr"],
  useKeysAsDefaultValue: true,
  // We'll likely want to turn this off once our setup is a better place
  keepRemoved: true,
};
