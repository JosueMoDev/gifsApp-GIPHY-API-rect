export const randomizeData = (content) => {
    return content.sort(() => Math.random() - 0.5);
}

export const elimiteDuplicateData = (array) => {
    return [...new Set(array.data.data.map(JSON.stringify))].map(JSON.parse);
}