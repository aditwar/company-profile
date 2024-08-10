
export default function BlogCard({ blog }) {
    const { title, slug, Categori, Date, Content, Image, Author } = blog.fields

    return (
        <div className="card">
            <div className="blogscss">
                {/* Image */}
            </div>
            <div className="content">
                <div className="info">
                    
                </div>
            </div>
        </div>
        
    )
}