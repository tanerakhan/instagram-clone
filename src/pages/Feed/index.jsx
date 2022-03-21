import React from "react";
import Post from "src/components/Post";
import SuggegtionPanel from "src/components/SuggegtionPanel";

import { articles, suggegtion_for_you, user } from "src/content";

export default function Feed() {
  return (
    <div className="feed-content">
      <Post articles={articles} />
      <SuggegtionPanel user={user} suggegtions={suggegtion_for_you} />
    </div>
  );
}
