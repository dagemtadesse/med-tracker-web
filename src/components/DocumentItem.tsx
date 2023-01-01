import {
  CloudDownloadFill,
  EyeFill,
  FileEarmarkPostFill,
  Pencil,
  Trash,
} from 'react-bootstrap-icons'
import IconButton from './IconButton'

const DocumentItem = ({title, description}: {title: string, description: string}) => {
  return (
    <div className="flex justify-between items-center hover:bg-black hover:bg-opacity-5 hover:cursor-pointer rounded-md p-3">
      <div className="flex items-center gap-4">
        <div className="">
          <FileEarmarkPostFill size={32} className="fill-iconGrey" />
        </div>
        <div className="">
          <span className="block font-medium">{title}</span>
          <span className="block text-sm text-textGrey">
            {description}
          </span>
        </div>
      </div>
      <div className="justify-self-end flex gap-2">
        <IconButton Icon={EyeFill}/>
        <IconButton Icon={Pencil}/>
        <IconButton Icon={CloudDownloadFill}/>
        <IconButton Icon={Trash}/>
      </div>
    </div>
  )
}

export default DocumentItem
