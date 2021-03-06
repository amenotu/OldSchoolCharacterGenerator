import React, { useContext } from "react";
import styled from "styled-components";
import AppContext from "../../../AppContext";
import { Items } from "../../../characterData/items";
import InventoryItemImpl from "./inventoryItemComponents/inventoryItem";

interface Props {
  className?: string;
  inventory: Items;
}

interface ImplProps extends Props {}

const InventoryImpl: React.SFC<ImplProps> = ({ className, inventory }) => {
  const { savedCharacterData } = useContext(AppContext);

  return (
    <div className={className}>
      {savedCharacterData && <InventoryItemImpl addNewItem />}
      <Divider />
      {inventory &&
        Object.keys(inventory)
          .sort((itemA, itemB) => {
            if (inventory[itemA].description < inventory[itemB].description) {
              return -1;
            }
            if (inventory[itemA].description > inventory[itemB].description) {
              return 1;
            }
            // Descriptions equal
            return 0;
          })
          .map(inventoryItem => (
            <div key={inventoryItem}>
              <InventoryItemImpl
                addNewItem={false}
                inventoryItemKey={inventoryItem}
                inventoryItem={inventory[inventoryItem]}
              />
              <Divider />
            </div>
          ))}
    </div>
  );
};

const Divider = styled.div`
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #e9ecef;
`;

export default InventoryImpl;
