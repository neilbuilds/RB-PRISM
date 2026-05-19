import React from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Card = React.forwardRef(({ className = "", ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-white text-slate-950 shadow-sm", className)} {...props} />
));
Card.displayName = "Card";

const CardContent = React.forwardRef(({ className = "", ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props} />
));
CardContent.displayName = "CardContent";

export { Card, CardContent };
