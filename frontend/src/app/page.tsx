import Image from "next/image";
import freeRoomsLogo from "../../assets/freeRoomsLogo.png";
import SearchIcon from '@mui/icons-material/Search';
import WindowIcon from '@mui/icons-material/Window';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import MapIcon from '@mui/icons-material/Map';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const navBoxes = [
  {
    icon: SearchIcon,
    name: "search"
  },
  {
    icon: WindowIcon,
    name: "grid"
  },
  {
    icon: MeetingRoomIcon,
    name: "door"
  },
  {
    icon: MapIcon,
    name: "map"
  },
  {
    icon: DarkModeIcon,
    name: "moon"
  },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="px-4 py-1 border-b-[1px] border-gray-200 h-[65.6px] flex items-center justify-between">
        <div className="text-[rgb(239,108,0)] text-[32px] font-[600] flex ">
          <Image src={freeRoomsLogo} alt="Freerooms Logo" width={50} height={50} className="mb-1" />
          Freerooms
        </div>
        <div className="flex gap-2">
          {navBoxes.map((box) => (
            <NavBoxes key={box.name} Icon={box.icon} name={box.name} activeName="grid" />
          ))}
        </div>
      </div>
      <main className="px-6 mt-4">
        <BrowsePage />
      </main>
    </div>
  );
}

function BrowsePage() {
  return (
    <div>
      <div className="flex justify-between">
        <ActionButtons actionType="Filters" Icon={FilterAltIcon} />
        <ActionButtons actionType="Sort" Icon={FilterListIcon} />
      </div>
      <div>
        {/* Building cards */}
      </div>
    </div>
  );
}

function ActionButtons({actionType, Icon}: {actionType: string, Icon: React.ElementType}) {
  return (
    <div>
      <button className="border-[rgb(239,108,0)] text-[rgb(239,108,0)] border-[2px] w-[140px] rounded-[10px] flex text-[16px] font-[700] gap-3 h-[44px] items-center justify-center pr-3">
        <Icon component={Icon} sx={{ color: "rgb(239,108,0)" }} className="mb-1" />
        {actionType}
      </button>
    </div>
  );
}


function NavBoxes({ Icon, name, activeName }: { Icon: React.ElementType, name: string, activeName: string }) {
  return (
    <div className={`border border-[1px] p-2 rounded-[4px] border-[rgba(239,108,0,0.5)] ${name === activeName ? "bg-[rgb(239,108,0)]" : ""}`}>
      <Icon component={Icon} sx={{ color: name === activeName ? "white" : "rgb(239,108,0)"}} />
    </div>
  );
}