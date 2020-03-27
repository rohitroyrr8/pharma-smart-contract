import { TypeMismatchError } from "../errors/TypeMismatchError";

export class RunTimeValidator {
    public static setNumber(value: number): number {
        if(!value) return value;
        if(typeof(value) === 'number'){
            return value;
        }
        throw new TypeMismatchError(`${typeof(value)} cannot be parsed as number`);
    }

    public static setString(str: string): string {
        if(!str) return str;
        if(typeof(str) === 'string'){
            return str;
        }
        throw new TypeMismatchError(`${typeof(str)} cannot be parsed as string`);
    }
}