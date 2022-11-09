import { useState } from "react";
import Center from "./Center";

const TabBar = ({
  tabs,
  onSelectTab,
}: {
  tabs: String[];
  onSelectTab: (selectedTabName: number) => void;
}) => {
  const [selected, setSelected] = useState(tabs.at(0));

  return (
    <div className="flex absolute bottom-0">
      {tabs.map((tabName) => (
        <TabItem
          selected={tabName === selected}
          name={tabName}
          onClickTab={(seletedTab) => {
            onSelectTab(tabs.indexOf(seletedTab));
            setSelected(seletedTab);
          }}
        />
      ))}
    </div>
  );
};

const TabItem = ({
  selected,
  name,
  onClickTab,
}: {
  selected: boolean;
  name: String;
  onClickTab: (selectedTabName: String) => void;
}) => {
  return (
    <Center
      onClick={() => onClickTab(name)}
      className={`py-1 px-6 rounded-t-2xl text-center text-sm duration-200 ${
        selected ? "bg-amber-400 scale-105 font-bold" : "bg-[#F2EBE1]"
      }`}
    >
      {name}
    </Center>
  );
};

export default TabBar;