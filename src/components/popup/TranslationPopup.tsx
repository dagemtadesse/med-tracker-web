import Select from './Select'
import SidePopup from './SidePopup'

const TranslationPopup = ({ handleClose }: { handleClose: () => void }) => {
  const data = [
    { code: 'A02BC05', name: 'ESOMEPRAZOLE' },
    { code: 'A02BC06', name: 'ESOMEPRAZOLE' },
  ]

  return (
    <SidePopup handleClose={handleClose} title="Translation">
      <div className="mb-5">
        <Select />
      </div>

      <div className="flex flex-col mt-3">
        <ul>
          {data.map((item) => (
            <li className="mb-5" key={item.code}>
              <div className="font-semibold">{item.code}</div>
              <div className="mt-0.5">{item.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </SidePopup>
  )
}

export default TranslationPopup
