// Función para calcular la fecha de pago por defecto (1 mes a partir de la fecha actual a modo de ejemplo)
export const getDefaultDeadline = () => {
    const oneMonthLater = new Date();
    oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);
    return oneMonthLater;
}