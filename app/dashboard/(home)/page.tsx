// DashboardPage.tsx
import { PostSkeleton } from "@/components/Skeletons";
import React, { Suspense } from "react";

// Lazy load the Posts component
const Posts = React.lazy(() => import("@/components/Posts"));

function DashboardPage() {
  return (
    <main className="flex w-full flex-grow">
      <div className="flex flex-col flex-1 gap-y-8 max-w-lg mx-auto pb-20">
        {/* Use Suspense to handle loading while Posts component is being fetched */}
        <Suspense fallback={<PostSkeleton />}>
          <Posts />
        </Suspense>
      </div>
    </main>
  );
}

export default DashboardPage;
