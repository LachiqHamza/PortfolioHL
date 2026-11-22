export type Language="en"|"fr";
export function languageFromCountry(country?:string|null):Language{return ["MA","FR","BE","CH","CA"].includes(country?.toUpperCase()??"")?"fr":"en"}

