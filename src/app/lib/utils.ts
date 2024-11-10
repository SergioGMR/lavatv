function slugify(input: string): string {
    const map: { [key: string]: string } = {
        'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ü': 'u',
        'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U', 'Ü': 'U',
        'ñ': 'n', 'Ñ': 'N'
    };

    const normalized = input.replace(/[áéíóúüÁÉÍÓÚÜñÑ]/g, match => map[match]);

    return normalized
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

const getLocaleDate = (date: Date | string | undefined) => {
    if (!date) {
        return "Fecha desconocida";
    }
    const newDate = new Date(date);
    const localeDate = newDate.toLocaleDateString("es-ES", {
        year: "numeric",
    });
    return localeDate;
}

const avatarApiUrl =
    "https://api.dicebear.com/9.x/fun-emoji/svg?backgroundType=gradientLinear&radius=0&seed=";

export { slugify, getLocaleDate, avatarApiUrl }