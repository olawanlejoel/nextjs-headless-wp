import Link from 'next/link';

const BlogPage = async () => {
	return (
		<div className="blog-page">
			<h2>All Blog Posts</h2>
			<p>All blog posts are fetched from WordPress via the WP REST API.</p>
			<div className="posts">
				<Link href="/blog/1" className="post">
					<h3>Hello World</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
						molestiae ducimus!
					</p>
				</Link>
				<Link href="/blog/2" className="post">
					<h3>Hello World</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
						molestiae ducimus!
					</p>
				</Link>
			</div>
		</div>
	);
};

export default BlogPage;
