import PostView from "@/components/PostView";
import { fetchPostById } from "@/lib/data";
import { notFound, useParams } from "next/navigation";

async function PostModal() {
  const { id } = useParams();

  // Check if id is valid and is a string
  if (!id || Array.isArray(id)) {
    notFound();
    return null; // Return null to ensure the function exits if id is invalid
  }

  const post = await fetchPostById(id);

  if (!post) {
    notFound();
  }

  return <PostView id={id} post={post} />;
}

export default PostModal;
