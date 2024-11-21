export const validateName = (name: string): boolean => {
    const nameRegex = /^[a-zA-Z][a-z]{2,15}$/;
    return nameRegex.test(name);
};

export const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
};

export const validateUniversity = (university: string): boolean => {
    const universityRegex = /^[a-zA-Z][a-z]{0,15}\s{0,1}[a-zA-Z]{0,16}\s{0,1}[a-zA-Z]{0,16}$/;
    return universityRegex.test(university);
};

export const validateMajor = (major: string): boolean => {
    const majorRegex = /^[a-zA-Z][a-z]{0,15}\s{0,1}[a-zA-Z]{0,16}$/;
    return majorRegex.test(major);
};

export const validateYear = (year: string): boolean => {
    const yearRegex = /^[1-4]{1}$/;
    return yearRegex.test(year);
};