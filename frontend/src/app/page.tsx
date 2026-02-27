"use client";
import Image from "next/image";
import freeRoomsLogo from "../../assets/freeRoomsLogo.png";
import SearchIcon from '@mui/icons-material/Search';
import WindowIcon from '@mui/icons-material/Window';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import MapIcon from '@mui/icons-material/Map';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import agsm from "../../assets/agsm.webp";
import ainsworth from "../../assets/ainsworth.webp";
import anitab from "../../assets/anitab.webp";
import biologicalScience from "../../assets/biologicalScience.webp";
import biologicalScienceWest from "../../assets/biologicalScienceWest.webp";
import blockhouse from "../../assets/blockhouse.webp";
import businessSchool from "../../assets/businessSchool.webp";
import civilBuilding from "../../assets/civilBuilding.webp";
import colombo from "../../assets/colombo.webp";
import cseBuilding from "../../assets/cseBuilding.webp";

import CircleIcon from '@mui/icons-material/Circle';
import { useState } from "react";
import freeroomsDoorClosed from "../../assets/freeroomsDoorClosed.png";

// FYI 
// Not sure if you wanted to have all the stuff in one page or have separate files for stuff 
// So just put everything here but I can move it to different files if you want

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
  const [doorOpen, setDoorOpen] = useState(true);


  return (
    <div className="flex flex-col">
      <div className="px-4 py-1 border-b-[1px] border-gray-200 h-[65.6px] flex items-center justify-between">
        <div className="text-[rgb(239,108,0)] text-[32px] font-[600] flex ">
          <Image src={doorOpen ? freeRoomsLogo : freeroomsDoorClosed} alt="Freerooms Logo" width={50} height={50} className="mb-1 cursor-pointer" onClick={() => setDoorOpen(!doorOpen)} />
          <span className="md:flex hidden">
            Freerooms
          </span>
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

const buildings = [
    {
      "name": "AGSM",
      "rooms_available": 9,
      "building_picture": agsm
    },
    {
      "name": "Ainsworth Building",
      "rooms_available": 16,
      "building_picture": ainsworth
    },
    {
      "name": "Anita B Lawrence Centre",
      "rooms_available": 44,
      "building_picture": anitab
    },
    {
      "name": "Biological Sciences",
      "rooms_available": 6,
      "building_picture": biologicalScience
    },
    {
      "name": "Biological Science (West)",
      "rooms_available": 8,
      "building_picture": biologicalScienceWest
    },
    {
      "name": "Blockhouse",
      "rooms_available": 42,
      "building_picture": blockhouse
    },
    {
      "name": "Business School",
      "rooms_available": 18,
      "building_picture": businessSchool
    },
    {
      "name": "Civil Engineering Building",
      "rooms_available": 8,
      "building_picture": civilBuilding
    },
    {
      "name": "Colombo Building",
      "rooms_available": 5,
      "building_picture": colombo
    },
    {
      "name": "Computer Science & Eng (K17)",
      "rooms_available": 7,
      "building_picture": cseBuilding
    }
]

function BrowsePage() {
  return (
    <div>
      <div className="flex flex-wrap justify-between md:h-[45px] gap-[20px]">
        <ActionButtons actionType="Filters" Icon={FilterAltIcon} className="md:order-1 order-2" />
        <div className="flex-1 max-w-[820px] min-w-[300px]  border-[rgba(0,0,0,0.23)] h-[45px] border-[1px] rounded-[4px] flex items-center md:order-2 order-1">
          <SearchIcon sx={{ color:"rgba(0,0,0,0.54)"}} className="mx-4"/>
          <input placeholder="Search for a building..." /> 
        </div>
        <ActionButtons actionType="Sort" Icon={FilterListIcon} className="order-3" />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]  gap-[20px] mt-4">
        {buildings.map((building) => (
          <BuildingCards key={building.name} name={building.name} rooms_available={building.rooms_available} building_picture={building.building_picture} />
        ))}
      </div>
    </div>
  );
}


function BuildingCards({ name, rooms_available, building_picture }: { name: string, rooms_available: number, building_picture: string }) {
  return (
    <div>
      <div className="relative w-full sm:aspect-[82/100] sm:h-auto h-[100px] rounded-[10px] px-2 ">
        <Image src={building_picture} alt={name} fill className="rounded-[10px] object-cover" />
        <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:hidden flex text-white font-[600] text-[16px]">
          {name}
        </div>  
        <div className="absolute sm:top-2.5 top-1/2 sm:translate-y-0 -translate-y-1/2 right-2.5 bg-white px-2 py-1 rounded-[15px] h-[38px] flex items-center gap-2 text-[12px] font-[600] px-4 ">
          <CircleIcon sx={{ color: "rgb(76,175,80)", fontSize:"12px"  }} />
          <span className="sm:flex hidden">
            {rooms_available} rooms available
          </span>
          <span className="sm:hidden flex">
            {rooms_available} / {rooms_available}
          </span>
        </div>
        <div className="absolute bottom-2 w-full px-2.5 left-0 h-[54px] sm:flex hidden">
          <div className="px-2 py-1 rounded-[4px] w-full px-1 h-full bg-[#ef6d00] rounded-[10px] text-white flex items-center px-5 font-[500]">
            {name}
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionButtons({actionType, Icon, className}: {actionType: string, Icon: React.ElementType, className: string}) {
  return (
    <div className={className}>
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