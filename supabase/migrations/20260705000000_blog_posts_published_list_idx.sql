CREATE INDEX blog_posts_published_list_idx ON blog_posts (published, published_at DESC NULLS LAST);
