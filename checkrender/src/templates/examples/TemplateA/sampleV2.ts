import { v2 } from "@tradetrust-tt/tradetrust";
import { TemplateAV2 } from "./types";

export const TemplateASampleV2: TemplateAV2 = {
  $template: {
    type: v2.TemplateType.EmbeddedRenderer,
    name: "BILL_OF_LADING",
    url: "http://localhost:3000",
  },
  issuers: [
    {
      name: "Sahil",
      tokenRegistry: "0x2d46c8EfA1afBC41b4fFc901428E2f782A81C50B",
      identityProof: {
        type: v2.IdentityProofType.DNSTxt,
        location: "sahil.blockpeer.finance",
      },
    },
  ],
  links: {
    self: {
      href: "https://action.openattestation.com/?q=%7B%22type%22:%22DOCUMENT%22,%22payload%22:%20%7B%22uri%22:%20%22https://api-ropsten.tradetrust.io/storage/33737b71-96f6-4019-b6c1-5fcea04fcc2a%22,%22key%22:%20%22edcbadf17301fe5dfe174496c7edf29e0702e2775ee919bbccb74d0dfd5a1b4b%22,%22permittedActions%22:%20%5B%22STORE%22%5D,%22redirect%22:%20%22https://dev.tradetrust.io%22%7D%7D",
    },
  },

  DrawerCompany_Name: "ABC ltd",
  DrawerCompany_Number:"1234567",
  DrawerJurisdiction:"India",
  // lenderAddress: "0xb0a25BE24A5724Cc176DdE32A1bEE53B4b92191b",
  DrawerEmail:"drawer@abc.com",
  DrawerDns: "abc.com",
  amountDue: "20000",
  amountDueinwords:"(twenty thousand rupees only)",
  paymentDueDate: "21/8/2024 08:54PM",

  DraweeCompany_Name:"xyz ltd",
  DraweeCompany_Number:"9876543",
  DraweeJurisdiction:"Dubai",
  DraweeEmail:"drawee@xyz.com",
  DraweeDns: "xyz.com",

  BankName:"SBI ",
  AccountNumber:"4537865423",
  SWIFT_OR_IBAN:"0022345",

  SignedName:"Ben Tenisan",
  Position:"CEO",

  Transaction_Hash:"0x123456789abcdef",
  Blockchain_Network:"Ethereum Mainnet"
};
