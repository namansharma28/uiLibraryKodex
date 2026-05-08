import { ChevronDown } from "lucide-react"
import { cn } from "../../utils/cn"
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const AccordionContext = createContext(null);
const AccordionItemContext = createContext(null);

export const Accordion = ({ children, className }) => {
    const [selected, setSelected] = useState(null);

    const toggle = (id) => {
        setSelected((prev) => (prev === id ? null : id));
    };

    const value = {
        selected,
        setSelected,
        toggle
    }

    return (
        <AccordionContext.Provider value={value}>
            <div className={cn("max-w-lg w-full divide-y divide-zinc-300 min-h-96", className)}>
                {children}
            </div>
        </AccordionContext.Provider>
    )
}

export const AccordionItem = ({ children, id, className }) => {
    const value = {
        id
    }

    return (
        <AccordionItemContext.Provider value={value}>
            <div className={cn(className)}>{children}</div>
        </AccordionItemContext.Provider>
    )
}

export const AccordionTitle = ({ children, className }) => {
    const { selected, toggle } = useContext(AccordionContext);
    const { id } = useContext(AccordionItemContext);

    const isOpen = selected === id;

    return (
        <button
            onClick={() => toggle(id)}
            className={cn("flex items-center justify-between w-full py-1.5 cursor-pointer font-medium hover:underline decoration-1", className)}
        >
            {children}
            <span>
                <ChevronDown className={cn("w-5 h-5 text-zinc-500", isOpen && "rotate-180")} />
            </span>
        </button>
    )
}

export const AccordionContent = ({ children, className }) => {
    const { selected } = useContext(AccordionContext);
    const { id } = useContext(AccordionItemContext);

    const isOpen = selected === id;

    return (
        <div
            className={cn(
                "grid transition-all duration-300 font-normal",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                className)}
        >
            <div className="overflow-hidden">
                <div className="pb-1.5">{children}</div>
            </div>
        </div>
    )
}

Accordion.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

AccordionItem.propTypes = {
    children: PropTypes.node.isRequired,

    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,

    className: PropTypes.string,
};

AccordionTitle.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

AccordionContent.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};