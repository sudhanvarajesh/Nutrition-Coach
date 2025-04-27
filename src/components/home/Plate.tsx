
import { useDrop } from "react-dnd";
import { useDrag } from "react-dnd";
import { FoodItemProps } from "./FoodItem";
import { useToast } from "@/hooks/use-toast";

interface PlateProps {
  onDrop: (item: FoodItemProps) => void;
  plateItems: FoodItemProps[];
  onRemove: (index: number) => void;
}

interface DraggableFoodProps {
  item: FoodItemProps;
  index: number;
  onRemove: (index: number) => void;
}

const DraggableFood = ({ item, index, onRemove }: DraggableFoodProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'plateItem',
    item: { index },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (!dropResult && item) {
        onRemove(item.index);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`transition-all ${isDragging ? 'opacity-50' : 'opacity-100'}`}
    >
      <div className="relative group">
        <img 
          src={item.image}
          alt={item.name}
          className="w-12 h-12 object-contain cursor-grab" 
        />
        <div className="absolute -bottom-1 left-0 right-0 bg-black bg-opacity-70 text-white text-[10px] px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity text-center truncate">
          {item.name}
        </div>
      </div>
    </div>
  );
};

const Plate = ({ onDrop, plateItems, onRemove }: PlateProps) => {
  const { toast } = useToast();
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ['food', 'plateItem'],
    drop: (item: FoodItemProps, monitor) => {
      if (monitor.getItemType() === 'food') {
        onDrop(item);
        toast({
          title: "Added to Plate",
          description: `Added ${item.name} to your plate`,
          variant: "default",
        });
      }
      return undefined;
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div 
      ref={drop}
      className={`relative w-72 h-72 rounded-full border-4 ${
        isOver ? "border-blue-500" : "border-gray-300"
      } bg-white flex flex-wrap items-center justify-center gap-2 p-6 transition-all`}
    >
      {plateItems.length === 0 ? (
        <p className="text-gray-400 text-center px-4">
          Drag food items here to build your plate
        </p>
      ) : (
        <div className="grid grid-cols-4 gap-2 w-full h-full place-items-center">
          {plateItems.map((item, index) => (
            <DraggableFood
              key={`${item.id}-${index}`}
              item={item}
              index={index}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}
      
      {plateItems.length > 0 && (
        <div className="absolute -bottom-10 left-0 right-0 text-center text-sm text-gray-500">
          {plateItems.length} {plateItems.length === 1 ? 'item' : 'items'} on your plate
        </div>
      )}
    </div>
  );
};

export default Plate;
