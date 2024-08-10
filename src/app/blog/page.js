import { createClient } from 'contentful';
import BlogCard from '../components/BlogCard';

export async function getStaticProps() {
    const client = createClient({
        // ini mengambil AUTENTIK AKSES CONTENFUL
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
    
    // ini untuk mengambil konten (content id) apa dari CONTENFUL
    const res = await client.getEntries({ content_type: 'blog' })

    return {
        // blogs ini berupa props yg penamaan nya terserah
        blogs: res.items //! blogs ini
    }
}

export default function BlogPage({ blogs }) { // blogs ini dipanggil dari return sebelumnya
    console.log(blogs);
    
    return (
        <>
            <div>
                {blogs.map(blog => (
                    <BlogCard key={blog.sys.id} blog={blog} />
                ))}
            </div>
        </>
    )
}