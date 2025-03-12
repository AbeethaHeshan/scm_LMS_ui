import React, { ReactNode } from "react";
import clsx from "clsx";

interface FieldWrapperProps {
    label?: string;
    error?: string | undefined;
    children: ReactNode;
    className?: string;
}

const FieldWrapper: React.FC<FieldWrapperProps> = ({ label, error, children, className }) => {
    return (
        <div className={clsx("flex flex-col gap-2", className)}>
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
            {children}
            {error && <p className="text-red-500 text-xs">{error}</p>}
        </div>
    );
};

export default FieldWrapper;
