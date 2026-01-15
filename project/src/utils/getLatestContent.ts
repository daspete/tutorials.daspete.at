import { getCollection } from 'astro:content';

export const getLatestContent = async (parentSlug: string = '', limit: number = 8) => {
    const collection = await getCollection('docs');
    const items = collection.filter(item => {
        if(!item.filePath) return false;

        const slug = item.filePath.replace('src/content/docs/', '');

        return slug.startsWith(parentSlug) && slug !== `${parentSlug}/index.mdx`;
    });

    return items
        .map(item => {
            return {
                id: item.id,
                slug: `/${item.id}`,
                data: item.data,
            }
        })
        .slice(0, limit);
}