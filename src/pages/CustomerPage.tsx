import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Scan, QrCode, MapPin, Clock, Shield, Truck, Store, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const CustomerPage = () => {
  const navigate = useNavigate();
  const [qrCode, setQrCode] = useState("");
  const [showJourney, setShowJourney] = useState(false);

  const handleScan = () => {
    if (!qrCode.trim()) {
      toast.error("Please enter a QR code or product ID");
      return;
    }
    setShowJourney(true);
    toast.success("Product found! Displaying journey...");
  };

  const journeySteps = [
    {
      id: 1,
      title: "Farm Origin",
      description: "Organic Tomatoes harvested from Green Valley Farm",
      icon: MapPin,
      date: "2024-01-10 08:30 AM",
      location: "Green Valley Farm, California",
      status: "completed",
      details: {
        farmer: "John Doe Farm",
        weight: "100 kg",
        quality: "Premium Grade A+",
        certifications: ["USDA Organic", "Non-GMO"]
      }
    },
    {
      id: 2,
      title: "Quality Inspection",
      description: "Passed all quality and safety tests",
      icon: Shield,
      date: "2024-01-10 02:15 PM",
      location: "AgriCert Lab, California",
      status: "completed",
      details: {
        inspector: "Dr. Jane Smith - QI-001",
        grade: "Premium A+",
        tests: "Pesticide residue: PASS, Heavy metals: PASS",
        certificate: "QmX1...abc (IPFS)"
      }
    },
    {
      id: 3,
      title: "Transportation",
      description: "Cold chain transport to distribution center",
      icon: Truck,
      date: "2024-01-11 06:00 AM",
      location: "En route to Central Hub",
      status: "completed",
      details: {
        driver: "Mike Johnson",
        truck: "TRK-001",
        temperature: "4°C maintained",
        duration: "6 hours"
      }
    },
    {
      id: 4,
      title: "Retail Store",
      description: "Arrived at FreshMart Downtown",
      icon: Store,
      date: "2024-01-11 12:30 PM",
      location: "FreshMart, Downtown",
      status: "completed",
      details: {
        receiver: "Sarah Williams",
        shelf: "Produce Section A3",
        price: "$4.99/kg",
        remaining: "7 days shelf life"
      }
    },
    {
      id: 5,
      title: "Purchase",
      description: "Ready for customer purchase",
      icon: CheckCircle,
      date: "Available now",
      location: "FreshMart, Downtown",
      status: "current",
      details: {
        availability: "In stock",
        freshness: "Peak quality",
        expires: "2024-01-18",
        blockchain: "Verified on Polygon"
      }
    }
  ];

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
            <Scan className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Customer Tracker</h1>
          </div>
        </motion.div>

        {!showJourney ? (
          /* QR Scanner Section */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader className="text-center">
                <motion.div
                  className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary to-orange-400 rounded-full flex items-center justify-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <QrCode className="w-12 h-12 text-primary-foreground" />
                </motion.div>
                <CardTitle className="text-3xl bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                  Scan Product QR Code
                </CardTitle>
                <CardDescription className="text-lg">
                  Discover the complete journey of your food from farm to table
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <Input
                      placeholder="Enter QR code or Product ID (e.g., 0x1234...abcd)"
                      value={qrCode}
                      onChange={(e) => setQrCode(e.target.value)}
                      className="text-center text-lg py-6"
                    />
                  </div>
                  <Button
                    onClick={handleScan}
                    className="w-full gradient-primary hover:opacity-90 transition-opacity text-lg py-6"
                    disabled={!qrCode.trim()}
                  >
                    <Scan className="w-5 h-5 mr-2" />
                    Track Product Journey
                  </Button>
                </div>

                <div className="text-center space-y-4">
                  <div className="text-sm text-muted-foreground">
                    Or try with sample product ID
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setQrCode("0x1234567890abcdef");
                      setShowJourney(true);
                      toast.success("Sample product loaded!");
                    }}
                    className="text-primary border-primary/50 hover:bg-primary/10"
                  >
                    View Sample Journey
                  </Button>
                </div>

                <div className="bg-muted/20 rounded-lg p-6 space-y-3">
                  <h4 className="font-semibold text-primary">Why Track Your Food?</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Verify organic and quality certifications</li>
                    <li>• Ensure proper cold-chain handling</li>
                    <li>• Support transparent farming practices</li>
                    <li>• Make informed purchasing decisions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          /* Journey Timeline */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Product Header */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Organic Tomatoes</h2>
                    <p className="text-muted-foreground">Product ID: 0x1234...abcd</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Blockchain Status</div>
                    <div className="text-success font-medium">✓ Verified</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Journey Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
              
              {journeySteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className={`relative flex items-start space-x-6 pb-8 ${
                      index === journeySteps.length - 1 ? 'pb-0' : ''
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center ${
                      step.status === 'completed' 
                        ? 'bg-success text-success-foreground' 
                        : step.status === 'current'
                        ? 'bg-primary text-primary-foreground animate-glow-pulse'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon className="w-8 h-8" />
                    </div>

                    {/* Content */}
                    <Card className="flex-1 bg-card/50 backdrop-blur-sm border-border/50">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold text-foreground">
                            {step.title}
                          </h3>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                            step.status === 'completed' 
                              ? 'bg-success/20 text-success' 
                              : step.status === 'current'
                              ? 'bg-primary/20 text-primary'
                              : 'bg-muted/20 text-muted-foreground'
                          }`}>
                            {step.status === 'completed' ? 'Completed' : 
                             step.status === 'current' ? 'Current' : 'Pending'}
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-primary" />
                            <span className="text-sm text-muted-foreground">{step.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="text-sm text-muted-foreground">{step.location}</span>
                          </div>
                        </div>

                        <div className="bg-muted/20 rounded-lg p-4">
                          <h4 className="font-medium text-foreground mb-2">Details</h4>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            {Object.entries(step.details).map(([key, value]) => (
                              <div key={key} className="flex justify-between">
                                <span className="text-muted-foreground capitalize">
                                  {key.replace(/([A-Z])/g, ' $1')}:
                                </span>
                                <span className="text-foreground">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button
                onClick={() => setShowJourney(false)}
                variant="outline"
                className="flex-1"
              >
                <QrCode className="w-4 h-4 mr-2" />
                Scan Another Product
              </Button>
              <Button
                onClick={() => toast.success("Journey shared successfully!")}
                className="flex-1 gradient-primary hover:opacity-90 transition-opacity"
              >
                Share Journey
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CustomerPage;