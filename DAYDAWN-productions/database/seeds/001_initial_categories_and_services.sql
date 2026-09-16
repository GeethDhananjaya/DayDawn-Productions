-- Seed: 001_initial_categories_and_services.sql

INSERT INTO production_categories (id, name, description)
VALUES 
    ('feature-film', 'Feature Film', 'Long-form narrative motion pictures for theatrical and streaming release'),
    ('commercial', 'Commercial', 'Brand campaigns, luxury advertising, and high-energy spots'),
    ('documentary', 'Documentary', 'Non-fiction cultural, environmental, and investigative stories'),
    ('music-video', 'Music Video', 'Stylized cinematic visuals for musicians and record labels'),
    ('vfx-post', 'VFX & Post-Production', 'CGI compositing, color finishing, and sound architecture')
ON CONFLICT (id) DO NOTHING;

INSERT INTO productions (id, title, category_id, year, director, client, synopsis, format, is_featured)
VALUES 
    ('solaris-rising', 'Solaris Rising', 'feature-film', 2025, 'Elena Vance', 'Vanguard Pictures', 'A deep space geological expedition on a dying star discovers strange energetic anomalies.', 'ARRI Alexa 65', TRUE),
    ('chronos-vanguard', 'Chronos Vanguard', 'commercial', 2026, 'Marcus Thorne', 'Chronos Horology', 'Luxury timepiece global commercial campaign shot on 65mm format.', '65mm Film', TRUE),
    ('the-last-echo', 'The Last Echo', 'documentary', 2024, 'Julian Cole', 'Oceanic Heritage Trust', 'Deep ocean acoustic discovery uncovering silent marine migration paths.', 'RED V-Raptor 8K', TRUE)
ON CONFLICT (id) DO NOTHING;
