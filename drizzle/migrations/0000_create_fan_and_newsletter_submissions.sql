CREATE TABLE public.newsletter_subscribers (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100), email text NOT NULL UNIQUE CHECK (char_length(email) <= 255), created_at timestamptz NOT NULL DEFAULT now());
GRANT ALL ON public.newsletter_subscribers TO service_role;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
CREATE TABLE public.fan_submissions (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100), email text NOT NULL CHECK (char_length(email) <= 255), favorite_era text NOT NULL, message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000), image_path text, created_at timestamptz NOT NULL DEFAULT now());
GRANT ALL ON public.fan_submissions TO service_role;
ALTER TABLE public.fan_submissions ENABLE ROW LEVEL SECURITY;