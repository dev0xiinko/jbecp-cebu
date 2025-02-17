"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
    {
        id: 1,
        name: "Dan",
        designation: "Bayot",
        image:
        "/TRADE.png"  
    },
    {
        id: 2,
        name: "Adrian",
        designation: "Gwapo",
        image:
        "/TRADE.png"  
    },
    {
        id: 3,
        name: "Dawm",
        designation: "Pautog",
        image:
        "/TRADE.png"  
    },
    {
        id: 4,
        name: "Raynon",
        designation: "Baby Dog",
        image:
        "/TRADE.png"  
    },
    {
        id: 5,
        name: "Welyam",
        esignation: "Nigga",
        image:
        "/TRADE.png"  
    },
 
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full p-6">
      <AnimatedTooltip items={people} />
    </div>
  );
}
