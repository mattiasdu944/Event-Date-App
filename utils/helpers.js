export const formatFecha = fecha => {
    const fechaNueva = new Date(fecha);
    const opciones = {  year: 'numeric', month: 'short', day: 'numeric' };
    return fechaNueva.toLocaleDateString('es-ES', opciones)
}

export const formatMoney = moneda => new Intl.NumberFormat('es-ES', {style: 'currency',currency: 'BOL', minimumFractionDigits: 2}).format(moneda);
