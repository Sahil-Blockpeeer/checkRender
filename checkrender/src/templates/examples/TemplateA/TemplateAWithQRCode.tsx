import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { DocumentQrCode } from "../../../core/DocumentQrCode";
import { getDocumentData } from "../../../utils";
import { TemplateADocument, TemplateASchema } from "./types";



const Content = (document: TemplateADocument): JSX.Element => {
  return (
    <div className="border-black border p-2">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={2} className="border border-black p-2">Electronic Promissory Note</th>
          </tr>
          <tr>
            <td colSpan={2}>This electronic payment undertaking (EPU) with reference 123456787 is timestamped at 03/7/2024 05:30 AM IST</td>
          </tr>
        </thead>
        <br />
        <tbody>
          <tr>
            <td colSpan={2}>Party Details</td>
          </tr>
          <tr>
            <td>(Drawer)</td>
            <td>(Drawee)</td>
          </tr>
          <tr>
            <td>Company Name: {document.DrawerCompany_Name}</td>
            <td>Company Name: {document.DraweeCompany_Name}</td>
          </tr>
          <tr>
            <td>Company Number/LEI: {document.DrawerCompany_Number}</td>
            <td>Company Number/LEI:{document.DraweeCompany_Number} </td>
          </tr>
          <tr>
            <td>Jurisdiction of Incorporation: {document.DrawerJurisdiction}</td>
            <td>Jurisdiction of Incorporation: {document.DraweeJurisdiction}</td>
          </tr>
          <tr>
            <td>Email: {document.DrawerEmail}</td>
            <td>Email: {document.DraweeEmail}</td>
          </tr>
          <tr>
            <td>DNS: {document.DrawerDns}</td>
            <td>DNS: {document.DraweeDns}</td>
          </tr>
          <br />
          <tr>
            <td colSpan={2} className="pt-4">
              On the <strong>{document.paymentDueDate}</strong>, we promise to pay XYZ Ltd the sum of <strong>{document.amountDue}</strong> {document.amountDueinwords} for value received.
            </td>
          </tr>
          <br />
          <tr>
            <td colSpan={2} className="pt-4">
              <h4 className="highlight">Jurisdiction</h4>
              The Drawer is incorporated in USA, and the Drawee is incorporated in Canada.
            </td>
          </tr>
          <br />
          <tr>
            <td colSpan={2} className="pt-4">
              <h4 className="highlight">Payment Details</h4>
              
              Bank Name: <strong>{document.BankName}</strong><br />
              Account Number: <strong>{document.AccountNumber}</strong><br />
              SWIFT/IBAN: <strong>{document.SWIFT_OR_IBAN}</strong><br />
              Payment amount: <strong>{document.amountDue}</strong><br />
              Payment date: <strong>{document.paymentDueDate}</strong><br />
            </td>
          </tr>
          <br />
          <tr>
            <td colSpan={2} className="pt-4">
              Executed by issuer & Signed by person who under the laws of jurisdiction are acting under the authority of issuer.
            </td>
          </tr>
          <tr>
            <td className="pt-4">
              <h4 className="highlight">Digitally signed by</h4>
              <p>Signed Name: <strong>{document.SignedName}</strong></p>
              <p>Position: <strong>{document.Position}</strong></p>
            </td>
            <td className="pt-4 text-right">
              <p>Email: <strong>johndoe@abc.com</strong></p>
              <p>Timestamp: <strong>03/7/2024 05:30 AM IST</strong></p>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="pt-4">
              <h6>Transaction Hash: <strong>{document.Transaction_Hash}</strong></h6>
              <h6>Blockchain Network: <strong>{document.Blockchain_Network}</strong></h6>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};



export const TemplateAWithQRCode: FunctionComponent<TemplateProps<TemplateASchema>> = ({ document }) => {
  const documentData = getDocumentData(document) as TemplateADocument;
  const qrCodeUrl = documentData?.links?.self.href;
  return (
    <>
      <div className="mb-8">{Content(documentData)}</div>
      {qrCodeUrl && <DocumentQrCode url={qrCodeUrl} />}
    </>
  );
};