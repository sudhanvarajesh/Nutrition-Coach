import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, X } from "lucide-react";

export type FoodItemProps = {
  id: string;
  name: string;
  type: string;
  image: string;
  calories: number;
};

const foodItems: FoodItemProps[] = [
  { id: 'v1', name: 'Broccoli', type: 'vegetable', image: '/placeholder.svg', calories: 55 },
  { id: 'v2', name: 'Carrots', type: 'vegetable', image: '/placeholder.svg', calories: 50 },
  { id: 'v3', name: 'Spinach', type: 'vegetable', image: '/placeholder.svg', calories: 23 },
  { id: 'v4', name: 'Bell Peppers', type: 'vegetable', image: '/placeholder.svg', calories: 30 },
  { id: 'f1', name: 'Apple', type: 'fruit', image: '/placeholder.svg', calories: 95 },
  { id: 'f2', name: 'Banana', type: 'fruit', image: '/placeholder.svg', calories: 105 },
  { id: 'f3', name: 'Orange', type: 'fruit', image: '/placeholder.svg', calories: 45 },
  { id: 'g1', name: 'Brown Rice', type: 'grain', image: '/placeholder.svg', calories: 215 },
  { id: 'g2', name: 'Whole Wheat Bread', type: 'grain', image: '/placeholder.svg', calories: 69 },
  { id: 'g3', name: 'Quinoa', type: 'grain', image: '/placeholder.svg', calories: 222 },
  { id: 'p1', name: 'Chicken', type: 'protein', image: '/placeholder.svg', calories: 165 },
  { id: 'p2', name: 'Tofu', type: 'protein', image: '/placeholder.svg', calories: 76 },
  { id: 'p3', name: 'Black Beans', type: 'protein', image: '/placeholder.svg', calories: 132 },
  { id: 'd1', name: 'Milk', type: 'dairy', image: '/placeholder.svg', calories: 103 },
  { id: 'd2', name: 'Yogurt', type: 'dairy', image: '/placeholder.svg', calories: 154 },
  { id: 'd3', name: 'Cheese', type: 'dairy', image: '/placeholder.svg', calories: 113 },
];

const BuildYourPlate = () => {
  const [selectedItems, setSelectedItems] = useState<FoodItemProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleItem = (item: FoodItemProps) => {
    setSelectedItems(prev => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) return prev.filter(i => i.id !== item.id);
      return [...prev, item];
    });
  };

  const clearPlate = () => setSelectedItems([]);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'vegetable', name: 'Vegetables' },
    { id: 'fruit', name: 'Fruits' },
    { id: 'grain', name: 'Grains' },
    { id: 'protein', name: 'Proteins' },
    { id: 'dairy', name: 'Dairy' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? foodItems
    : foodItems.filter(item => item.type === selectedCategory);

  // Calculate totals by group
  const totals = selectedItems.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + 1;
    acc.calories = (acc.calories || 0) + item.calories;
    return acc;
  }, {} as Record<string, number>);

  // Ideal counts per meal
  const ideal = { vegetable: 2, fruit: 1, grain: 1, protein: 1, dairy: 1 };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold my-4">Build Your Plate</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map(cat => (
          <Button
            key={cat.id}
            variant={selectedCategory === cat.id ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(cat.id)}
          >{cat.name}</Button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {filteredItems.map(item => (
          <label key={item.id} className="flex items-center space-x-2">
            <Checkbox
              checked={!!selectedItems.find(i => i.id === item.id)}
              onCheckedChange={() => toggleItem(item)}
            />
            <span>{item.name}</span>
          </label>
        ))}
      </div>

      <Card className="mb-6">
        <CardHeader><CardTitle>Nutrient Tracker</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {(['vegetable','fruit','grain','protein','dairy'] as const).map(group => (
              <li key={group} className="flex items-center space-x-2">
                {totals[group] >= ideal[group]
                  ? <Check className="text-green-600" />
                  : <X className="text-red-600" />}
                <span className="capitalize">{group}:</span>
                <span>{totals[group] || 0} / {ideal[group]}</span>
              </li>
            ))}
            <li className="mt-2">
              Total Calories: {totals.calories || 0}
            </li>
          </ul>
          <Button variant="outline" className="mt-4" onClick={clearPlate}>Clear Selection</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BuildYourPlate;
