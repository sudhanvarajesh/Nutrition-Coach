
import { useState } from "react";
import { useDrag } from "react-dnd";
import { cn } from "@/lib/utils";

export interface FoodItemProps {
  id: string;
  name: string;
  type: 'vegetable' | 'fruit' | 'grain' | 'protein' | 'dairy';
  image: string;
  calories: number;
}

const FoodItem = ({ id, name, type, image, calories }: FoodItemProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'food',
    item: { id, name, type, image, calories },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const colorMap = {
    'vegetable': 'bg-myplate-vegetable',
    'fruit': 'bg-myplate-fruit',
    'grain': 'bg-myplate-grain',
    'protein': 'bg-myplate-protein',
    'dairy': 'bg-myplate-dairy',
  };

  return (
    <div
      ref={drag}
      className={cn(
        "p-2 rounded-lg cursor-grab flex flex-col items-center text-center transition-all transform",
        colorMap[type],
        isDragging ? "opacity-50 scale-95" : "opacity-100 hover:scale-105"
      )}
      style={{ width: '80px' }}
    >
      <img 
        src={image} 
        alt={name} 
        className="w-12 h-12 object-contain mb-1" 
      />
      <span className="text-xs text-white font-medium line-clamp-1">
        {name}
      </span>
    </div>
  );
};

export default FoodItem;
