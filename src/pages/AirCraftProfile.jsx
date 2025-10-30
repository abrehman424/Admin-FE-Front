import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdFilterList } from "react-icons/md";

const aircraftsData = [
  {
    id: 1,
    name: "Cessna 600",
    image:
      "https://images.pexels.com/photos/358220/pexels-photo-358220.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "In Service",
  },
  {
    id: 2,
    name: "Piperx 100",
    image:
      "https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "Not In Service",
  },
  {
    id: 3,
    name: "Cessna 600",
    image:
      "https://images.pexels.com/photos/46148/aircraft-landing-gear-tires-airplane-46148.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "Not In Service",
  },
  {
    id: 4,
    name: "Piperx 100",
    image:
      "https://images.pexels.com/photos/163771/airport-airplane-landing-jet-163771.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "Not In Service",
  },
  {
    id: 5,
    name: "Cessna 600",
    image:
      "https://images.pexels.com/photos/358220/pexels-photo-358220.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "Not In Service",
  },
  {
    id: 6,
    name: "Piperx 100",
    image:
      "https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "Not In Service",
  },
  {
    id: 7,
    name: "Piperx 100",
    image:
      "https://images.pexels.com/photos/163771/airport-airplane-landing-jet-163771.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "Not In Service",
  },
  {
    id: 8,
    name: "Cessna 600",
    image:
      "https://images.pexels.com/photos/358220/pexels-photo-358220.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "In Service",
  },
];

const AirCraftProfile = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAircrafts = aircraftsData.filter((aircraft) =>
    aircraft.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="md:mt-5 mx-auto max-w-7xl px-4">
      <div className="bg-white shadow-xs rounded-lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-200 p-4 gap-4">
          <h2 className="text-xl font-semibold text-gray-800">Aircrafts</h2>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center border border-gray-200 bg-white px-3 py-2 rounded-lg shadow-sm grow sm:grow-0 sm:w-[250px]">
              <FiSearch className="text-gray-400 mr-2" size={16} />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent w-full"
              />
            </div>

            <button className="flex items-center gap-2 border border-gray-200 bg-white px-3 py-2 rounded-lg shadow-sm text-sm text-gray-700">
              <MdFilterList className="w-5 h-5" />
              <span className="whitespace-nowrap">Sort by</span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-6">
        {filteredAircrafts.map((aircraft) => (
          <div
            key={aircraft.id}
            className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <img
              src={aircraft.image}
              alt={aircraft.name}
              className="w-full h-44 object-cover"
            />
            <div className="p-3 flex items-center justify-between">
              <h3 className="text-base fw5 text-[#3D3D3D]">
                {aircraft.name}
              </h3>
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded ${
                  aircraft.status === "In Service"
                    ? "bg-[#FFF1DA] text-[#C47E0A]"
                    : "bg-[#FFE3E3] text-[#961616]"
                }`}
              >
                {aircraft.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirCraftProfile;
