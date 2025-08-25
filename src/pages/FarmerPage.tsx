import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Tractor, Plus, Package } from "lucide-react";
import { toast } from "sonner";

const FarmerPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    packingDate: "",
    expiryDate: "",
    quantity: "",
    location: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate blockchain transaction
    toast.success("Product added to blockchain successfully!", {
      description: "Transaction hash: 0x1234...abcd"
    });
    setFormData({
      productName: "",
      category: "",
      packingDate: "",
      expiryDate: "",
      quantity: "",
      location: "",
      description: ""
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
            <Tractor className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Farmer Dashboard</h1>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Add Product Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plus className="w-5 h-5 text-primary" />
                  <span>Add New Product</span>
                </CardTitle>
                <CardDescription>
                  Register your agricultural products on the blockchain
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="productName">Product Name</Label>
                    <Input
                      id="productName"
                      value={formData.productName}
                      onChange={(e) => setFormData({...formData, productName: e.target.value})}
                      placeholder="e.g., Organic Tomatoes"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({...formData, category: value})}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vegetables">Vegetables</SelectItem>
                        <SelectItem value="fruits">Fruits</SelectItem>
                        <SelectItem value="grains">Grains</SelectItem>
                        <SelectItem value="meat">Meat</SelectItem>
                        <SelectItem value="dairy">Dairy</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="packingDate">Packing Date</Label>
                      <Input
                        id="packingDate"
                        type="date"
                        value={formData.packingDate}
                        onChange={(e) => setFormData({...formData, packingDate: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        type="date"
                        value={formData.expiryDate}
                        onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantity (kg)</Label>
                      <Input
                        id="quantity"
                        type="number"
                        value={formData.quantity}
                        onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                        placeholder="100"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Farm Location</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        placeholder="City, State"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Additional details about the product..."
                      rows={3}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gradient-primary hover:opacity-90 transition-opacity"
                  >
                    <Package className="w-4 h-4 mr-2" />
                    Add to Blockchain
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Products */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Recent Products</CardTitle>
                <CardDescription>Your latest blockchain entries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Organic Tomatoes", status: "Confirmed", date: "2024-01-15" },
                    { name: "Fresh Lettuce", status: "Pending", date: "2024-01-14" },
                    { name: "Premium Carrots", status: "Confirmed", date: "2024-01-13" }
                  ].map((product, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-muted/20 rounded-lg"
                    >
                      <div>
                        <h4 className="font-medium text-foreground">{product.name}</h4>
                        <p className="text-sm text-muted-foreground">{product.date}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        product.status === "Confirmed" 
                          ? "bg-success/20 text-success" 
                          : "bg-primary/20 text-primary"
                      }`}>
                        {product.status}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Blockchain Info</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Network:</span>
                    <span className="text-foreground">Polygon Mainnet</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Gas Price:</span>
                    <span className="text-foreground">2.1 Gwei</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Your Products:</span>
                    <span className="text-primary font-medium">12 Active</span>
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

export default FarmerPage;