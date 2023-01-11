import { createContext, ReactNode, useState } from "react";
import { dummyDocuments } from "./dummy-data";

export type Document = {
  id?: string;
  type: string;
  title: string;
  description: string;
  fileURL ?: string;
};

type DocumentContextState = {
  documents: Document[];
  viewDocument?: Document;
  currentDocument?: Document;
  addAnewDocument: (newDoc: Document) => void;
  removeDocument: (doc: Document) => void;
  editDocument: (doc: Document) => void;
  downloadDocument: (doc: Document) => void;
  setViewDocument: (doc: Document | undefined) => void;
  setCurrentDocument: (doc: Document | undefined) => void;
};

const DocumentContext = createContext<DocumentContextState>({
  documents: [],
  viewDocument: undefined,
  addAnewDocument: () => {
    // empty func
  },
  removeDocument: () => {
    // empty func
  },
  editDocument: () => {
    // empty func
  },
  downloadDocument: () => {
    // empty func
  },
  setViewDocument(doc) {
    // empty func
  },
  setCurrentDocument(doc) {
    // empty func
  },
});

export const DocumentContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [documents, setDocuments] = useState<Document[]>(dummyDocuments);
  const [viewDocument, setViewDocument] = useState<Document | undefined>();
  const [currentDocument, setCurrentDocument] = useState<
    Document | undefined
  >();

  return (
    <DocumentContext.Provider
      value={{
        documents,
        viewDocument,
        currentDocument,
        addAnewDocument: (newDoc: Document) => {
          setDocuments((oldState) => [...oldState, newDoc]);
        },
        removeDocument: (doc: Document) => {
          setDocuments((oldStata) =>
            [...oldStata].filter((oldDoc) => oldDoc.id !== doc.id)
          );
        },
        editDocument: (doc: Document) => {
          setDocuments((oldState) => {
            const filtered = oldState.filter((oldDoc) => oldDoc.id != doc.id);
            filtered.push(doc);
            return filtered;
          });
        },
        downloadDocument: (doc: Document) => {
          console.log(`Downloading document ${doc.title}`);
        },
        setViewDocument: (doc: Document | undefined) => setViewDocument(doc),
        setCurrentDocument: (doc: Document | undefined) =>
          setCurrentDocument(doc),
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
};

export default DocumentContext;
