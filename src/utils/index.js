export const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        // If we have an error string set valid to false
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}