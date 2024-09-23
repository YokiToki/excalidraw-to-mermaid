process.env.OCLIF_TEST_ROOT = process.env.INIT_CWD;

module.exports = {
  require: "tsx",
  "watch-extensions": "ts",
  spec: "test/**/*.test.ts",
  recursive: true,
  reporter: "spec",
  timeout: 60000,
}
