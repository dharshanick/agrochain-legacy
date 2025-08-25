import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Shield, FileCheck, Award, Search } from "lucide-react";
import { toast } from "sonner";

const ServicePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    productId: "",
    batchNumber: "",
    inspectionDate: "",
    qualityGrade: "",
    certificationLevel: "",
    testResults: "",
    inspector: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quality certificate issued on blockchain!", {
      description: "IPFS hash: QmX1...abc stored successfully"
    });
    setFormData({
      productId: "",
      batchNumber: "",
      inspectionDate: "",
      qualityGrade: "",
      certificationLevel: "",
      testResults: "",
      inspector: "",
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
            <Shield className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Quality Service Dashboard</h1>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quality Check Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileCheck className="w-5 h-5 text-primary" />
                  <span>Quality Inspection Report</span>
                </CardTitle>
                <CardDescription>
                  Issue quality certificates and store on IPFS + blockchain
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
                      <Label htmlFor="batchNumber">Batch Number</Label>
                      <Input
                        id="batchNumber"
                        value={formData.batchNumber}
                        onChange={(e) => setFormData({...formData, batchNumber: e.target.value})}
                        placeholder="BATCH-2024-001"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inspectionDate">Inspection Date</Label>
                      <Input
                        id="inspectionDate"
                        type="datetime-local"
                        value={formData.inspectionDate}
                        onChange={(e) => setFormData({...formData, inspectionDate: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="qualityGrade">Quality Grade</Label>
                    <Select
                      value={formData.qualityGrade}
                      onValueChange={(value) => setFormData({...formData, qualityGrade: value})}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select quality grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="premium">Premium Grade A+</SelectItem>
                        <SelectItem value="excellent">Excellent Grade A</SelectItem>
                        <SelectItem value="good">Good Grade B</SelectItem>
                        <SelectItem value="standard">Standard Grade C</SelectItem>
                        <SelectItem value="basic">Basic Grade D</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="certificationLevel">Certification Level</Label>
                    <Select
                      value={formData.certificationLevel}
                      onValueChange={(value) => setFormData({...formData, certificationLevel: value})}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select certification" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="organic">USDA Organic Certified</SelectItem>
                        <SelectItem value="gmp">Good Manufacturing Practice</SelectItem>
                        <SelectItem value="haccp">HACCP Certified</SelectItem>
                        <SelectItem value="iso">ISO 22000 Certified</SelectItem>
                        <SelectItem value="fair-trade">Fair Trade Certified</SelectItem>
                        <SelectItem value="none">No Certification</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="testResults">Test Results Summary</Label>
                    <Textarea
                      id="testResults"
                      value={formData.testResults}
                      onChange={(e) => setFormData({...formData, testResults: e.target.value})}
                      placeholder="Microbiological tests: PASS, Pesticide residue: <0.01mg/kg, Heavy metals: PASS..."
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inspector">Inspector Name & ID</Label>
                    <Input
                      id="inspector"
                      value={formData.inspector}
                      onChange={(e) => setFormData({...formData, inspector: e.target.value})}
                      placeholder="Dr. Jane Smith - ID: QI-001"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      placeholder="Special observations, recommendations..."
                      rows={2}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gradient-primary hover:opacity-90 transition-opacity"
                  >
                    <Award className="w-4 h-4 mr-2" />
                    Issue Certificate
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Inspection History & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Recent Inspections</CardTitle>
                <CardDescription>Latest quality assessments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { batch: "BATCH-001", product: "Organic Tomatoes", grade: "Premium A+", date: "Jan 15" },
                    { batch: "BATCH-002", product: "Fresh Lettuce", grade: "Excellent A", date: "Jan 14" },
                    { batch: "BATCH-003", product: "Premium Carrots", grade: "Premium A+", date: "Jan 13" }
                  ].map((inspection, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="p-4 bg-muted/20 rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-foreground">{inspection.batch}</h4>
                        <div className={`px-2 py-1 rounded text-xs font-medium ${
                          inspection.grade.includes("Premium") 
                            ? "bg-primary/20 text-primary" 
                            : "bg-success/20 text-success"
                        }`}>
                          {inspection.grade}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{inspection.product}</span>
                        <span className="text-muted-foreground">{inspection.date}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Search className="w-5 h-5 text-primary" />
                  <span>Certificate Lookup</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input
                    placeholder="Enter product ID or batch number..."
                    className="w-full"
                  />
                  <Button variant="outline" className="w-full">
                    Search Certificates
                  </Button>
                  <div className="text-sm text-muted-foreground text-center">
                    Verify authenticity using blockchain records
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Inspection Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary">342</div>
                    <div className="text-sm text-muted-foreground">Total Inspections</div>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary">97.2%</div>
                    <div className="text-sm text-muted-foreground">Pass Rate</div>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary">156</div>
                    <div className="text-sm text-muted-foreground">Certificates Issued</div>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary">24h</div>
                    <div className="text-sm text-muted-foreground">Avg Processing</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>IPFS Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Files Stored:</span>
                    <span className="text-foreground">342 certificates</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Storage Used:</span>
                    <span className="text-foreground">2.4 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Network Status:</span>
                    <span className="text-success font-medium">✓ Connected</span>
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

export default ServicePage;