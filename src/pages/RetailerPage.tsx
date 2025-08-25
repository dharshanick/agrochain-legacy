import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Store, Package, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const RetailerPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    productId: "",
    arrivalDate: "",
    receivedQuantity: "",
    qualityCheck: "",
    storageLocation: "",
    shelfLife: "",
    sellingPrice: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Product arrival confirmed on blockchain!", {
      description: "Inventory updated successfully"
    });
    setFormData({
      productId: "",
      arrivalDate: "",
      receivedQuantity: "",
      qualityCheck: "",
      storageLocation: "",
      shelfLife: "",
      sellingPrice: "",
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
            <Store className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Retailer Dashboard</h1>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Arrival Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Package className="w-5 h-5 text-primary" />
                  <span>Record Product Arrival</span>
                </CardTitle>
                <CardDescription>
                  Update inventory and track product quality on blockchain
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
                      <Label htmlFor="arrivalDate">Arrival Date</Label>
                      <Input
                        id="arrivalDate"
                        type="datetime-local"
                        value={formData.arrivalDate}
                        onChange={(e) => setFormData({...formData, arrivalDate: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="receivedQuantity">Received Quantity (kg)</Label>
                      <Input
                        id="receivedQuantity"
                        type="number"
                        value={formData.receivedQuantity}
                        onChange={(e) => setFormData({...formData, receivedQuantity: e.target.value})}
                        placeholder="95"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="qualityCheck">Quality Assessment</Label>
                    <Select
                      value={formData.qualityCheck}
                      onValueChange={(value) => setFormData({...formData, qualityCheck: value})}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select quality status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">Excellent - Premium grade</SelectItem>
                        <SelectItem value="good">Good - Standard quality</SelectItem>
                        <SelectItem value="fair">Fair - Minor defects</SelectItem>
                        <SelectItem value="poor">Poor - Requires discount</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="storageLocation">Storage Location</Label>
                    <Select
                      value={formData.storageLocation}
                      onValueChange={(value) => setFormData({...formData, storageLocation: value})}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select storage area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="produce-section">Produce Section</SelectItem>
                        <SelectItem value="cold-storage">Cold Storage</SelectItem>
                        <SelectItem value="dry-goods">Dry Goods</SelectItem>
                        <SelectItem value="freezer">Freezer Section</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="shelfLife">Remaining Shelf Life (days)</Label>
                      <Input
                        id="shelfLife"
                        type="number"
                        value={formData.shelfLife}
                        onChange={(e) => setFormData({...formData, shelfLife: e.target.value})}
                        placeholder="7"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sellingPrice">Selling Price ($/kg)</Label>
                      <Input
                        id="sellingPrice"
                        type="number"
                        step="0.01"
                        value={formData.sellingPrice}
                        onChange={(e) => setFormData({...formData, sellingPrice: e.target.value})}
                        placeholder="4.99"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      placeholder="Storage conditions, special handling..."
                      rows={3}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gradient-primary hover:opacity-90 transition-opacity"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Confirm Arrival
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Inventory & Alerts */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Current Inventory</CardTitle>
                <CardDescription>Products on shelf</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Organic Tomatoes", quantity: "23 kg", quality: "excellent", expires: "3 days" },
                    { name: "Fresh Lettuce", quantity: "15 kg", quality: "good", expires: "2 days" },
                    { name: "Premium Carrots", quantity: "31 kg", quality: "excellent", expires: "5 days" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="p-4 bg-muted/20 rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-foreground">{item.name}</h4>
                        <div className={`px-2 py-1 rounded text-xs ${
                          item.quality === "excellent" 
                            ? "bg-success/20 text-success" 
                            : "bg-primary/20 text-primary"
                        }`}>
                          {item.quality}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{item.quantity}</span>
                        <span className={`${
                          parseInt(item.expires) <= 2 
                            ? "text-destructive" 
                            : "text-muted-foreground"
                        }`}>
                          Expires in {item.expires}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  <span>Alerts & Notifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 text-destructive" />
                      <span className="text-sm font-medium text-destructive">Expiry Alert</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Fresh Lettuce expires in 2 days
                    </p>
                  </div>
                  <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Package className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">New Shipment</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Expected delivery in 3 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Store Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary">156</div>
                    <div className="text-sm text-muted-foreground">Products Tracked</div>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground">Quality Score</div>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary">2.1%</div>
                    <div className="text-sm text-muted-foreground">Waste Reduction</div>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary">$12.4k</div>
                    <div className="text-sm text-muted-foreground">Monthly Revenue</div>
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

export default RetailerPage;