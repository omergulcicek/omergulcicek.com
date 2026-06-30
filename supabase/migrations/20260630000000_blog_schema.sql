CREATE TYPE post_category AS ENUM ('technical', 'personal');

CREATE TYPE post_locale AS ENUM ('tr', 'en');

CREATE TYPE asset_bleed AS ENUM ('none', 'wide', 'full');

CREATE TABLE blog_posts (
	id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	slug text NOT NULL UNIQUE,
	title text NOT NULL,
	description text NOT NULL,
	content text NOT NULL,
	category post_category NOT NULL,
	tags text[] NOT NULL DEFAULT '{}',
	locale post_locale NOT NULL DEFAULT 'tr',
	medium_url text,
	interactive boolean NOT NULL DEFAULT false,
	featured boolean NOT NULL DEFAULT false,
	published boolean NOT NULL DEFAULT false,
	published_at timestamptz,
	og_image_path text,
	created_at timestamptz NOT NULL DEFAULT now(),
	updated_at timestamptz NOT NULL DEFAULT now(),
	CONSTRAINT blog_posts_slug_starts_with_slash CHECK (slug LIKE '/%'),
	CONSTRAINT blog_posts_tags_max_three CHECK (
		cardinality(tags) <= 3
	)
);

CREATE TABLE post_assets (
	id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	post_id uuid NOT NULL REFERENCES blog_posts (id) ON DELETE CASCADE,
	storage_path text NOT NULL,
	alt text NOT NULL DEFAULT '',
	bleed asset_bleed NOT NULL DEFAULT 'none',
	sort_order int NOT NULL DEFAULT 0
);

CREATE INDEX blog_posts_published_at_idx ON blog_posts (published_at DESC NULLS LAST);

CREATE INDEX blog_posts_published_idx ON blog_posts (published)
WHERE
	published = true;

CREATE INDEX blog_posts_category_idx ON blog_posts (category);

CREATE INDEX post_assets_post_id_idx ON post_assets (post_id);

CREATE OR REPLACE FUNCTION public.handle_blog_posts_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
	NEW.updated_at = now();
	RETURN NEW;
END;
$$;

CREATE TRIGGER blog_posts_updated_at
BEFORE UPDATE ON blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.handle_blog_posts_updated_at();

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

ALTER TABLE post_assets ENABLE ROW LEVEL SECURITY;

CREATE POLICY blog_posts_public_read ON blog_posts FOR
SELECT
	USING (published = true);

CREATE POLICY post_assets_public_read ON post_assets FOR
SELECT
	USING (
		EXISTS (
			SELECT
				1
			FROM
				blog_posts
			WHERE
				blog_posts.id = post_assets.post_id
				AND blog_posts.published = true
		)
	);
