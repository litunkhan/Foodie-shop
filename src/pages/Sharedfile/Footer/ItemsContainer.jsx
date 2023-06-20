import Item from "./Item";
import { Products , Resources , Company, Support } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid bg-[#F8F7F2] grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 text-gray-600">
      <Item Links={Products } title="Foodie-Restaurent" />
      <Item Links={Resources } title="Stop By And Say, Hi!" />
      <Item Links={Company} title="Opening Hours" />
      <Item Links={Support} title="SUPPORT" />
    </div>
  );
};

export default ItemsContainer;