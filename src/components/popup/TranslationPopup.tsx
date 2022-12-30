import SidePopup from './SidePopup'

const TranslationPopup = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <SidePopup handleClose={handleClose} title="Translation">
      "translation form"
    </SidePopup>
  )
}

export default TranslationPopup
