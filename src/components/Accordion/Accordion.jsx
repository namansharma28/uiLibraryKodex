import { ChevronDown } from "lucide-react"
import { cn } from "../../utils/cn"
import { createContext } from "react";

const AccordionContext = createContext(null);
const AccordionItemContext = createContext(null);

export const Accordion = ({ children, className }) => {
    const value = {

    }

    return (
        <AccordionContext.Provider value={value}>
            <div className={cn("max-w-lg w-full divide-y divide-zinc-300 min-h-96", className)}>
                {children}
            </div>
        </AccordionContext.Provider>
    )
}

export const AccordionItem = ({ children, className }) => {
    return (
        <div className={cn(className)}>{children}</div>
    )
}

export const AccordionTitle = ({ children, className }) => {
    return (
        <button
            className={cn("flex items-center justify-between w-full py-1.5 cursor-pointer font-medium hover:underline decoration-1", className)}
        >
            {children}
            <span>
                <ChevronDown className={cn("w-5 h-5 text-zinc-500")} />
            </span>
        </button>
    )
}

export const AccordionContent = ({ children, className }) => {
    return (
        <div
            className={cn(className)}
        >
            <div>
                <div className="pb-1.5">{children}</div>
            </div>
        </div>
    )
}

