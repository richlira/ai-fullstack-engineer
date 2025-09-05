-- docker/postgres/init.sql

-- Habilitar la extensión pgvector
CREATE EXTENSION IF NOT EXISTS vector;

-- Crear tabla de usuarios (ejemplo)
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla para embeddings (ejemplo para RAG)
CREATE TABLE IF NOT EXISTS documents (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    embedding vector(1536), -- Para OpenAI embeddings
    metadata JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear índice para búsqueda vectorial
CREATE INDEX ON documents USING ivfflat (embedding vector_cosine_ops);

-- Insertar usuario de prueba
INSERT INTO users (email, username) 
VALUES ('test@example.com', 'testuser')
ON CONFLICT DO NOTHING;