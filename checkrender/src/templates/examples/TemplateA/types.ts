import { v2, v3 } from "@tradetrust-tt/tradetrust";

export type TemplateAV2 = v2.OpenAttestationDocument & TemplateADocument;
export type TemplateAV3 = v3.OpenAttestationDocument & {
  credentialSubject: TemplateADocument;
};

export type TemplateASchema = TemplateAV2 | TemplateAV3;

export interface TemplateADocument {
  DrawerCompany_Name: string;
  DrawerCompany_Number: string;
  DrawerJurisdiction:string;
  DrawerEmail:string;
  DrawerDns: string;
  paymentDueDate: string;
  amountDue: string;
  amountDueinwords:string;


  DraweeCompany_Name: string;
  DraweeCompany_Number: string;
  DraweeJurisdiction:string;
  DraweeEmail:string;
  DraweeDns: string;

  BankName:string;
  AccountNumber:string;
  SWIFT_OR_IBAN:string;

  SignedName:string;
  Position:string;

  Transaction_Hash:string;
  Blockchain_Network:string;
  
  links?: {
    self: {
      href: string;
    };
  };
}
