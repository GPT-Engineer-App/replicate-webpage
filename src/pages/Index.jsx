import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

const Index = () => {
  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Account Overview</CardTitle>
          <p>5072401</p>
          <p>Created: Apr 15, 2024 2:36 PM</p>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center items-center h-32">
            <AlertTriangle className="h-8 w-8 text-yellow-500" />
            <p className="ml-2">No Data Available</p>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-between p-4 bg-gray-100 rounded-lg">
        <div>
          <p>Account balance</p>
          <p>$23,349.39</p>
        </div>
        <div>
          <p>Average win</p>
          <p className="text-green-500">$35.66</p>
        </div>
        <div>
          <p>Average loss</p>
          <p className="text-red-500">$138.82</p>
        </div>
        <div>
          <p>Win ratio</p>
          <p>62.5%</p>
        </div>
      </div>
    </div>
  );
};

export default Index;