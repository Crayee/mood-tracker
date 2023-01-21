export const formatNumber =
    (maximumFractionDigits = 2, minimumFractionDigits = 0, unit?: string) =>
    (value: number) =>
        `${
            value?.toLocaleString(undefined, {
                maximumFractionDigits,
                minimumFractionDigits,
            }) ?? '-'
        }${unit ? unit : ''}`
