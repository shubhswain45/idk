// import PostView from "@/components/PostView";
import PostView from "@/components/PostView";
import { fetchPostById } from "@/lib/data";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

async function PostModal({ params }: Props) {
  // Await params here
  const { id } = await params;

  const post = await fetchPostById(id);

  if (!post) {
    notFound();
  }

  return <PostView id={id} post={post}/>; // Example: Render the post title
}

export default PostModal;
