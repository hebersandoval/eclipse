import { HtmlBasePlugin } from '@11ty/eleventy';

export default async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('assets');

    // Helps CD to read base path
    eleventyConfig.addPlugin(HtmlBasePlugin);

    // Post collection
    eleventyConfig.addCollection('posts', function (collectionApi) {
        return collectionApi.getFilteredByGlob('src/posts/*.md');
    });

    // Custom filters
    eleventyConfig.addFilter('date', function (value, format) {
        const date = new Date(value);

        if (format === '%Y-%m-%d') {
            return date.toISOString().split('T')[0];
        }

        return value;
    });

    return {
        dir: {
            input: 'src',
            output: '_site',
            includes: '_templates',
        },
    };
}
