import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Truck, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const DistributorPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    productId: "",
    truckId: "",
    driverName: "",
    pickupLocation: "",
    warehouse: "",
    deliveryDate: "",
    temperature: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Transport details updated on blockchain!", {
      description: "Product tracking updated successfully"
    });
    setFormData({
      productId: "",
      truckId: "",
      driverName: "",
      pickupLocation: "",
      warehouse: "",
      deliveryDate: "",
      temperature: "",
      notes: ""
    });
  };

  return (
    <div className="min-h-screen gradient-dark">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center space-x-2">
            <Truck className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Distributor Dashboard</h1>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Transport Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Truck className="w-5 h-5 text-primary" />
                  <span>Update Transport Details</span>
                </CardTitle>
                <CardDescription>
                  Record logistics and delivery information on blockchain
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="productId">Product ID</Label>
                    <Input
                      id="productId"
                      value={formData.productId}
                      onChange={(e) => setFormData({...formData, productId: e.target.value})}
                      placeholder="0x1234...abcd"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="truckId">Truck ID</Label>
                      <Input
                        id="truckId"
                        value={formData.truckId}
                        onChange={(e) => setFormData({...formData, truckId: e.target.value})}
                        placeholder="TRK-001"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="driverName">Driver Name</Label>
                      <Input
                        id="driverName"
                        value={formData.driverName}
                        onChange={(e) => setFormData({...formData, driverName: e.target.value})}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pickupLocation">Pickup Location</Label>
                    <Input
                      id="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={(e) => setFormData({...formData, pickupLocation: e.target.value})}
                      placeholder="Farm Address"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="warehouse">Destination Warehouse</Label>
                    <Select
                      value={formData.warehouse}
                      onValueChange={(value) => setFormData({...formData, warehouse: value})}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select warehouse" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="warehouse-1">Central Warehouse A</SelectItem>
                        <SelectItem value="warehouse-2">Distribution Hub B</SelectItem>
                        <SelectItem value="warehouse-3">Regional Center C</SelectItem>
                        <SelectItem value="warehouse-4">Cold Storage D</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="deliveryDate">Expected Delivery</Label>
                      <Input
                        id="deliveryDate"
                        type="datetime-local"
                        value={formData.deliveryDate}
                        onChange={(e) => setFormData({...formData, deliveryDate: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="temperature">Transport Temp (°C)</Label>
                      <Input
                        id="temperature"
                        type="number"
                        value={formData.temperature}
                        onChange={(e) => setFormData({...formData, temperature: e.target.value})}
                        placeholder="4"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Transport Notes</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      placeholder="Special handling instructions..."
                      rows={3}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gradient-primary hover:opacity-90 transition-opacity"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Update Blockchain
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Active Shipments & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Active Shipments</CardTitle>
                <CardDescription>Currently in transit</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: "SH001", product: "Organic Tomatoes", route: "Farm A → Hub B", eta: "2h 30m" },
                    { id: "SH002", product: "Fresh Lettuce", route: "Farm C → Store D", eta: "4h 15m" },
                    { id: "SH003", product: "Premium Carrots", route: "Hub E → Store F", eta: "1h 45m" }
                  ].map((shipment, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="p-4 bg-muted/20 rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-foreground">{shipment.id}</h4>
                        <div className="flex items-center text-primary text-sm">
                          <Clock className="w-3 h-3 mr-1" />
                          {shipment.eta}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{shipment.product}</p>
                      <p className="text-xs text-muted-foreground">{shipment.route}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Transport Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary">23</div>
                    <div className="text-sm text-muted-foreground">Active Routes</div>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary">96%</div>
                    <div className="text-sm text-muted-foreground">On-Time Delivery</div>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary">5.2°C</div>
                    <div className="text-sm text-muted-foreground">Avg Temperature</div>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary">847</div>
                    <div className="text-sm text-muted-foreground">Total Deliveries</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Fleet Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Available Trucks:</span>
                    <span className="text-success font-medium">12/15</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">In Transit:</span>
                    <span className="text-primary font-medium">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Maintenance:</span>
                    <span className="text-muted-foreground">0</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DistributorPage;