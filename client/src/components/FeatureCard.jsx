import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "./ui/card";
  
  const FeatureCard = ({ icon, title, description }) => {
    return (
      <Card className="w-full max-w-md mx-auto transition-transform transform hover:shadow-lg hover:shadow-accent/50 hover:scale-105">
        <CardHeader className="flex items-center space-x-4">
          <div className="text-primary">{icon}</div>
          <CardTitle className="text-2xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="ml-6 text-lg text-muted-foreground align-center">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    );
  };
  
  export default FeatureCard;
  