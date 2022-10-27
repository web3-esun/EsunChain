import pkg from "elliptic";
const { ec: EC } = pkg;

const ec = new EC("secp256k1");

class Keygen {
  constructor() {
    this.key = ec.genKeyPair();
    this.publicKey = this.key.getPublic("hex");
    this.privateKey = this.key.getPrivate("hex");
  }

  getPublicKey() {
    return this.publicKey;
  }

  getPrivateKey() {
    return this.privateKey;
  }

  getKey() {
    return this.key;
  }
}

export default Keygen;
export { ec };
