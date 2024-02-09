export const dynamicParams = true;

export async function generateStaticParams() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts`
	);
	const posts = await response.json();

	return posts.map((post) => ({
		postId: post.id.toString(),
	}));
}

async function getSinglePost(postId) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts/${postId}`
	);
	const post = await response.json();
	return post;
}

const page = async ({ params }) => {
	const post = await getSinglePost(params.postId);

	if (!post) {
		return <div>Loading...</div>;
	}

	return (
		<div className="single-blog-page">
			<h2>{post.title.rendered}</h2>
			<div className="blog-post">
				<p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
			</div>
		</div>
	);
};

export default page;
