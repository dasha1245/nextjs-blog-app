import fs from "fs";
import path from 'path';
import matter from "gray-matter";

const pathPostDirectory = path.join(process.cwd(), 'content', 'posts');

export function getPostData(postIdentifier) {
    const postSlug = postIdentifier.replace(/\.md$/, '')
    const filePath = path.join(pathPostDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const {data, content} = matter(fileContent);

    const postData = {
        slug: postSlug,
        ...data,
        content
    }
    return postData;
}

export function getAllPosts() {
    const postFiles = fs.readdirSync(pathPostDirectory);

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile)
    })
    return allPosts;
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts();

    const featuredPosts = allPosts.filter(post => post.isFeatured);
    return featuredPosts;
}