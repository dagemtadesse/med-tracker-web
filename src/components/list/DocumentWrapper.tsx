import DocumentItem from "./DocumentItem"

const DocumentWrapper = ({
  category,
  items,
}: {
  category: string
  items: any[]
}) => {
  return (
    <div>
      <h2 className="font-medium mb-3 mt-1 text-lg capitalize">{category}</h2>
      {items.map(item => <DocumentItem {...item}/>)}
    </div>
  )
}

export default DocumentWrapper
