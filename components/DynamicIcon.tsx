"use client";

import * as Icons from "lucide-react";

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function DynamicIcon({ name, className, size = 24 }: DynamicIconProps) {
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string; size?: number }>>)[name];
  if (!IconComponent) {
    // Fallback icon if the iconName does not match any Lucide icon
    const Fallback = Icons.Sparkles;
    return <Fallback className={className} size={size} />;
  }
  return <IconComponent className={className} size={size} />;
}
