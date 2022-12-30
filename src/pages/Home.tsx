import classnames from 'classnames'
import { useState } from 'react'
import {
  BandaidFill,
  Capsule,
  Clipboard2PlusFill,
  FolderFill,
  Globe,
  HeartPulseFill,
  PlusLg,
  ShareFill,
} from 'react-bootstrap-icons'
import Accordion from '../components/Accordion'
import DocumentWrapper from '../components/DocumentWrapper'
import ListItem from '../components/ListItem'
import SidePopup from '../components/popup/SidePopup'
import RoundedButton from '../components/RoundedButton'

const items = [{ label: 'Vaccine' }, { label: 'Flu Shot' }]
const document = [
  {
    category: 'Travel Document',
    items: [
      { title: 'Vaccine', description: 'I have taken vaccine' },
      { title: 'Vaccine', description: 'I have taken vaccine' },
    ],
  },
  {
    category: 'Journal',
    items: [
      { title: 'Vaccine', description: 'I have taken vaccine' },
      { title: 'Vaccine', description: 'I have taken vaccine' },
    ],
  },
]

const Home = () => {
  const [isPopupShown, setISPopupShown] = useState(true);

  return (
    <>
      <header className="bg-white">
        <nav className="flex flex-row-reverse pt-[80px] px-[64px]">
          <ul className="flex gap-8">
            <NavItem label={'Home'} active />
            <NavItem label={'Terms & service'} />
            <NavItem label={'Logout'} />
          </ul>
        </nav>
      </header>

      <main className="p-8">
        <Accordion
          title="Allergies"
          Icon={Capsule}
          items={items}
          Wrapper={ListItem}
        >
          <>
            <RoundedButton label="Add" Icon={PlusLg} />
            <RoundedButton label="Translation" Icon={Globe} />
            <RoundedButton label="Share" Icon={ShareFill} />
          </>
        </Accordion>
        <Accordion
          title="Medicine"
          Icon={HeartPulseFill}
          items={items}
          Wrapper={ListItem}
        />
        <Accordion
          title="Diagnoses"
          Icon={Clipboard2PlusFill}
          items={items}
          Wrapper={ListItem}
        />
        <Accordion
          title="Vaccines"
          Icon={BandaidFill}
          items={items}
          Wrapper={ListItem}
        />
        <Accordion
          title="Documents"
          Icon={FolderFill}
          items={document}
          Wrapper={DocumentWrapper}
        />

        {isPopupShown && <SidePopup handleClose={() => setISPopupShown(false)}/>}
      </main>
    </>
  )
}

export default Home

type NavItemProps = {
  active?: boolean
  label: string
}

const NavItem = ({ active, label }: NavItemProps) => {
  const style = classnames('py-3 relative', {
    'text-solidBlue': !!active,
  })

  return (
    <li className={style}>
      <a href="">{label}</a>
      {active && (
        <span className="w-full h-[2px] bg-solidBlue block absolute bottom-0"></span>
      )}
    </li>
  )
}
