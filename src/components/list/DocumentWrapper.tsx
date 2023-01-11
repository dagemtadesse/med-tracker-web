import { Fragment, useContext } from "react";
import ConfirmationContext from "../../contexts/ConfirmationContext";
import DocumentItem from "./DocumentItem";
import DocumentContext, { Document } from "../../contexts/DocumentContext";

const categorize = (docs: Document[]): [string, Document[]][] => {
  const categorized = new Map<string, Document[]>();
  for (let doc of docs) {
    if (categorized.has(doc.type)) {
      categorized.get(doc.type)?.push(doc);
    } else {
      categorized.set(doc.type, [doc]);
    }
  }

  const array = [];
  for (let [key, value] of categorized) {
    array.push([key, value]);
  }
  return array as [string, Document[]][];
};

const DocumentWrapper = () => {
  const confirmCtx = useContext(ConfirmationContext);
  const documentCtx = useContext(DocumentContext);

  const deleteHandler = (doc: Document) => {
    confirmCtx.setConfirm(async () => documentCtx.removeDocument(doc));
  };

  const show = (doc: Document) => {
    documentCtx.setViewDocument(doc);
  };

  const download = (doc: Document) => {
    documentCtx.downloadDocument(doc);
  };

  const edit = (doc: Document) => {
    documentCtx.setCurrentDocument(doc);
  };

  const categorized = categorize(documentCtx.documents);

  return (
    <div>
      {categorized.map((grouped, index) => {
        return (
          <Fragment key={index}>
            <h2 className="font-medium mb-3 mt-1 text-lg capitalize">
              {grouped[0]}
            </h2>
            {grouped[1].map((item: Document) => (
              <DocumentItem
                key={item.id}
                deleteHandler={() => deleteHandler(item)}
                viewHandler={() => show(item)}
                downloadHandler={() => download(item)}
                editHandler={() => edit(item)}
                title={item.title}
                description={item.description}
              />
            ))}
          </Fragment>
        );
      })}
    </div>
  );
};

export default DocumentWrapper;
