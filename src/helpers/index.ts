export function formatCurrency(cantidad: number) {
    return new Intl.NumberFormat('es-Mx',
        {
            style: 'currency', currency: 'MXN'
        }
    ).format(cantidad)
}