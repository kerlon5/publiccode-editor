export const validatorWasm = (e, cb) => {
  const {data, defaultBranch} = e;
  const path = "validator-wasm/wasm_glue.wasm";
  // eslint-disable-next-line no-undef
  const go = new Go();
  // eslint-disable-next-line no-undef
  WebAssembly.instantiateStreaming(fetch(path), go.importObject).then((obj) => {
    go.run(obj.instance);
    console.log(data, defaultBranch);
    // eslint-disable-next-line no-undef
    return cb(IsPublicCodeYmlValid(JSON.stringify(data), defaultBranch));
  });
};
