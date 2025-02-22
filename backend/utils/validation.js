const validateEventStatus = (status) => {
    const validStatuses = ['active', 'cancelled', 'completed'];
    return validStatuses.includes(status);
};