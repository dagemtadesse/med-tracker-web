import SearchInput from './SearchInput'
import SidePopup from './SidePopup'

const AddPopup = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <SidePopup handleClose={handleClose} title="Add">
      <SearchInput />
    </SidePopup>
  )
}

export default AddPopup
