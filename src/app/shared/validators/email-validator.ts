import { ValidatorFn } from "@angular/forms";

export function appEmailValidator(domain: string[]): ValidatorFn{
    const domainStrring = domain.join('|');
    const regExp = new RegExp(`[^@]{4,}@gmail\.(${domainStrring})$`);
    return(control) => {
        return (control.value === "" || regExp.test(control.value))
         ? null : {appEmailValidator: true};
    }

}
// export const emailValidator: ValidatorFn =(control) => {
//     return /[^@]{4,}@/
// }