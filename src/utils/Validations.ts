import { UseFormRegister } from "react-hook-form";

type ValidationRules = {
    required?: boolean;
    range?: { min?: number; max?: number };
    pattern?: { value: RegExp; message?: string };
    email?: boolean;
    phone?: boolean;
    onlyLetters?: boolean;
    onlyNumbers?: boolean;
};

class Validation {
    static for(register: UseFormRegister<any>, fieldName: string, rules: ValidationRules) {
        const validationRules: Record<string, any> = {};

        if (rules.required) validationRules.required = Validation.getRequiredMessage(fieldName);
        if (rules.range) Object.assign(validationRules, Validation.getRangeMessages(fieldName, rules.range));
        if (rules.pattern) validationRules.pattern = Validation.getPatternMessage(fieldName, rules.pattern);
        if (rules.email) validationRules.pattern = Validation.getEmailMessage(fieldName);
        if (rules.phone) validationRules.pattern = Validation.getPhoneMessage(fieldName);
        if (rules.onlyLetters) validationRules.pattern = Validation.getOnlyLettersMessage(fieldName);
        if (rules.onlyNumbers) validationRules.pattern = Validation.getOnlyNumbersMessage(fieldName);

        return register(fieldName, validationRules);
    }

    private static getRequiredMessage(fieldName: string) {
        return `${fieldName} is required`;
    }

    private static getRangeMessages(fieldName: string, range: { min?: number; max?: number }) {
        const messages: Record<string, any> = {};
        if (range.min !== undefined) messages.min = { value: range.min, message: `${fieldName} must be at least ${range.min}` };
        if (range.max !== undefined) messages.max = { value: range.max, message: `${fieldName} must be at most ${range.max}` };
        return messages;
    }

    private static getPatternMessage(fieldName: string, pattern: { value: RegExp; message?: string }) {
        return { value: pattern.value, message: pattern.message || `${fieldName} has an invalid format` };
    }

    private static getEmailMessage(fieldName: string) {
        return { value: /^[^@]+@[^@]+\.[^@]+$/, message: `${fieldName} must be a valid email address` };
    }

    private static getPhoneMessage(fieldName: string) {
        return { value: /^[0-9]{10}$/, message: `${fieldName} must be a valid phone number (10 digits)` };
    }

    private static getOnlyLettersMessage(fieldName: string) {
        const letterPattern = /^[A-Za-z]+$/
        return { value: letterPattern, message: `${fieldName} must be a valid phone number (10 digits)` };
    }

    private static getOnlyNumbersMessage(fieldName: string) {
        const letterPattern = /^[0-9]+$/
        return { value: letterPattern, message: `${fieldName} must be a valid phone number (10 digits)` };
    }
}

export default Validation;
