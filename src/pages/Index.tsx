import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/supply-chain-hero.jpg";
import { 
  Tractor, 
  Truck, 
  Store, 
  Shield, 
  Scan 
} from "lucide-react";

const roles = [
  {
    id: "farmer",
    title: "Farmer",
    description: "Add products and track from farm",
    icon: Tractor,
    color: "from-green-500 to-emerald-600"
  },
  {
    id: "distributor", 
    title: "Distributor",
    description: "Manage transport and logistics",
    icon: Truck,
    color: "from-blue-500 to-cyan-600"
  },
  {
    id: "retailer",
    title: "Retailer", 
    description: "Track arrivals and inventory",
    icon: Store,
    color: "from-purple-500 to-violet-600"
  },
  {
    id: "service",
    title: "Service",
    description: "Quality checks and verification",
    icon: Shield,
    color: "from-red-500 to-rose-600"
  },
  {
    id: "customer",
    title: "Customer",
    description: "Scan and trace product journey",
    icon: Scan,
    color: "from-orange-500 to-amber-600"
  }
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated background overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Logo and Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-orange-400 to-amber-300 bg-clip-text text-transparent mb-4">
              AgroChain
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Blockchain-powered supply chain transparency from farm to table. 
              Track every step of your product's journey with immutable trust.
            </p>
          </motion.div>

          {/* Role Selection Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16"
          >
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 cursor-pointer group">
                    <motion.div
                      onClick={() => navigate(`/${role.id}`)}
                      className="text-center space-y-4"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="relative">
                        <motion.div
                          className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center group-hover:animate-glow-pulse"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-8 h-8 text-primary-foreground" />
                        </motion.div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {role.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {role.description}
                        </p>
                      </div>
                    </motion.div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Features highlight */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-primary">Blockchain Verified</h4>
              <p className="text-muted-foreground">Every transaction recorded on Ethereum/Polygon</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-primary">IPFS Storage</h4>
              <p className="text-muted-foreground">Certificates and documents stored decentralized</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-primary">Real-time Tracking</h4>
              <p className="text-muted-foreground">Complete transparency from source to consumer</p>
            </div>
          </motion.div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100, -20],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;